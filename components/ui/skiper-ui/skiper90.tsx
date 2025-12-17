"use client";

import type { MotionValue } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Globe, Github } from "lucide-react";
import {
  type ReactNode,
  type RefObject,
  Children,
  isValidElement,
  useLayoutEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";
import { myFont5 } from "@/app/fonts";

const Skiper90 = () => {
  const projects = [
    {
      id: 1,
      title: "Manualfits",
      img: "/logofinal.png",
      description:
        "Manualfits is a modern e-commerce platform designed for seamless fashion shopping with secure payments, smart product recommendations, and a powerful admin dashboard for managing orders, inventory, and customers.",
      tags: [
        "React",
        "Tailwind CSS",
        "Razorpay",
        "AWS Mail",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Framer Motion",
        "Shadcn UI",
        "Cloudinary",
      ],
      website: "https://www.manualfits.com",
      source: "https://github.com/suru3209/ManualFits_Frontend.git",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "VideoCh",
      img: "./logoh",
      description:
        "Real-time video calling platform with peer-to-peer connection and meeting summary. Implemented authentication using JWT. Developed video call UI and real-time communication features.Backend APIs using Node.js & Express with MongoDB.",
      tags: [
        "Next.js",
        "TypeScript",
        "Socket.io",
        "Node.js",
        "MongoDB",
        "Jwt",
        "Tailwind CSS",
        "Shadcn",
        "WebRTC",
        "Skiper UI",
        "axios",
      ],
      website: "https://video-chat-frnt09.vercel.app/",
      source: "https://github.com/suru3209/videoChatFrnt09.git",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Version-Control",
      description:
        "An decentralized platform enables users launch their custom tokens, transfer tokens, view token balances, transfer SOL, and check account balances.",
      tags: [
        "React",
        "Web3.js",
        "TypeScript",
        "Recoil",
        "spl-token",
        "Tailwind CSS",
      ],
      website: "https://example.com",
      source: "https://github.com",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "Stock-trading",
      description:
        "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
      tags: [
        "Next.js",
        "Typescript",
        "Gemini",
        "MongoDB",
        "NextAuth",
        "Nodemailer",
        "Tailwind CSS",
        "Shadcn",
      ],
      website: "https://example.com",
      source: "https://github.com",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Social-media",
      description:
        "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
      tags: [
        "Next.js",
        "Typescript",
        "Gemini",
        "MongoDB",
        "NextAuth",
        "Nodemailer",
        "Tailwind CSS",
        "Shadcn",
      ],
      website: "https://example.com",
      source: "https://github.com",
      category: "Full Stack",
    },
    {
      id: 6,
      title: "Gpt",
      description:
        "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
      tags: [
        "Next.js",
        "Typescript",
        "Gemini",
        "MongoDB",
        "NextAuth",
        "Nodemailer",
        "Tailwind CSS",
        "Shadcn",
      ],
      website: "https://example.com",
      source: "https://github.com",
      category: "Full Stack",
    },
  ];
  return (
    <div>
      <div className="-mt-10 mb-24 grid content-start justify-items-center gap-6 text-center">
        {/* <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:content-['']">
          hover the card to see the gradient
        </span> */}
      </div>
      <div className="relative grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {projects.map((project) => (
          <SkiperGradiantCard key={project.id} className="p-1">
            <GradiantCardBody>
              <div className="flex flex-col h-full w-full bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
                {/* Image / Icon */}
                <div className="w-14 h-14 rounded-full bg-gray-700 mb-4 flex items-center justify-center overflow-hidden">
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg ">
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 ${myFont5.className}`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed`}
                >
                  {project.description.length > 120
                    ? project.description.slice(0, 120) + "..."
                    : project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] border rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    {" "}
                    <Globe className="w-4 h-4" /> Website{" "}
                  </a>{" "}
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    {" "}
                    <Github className="w-4 h-4" /> Source{" "}
                  </a>
                </div>
              </div>
            </GradiantCardBody>

            <GradiantCardTitle>{project.title}</GradiantCardTitle>
          </SkiperGradiantCard>
        ))}
      </div>
    </div>
  );
};

export { Skiper90 };

