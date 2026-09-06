"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Member = {
  full_name: string;
  title: string;
  image: string;
  email: string;
  bio: string;
};

const team: Member[] = [
  {
    full_name: "John Lambert",
    title: "President",
    image: "/assets/team1.jpg",
    email: "jlambert@tateswood.com",
    bio: "Mr. Lambert has 43 years of experience in the energy industry, including 34 years in the power industry, with experience in project financing, project development (domestic and international), power plant M&A and power plant asset management. Previous employers include Exxon, The Bank of California, North Canadian Power, Sceptre Power, Enron, Delta Power Company, and JPMorgan. During the past 18 years, he has managed or co-managed 10 power plants with a combined capacity of approximately 2,100 MW. Mr. Lambert holds bachelors and masters degrees in engineering from the University of Kentucky and an MBA from UCLA.",
  },
  {
    full_name: "Heather Caradine",
    title: "Chief Financial Officer",
    image: "/assets/team2.jpg",
    email: "hcaradine@tateswood.com",
    bio: "Ms. Caradine has 29 years of energy industry accounting experience, including 24 years as a senior accountant for U.S. and international power plants. Previous employers include Coastal Corporation, El Paso Corporation and JPMorgan. She has held lead responsibility for Tateswood’s accounting and finance activities since Tateswood’s inception in 2010. Ms. Caradine holds a bachelors degree in accounting from the University of Houston.",
  },
  {
    full_name: "Leanne Searcey",
    title: "Executive Vice President",
    image: "/assets/team3.jpg",
    email: "lsearcey@tateswood.com",
    bio: "Ms. Searcey has 25 years of power plant asset management experience with specialization in contract compliance, settlement, and regulatory issues, including NERC compliance. Previous employers include Columbia Electric Group, Delta Power Company, and JPMorgan. She has provided asset management services and regulatory support for a 400 MW gas-fired plant in Texas and a 850 MW dual fuel (gas/oil) plant in South Carolina and currently manages a 50 MW wind farm in Minnesota. Ms. Searcey holds a bachelors degree in public policy and administration from Western Oregon University.",
  },
  {
    full_name: "Michael Fulcher",
    title: "Vice President",
    image: "/assets/team4.jpg",
    email: "mfulcher@tateswood.com",
    bio: "Mr. Fulcher has 44 years of experience in power plant operations, start-up and commissioning, construction management, and asset management. Prior to joining Tateswood in 2013, he served as plant manager for a 400 MW cogeneration plant in Texas. Mr. Fulcher has previous experience as general manager for a 1,092 MW gas-fired power plant in Arizona, a 1,000 MW gas-fired power plant in Texas, three gas-fired power plants in San Diego, a 162 MW power plant in Australia, and an 80 MW plant in New York. He recently managed two gas-fired combined cycle plants totaling 904 MW in Maryland and Massachusetts. Previous employers include Delta Power Services, PG&E National Energy Group, Texas Independent Energy and Sithe Energies.",
  },
  {
    full_name: "James Runk",
    title: "Asset Manager",
    image: "/assets/team5.jpg",
    email: "jrunk@tateswood.com",
    bio: "Mr. Runk has 26 years of experience in the power industry, primarily in plant operations. Prior to joining Tateswood in 2015, he was operations and maintenance manager for a 400 MW cogeneration plant in Texas. His previous employers include LGE Power, Delta Power Services and NRG Inc. He was the asset manager for a 66 MW biomass plant in Florida before it was decommissioned in 2018 and recently managed an 850 MW simple-cycle, dual fuel (gas/oil) plant in South Carolina.",
  },
  {
    full_name: "LaShauna Filo",
    title: "Lead Accountant",
    image: "/assets/team6.jpg",
    email: "lfilo@tateswood.com",
    bio: "Ms. Filo has 28 years of energy accounting experience, including experience with monthly consolidations, financial analysis, SEC filings and Sarbanes-Oxley in addition to power plant accounting. Previous employers include GDF Suez, El Paso Corporation, Coastal Corporation, Koch Industries and Amoco Corporation. Ms. Filo holds a bachelors degree in accounting from Texas Tech University.",
  },
];

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export default function TeamGrid() {
  const [selected, setSelected] = useState<Member | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const markLoaded = (src: string) => {
    setLoadedImages((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  };

  const openMember = (member: Member, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelected(member);
  };

  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="mb-12 text-center text-foreground sm:max-w-2xl sm:mx-auto">
        Click on a team member to learn more about their experience and background.
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={member.email}
            role="button"
            tabIndex={0}
            onClick={(event) => openMember(member, event.currentTarget)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openMember(member, event.currentTarget);
              }
            }}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group animate-rise-in relative cursor-pointer overflow-hidden bg-white shadow-md ring-1 ring-brand-purple/5 transition-all duration-300 [clip-path:polygon(0_0,100%_0,100%_100%,28px_100%,0_calc(100%-28px))] motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-slate-200 motion-safe:animate-pulse ${
                  loadedImages[member.image] ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              />
              <Image
                src={member.image}
                alt={member.full_name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                onLoad={() => markLoaded(member.image)}
                className={`object-cover object-top transition-all duration-500 motion-safe:group-hover:scale-105 ${
                  loadedImages[member.image] ? "opacity-100" : "opacity-0"
                }`}
              />
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.full_name}`}
                onClick={(event) => event.stopPropagation()}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-brand-orange text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MailIcon />
              </a>

              <div className="absolute inset-x-4 bottom-4 border-l-4 border-brand-orange bg-white px-5 py-4 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">
                  {member.title}
                </p>
                <h2 className="mt-0.5 text-xl font-bold text-brand-purple">
                  {member.full_name}
                </h2>
                <span className="mt-3 block h-0.5 w-full origin-left scale-x-0 bg-brand-purple/20 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-name"
            onClick={(event) => event.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto bg-white shadow-2xl sm:grid-cols-2 sm:overflow-hidden"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-brand-purple text-white transition-colors hover:bg-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CloseIcon />
            </button>

            <div className="relative aspect-[3/4] w-full sm:aspect-auto">
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-slate-200 motion-safe:animate-pulse ${
                  loadedImages[selected.image] ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              />
              <Image
                src={selected.image}
                alt={selected.full_name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                onLoad={() => markLoaded(selected.image)}
                className={`object-cover object-top transition-opacity duration-500 ${
                  loadedImages[selected.image] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="flex flex-col p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">
                {selected.title}
              </p>
              <h2
                id="team-modal-name"
                className="mt-1 text-2xl font-bold text-brand-purple"
              >
                {selected.full_name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-foreground">
                {selected.bio}
              </p>
              <a
                href={`mailto:${selected.email}`}
                className="mt-6 inline-flex w-fit items-center gap-2 bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                <MailIcon />
                Email Me
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
