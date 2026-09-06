import Image from "next/image";

const accentStyles = {
  purple: "bg-brand-purple",
  orange: "bg-orange-surface",
} as const;

const barStyles = {
  purple: "border-orange-surface",
  orange: "border-brand-purple",
} as const;

const serviceCategories = [
  {
    title: "Commercial",
    accent: "purple",
    image: "/assets/commercial_header.jpg",
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
    image: "/assets/finance_header.webp",
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
    image: "/assets/dil_header.jpg",
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
    image: "/assets/bankruptcy_header.webp",
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
          src="/assets/serv-1-optimized.jpg"
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

      {/* Service categories: alternating image / color panel rows */}
      <section>
        {serviceCategories.map((category, index) => {
          const panel = accentStyles[category.accent];
          const bar = barStyles[category.accent];
          const imageOnLeft = index % 2 === 0;
          return (
            <div key={category.title} className="grid md:min-h-[440px] md:grid-cols-2">
              <div
                className={`relative h-64 md:h-auto ${imageOnLeft ? "md:order-1" : "md:order-2"}`}
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 ${panel} ${
                  imageOnLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className={`border-l-4 ${bar} pl-6`}>
                  <h2 className="text-3xl font-bold text-white">
                    {category.title}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70"
                        />
                        <span className="text-base leading-7 text-white/90 text-xl">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
