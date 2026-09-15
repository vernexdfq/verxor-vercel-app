# NO AI LOOK — mandatory for Verxor

If the UI looks like a default AI builder template, it fails review.

## Banned patterns

- Pill buttons (`border-radius: 999px` or very large radius)
- Soft, oversized card radii (24px+)
- Huge empty vertical gaps (“AI air”)
- Generic hero illustrations / abstract 3D blobs
- Purple or multi-gradient “startup” branding (we use Vernex blue only)
- Fake stats you cannot defend
- Placeholder lorem, “Your Company”, stock avatars as product UI
- Glassmorphism everywhere, neon glow, noisy gradients on every section
- 6–8 random quick-action icons on the home grid (we use **exactly 4**)
- Rounded “chat bubble” chrome on a fintech panel

## Required patterns

- **Straight edges:** buttons, cards, inputs ≈ **8–12px** radius max
- **Dense commercial spacing** (Primex / real panels, not demo spacing)
- **Primary:** `#2563EB` only as brand accent
- **Background:** `#F6F8FC` · **Cards:** white · **Text:** `#0F172A` · **Muted:** `#64748B`
- **Wallet card:** dark blue gradient (`#0B1B4A` → `#101B36` → `#0B1220`)
- Clear hierarchy: badge → H1 → sub → one primary CTA
- Honest empty states and VoIP / non-VoIP messaging when numbers appear
- Mobile-first; desktop must not stretch into empty wasteland

## Copy tone

- Direct, commercial, short
- No “revolutionize your digital presence with our cutting-edge ecosystem”
- Prefer: “Get a number. Fund wallet. Use services.”

## Review checklist before merge

- [ ] No pill CTAs
- [ ] No soft template shadows / floating cards
- [ ] Spacing feels intentional and tight
- [ ] Could sit next to Primex/Fleexa without looking like a student demo
- [ ] Same product IA as Master Spec
