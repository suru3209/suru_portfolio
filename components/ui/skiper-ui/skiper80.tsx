"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { BookOpen, CircleArrowOutUpRight } from "lucide-react";
import React, { useState } from "react";

const Skiper80 = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState(0);
  const [isItemActive, setIsItemActive] = useState<number | null>(null);

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
        "Nodemailer",
        "React Charts",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      website: "https://www.manualfits.com",
      source: "https://github.com/suru3209/ManualFits_Frontend.git",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "VideoCh",
      img: "./log1.png",
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
        "A decentralized platform that lets users launch custom tokens, transfer tokens, view token balances, send SOL, and check account balances.",
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
        "A modern stock trading dashboard that lets users track positions, P&L, and place simulated trades in real-time.",
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
        "A social media experience where users can post, like, and interact in real-time with a modern and clean UI.",
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
        "An AI assistant interface built on top of LLMs to handle chats, prompts, and structured workflows.",
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

  const currentProject = projects[isHoveredIndex];

  return (
    <div className="flex min-h-screen w-screen justify-center py-32 px-10">
      {isItemActive == null ? (
        <>
          {/* LEFT IMAGE PREVIEW */}
          <motion.img
            drag
            style={{ borderRadius: "25px" }}
            layoutId="active-img"
            className="h-50 border-foreground/10 fixed left-[15%] top-[10%] aspect-video -translate-x-1/2 border object-cover"
            src={currentProject.img}
            alt={currentProject.title}
          />

          {/* RIGHT TITLE LIST */}
          <ul className="fixed bottom-[20%] right-[10%] flex flex-col gap-2">
            <li className="flex w-full items-center gap-3 text-sm uppercase opacity-50">
              my Projects
              <span className="bg-foreground h-px flex-1"></span>
            </li>

            {projects.map((item, index) => (
              <motion.li
                layoutId={`text-header-${index}`}
                key={item.title}
                style={{
                  opacity: isHoveredIndex == index ? 1 : 0.5,
                }}
                className="relative flex w-fit cursor-pointer items-center text-4xl tracking-tighter"
                onMouseEnter={() => setIsHoveredIndex(index)}
                onClick={() => setIsItemActive(index)}
              >
                {item.title}{" "}
                {isHoveredIndex === index && (
                  <motion.div
                    initial={{ x: 10, width: "15px", height: "0px" }}
                    animate={{ x: 10, width: "4px", height: "4px" }}
                    transition={{ duration: 0.2 }}
                    className="bg-foreground absolute left-full rounded-full"
                  ></motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </>
      ) : (
        <div onClick={() => setIsItemActive(null)} className="w-full">
          <div className="mx-auto flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-xl space-y-12">
              <div className="font-cal-sans relative h-24 text-7xl font-medium">
                <motion.h1
                  className="absolute"
                  layoutId={`text-header-${isItemActive}`}
                >
                  {currentProject.title}
                </motion.h1>
              </div>

              <motion.img
                layoutId="active-img"
                style={{ borderRadius: "25px" }}
                src={currentProject.img}
                alt={currentProject.title}
                className="h-84 w-full object-cover"
              />
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.25,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="mx-auto w-full max-w-xl"
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <Section1 title={currentProject.title} />
                <AboutSection
                  description={currentProject.description}
                  tags={currentProject.tags}
                />
                <CTAButtons
                  website={currentProject.website}
                  source={currentProject.source}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

// Components
const Section1 = ({ title }: { title: string }) => (
  <section className="w-full">
    <div className="flex items-center gap-2">
      <h1 className="text-foreground text-2xl font-semibold tracking-tight">
        {title}
      </h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.35,
          duration: 0.5,
        }}
        className="bg-foreground h-0.5 flex-1 origin-left rounded-full"
      />
    </div>
  </section>
);

const AboutSection = ({
  description,
  tags,
}: {
  description: string;
  tags: string[];
}) => (
  <div className="text-foreground/50 mt-4 flex flex-col gap-4">
    {/* Description */}
    <p className="text-sm leading-6">{description}</p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-2.5 py-1 text-[11px] font-medium rounded-md border border-foreground/20 text-foreground/70"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-sm leading-6">
      Want to create something cool together? Let&apos;s do it!
    </p>
  </div>
);

const CTAButtons = ({
  website,
  source,
}: {
  website: string;
  source: string;
}) => (
  <div className="mt-10 flex items-center gap-2.5">
    <a
      href={website}
      target="_blank"
      rel="noreferrer"
      className="bg-foreground text-background flex h-9 items-center gap-2 rounded-xl px-3 text-sm"
    >
      Live Preview <CircleArrowOutUpRight className="size-3.5" />
    </a>

    <a
      href={source}
      target="_blank"
      rel="noreferrer"
      className="bg-background flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-medium"
    >
      See Source Code <BookOpen className="size-3.5" />
    </a>
  </div>
);

export { Skiper80 };
