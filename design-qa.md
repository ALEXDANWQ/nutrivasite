# NUTRIVA — распознавание салата и стеклянные бейджи

## Visual truth and scope

- Source: `C:/Users/alexd/Downloads/6dc45926c66438d66e522862738ac07f.jpg`, 2193 × 2913 pixels.
- Target object: only the large foreground pale ceramic plate with a double sage-green rim, persimmon wedges, pomegranate, leafy salad and soft white cheese.
- User-requested composition: the complete plate on transparent background, actual leaders ending on ingredients, minimal captions, light 3D/parallax, responsive treatment. No phone, app screenshot, invented nutrition figures or unrelated produce.
- Local route: `http://127.0.0.1:5173/?recognition-preview=2`.
- Source photo, final focused rendering and mobile rendering were opened together in one comparison input. Comparison is against the requested isolated large plate, not against the surrounding photographic table layout.

## Evidence and normalization

- Desktop: `C:/Users/alexd/AppData/Local/Temp/nutriva-recognition-desktop.png`, 1440 × 900 viewport.
- Mobile: `C:/Users/alexd/AppData/Local/Temp/nutriva-recognition-mobile.png`, 390 × 844 viewport.
- Focused composition: `C:/Users/alexd/AppData/Local/Temp/nutriva-recognition-detail.png`, approximately 556 × 572 pixels.
- Browser: Codex in-app Browser, screenshot density 1×, loaded route, completed recognition-entry animation.
- Final alpha asset: `src/assets/recognition-salad-plate.webp`, 1024 × 1024, 315,824 bytes, alpha channel present. Source PNG retained locally at `tmp/hero-originals/recognition-salad-plate.png`; the user's original JPG is unchanged.
- Source is portrait and includes a table, utensils and other bowls. The target is a square isolated photo object; this is intentional object extraction, not a full-photo pixel-layout clone. The whole large rim and original food arrangement remain visually recognizable.

## Five fidelity surfaces

- Typography: existing Geist/Instrument Serif site copy retained. Only four concise ingredient names and one small Распознано status are added to the visual. Labels use 13 px desktop / 10 px mobile; no clipping in checked viewports.
- Spacing/layout: complete large plate occupies the right hero column on desktop and follows the headline on mobile. Labels sit near the outer rim, away from the center food. Download CTA remains reachable and visible within the 390 × 844 mobile capture.
- Colors: natural orange persimmon, red pomegranate, greens, white cheese and sage rim; restrained dark-green leaders, white target markers and near-white annotation cards. Transparent background integrates with the existing page.
- Image/asset quality: large foreground plate extracted with built-in ImageGen, then targeted alpha-edge cleanup and WebP encoding. Wooden table/board, cloth, utensils, smaller bowl, external fruit and black bowl removed. No new dish or unrelated standalone vegetables used. Complete plate retained; cutout may not be pixel-identical because the editing tool reconstructs obscured rim edges. At intended display sizes no distracting background remnants were observed.
- Copy/content: Хурма, Гранат, Зелень and Мягкий сыр match visibly present ingredients. Generic soft-cheese name avoids inventing a precise cheese variety. This is a hero illustration of recognition, not a live inference/upload feature. No confidence percentages, calories or weights fabricated.

## Iteration history

1. Initial cutout contained larger stray light fragments outside the plate. A targeted built-in ImageGen cleanup removed the distracting fragments while keeping the complete rim and recognizable arrangement. Original extraction remains in the generated-image archive.
2. Initial Зелень endpoint landed on red radicchio rather than a green leaf (P2). Moved its target from (281,626) to (280,680) in the shared 1000 × 1000 annotation space. Final focused and mobile captures show the point on the lower-left green leaf cluster.
3. Final combined comparison of source, focused visual and mobile screen: no remaining actionable P0/P1/P2 issue. Persimmon point is on the left orange wedge; pomegranate on a clearly red seed near the upper-right food; greens on the lower-left green cluster; cheese on a lower-right white piece.

## Geometry and animation

- Plate, leader paths and labels share the same parent perspective transform. Leaders are actual UI SVG annotations in a 1000 × 1000 space, not generic icon connectors; each path terminates at its visible target circle.
- Scene uses one smooth spring tilt, bounded to 2° X / 2.5° Y / 0.5° Z, and a small shadow. This is a lightweight layered 3D effect on a photo, not a claimed geometric reconstruction/WebGL model.
- Pointer movement verified in the browser: intermediate values included rotateX 0.38°, rotateY 0.82°, rotateZ 0.16°, showing continuous movement. Reset/cancel handlers return to neutral; pointer bounds are invalidated on scroll.
- Cursor tilt restricted to fine mouse pointers at desktop widths. Scroll parallax range is 10 px. CSS floating movement is only 3 px; no global pointer/wheel/touch interception.
- Entry scan makes one pass and ends invisible (computed opacity 0); four paths draw once and labels appear progressively. There is no endlessly repeated scanning.
- Off-screen state measured after navigation to Прогресс: motion-active false, scene animation paused, body scroll 0, section top approximately 80 px. Document-hidden CSS pauses animations.
- Reduced-motion guards disable tilt/scroll changes, entry motion and the scanning layer. OS setting not changed during verification.

## Responsive and behavior checks

