# NUTRIVA — новый первый экран

## Scope and visual truth

The existing landing page is the product surface. This is a responsive hero illustration, not a replacement mobile application or a literal clone of the promotional poster.

- App screen: `C:/Users/alexd/Downloads/Салат и дневник питания.png` — 852 × 1847 pixels. Preserved in full, with its original interface, text, photo and nutrition values.
- Art direction: `C:/Users/alexd/Downloads/e3eef8e9-be4f-4a9b-967e-c2d286e4ac1f.png` — 941 × 1672 pixels. Rounded pale-mint frame, food photography, glass ingredient labels and subtle depth.
- Local implementation: `http://127.0.0.1:5173/`.
- Browser: Codex in-app Browser, through its documented browser API.

## Rendered evidence

- Full desktop: `C:/Users/alexd/AppData/Local/Temp/nutriva-hero-desktop-oct14.png`, 1440 × 900 CSS viewport, browser capture at 1× density.
- Mobile: `C:/Users/alexd/AppData/Local/Temp/nutriva-hero-mobile-oct14.png`, 390 × 844 CSS viewport, browser capture at 1× density.
- Short desktop: `C:/Users/alexd/AppData/Local/Temp/nutriva-hero-short-desktop-oct14.png`, 1268 × 714 CSS viewport.
- Focused visual: `C:/Users/alexd/AppData/Local/Temp/nutriva-hero-detail-oct14.png`, approximately 500 × 730 pixels, covering the complete phone, ingredient labels and caption.
- State: loaded first screen, original app screen, default yearly website price unaffected. The focused visual and supplied original screenshot were inspected together in a single comparison input; the promotional reference, desktop and mobile captures were also inspected together.
- Density normalization: compare composition and readability at their intended rendered scale, not screenshot pixels 1:1. The embedded source keeps its 852:1847 aspect ratio. Desktop screen is approximately 303 × 657 CSS pixels; phone frame 317 × 670. Mobile phone frame approximately 268 × 567. Poster header and iOS status-bar chrome are not added to the Android app screen.

## Required fidelity surfaces

- Fonts and typography: existing Geist/Instrument Serif site hierarchy retained. App typography is preserved in the supplied bitmap. Ingredient labels use restrained dark-green text; desktop 12 px, mobile 10 px. Long main heading wraps correctly at 360 and 390 px.
- Spacing and layout: desktop copy and visual remain side by side; on smaller viewports the headline precedes the phone, followed by description and download actions. Frame corners are rounded without distorting the screenshot. Labels stay around the food photo, not over nutrition figures. Short-screen rule keeps the whole device and caption within a 714 px desktop viewport.
- Colors and tokens: pale mint, near-white glass surfaces and green accents follow the reference and existing NUTRIVA palette. Food assets retain natural red, green and purple colors. Borders and shadows stay soft.
- Image quality: real supplied screenshot is used, not regenerated UI. Transparent ingredient assets are photorealistic; no visible white boxes or alpha halos. Screenshot WebP is 231,172 bytes; ingredient assets total 160,236 bytes. The screen is not cropped or stretched. All original values remain 250 g / 100 kcal / 2 g protein / 5 g fat / 12 g carbohydrates.
- Copy and content: existing landing-page messaging retained. New ingredient labels are Помидоры / Огурцы / Лук. Caption is Фото — и всё посчитано, with Plus indicating the paid AI feature. Decorative screen controls belong to the static app screenshot; the real website download CTA remains a working RuStore link.

## Comparison history

1. Initial desktop capture at 1268 × 714 revealed a P2: the longer replacement screenshot extended below the first viewport. Fixed by bounding desktop frame width by viewport height and modestly adapting existing copy size/spacing on short desktops. Post-fix capture `nutriva-hero-short-desktop-oct14.png` shows the complete phone and caption; measured screen bottom 622 px and caption bottom 666 px.
2. Initial connectors were angular corner-arrow icons and did not fit the curved reference treatment (P2). Replaced them with the existing icon library's Spline connectors with bright endpoint circles. Final full and focused captures confirm curved connectors placed over the food-photo region.
3. Final combined comparisons of the reference, screenshot source and implementation find no remaining actionable P0/P1/P2 issue. Deliberate adaptations: original Android screen rather than invented iOS chrome; reduced decorative density rather than the poster's parsley and background foliage; genuine source UI instead of regenerated enlarged nutrition cards.

## Behavior and responsive checks

- Widths checked: 360, 390, 768, 1024, 1268, 1440, 1920 px. No horizontal document overflow. Ingredient labels remain within the viewport. Source image loaded at every size.
- Pointer movement verified in the in-app Browser: the frame changes continuously through small rotations (e.g. rotateX 0.36°, rotateY 0.69°), while labels move independently by only a few pixels. Spring smoothing uses damping 24; maximum configured tilt is 1.8°. Pointer bounds are invalidated when scroll changes.
- Cursor tilt only applies on desktop with a fine mouse pointer. Touch/pointer cancellation resets the pointer values. Scroll parallax has a total range of 12 px; no wheel/touch listeners block native page scrolling.
- Mobile menu opens and closes when selecting Прогресс. Completed anchor scroll positions Прогресс about 80 px below the viewport top. Body scroll remains 0: there is no secondary body scroll container.
- When the hero leaves the viewport, `data-motion-active=false` and computed ingredient animation-play-state becomes `paused`. CSS also pauses these animations when the document is hidden.
- Reduced-motion guards disable pointer/scroll transforms and entry movement; existing global reduced-motion CSS limits repeating animations. The browser's OS reduced-motion setting was not changed during this session.
- Browser warning/error logs: empty in the checked hero, navigation and responsive states.
- Scoped ESLint, TypeScript and production `build:pages`: passed.
- Remaining test gap: responsive checks use the in-app desktop browser viewport; physical iOS/Android devices were not tested.

## Asset provenance

Source screenshot copied from the supplied file, then encoded as WebP quality 95; no visual UI edits. New cutouts generated with built-in ImageGen, transparent backgrounds, reference image supplied. Original PNGs are retained locally under `tmp/hero-originals/`; deployable WebP assets are in `src/assets/`.

- `src/assets/nutriva-ai-salad.webp`: complete original app screen, 852 × 1847.
- `src/assets/hero-tomato.webp`: 384 × 384. Prompt: one photorealistic ripe red tomato with green stem and fresh droplets, premium white/mint food-ad lighting, isolated transparent background, wholly contained, no text, container or floor.
- `src/assets/hero-cucumber.webp`: 384 × 384. Prompt: one photorealistic thick round cucumber slice, dark green textured rind, juicy pale interior and clear seeds, slight three-quarter tilt, fresh droplets, isolated transparent background, premium food-ad lighting, no text or container.
- `src/assets/hero-onion.webp`: 384 × 384. Prompt: one photorealistic purple/red onion slice with crisp concentric lavender-magenta rings and pale center, slight three-quarter tilt, fresh moist texture, premium food-ad lighting, isolated transparent background, no text or container.

## Findings and implementation checklist

No outstanding P0/P1/P2 findings. Required assets installed; real source screen preserved; rounded framing, independent ingredient layers, gentle pointer/scroll movement, responsive layout and viewport animation pausing verified. Physical-device testing remains an optional follow-up.

final result: passed
