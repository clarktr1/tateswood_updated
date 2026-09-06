import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-[64vh]">
        <Image
          src="/assets/header2.png"
          alt=""
          fill
          priority
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
              className="mt-8 inline-flex items-center rounded-md bg-brand-orange px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
            <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-3xl font-extrabold leading-none text-brand-purple">
                31+
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                Years Average Experience
              </p>
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
              plants with a combined capacity of nearly 5,000 MW. The
              Tateswood Energy team members bring experience with a variety
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
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border-l-4 border-brand-orange bg-white p-8 shadow-sm ring-1 ring-black/5 md:h-[430px] lg:h-[365px]">
            <h2 className="text-2xl font-bold text-brand-purple">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              To provide{" "}
              <strong className="inline-block rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-orange">
                HIGH QUALITY
              </strong>{" "}
              asset management and project accounting services to the
              independent power industry.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground">
              To{" "}
              <strong className="inline-block rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-orange">
                OPTIMIZE
              </strong>{" "}
              physical operations and financial performance of power plant
              assets.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-brand-purple bg-white p-8 shadow-sm ring-1 ring-black/5 md:h-[430px] lg:h-[365px]">
            <h2 className="text-2xl font-bold text-brand-purple">
              Our Philosophy
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              Each asset has a{" "}
              <strong className="inline-block rounded-full bg-brand-purple/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-purple">
                SINGLE
              </strong>{" "}
              point of contact responsible for overseeing{" "}
              <strong className="inline-block rounded-full bg-brand-purple/10 px-2.5 py-0.5 text-sm font-bold tracking-wide text-brand-purple">
                EVERY
              </strong>{" "}
              aspect of their enterprise.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground">
              Asset Managers use a highly collaborative approach to
              formulate an optimal solution for each situation.
            </p>
          </div>
        </div>
      </section>

      {/* Client logo carousel */}
      <section className="border-t border-brand-purple/10 bg-white py-14">
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-purple">
          Clients
        </h2>
        <div
          className="marquee-container overflow-x-auto"
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
                    sizes="128px"
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
