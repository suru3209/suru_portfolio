import { Skiper26 } from "@/components/ui/skiper-ui/skiper26";
import React from "react";
import { myFont3, myFont5 } from "../fonts";

export default function about() {
  return (
    <div className="mx-auto max-w-3xl px-4 space-y-5 pt-32 pb-16">
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">2024</h2>
      <p className={`text-sm sm:text-base leading-relaxed text-foreground/90 ${myFont5.className}`}>
        During 2024, I was completely focused on one thing — how to build a
        career and earn money online. That’s when I discovered platforms like
        Upwork, where people were getting paid well. I had no technical skills
        at that time, so I started with a simple data-entry profile and applied
        for small jobs. I did get some work, but something felt missing — I
        wanted to build real skills, not temporary tasks.
      </p>
      <p className={`text-sm sm:text-base leading-relaxed text-foreground/90 ${myFont5.className} `}>
        As I researched more, I realized how powerful the tech industry is and
        how many real opportunities exist for skilled developers. That motivated
        me to start learning coding. In the beginning it looked very easy, but
        slowly I understood that it requires consistency, practice and patience.
        I enrolled in a Web Development + DSA course, which helped me learn the
        fundamentals and build some small real-world projects like a calculator
        and a stone-paper-scissors game.
      </p>
      <p className={`text-sm sm:text-base leading-relaxed text-foreground/90 ${myFont5.className}`}>
        Towards the end of 2024, I discovered the importance of frameworks in
        modern development, especially React. I started working with it and
        developed a strong understanding of components, routing, and state
        management. Today, I feel confident in my ability to build clean,
        structured and user-friendly web applications — and 2024 became the year
        that truly changed my direction toward becoming a developer.
      </p>
    </div>
  );
}
