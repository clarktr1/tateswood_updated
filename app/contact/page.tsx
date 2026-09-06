import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <Image
          src="/assets/tw_building-no-cars.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 via-brand-purple/70 to-accent-purple/50" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
          <div className="border-l-4 border-brand-orange pl-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-background [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 bg-brand-purple p-20 rounded-lg">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Take the Next Step?
              </h2>
              <p className="mt-3 text-white/80">
                Have a question about our services? Send us a message and our
                team will get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-brand-orange">
              <Image
                src="/assets/tw_building-no-cars.png"
                alt="Tateswood Energy Company's office building in Spring, Texas."
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
