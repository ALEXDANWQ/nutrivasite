import { useEffect, useRef, type PointerEvent } from "react";
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
import { Spline, Sparkles } from "lucide-react";
import screenshot from "@/assets/nutriva-ai-salad.webp";
import tomato from "@/assets/hero-tomato.webp";
import cucumber from "@/assets/hero-cucumber.webp";
import onion from "@/assets/hero-onion.webp";

const ingredients = [
  { name: "Помидоры", image: tomato, position: "tomato" },
  { name: "Огурцы", image: cucumber, position: "cucumber" },
  { name: "Лук", image: onion, position: "onion" },
] as const;
const spring = { stiffness: 85, damping: 24, mass: 0.8 };

export function PhoneMockup() {
  const stageRef = useRef<HTMLElement>(null);
  const pointerBounds = useRef<DOMRect | null>(null);
  const finePointer = useRef(false);
  const reducedMotion = useReducedMotion();
  const inView = useInView(stageRef);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);
  const rotateX = useTransform(smoothY, [-1, 1], [1.2, -1.2]);
  const rotateY = useTransform(smoothX, [-1, 1], [-1.8, 1.8]);
  const layerX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const layerY = useTransform(smoothY, [-1, 1], [-4, 4]);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [6, -6]);
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
    if (reducedMotion || !finePointer.current || !inView || event.pointerType !== "mouse") {
      return;
    }
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
      className="hero-phone-stage"
      data-motion-active={inView && !reducedMotion ? "true" : "false"}
      onPointerEnter={(event) => {
        pointerBounds.current = event.currentTarget.getBoundingClientRect();
      }}
      onPointerMove={movePointer}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      <motion.div className="hero-phone-parallax" style={{ y: reducedMotion ? 0 : scrollY }}>
        <motion.div
          className="hero-phone-frame"
          style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY }}
        >
          <img
            src={screenshot}
            alt="NUTRIVA: ИИ распознаёт салат по фото — порция 250 г, 100 ккал, 2 г белка, 5 г жиров и 12 г углеводов."
            width={852}
            height={1847}
            fetchPriority="high"
            decoding="async"
            draggable={false}
            className="hero-phone-screen"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="hero-ingredient-layers"
          style={{ x: reducedMotion ? 0 : layerX, y: reducedMotion ? 0 : layerY }}
        >
          {ingredients.map(({ name, image, position }, index) => (
            <motion.div
              key={name}
              className={`hero-ingredient hero-ingredient-${position}`}
              initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.45 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-ingredient-float">
                <div className="hero-ingredient-pill">
                  <img src={image} width={384} height={384} alt="" draggable={false} />
                  <span>{name}</span>
                </div>
                <Spline className="hero-ingredient-connector" strokeWidth={1} />
              </div>
            </motion.div>
          ))}
          <div className="hero-produce hero-produce-tomato">
            <img src={tomato} alt="" width={384} height={384} draggable={false} />
          </div>
          <div className="hero-produce hero-produce-cucumber">
            <img src={cucumber} alt="" width={384} height={384} draggable={false} />
          </div>
        </motion.div>
      </motion.div>

      <figcaption className="hero-phone-caption">
        <Sparkles aria-hidden="true" size={14} />
        <span>Фото — и всё посчитано</span>
        <span className="hero-phone-caption-plus">Plus</span>
      </figcaption>
    </figure>
  );
}
