"use client";

import { GitHubCalendar } from "react-github-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {  myFont5, myFont7 } from "@/app/fonts";

export default function GithubContribution() {
  const username = "suru3209";

  const colorTheme = {
    light: ["#E9E9E9", "#C6E48B", "#7BC96F", "#239A3B", "#196127"],
    dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
  };

  return (
    // 👇 This hides the entire section on mobile + tablet
    <div className="hidden lg:flex w-full flex-col items-center justify-center px-4 transition-colors">
      {/* Title */}
      <h2 className={`text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center ${myFont5.className}`}>
        GitHub Contributions
      </h2>

      <TooltipProvider>
        {/* Desktop Full View Only */}
        <a
          href="https://github.com/suru3209"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <div
            className="
            p-6
             dark:bg-[#0d1117]
             dark:border-gray-700
            
          "
          >
            <div className="text-black dark:text-white">
              <GitHubCalendar
                username={username}
                blockSize={11}
                blockMargin={4}
                blockRadius={3}
                fontSize={16}
                showWeekdayLabels
                theme={{ light: colorTheme.light, dark: colorTheme.dark }}
                renderBlock={(block, activity) => (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <rect {...block.props} />
                    </TooltipTrigger>

                    <TooltipContent
                      className={`${myFont7.className}
                      text-xs px-2 py-1 rounded 
                      bg-gray-900 text-white 
                      dark:bg-white dark:text-black
                    `}
                    >
                      {activity.count} contributions <br />
                      {activity.date}
                    </TooltipContent>
                  </Tooltip>
                )}
              />
            </div>
          </div>
        </a>
      </TooltipProvider>
    </div>
  );
}
