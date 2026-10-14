import { useEffect, useId, useRef, type CSSProperties, type PointerEvent } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Check, ScanLine } from "lucide-react";
import plate from "@/assets/recognition-salad-plate.webp";
import persimmon from "@/assets/badge-persimmon.webp";
import pomegranate from "@/assets/badge-pomegranate.webp";
import greens from "@/assets/badge-greens.webp";
import cheese from "@/assets/badge-cheese.webp";

// All anchors use the same 1000×1000 space as the photograph and leader lines.
// Plate, labels and lines share one transform so the pointers cannot drift away.
const ingredients = [
  {
    key: "persimmon",
    name: "Хурма",
    image: persimmon,
    badge: { x: 10, y: 170, width: 300, angle: -4 },
    x: 316,
    y: 364,
    line: "M 245 225 C 297 228 284 318 316 364",
  },
  {
    key: "pomegranate",
    name: "Гранат",
    image: pomegranate,
    badge: { x: 690, y: 80, width: 300, angle: 3 },
    x: 647,
    y: 218,
    line: "M 786 135 C 717 134 697 193 647 218",
  },
  {
    key: "greens",
    name: "Зелень",
    image: greens,
    badge: { x: 0, y: 710, width: 300, angle: 4 },
    x: 280,
    y: 680,
    line: "M 234 765 C 284 752 245 709 280 680",
  },
  {
    key: "cheese",
    name: "Мягкий сыр",
    image: cheese,
    badge: { x: 650, y: 780, width: 330, angle: -3 },
    x: 725,
    y: 669,
    line: "M 758 831 C 704 828 756 737 725 669",
  },
] as const;
const spring = { stiffness: 75, damping: 26, mass: 0.8 };
const badgeHeight = 110;

function BadgeCutouts() {
  return ingredients.map(({ key, badge }) => (
    <rect
      key={key}
      x={badge.x}
      y={badge.y}
      width={badge.width}
      height={badgeHeight}
      rx={36}
      fill="black"
      stroke="black"
      strokeWidth={8}
      transform={`rotate(${badge.angle} ${badge.x + badge.width / 2} ${badge.y + badgeHeight / 2})`}
    />
  ));
}

export function FoodRecognition() {
  const lineMaskId = `recognition-lines-${useId()}`;
  const stageRef = useRef<HTMLElement>(null);
  const pointerBounds = useRef<DOMRect | null>(null);
  const finePointer = useRef(false);
  const reducedMotion = useReducedMotion();
  const inView = useInView(stageRef);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);
  const rotateX = useTransform(smoothY, [-1, 1], [2, -2]);
  const rotateY = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);
  const rotateZ = useTransform(smoothX, [-1, 1], [-0.5, 0.5]);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "end start"] });
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scrollY = useSpring(scrollOffset, spring);

  useMotionValueEvent(scrollYProgress, "change", () => {
    pointerBounds.current = null;
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => {
      finePointer.current = media.matches;
      pointerX.set(0);
      pointerY.set(0);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [pointerX, pointerY]);

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    pointerBounds.current = null;
  };

  const movePointer = (event: PointerEvent<HTMLElement>) => {
    if (reducedMotion || !finePointer.current || !inView || event.pointerType !== "mouse") return;
    const bounds = pointerBounds.current ?? event.currentTarget.getBoundingClientRect();
    pointerBounds.current = bounds;
    pointerX.set(
      Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)),
    );
    pointerY.set(
      Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)),
    );
  };

  return (
    <figure
      ref={stageRef}
      className="recognition-stage"
      data-motion-active={inView && !reducedMotion ? "true" : "false"}
      onPointerEnter={(event) => {
        pointerBounds.current = event.currentTarget.getBoundingClientRect();
      }}
      onPointerMove={movePointer}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      <motion.div className="recognition-parallax" style={{ y: reducedMotion ? 0 : scrollY }}>
        <motion.div
          className="recognition-tilt"
          style={{
            rotateX: reducedMotion ? 0 : rotateX,
            rotateY: reducedMotion ? 0 : rotateY,
            rotateZ: reducedMotion ? 0 : rotateZ,
          }}
        >
          <div className="recognition-scene">
            <img
              src={plate}
              alt="Большая тарелка салата с хурмой, гранатом, зеленью и мягким сыром."
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="recognition-plate"
            />

            <div className="recognition-scan-mask" aria-hidden="true">
              <div className="recognition-scan" />
            </div>

            <svg className="recognition-leaders" viewBox="0 0 1000 1000" aria-hidden="true">
              <defs>
                <mask
                  id={lineMaskId}
                  maskUnits="userSpaceOnUse"
                  x={-100}
                  y={-100}
                  width={1200}
                  height={1200}
                  style={{ maskType: "luminance" }}
                >
                  <rect x={-100} y={-100} width={1200} height={1200} fill="white" />
                  <g className="recognition-cutouts-desktop">
                    <BadgeCutouts />
                  </g>
                  {/* Inverse of the mobile leaders' 90/84 scale; badges stay unscaled. */}
                  <g
                    className="recognition-cutouts-mobile"
                    transform="translate(500 500) scale(0.9333333333) translate(-500 -500)"
                  >
                    <BadgeCutouts />
                  </g>
                </mask>
              </defs>
              <g mask={`url(#${lineMaskId})`}>
                {ingredients.map(({ key, line, x, y }, index) => (
                  <g key={key}>
                    <motion.path
                      d={line}
                      fill="none"
                      className="recognition-leader"
                      initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.8,
                        delay: reducedMotion ? 0 : 0.45 + index * 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                    <motion.g
                      initial={reducedMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: reducedMotion ? 0 : 0.8 + index * 0.16 }}
                    >
                      <circle cx={x} cy={y} r="12" className="recognition-point-ring" />
                      <circle cx={x} cy={y} r="5" className="recognition-point" />
                    </motion.g>
                  </g>
                ))}
              </g>
            </svg>

            {ingredients.map(({ key, name, image, badge }, index) => (
              <motion.div
                key={key}
                className={`recognition-label recognition-label-${key}`}
                style={
                  {
                    left: `${badge.x / 10}%`,
                    top: `${badge.y / 10}%`,
                    width: `${badge.width / 10}%`,
                    height: `${badgeHeight / 10}%`,
                    "--badge-angle": `${badge.angle}deg`,
                  } as CSSProperties
                }
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.7 + index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="recognition-glass">
                  <img
                    src={image}
                    alt=""
                    width={256}
                    height={256}
                    decoding="async"
                    draggable={false}
                    className="recognition-ingredient"
                  />
                  <span>{name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="recognition-status"
        initial={reducedMotion ? false : { opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: reducedMotion ? 0 : 1.3 }}
      >
        <ScanLine aria-hidden="true" size={15} />
        <span>Распознано</span>
        <Check aria-hidden="true" size={13} />
      </motion.div>
      <figcaption className="sr-only">
        Демонстрация распознавания ингредиентов по фото: хурма, гранат, зелень и мягкий сыр.
      </figcaption>
    </figure>
  );
}
