"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { Globe, Github, Sun, Moon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GithubStats from "../../GithubStats";
import { Skiper90 } from "./skiper90";

const Skiper13 = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <section className="relative h-full bg-black dark:bg-black">
      <Main />
    </section>
  );
};

// Global Navbar Component with Theme Management
const GlobalNavbar = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Mark as mounted to avoid hydration mismatch
    setMounted(true);

    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);

    // Only update if not already set by the script tag
    if (shouldBeDark && !document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    } else if (
      !shouldBeDark &&
      document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Render navbar immediately, theme will sync after mount
  return <Navbar_001 isDark={isDark} toggleTheme={toggleTheme} />;
};

export { Navbar_001, Skiper13, GlobalNavbar };

const list = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "/about" },
];

const Navbar_001 = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef as React.RefObject<HTMLElement>, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <motion.div
      initial={{ height: "79px" }}
      animate={{ height: isOpen ? "100vh" : "79px" }}
      transition={{ duration: 0.3 }}
      className="z-90 md:w-110 fixed top-0 left-1/2 flex w-full -translate-x-1/2 justify-center overflow-hidden"
    >
      <motion.div
        ref={menuRef}
        animate={{ gap: isOpen ? "8px" : "1px" }}
        className="md:w-110 absolute flex h-screen w-screen flex-col p-4"
      >
        <nav
          className={`flex w-full items-center justify-between bg-[#121212]/80 dark:bg-[#121212]/80 px-7 py-5 text-white backdrop-blur-sm ${
            isOpen ? "rounded-t-2xl" : "rounded-2xl"
          }`}
        >
          <button
            onClick={toggleTheme}
            className=" rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-sm font-bold uppercase text-white cursor-pointer"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>

        {/* menu items */}
        {isOpen && (
          <ul className="flex w-full flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-[#121212]/80 px-7 py-5 text-white backdrop-blur-sm">
            {list.map((item, index) => (
              <li
                className="relative flex cursor-pointer flex-col items-center overflow-hidden"
                key={index}
              >
                <div className="flex items-start gap-2">
                  <span className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em]">
                    <Link
                      key={index}
                      href={item.href}
                      className="mr-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* <div className="flex w-full items-center justify-between rounded-2xl bg-[#121212]/80 p-4 text-sm tracking-tight text-white/60 backdrop-blur-sm">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div> */}
        {isOpen && (
          <div
            className={`flex w-full items-center justify-between bg-[#F4F4F5] px-7 py-4 font-medium tracking-tight text-gray-900 backdrop-blur-sm rounded-b-2xl`}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/suru3209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                    <GitHubLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black" />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://x.com/Surya_singh3209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                    <FaXTwitter className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black" />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://linkedin.com/in/surya3209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                    <LinkedInLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black" />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="" className="cursor-pointer">
                  <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                    <FileIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black" />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const skills = [
  "Next.js",
  "Typescript",
  "MongoDB",
  "Tailwind CSS",
  "Shadcn",
  "Skiper-Ui",
  "Socket.io",
  "AWS",
  "Node.js",
  "Redux",
  "MySQL",
];

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
    title: "Too.V",
    description:
      "An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn&apos;t get it.",
    tags: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
    ],
    website: "https://example.com",
    source: "https://github.com",
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

const Main = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Full Stack");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  const displayedProjects =
    selectedCategory === "Full Stack" && !showAll
      ? filteredProjects.slice(0, 2)
      : filteredProjects;

  return (
    <div className="flex h-full flex-col lg:w-full items-center justify-center bg-black pt-15 font-sans text-white">
      <div className="w-full flex justify-center py-5 pt-24 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <img
              src="/IMG_5812.JPG"
              // src="/gelaxy.png"
              alt="Surya Singh"
              className="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-full object-cover border border-white/10"
            />
          </div>
          <div className="mt-4 px max-sm:px-4">
            <h1
              className={`text-[3rem] mt-2 max-sm:text-[1.6rem] whitespace-nowrap font-bold tracking-tight text-center`}
            >
              Hi, I&apos;m Surya Singh
            </h1>
            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 text-base max-sm:text-sm text-center font-normal tracking-normal inter leading-6 `}
            >
              22. I move fast, break limits, and build things that matter. Deep
              into coding, systems, and anything that challenges the brain.
              Tech, creativity, and discipline drive me — from code to cricket
              to great books. Still chasing mastery, one line of code at a time.
              If you’re building something real, I’m listening.
              <br />
              If you’re working on something real, let’s talk.
            </h1>
          </div>
          {/* <div className="mt-8 flex gap-4">
                    <Link href="https://cal.com/fardeentwt/15min" target=&apos;_blank&apos;>
                        <Button className="rounded-lg">
                            Book a meet
                        </Button>
                    </Link>
                    <Button className="rounded-lg">
                        <ScrollLink to="contact-section" activeClass="active" smooth={true} offset={-120} duration={1100}>Get in touch</ScrollLink>
                    </Button>
                </div> */}
        </div>
      </div>

      <div className="relative mt-10 flex h-full flex-col items-center justify-center w-full bg-white dark:bg-black">
        <div id="projects">
          <div className="w-full max-w-4xl px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Proof of Work
            </h2>
            <div className="flex justify-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
              <button
                onClick={() => {
                  setSelectedCategory("Full Stack");
                  setShowAll(false);
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === "Full Stack"
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 hover:text-gray-50"
                    : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Full Stack
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("Mobile Apps");
                  setShowAll(false);
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === "Mobile Apps"
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 hover:text-gray-50"
                    : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Mobile Apps
              </button>
            </div>

            {/* Project Cards Grid */}
            {selectedCategory === "Mobile Apps" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-gray-300 to-gray-500 mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Coming Soon
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Mobile apps are in development. Stay tuned!
                  </p>
                </div>
              </div>
            ) : (
              <>
                <Skiper90/>

                
              </>
            )}
          </div>
          <hr />

          {/* this is for github contributions */}
          <div className="mx-auto max-w-lg space-y-5 my-10">
            <a
              href="https://github.com/suru3209"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <GithubStats />
            </a>
          </div>
          {/* this is for experince*/}
          <div className="mx-auto max-w-lg space-y-5 mb-50 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 ">
              Experince
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-6 text-gray-400 dark:text-gray-100">
              Looking for Internship.....
            </p>
          </div>

          {/* this is for skills what we have */}
          <div
            className="w-full max-w-4xl mx-auto my-16 px-4 text-center"
            id="skills"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {skills.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs md:text-sm font-medium rounded-md 
        border border-gray-200 dark:border-gray-700 
        bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300
        hover:bg-gray-900 hover:text-white dark:hover:bg-white/20
        transition cursor-default whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* this is for contact me*/}
          {/* ================= CONTACT SECTION ================= */}
          <section
            id="contact"
            className="relative w-full max-w-5xl mx-auto px-6 mb-15 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm">
              Want to collaborate or discuss an idea? Reach out — I&apos;m
              always open to exciting work.
            </p>

            {/* Contact Card */}
            <div
              className="p-8 mt-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 
                backdrop-blur-lg shadow-lg max-w-lg mx-auto"
            >
              {/* Email */}
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                📩 Email
              </p>
              <a
                href="mailto:suryasingh3209@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline break-all"
              >
                suryaprakash3209@gmail.com
              </a>

              {/* Social Icons */}
              <p className="text-lg font-medium text-gray-900 dark:text-white mt-8 mb-4">
                🌍 Socials
              </p>

              <div className="flex items-center justify-center gap-6 text-2xl opacity-90">
                <a
                  href="https://github.com/suru3209"
                  target="_blank"
                  className="hover:text-purple-400 transition text-gray-800"
                >
                  <GitHubLogoIcon className="w-6 h-6" />
                </a>

                <a
                  href="https://linkedin.com/in/surya3209"
                  target="_blank"
                  className="hover:text-blue-400 transition text-gray-800"
                >
                  <LinkedInLogoIcon className="w-6 h-6 " />
                </a>

                <a
                  href="https://x.com/Surya_singh3209"
                  target="_blank"
                  className="hover:text-gray-200 transition text-gray-800"
                >
                  <FaXTwitter className="w-6 h-6 " />
                </a>

                <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  className="hover:text-green-400 transition text-gray-800"
                >
                  <Globe className="w-6 h-6 " />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="hover:text-yellow-400 transition text-gray-800"
                >
                  <FileIcon className="w-6 h-6 " />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// const NikeLogo = (props: React.SVGProps<SVGSVGElement>) => {
//   return (
//     <svg
//       width="42"
//       height="22"
//       viewBox="0 0 42 22"
//       fill="none"
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M13.9389 3.68059C13.6545 4.46711 12.9677 5.06994 11.9965 5.06994L12.9918 2.45373C13.9389 2.45373 14.2016 2.98593 13.9389 3.68059ZM16.879 3.65705C17.708 1.52828 16.5223 0 14.0112 0H10.9772L6.75989 10.9287H9.79391L11.4302 6.66887L12.0857 10.9287H15.0282L14.2257 6.391C15.2667 5.99773 16.4042 4.81561 16.879 3.65705ZM23.6556 7.33999L26.4993 0H23.4652L20.6938 7.1775C20.4094 7.91927 20.0528 8.28898 19.4841 8.28898C18.7731 8.28898 18.9635 7.6414 19.1515 7.1775L21.9277 0H18.8936L16.2861 6.69241C15.0764 9.79607 16.3343 11.1383 18.537 11.1383C21.1203 11.1383 22.6603 9.90911 23.6556 7.33999ZM31.3287 10.0928L35.2446 0H32.4492L30.1983 5.83526V0H27.3548L23.1374 10.9311H25.9571L28.1379 5.21123V10.9193L11.623 15.1745C9.08782 15.8362 7.03461 15.742 5.87546 14.9154C2.87998 12.7678 5.17417 8.49621 5.97185 7.1987C4.5211 8.77879 3.04867 10.3377 1.91362 12.059C0.151994 14.7271 -0.621577 17.6753 0.585773 19.5639C2.75949 22.9619 7.95036 21.3818 11.2591 20.0113L42.002 7.33999L31.3287 10.0928Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

/**
 * Skiper 13 Navbar_001 — React + Framer Motion
 * Inspired by and adapted from https://afterdarktour.nike.com/en/home
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * Illustrations by https://afterdarktour.nike.com/en/home
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 * - Cannot use original Nike illustrations or videos for commercial purposes.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
