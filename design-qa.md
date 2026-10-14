# NUTRIVA — распознавание салата

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

final result: passed
