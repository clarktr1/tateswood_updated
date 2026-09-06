"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// Placeholder submit — no request is sent yet. Swap this out for a real
// call to the contact service once one exists; the surrounding status
// handling below already supports both the success and error paths.
async function submitContactForm(): Promise<void> {
  // Simulate a network request delay and randomly throw an error to test the error state.
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(undefined);
      } else {
        reject(new Error("Simulated error"));
      }
    }, 600);
  });
}

const fieldClassName =
  "w-full rounded-md bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-slate-100 disabled:text-foreground/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const isDisabled = status === "submitting" || status === "success";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot: real visitors never see or fill this field, so a filled
    // value means a bot. Pretend success without actually submitting.
    const honeypot = new FormData(event.currentTarget).get("website");
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="website">Leave this field blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
          disabled={isDisabled}
          className={fieldClassName}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            disabled={isDisabled}
            className={fieldClassName}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone (optional)"
            disabled={isDisabled}
            className={fieldClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Provide some brief details about your needs."
          required
          disabled={isDisabled}
          className={`${fieldClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="inline-flex items-center rounded-md bg-brand-orange px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>

      <div className="min-h-[44px]">
        {status === "success" && (
          <p
            role="status"
            className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
          >
            Thank you! Your message has been received.
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            Please try again or refresh the page.
          </p>
        )}
      </div>
    </form>
  );
}
