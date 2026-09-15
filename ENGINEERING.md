# ENGINEERING — build like a real engineer

UI rules alone are not enough. Verxor must be built the way a production engineer ships a product — not as a one-shot AI demo.

## Mindset

- You are implementing a **commercial fintech / telecom panel**, not a marketing experiment.
- Prefer boring, correct patterns over clever generation.
- If you cannot explain a decision, do not ship it.
- Match the **same product IA** as the sister track. No freestyle features.

## Architecture

- Clear separation: **pages / components / lib / services**
- One design token source (CSS variables or theme) — no magic hex scattered in 40 files
- App shell owns navigation; deep service views do not invent a second competing bottom nav
- Provider logic (numbers, SMM, payments) stays behind **interfaces / adapters** — UI never hardcodes one vendor forever
- Auth, wallet, and providers come in phases — do not fake production backends on the landing page

## Code quality

- TypeScript strict where the stack allows
- Named components, readable props, no 400-line “god” files without reason
- Accessible basics: buttons are buttons, labels exist, focus states work
- Responsive: mobile-first; desktop is refined, not stretched emptiness
- No dead placeholder routes that 404 the user into confusion
- Empty states are intentional product UI, not “TODO” text

## Git & delivery

- Small, logical commits (landing ≠ auth ≠ wallet)
- Do not dump unrelated refactors into one commit
- README stays accurate to what actually runs
- Secrets never committed (`.env` local only; `.env.example` without secrets)

## Product honesty

- No fake inventory, fake balances, or undefended metrics on marketing pages
- VoIP vs non-VoIP must be honest when number products appear
- Currency and locale come later with real rules — do not hardcode only Naira if the product is global-first without a plan

## What “done” means for a page

1. Matches Master Spec IA
2. Passes `NO_AI_LOOK.md` visual rules
3. Works on a real phone width (~375px) and a desktop width
4. No console errors on happy path
5. Could be shown to a paying user without apology

## Phases (do not skip order)

1. Landing
2. App shell + Home
3. Numbers + Virtual Numbers + Rent a Line (UI)
4. Fund
5. Profile
6. SMM + Accounts (UI)
7. Auth
8. Real wallet / payments / providers

Build the current phase only unless the director expands scope.
