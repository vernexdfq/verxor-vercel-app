const FAQS = [
  {
    q: "Which platforms can I verify?",
    a: "Verxor numbers work for OTP on most major platforms including WhatsApp, Google, Telegram, TikTok, Instagram and more. Availability per platform is shown in your account.",
  },
  {
    q: "What if an OTP never arrives?",
    a: "One-time numbers that fail to receive a code are handled per our refund policy — you are not charged for a code that never lands. Terms are shown at checkout.",
  },
  {
    q: "How fast do numbers arrive?",
    a: "Virtual numbers are issued instantly and OTP codes usually land within seconds. Line rentals activate as soon as your order is confirmed.",
  },
  {
    q: "How does funding work?",
    a: "You fund your wallet once, then spend that balance across virtual numbers, rentals, SMM and accounts. No separate checkout for each purchase.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">FAQ</span>
          <h2 className="mt-2 text-pretty text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
            Questions, answered honestly.
          </h2>
        </div>

        <div className="mt-6 divide-y divide-border overflow-hidden rounded-[12px] border border-border">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group bg-surface">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="grid size-6 shrink-0 place-items-center rounded-[6px] border border-border text-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
