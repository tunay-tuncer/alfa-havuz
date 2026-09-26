"use client";

import React, { ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Reveal.module.css";
import { useInView } from "./useInView";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "blur-in"
  | "pop"
  | "fade";

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number; // In seconds (e.g. 0.2) or milliseconds (e.g. 200)
  duration?: number; // In seconds (e.g. 0.75) or milliseconds (e.g. 750)
  distance?: number | string; // e.g. 32 or "32px"
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  as: Component = "div",
  variant = "fade-up",
  delay = 0,
  duration = 0.75,
  distance,
  threshold = 0.1,
  rootMargin = "0px 0px -30px 0px",
  once = true,
  className = "",
  style = {},
  children,
  ...rest
}) => {
  const [ref, isInView] = useInView<HTMLElement>({
    threshold,
    rootMargin,
    triggerOnce: once,
  });

  // Normalize delay and duration
  const normalizedDelay = delay >= 10 ? `${delay}ms` : `${delay}s`;
  const normalizedDuration =
    duration >= 10 ? `${duration}ms` : `${duration}s`;
  const normalizedDistance =
    typeof distance === "number" ? `${distance}px` : distance;

  // Map variant to CSS class
  const variantClassMap: Record<RevealVariant, string> = {
    "fade-up": styles.fadeUp,
    "fade-down": styles.fadeDown,
    "fade-left": styles.fadeLeft,
    "fade-right": styles.fadeRight,
    "zoom-in": styles.zoomIn,
    "zoom-out": styles.zoomOut,
    "blur-in": styles.blurIn,
    pop: styles.pop,
    fade: styles.fade,
  };

  const variantClass = variantClassMap[variant] || styles.fadeUp;

  const combinedStyles: React.CSSProperties = {
    ...style,
    ...(normalizedDelay ? { ["--reveal-delay" as string]: normalizedDelay } : {}),
    ...(normalizedDuration
      ? { ["--reveal-duration" as string]: normalizedDuration }
      : {}),
    ...(normalizedDistance
      ? { ["--reveal-distance" as string]: normalizedDistance }
      : {}),
  };

  const classNames = [
    styles.reveal,
    variantClass,
    isInView ? styles.visible : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={ref}
      className={classNames}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
