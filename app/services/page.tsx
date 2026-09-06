import Image from "next/image";

const accentStyles = {
  purple: {
    ring: "ring-brand-purple/10",
    wash: "bg-brand-purple/10",
    dot: "bg-brand-purple",
  },
  orange: {
    ring: "ring-brand-orange/10",
    wash: "bg-brand-orange/10",
    dot: "bg-brand-orange",
  },
} as const;

const serviceCategories = [
  {
    title: "Commercial",
    accent: "purple",
    image: "/assets/serv1.jpg",
    items: [
      "Plant Operator Oversight and Direction",
      "Energy Manager Oversight and Direction",
      "Risk Management",
      "Asset Optimization",
      "Contract Origination (Fuel Supply, Power Sales, etc.)",
      "Contract Compliance",
      "Regulatory Oversight and Reporting (including NERC)",
      "Partner/Owner Reporting and Compliance",
      "Construction Management",
    ],
  },
  {
    title: "Finance and Accounting",
    accent: "orange",
    image: "/assets/finance-illustration.svg",
    items: [
      "Financial Statement Preparation",
      "Accounts Payable Processes",
      "Audit and Tax Oversight",
      "Annual Budget Preparation",
      "Insurance Management",
      "Financial Variance Reporting",
      "Lender Reporting and Compliance",
    ],
  },
  {
    title: "Due Diligence",
    accent: "purple",
    image: "/assets/serv3.png",
    items: [
      "Contract Review and Analysis",
      "Risk Analysis",
      "Technology Review",
      "Pro Forma Evaluation",
    ],
  },
  {
    title: "Bankruptcy Services",
    accent: "orange",
    image: "/assets/serv4.png",
    items: [
      "Custodial Asset Management",
      "Assist with Court Filing Exhibits",
      "Assist with Cash Flow Forecasts",
      "Assist with Asset Sale Process",
    ],
  },
] as const;

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <Image
          src="/assets/serv-1.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 via-brand-purple/70 to-accent-purple/50" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
          <div className="border-l-4 border-brand-orange pl-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Services
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
              Comprehensive asset management, accounting, and advisory
              services for independent power plant owners.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-background [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      {/* Service categories */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {serviceCategories.map((category) => {
            const accent = accentStyles[category.accent];
            return (
              <div
                key={category.title}
                className={`overflow-hidden bg-white shadow-md ring-1 ${accent.ring} [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]`}
              >
                <div className={`relative aspect-[16/9] w-full ${accent.wash}`}>
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain p-8"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-brand-purple">
                    {category.title}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-2 w-2 shrink-0 ${accent.dot}`}
                        />
                        <span className="text-base leading-7 text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