- Viewports: 360×800, 390×844, 768×1024, 1024×768, 1440×900, 1920×1080.
- No horizontal document overflow; all four labels within viewport, textClipped false; plate loaded.
- Zero old phone screen/frame nodes. Old screenshot/ingredient asset imports and phone CSS removed.
- Mobile menu opens and closes on Прогресс; completed anchor scroll respects header spacing.
- Browser warning/error logs empty in checked hero and navigation states.
- ESLint: no errors; six pre-existing Fast Refresh warnings in unrelated UI components.
- TypeScript and production build: passed.
- Test gap: desktop in-app responsive viewport testing, not physical iOS/Android device testing.

## Asset provenance and prompt

Built-in ImageGen background-extraction edit with supplied source: extract only the large foreground double sage-green-rim plate, preserve food arrangement/photographic texture/camera angle, remove table/board/cloth/utensils/small bowl/external fruits/black bowl, reconstruct only tiny obscured rim sections, retain entire plate, true transparent alpha, no text/UI/shadow. Second pass removed only stray exterior light fragments. Final WebP encoded at 1024 px, quality 95, alphaQuality 100; no API/CLI fallback.

## Result

All requested visible surfaces implemented and checked. No outstanding actionable P0/P1/P2 finding.

## Latest iteration — glass ingredient badges (2026-10-14)

### Target, evidence and normalization

- Visual truth: `C:/Users/alexd/AppData/Local/Temp/nutriva-glass-badges-before.png`, production hero before this edit, 1440 × 900. Applied the user's explicit revision: asymmetrical positions, lightly translucent glass, dimensional food images beside names. Plate, surrounding typography and CTA layout intentionally unchanged.
- Final desktop: `C:/Users/alexd/AppData/Local/Temp/nutriva-glass-badges-desktop.png`, 1440 × 900.
- Focused final composition: `C:/Users/alexd/AppData/Local/Temp/nutriva-glass-badges-detail.png`, 584 × 592 crop of that desktop state.
- Final mobile: `C:/Users/alexd/AppData/Local/Temp/nutriva-glass-badges-mobile.png`, 390 × 844.
- Local URL: `http://127.0.0.1:5173/?glass-badges=1`. Codex in-app browser, density 1×, document scrolled to top, entry animations complete. Before/after full desktop images, focused final crop and mobile capture opened together in the same comparison input.
- Mobile is responsive website content, not a phone-app mock. No device frame/density mismatch introduced.

### Required fidelity surfaces

- Typography: existing site families/hero wrapping unchanged. Ingredient labels use the same dark-green, semibold UI type, 11–14 px; soft-cheese name wraps to two lines only when required on narrow phones. No clipped names in checked sizes.
- Spacing: upper-right pomegranate higher than persimmon; lower-left greens higher than cheese. Individual badge angles −4°, +3°, +4°, −3°. Small images extend beyond glass edges, alternate left/right, stay within the viewport and leave the salad center unobstructed.
- Color/tokens: pale mint glass at 64% opacity, white edge highlights, subtle green shadow; blur 12 px desktop / 7 px phone. Plate and target-point colors retained. Dark text remains readable over the blurred rim.
- Assets: four real raster assets, natural orange persimmon/wedge, ruby pomegranate half/seeds, fresh green leaves, creamy white cheese. All final 256 × 256 WebP files have real alpha, no placeholder icons, baked containers or backgrounds. No distracting halo at intended display size. Four files total 100,666 bytes.
- Copy: only ingredient names, no duplicated subtitle, confidence value or invented nutrition figures. Ingredient thumbnail images are decorative (`alt=""`); the textual labels and existing figure caption remain accessible.

### Comparison history and findings

1. [P2] Initial CSS build omitted standard `backdrop-filter` because the prefixed declaration came last; computed blur was `none`. This reduced the requested frosted-glass effect. Swapped declaration order. Final browser reports `blur(12px) saturate(1.2)` desktop / `blur(7px) saturate(1.1)` mobile; rebuilt production CSS contains both standard and prefixed declarations. Final focused and mobile captures above are post-fix.
2. Recomparison against the source hero plus the explicit requested revision: unchanged plate and page hierarchy, organic badge composition, all four thumbnails present. No remaining actionable P0/P1/P2 findings. Intentional differences from the source are the requested revised cards, food thumbnails and softer curved annotation paths.

### Behavior and verification

- Responsive screenshots inspected at 360×800, 390×844, 768×1024, 1024×768, 1440×900 and 1920×1080. No horizontal document overflow or clipped names; all four images loaded.
- Mouse tilt verified: rotateX 0.313°, rotateY 1.070°, rotateZ 0.214°. Plate, annotations and badges retain one shared parent transform; target ingredient coordinates unchanged.
- Mobile menu opens/closes on Прогресс. Completed native scroll: section top 79.65 px, body scrollTop 0, hero motion-active false, floating animation paused.
- No new per-frame React state or global wheel/touch interception. Small raster thumbnails and four fixed glass areas only; no blur animation. Existing reduced-motion/document-hidden guards retained. OS reduced-motion setting not changed.
- Browser warning/error log empty. ESLint passed with six existing unrelated Fast Refresh warnings, TypeScript passed, production Pages build passed.
- Asset paths and exact built-in prompts: `docs/ingredient-asset-prompts.md`. Original plate asset is unchanged.
- Remaining test gap: responsive desktop-browser testing, not physical iOS/Android hardware; Safari was not independently tested.

### Final checklist

- [x] Four correct transparent ingredient images beside readable labels.
- [x] Asymmetric placement, glass transparency and small rotations.
- [x] Stable annotation endpoints and lightweight smooth motion retained.
- [x] Desktop/mobile visual comparison, menu/navigation, console and build checks.
- [x] No actionable P0/P1/P2 remains.

final result: passed
