"use client";

import React, {
  Children,
  cloneElement,
  ElementType,
  HTMLAttributes,
  isValidElement,
  ReactNode,
} from "react";
import Reveal, { RevealProps, RevealVariant } from "./Reveal";

export interface StaggerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  childAs?: ElementType;
  variant?: RevealVariant;
  baseDelay?: number;
  delayStep?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  childClassName?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export const Stagger: React.FC<StaggerProps> = ({
  as: Component = "div",
  childAs,
  variant = "fade-up",
  baseDelay = 0.05,
  delayStep = 0.1,
  duration = 0.7,
  threshold = 0.1,
  rootMargin = "0px 0px -30px 0px",
  once = true,
  className = "",
  childClassName = "",
  style = {},
  children,
  ...rest
}) => {
  return (
    <Component className={className} style={style} {...rest}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const delay = baseDelay + index * delayStep;

        // If the child is already a Reveal component
        if (child.type === Reveal) {
          return cloneElement(child as React.ReactElement<RevealProps>, {
            delay: (child.props as RevealProps).delay ?? delay,
            variant: (child.props as RevealProps).variant ?? variant,
            duration: (child.props as RevealProps).duration ?? duration,
            once: (child.props as RevealProps).once ?? once,
          });
        }

        // Wrap the child with Reveal
        return (
          <Reveal
            as={childAs || "div"}
            variant={variant}
            delay={delay}
            duration={duration}
            threshold={threshold}
            rootMargin={rootMargin}
            once={once}
            className={childClassName}
          >
            {child}
          </Reveal>
        );
      })}
    </Component>
  );
};

export default Stagger;
