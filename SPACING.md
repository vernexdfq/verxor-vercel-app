# SPACING SYSTEM — mandatory

Everything snaps to an **8px grid**. Uneven gaps fail review.

## Base unit

- Micro: **4px**
- Grid: **8px** (all spacing is a multiple of 8 when possible)

## Tokens

| Token | Mobile | Desktop | Use |
|--------|--------|---------|-----|
| `page-x` | 16px | 24px | Horizontal page padding |
| `section-y` | 48px | 64px | Between major sections |
| `block-y` | 24px | 24–32px | Between section title block and first card |
| `stack-y` | 12px | 12–16px | Between stacked cards in a list |
| `card-pad` | 16px | 16–20px | Padding inside cards |
| `card-gap` | 12px | 12–16px | Gap in 2×2 grids |
| `cta-gap` | 8px | 8px | Between primary and secondary CTA |
| `radius` | 8–10px | 8–10px | Buttons, cards, inputs (max 12px) |

## Alignment rules

1. All cards in a column share the **same content width** (screen − 2×`page-x`).
2. 2×2 grids: equal cells, same `card-gap`, same inner `card-pad`.
3. Section label → H2 → subcopy: fixed stack (8 / 12 / 16), not random.
4. Primary + secondary CTAs: same width, height ~44–48px, gap `cta-gap`.
5. Feature rows: fixed icon box (e.g. 40×40), text aligned to one baseline.
6. No extra empty air above the fold just to fill the screen — dense and commercial.
7. Left edges of cards/text in a section must align on one vertical line.

## Fail conditions

- Uneven gaps between service cards
- Different padding on cards in the same list
- Hero CTAs different widths without reason
- Sections starting at random horizontal offsets
- “Almost aligned” layouts