const GradiantCardTitle = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-base text-neutral-800 dark:text-neutral-300",
        className
      )}
    >
      {children}
    </h3>
  );
};

const GradiantCardBody = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <div className={cn("h-full w-full", className)}>{children}</div>;
};

const SkiperGradiantCard = ({
  circleSize = 400,
  className,
  children,
}: {
  circleSize?: number;
  children?: ReactNode;
  className?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  // Extract GradiantCardHeader and GradiantCardBody from children
  let header: ReactNode = null;
  let body: ReactNode = null;

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === GradiantCardTitle) {
        header = child;
      } else if (child.type === GradiantCardBody) {
        body = child;
      }
    }
  });

  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-1 transition-transform hover:scale-[1.01] active:scale-90"
      ref={parentRef}
    >
      <motion.div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          "bg-[linear-gradient(135deg,#3BC4F2,#7A69F9,#F26378,#F5833F)] dark:bg-[linear-gradient(135deg,#fffff,#333333,#666666,#ffffff)] dark:saturate-0"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: mouse.elementLeft,
          top: mouse.elementTop,
          opacity: mouse.opacity,
        }}
      />
      <div className="bg-background/80 absolute inset-px rounded-[19px]" />
      {body && (
        <div
          className={cn(
            "gird bg-background relative place-content-center overflow-hidden rounded-[15px]",
            className
          )}
        >
          {body}
        </div>
      )}
      {header && <div className="relative px-3 py-2">{header}</div>}
    </div>
  );
};

type MouseMotionState = {
  x: MotionValue<number | null>;
  y: MotionValue<number | null>;
  elementX: MotionValue<number | null>;
  elementY: MotionValue<number | null>;
  elementPositionX: MotionValue<number | null>;
  elementPositionY: MotionValue<number | null>;
  elementLeft: MotionValue<string>;
  elementTop: MotionValue<string>;
  opacity: MotionValue<number>;
};

export function useMouse(
  containerRef?: RefObject<HTMLElement | SVGElement | null>
): [MouseMotionState, RefObject<HTMLDivElement | null>] {
  const x = useMotionValue<number | null>(null);
  const y = useMotionValue<number | null>(null);
  const elementX = useMotionValue<number | null>(null);
  const elementY = useMotionValue<number | null>(null);
  const elementPositionX = useMotionValue<number | null>(null);
  const elementPositionY = useMotionValue<number | null>(null);

  const elementLeft = useTransform(elementX, (value: number | null) =>
    value === null ? "-9999px" : `${value}px`
  );
  const elementTop = useTransform(elementY, (value: number | null) =>
    value === null ? "-9999px" : `${value}px`
  );
  const opacity = useMotionValue<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resolveElement = () => {
      if (containerRef?.current instanceof Element) {
        return containerRef.current;
      }

      if (ref.current instanceof Element) {
        return ref.current;
      }

      return null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.pageX);
      y.set(event.pageY);

      const element = resolveElement();
      if (!element) {
        elementX.set(null);
        elementY.set(null);
        elementPositionX.set(null);
        elementPositionY.set(null);
        opacity.set(0);
        return;
      }

      const { left, top } = element.getBoundingClientRect();
      const currentPositionX = left + window.scrollX;
      const currentPositionY = top + window.scrollY;
      const pointerX = event.pageX - currentPositionX;
      const pointerY = event.pageY - currentPositionY;

      elementX.set(pointerX);
      elementY.set(pointerY);
      elementPositionX.set(currentPositionX);
      elementPositionY.set(currentPositionY);
      opacity.set(1);
    };

    const handleMouseLeave = () => {
      x.set(null);
      y.set(null);
      elementX.set(null);
      elementY.set(null);
      elementPositionX.set(null);
      elementPositionY.set(null);
      opacity.set(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const element = resolveElement();
    element?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      element?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    containerRef,
    elementX,
    elementPositionX,
    elementPositionY,
    elementY,
    opacity,
    ref,
    x,
    y,
  ]);

  return [
    {
      x,
      y,
      elementX,
      elementY,
      elementPositionX,
      elementPositionY,
      elementLeft,
      elementTop,
      opacity,
    },
    ref,
  ];
}
