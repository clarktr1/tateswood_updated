import Image from "next/image";
import TeamGrid from "./TeamGrid";

export default function MeetTheTeam() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <Image
          src="/assets/team_hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 via-brand-purple/70 to-accent-purple/50" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
          <div className="animate-rise-in border-l-4 border-brand-orange pl-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Meet the Management Team
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
              The experienced leadership behind Tateswood Energy&apos;s asset
              management and accounting services. The Tateswood Energy team
              has an average of more than 31 years of experience in the
              independent energy industry.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-background [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      {/* Team grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <TeamGrid />
      </section>
    </main>
  );
}
