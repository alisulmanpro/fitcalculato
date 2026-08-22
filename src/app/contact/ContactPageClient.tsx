"use client";

import { useState, useRef } from "react";
import {
  TbMail,
  TbUser,
  TbMessageCircle,
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandX,
  TbSend,
  TbCheck,
  TbAlertCircle,
  TbLoader2,
  TbMessageQuestion,
  TbBug,
  TbSparkles,
  TbUsersGroup,
  TbTag,
} from "react-icons/tb";

type FormStatus = "idle" | "loading" | "success" | "error";

const SUBJECT_OPTIONS = [
  { value: "General Inquiry", label: "General Inquiry", icon: TbMessageQuestion },
  { value: "Bug Report", label: "Bug Report", icon: TbBug },
  { value: "Feature Request", label: "Feature Request", icon: TbSparkles },
  { value: "Partnership", label: "Partnership", icon: TbUsersGroup },
  { value: "Other", label: "Other", icon: TbTag },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const characterLimit = 1000;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    }
  }

  return (
    <main className="grow w-full pt-8 pb-20">
      {/* ── HERO BANNER ── */}
      <section className="relative w-full bg-linear-to-br from-secondary via-slate-800 to-slate-900 py-20 px-4 overflow-hidden mb-16">
        {/* decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <TbMail className="size-3.5" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            We&apos;d Love to{" "}
            <span className="text-primary">Hear From You</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question about a calculator, spotted a bug, or want to
            partner with us? Drop us a message and we&apos;ll get back to you
            within 48 hours.
          </p>

          {/* Quick Social Links */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 border border-white/10 hover:border-primary/50 flex items-center justify-center text-slate-300 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin className="size-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 border border-white/10 hover:border-primary/50 flex items-center justify-center text-slate-300 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <TbBrandGithub className="size-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 border border-white/10 hover:border-primary/50 flex items-center justify-center text-slate-300 hover:text-primary transition-all duration-300"
              aria-label="Twitter / X"
            >
              <TbBrandX className="size-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* ── LEFT: Info Cards ── */}
          <aside className="lg:col-span-2 space-y-5">
            <div className="bg-base-200 border border-base-300 rounded-[20px] p-6 space-y-4">
              <h2 className="text-lg font-bold text-secondary">Contact Info</h2>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <TbMail className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral/60 mb-0.5">Email Us</p>
                  <a
                    href="mailto:info@fitcalculato.com"
                    className="text-sm font-semibold text-secondary hover:text-primary transition-colors break-all"
                  >
                    info@fitcalculato.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <TbMessageCircle className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral/60 mb-0.5">Response Time</p>
                  <p className="text-sm font-semibold text-secondary">Within 48 hours</p>
                </div>
              </div>
            </div>

            {/* FAQ prompt card */}
            <div className="bg-linear-to-br from-secondary to-slate-800 border border-slate-700 rounded-[20px] p-6 space-y-3">
              <TbMessageQuestion className="size-8 text-primary" />
              <h3 className="text-base font-bold text-white">Looking for quick answers?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Check our FAQ page — we&apos;ve answered the most common questions about our calculators and methodology.
              </p>
              <a
                href="/faqs"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-lime-400 transition-colors"
              >
                Browse FAQs →
              </a>
            </div>

            {/* Subject options legend */}
            <div className="bg-base-200 border border-base-300 rounded-[20px] p-6 space-y-3">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">What can we help with?</h3>
              <ul className="space-y-2">
                {SUBJECT_OPTIONS.map(({ value, label, icon: Icon }) => (
                  <li key={value} className="flex items-center gap-2 text-sm text-neutral/80">
                    <Icon className="size-4 text-primary shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── RIGHT: Contact Form ── */}
          <div className="lg:col-span-3">
            {/* Success State */}
            {status === "success" ? (
              <div className="bg-base-200 border border-base-300 rounded-3xl p-10 text-center space-y-5 shadow-sm">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <TbCheck className="size-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-secondary">Message Sent!</h2>
                  <p className="text-neutral text-sm max-w-xs mx-auto leading-relaxed">
                    Thanks for reaching out. We&apos;ve received your message and will reply within 48 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-primary rounded-xl px-8 font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-base-200 border border-base-300 rounded-[24px] p-7 md:p-9 space-y-6 shadow-sm"
                noValidate
              >
                <div>
                  <h2 className="text-2xl font-extrabold text-secondary">Send Us a Message</h2>
                  <p className="text-sm text-neutral/70 mt-1">
                    Fill in the form below and we&apos;ll get back to you shortly.
                  </p>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-start gap-3 bg-error/10 border border-error/30 rounded-xl px-4 py-3">
                    <TbAlertCircle className="size-5 text-error shrink-0 mt-0.5" />
                    <p className="text-sm text-error font-medium">{errorMsg}</p>
                  </div>
                )}

                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="c-name" className="block text-xs font-bold uppercase tracking-wider text-neutral/70">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <TbUser className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-neutral/50 pointer-events-none" />
                      <input
                        id="c-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ali Sulman"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-base-300 bg-base-100 text-secondary text-sm placeholder:text-neutral/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="c-email" className="block text-xs font-bold uppercase tracking-wider text-neutral/70">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <TbMail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-neutral/50 pointer-events-none" />
                      <input
                        id="c-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-base-300 bg-base-100 text-secondary text-sm placeholder:text-neutral/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="c-subject" className="block text-xs font-bold uppercase tracking-wider text-neutral/70">
                    Subject <span className="text-error">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {SUBJECT_OPTIONS.map(({ value, label, icon: Icon }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setSubject(value)}
                        className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 text-left ${
                          subject === value
                            ? "bg-primary text-secondary border-primary shadow-sm"
                            : "bg-base-100 text-neutral border-base-300 hover:border-primary/50 hover:text-secondary"
                        }`}
                      >
                        <Icon className="size-4 shrink-0" />
                        <span className="truncate">{label}</span>
                      </button>
                    ))}
                  </div>
                  {/* Hidden required input for form validation */}
                  <input
                    id="c-subject"
                    type="text"
                    required
                    readOnly
                    value={subject}
                    className="sr-only"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="c-message" className="block text-xs font-bold uppercase tracking-wider text-neutral/70">
                      Message <span className="text-error">*</span>
                    </label>
                    <span className={`text-xs font-medium ${message.length > characterLimit * 0.9 ? "text-warning" : "text-neutral/50"}`}>
                      {message.length} / {characterLimit}
                    </span>
                  </div>
                  <textarea
                    id="c-message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => {
                      if (e.target.value.length <= characterLimit) setMessage(e.target.value);
                    }}
                    placeholder="Tell us what's on your mind — the more detail, the better we can help..."
                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100 text-secondary text-sm placeholder:text-neutral/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-y min-h-[140px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || !name || !email || !subject || !message}
                  className="w-full btn btn-primary rounded-xl py-3 font-bold text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200"
                >
                  {status === "loading" ? (
                    <>
                      <TbLoader2 className="size-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <TbSend className="size-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral/50">
                  Your email will be used only to reply to your message. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
