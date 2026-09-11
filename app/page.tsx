import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/assets/header2.png";

const clientLogos = [
  { src: "/assets/client1.jpg", alt: "Client logo 1" },
  { src: "/assets/client2.png", alt: "Client logo 2" },
  { src: "/assets/client3.png", alt: "Client logo 3" },
  { src: "/assets/client4.jpg", alt: "Client logo 4" },
  { src: "/assets/client5.jpg", alt: "Client logo 5" },
  { src: "/assets/client6.png", alt: "Client logo 6" },
  { src: "/assets/client7.jpg", alt: "Client logo 7" },
  { src: "/assets/client8.png", alt: "Client logo 8" },
  { src: "/assets/client9.png", alt: "Client logo 9" },
  { src: "/assets/client10.png", alt: "Client logo 10" },
  { src: "/assets/client11.png", alt: "Client logo 11" },
  { src: "/assets/client12.jpg", alt: "Client logo 12" },
  { src: "/assets/client13.png", alt: "Client logo 13" },
];

// Placeholder quotes — swap in real client testimonials before launch.
const testimonials = [
  {
    quote:
      "Tateswood stepped in during a critical transition and brought clarity to our reporting almost overnight. Their team feels like an extension of ours.",
    name: "[Client Name]",
    title: "[Title], [Company]",
  },
  {
    quote:
      "The level of oversight and communication we get is far beyond what we had with our previous asset manager. Nothing falls through the cracks.",
    name: "[Client Name1]",
    title: "[Title], [Company]",
  },
  {
    quote:
      "Their due diligence work gave us the confidence to move forward on a deal we would have otherwise passed on. Thorough, fast, and honest.",
    name: "[Client Name2]",
    title: "[Title], [Company]",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-[64vh]">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 via-brand-purple/70 to-accent-purple/50" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="border-l-4 border-brand-orange pl-6">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Highly Experienced</span>
              <span className="block ">Independent Power Plant</span>
              <span className="block">Asset Management</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
              We supply operational oversight, compliance, enterprise
              optimizations, full-service account and financial management.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-orange-surface px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Who Are We? */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-16">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl bg-brand-purple/10 sm:block"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/team_hero.jpg"
                alt="The Tateswood Energy leadership team standing together in their Spring, Texas office."
                fill
                className="object-cover"
              />
            </div>
            
          </div>
          <div>
            <h2 className="mt-2 text-3xl font-bold text-brand-purple">
              Who Are we?
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              Tateswood Energy Company, based in Spring, Texas, is an
              established provider of third-party asset management and
              accounting services for independent power plant owners. Since
              our founding in 2010, we have provided services for 18 power
              plants with a combined capacity of nearly 5,000 MW.
              With an average of <strong>31+ yearsof experience</strong>, the Tateswood Energy team members bring experience with a variety
              of power plant technologies including gas-fired
              combined-cycle, gas-fired simple-cycle coal, wind and biomass.
              We have managed assets in most major U.S. power markets,
              including:{" "}
              <strong className="font-bold">
                ERCOT, CAISO, MISO, PJM, ISO-NE, Florida (Duke) and South
                Carolina (Duke).
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Philosophy */}
      <section className="pb-24 px-6">
        {/* Mobile: stacked, edge-to-edge */}
        <div className="grid md:hidden">
          <div className="bg-brand-purple px-6 py-10 text-white sm:px-10">
            <svg
              viewBox="0 0 24 24"
              width={36}
              height={36}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <div className="mt-4 border-l-4 border-brand-orange pl-4">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-7 text-white/90 text-xl">
                To provide{" "}
                <strong className="inline-block rounded-full bg-white px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-purple">
                  HIGH QUALITY
                </strong>{" "}
                asset management and project accounting services to the
                independent power industry.
              </p>
              <p className="mt-4 text-base leading-7 text-white/90">
                To{" "}
                <strong className="inline-block rounded-full bg-white px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-purple">
                  OPTIMIZE
                </strong>{" "}
                physical operations and financial performance of power plant
                assets.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 px-6 py-10 sm:px-10">
            <svg
              viewBox="0 0 24 24"
              width={36}
              height={36}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              className="text-brand-purple"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                d="M14.5 9.5 10.5 10.5 9.5 14.5 13.5 13.5Z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <div className="mt-4 border-l-4 border-brand-orange pl-4">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-brand-purple">
                Our Philosophy
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground text-xl">
                Each asset has a{" "}
                <strong className="inline-block rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-orange">
                  SINGLE
                </strong>{" "}
                point of contact responsible for overseeing{" "}
                <strong className="inline-block rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-orange">
                  EVERY
                </strong>{" "}
                aspect of their enterprise.
              </p>
              <p className="mt-4 text-base leading-7 text-foreground text-xl">
                Asset Managers use a highly collaborative approach to
                formulate an optimal solution for each situation.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: same diagonal angle as before, purple and light panels meet directly */}
        <div className="relative hidden overflow-hidden rounded-2xl shadow-lg md:block md:h-[460px]">
          <div
            className="absolute inset-0 bg-brand-purple"
            style={{ clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)" }}
          />
          <div
            className="absolute inset-0 bg-white"
            style={{ clipPath: "polygon(62% 0, 100% 0, 100% 100%, 38% 100%)" }}
          />

          <svg
            viewBox="0 0 24 24"
            width={40}
            height={40}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            className="absolute bottom-8 left-8 text-white/80"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>

          <div className="absolute left-10 top-10 max-w-[38%] border-l-4 border-brand-orange pl-6">
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 text-xl">
              To provide{" "}
              <strong className="inline-block rounded-full bg-white px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-purple">
                HIGH QUALITY
              </strong>{" "}
              asset management and project accounting services to the
              independent power industry.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 text-xl">
              To{" "}
              <strong className="inline-block rounded-full bg-white px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-purple">
                OPTIMIZE
              </strong>{" "}
              physical operations and financial performance of power plant
              assets.
            </p>
          </div>

          <svg
            viewBox="0 0 24 24"
            width={40}
            height={40}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            className="absolute right-8 top-8 text-brand-purple/60"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path
              d="M14.5 9.5 10.5 10.5 9.5 14.5 13.5 13.5Z"
              fill="currentColor"
              stroke="none"
            />
          </svg>

          <div className="absolute bottom-10 right-10 max-w-[38%] border-r-4 border-brand-orange pr-6 text-right">
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-brand-purple">
              Our Philosophy
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground text-xl">
              Each asset has a{" "}
              <strong className="inline-block rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-orange">
                SINGLE
              </strong>{" "}
              point of contact responsible for overseeing{" "}
              <strong className="inline-block rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-orange">
                EVERY
              </strong>{" "}
              aspect of their enterprise.
            </p>
            <p className="mt-4 text-base leading-7 text-foreground text-xl">
              Asset Managers use a highly collaborative approach to
              formulate an optimal solution for each situation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-brand-purple">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md ring-1 ring-brand-purple/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="text-brand-orange"
                  aria-hidden="true"
                >
                  <path d="M9.5 6.5C6.5 8 5 10.5 5 13.5a4 4 0 0 0 4 4 3.25 3.25 0 0 0 .5-6.46C9.7 9.5 10.9 8 12.5 7.2L9.5 6.5ZM18 6.5c-3 1.5-4.5 4-4.5 7a4 4 0 0 0 4 4 3.25 3.25 0 0 0 .5-6.46C18.2 9.5 19.4 8 21 7.2L18 6.5Z" />
                </svg>
                <p className="mt-4 flex-1 text-base leading-7 text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-brand-purple/10 pt-4">
                  <p className="font-bold text-brand-purple">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logo carousel */}
      <section className="border-t border-brand-purple/10 bg-white py-14">
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-purple">
          Our Clients
        </h2>
        <div
          className="marquee-container"
          tabIndex={0}
          role="region"
          aria-label="Client logos"
        >
          <div className="marquee-track flex w-max items-center gap-16 px-6">
            {[...clientLogos, ...clientLogos].map((logo, index) => {
              const isDuplicate = index >= clientLogos.length;
              return (
                <div
                  key={`${logo.src}-${index}`}
                  className="relative h-14 w-32 shrink-0"
                  aria-hidden={isDuplicate}
                >
                  <Image
                    src={logo.src}
                    alt={isDuplicate ? "" : logo.alt}
                    fill
                    sizes="518px"
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
