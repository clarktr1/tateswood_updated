import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-purple">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <Link
            href="/"
            className="inline-block w-fit shrink-0 self-start rounded-md bg-white p-2"
          >
            <Image
              src="/assets/tw_logo.jpg"
              alt="Tateswood Energy Company"
              width={220}
              height={44}
            />
          </Link>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white">
              Contact
            </p>
            <div className="mt-3 space-y-1 text-sm text-white/80">
              <p>480 Wildwood Forest Dr, Suite 475</p>
              <p>Spring, TX 77380</p>
              <p>
                <a
                  href="tel:+17133431501"
                  className="transition-colors hover:text-brand-orange"
                >
                  713-343-1501
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@tateswood.com"
                  className="transition-colors hover:text-brand-orange"
                >
                  info@tateswood.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white">
              Working Hours
            </p>
            <div className="mt-3 space-y-1 text-sm text-white/80">
              <p>Monday&ndash;Friday: 9:00 AM &ndash; 5:00 PM</p>
              <p>Saturday&ndash;Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          &copy; {year} Tateswood Energy Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
