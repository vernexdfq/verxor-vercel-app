# SPACING SYSTEM — mandatory

Everything snaps to an **8px grid** (4px micro steps allowed). Uneven gaps fail review.

## Base scale

`4 / 8 / 12 / 16 / 24 / 32 / 40 / 48`

All margins, paddings, and gaps must be one of these values unless there is a documented exception.

## Two densities

Verxor is a **panel product**. Landing can breathe a little. The **app must stay dense** (Primex/Fleexa class). Do **not** apply landing section air inside Home, Numbers, Fund, Profile, or service flows.

### LANDING (public marketing page only)

| Token | Mobile | Desktop | Use |
|--------|--------|---------|-----|
| `page-x` | 16px | 24px | Horizontal page padding |
| `section-y` | 40–48px | 48–64px | Between major landing sections |
| `block-y` | 24px | 24–32px | Title block → first card |
| `stack-y` | 12px | 12–16px | Between stacked cards |
| `card-pad` | 16px | 16–20px | Inside cards |
| `card-gap` | 12px | 12–16px | 2×2 service grids |
| `cta-gap` | 8px | 8px | Primary + secondary CTA |
| `cta-height` | 44–48px | 44–48px | Buttons |
| `radius` | 8–10px | 8–10px | Max 12px |

### APP (Home, Numbers, Fund, Profile, service pages)

| Token | Mobile | Desktop | Use |
|--------|--------|---------|-----|
| `page-x` | 16px | 24px | Screen horizontal padding |
| `section-y` | **24–32px** | 24–32px | Between major blocks (wallet → quick actions → activity) |
| `block-y` | 16–24px | 16–24px | Section title → content |
| `stack-y` | **8–12px** | 8–12px | List rows, transaction cards |
| `card-pad` | **14–16px** | 16px | Inside cards |
| `card-gap` | **10–12px** | 12px | Quick-action / tile grids |
| `cta-gap` | 8px | 8px | Side-by-side or stacked buttons |
| `cta-height` | 44–48px | 44–48px | Buttons |
| `radius` | 8–10px | 8–10px | Max 12px |

**Never use 40–48px section gaps inside the app.** That creates soft AI air and fails review.

## Alignment rules (both surfaces)

1. All cards in a column share the **same content width** (screen − 2×`page-x`).
2. Grids: equal cells, same `card-gap`, same inner `card-pad`.
3. Section label → H2 → subcopy: fixed stack (8 / 12 / 16), not random.
4. Primary + secondary CTAs: same width when stacked full-width; height `cta-height`; gap `cta-gap`.
5. Feature / list rows: fixed icon box (e.g. 40×40), text on one baseline.
6. Left edges of cards/text in a section align on **one vertical line**.
7. No random empty air to “fill the fold.” Dense and commercial.

## Fail conditions

- Uneven gaps between cards in the same list or grid
- Different padding on sibling cards
- Landing-sized section gaps (40–48px) used inside the dashboard
- Hero/app CTAs different widths without reason
- Sections starting at random horizontal offsets
- “Almost aligned” layouts

## Prompt rule

Every builder prompt must include these rules.

- **Landing work** → use **LANDING** tokens only.
- **Dashboard / in-app work** (Home, Numbers, Fund, Profile, services) → use **APP** tokens only. Never copy landing `section-y` into the app.
