import { GitHubCalendar } from "react-github-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function GithubContribution() {
  const username = "suru3209"; // ← Change your GitHub Username

  const colorTheme = {
    light: ["#E4D9FF", "#C9B6FF", "#A888FF", "#825BFF", "#4F21FF"],
    dark: ["#1B132B", "#30204C", "#50327A", "#7A5CE6", "#B9A6FF"],
  };

  return (
    <div className="flex flex-col items-center gap-4 text-gray-900 dark:text-gray-100">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        GitHub Contributions
      </h2>

      {/* Calendar Block */}
      <TooltipProvider>
        <div className="p-2 rounded-xl bg-white dark:bg-[#0d1117]">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={3}
            blockRadius={3}
            showWeekdayLabels
            colorScheme="dark"
            fontSize={14}
            theme={{
              light: colorTheme.light,
              dark: colorTheme.dark,
            }}
            renderBlock={(block, activity) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <rect {...block.props} />
                </TooltipTrigger>
                <TooltipContent className="text-xs bg-black text-white px-2 py-1 rounded">
                  {activity.count} contributions <br />
                  {activity.date}
                </TooltipContent>
              </Tooltip>
            )}
          />
        </div>
      </TooltipProvider>

      {/* ---- bottom row ---- */}
      <div className="w-full flex justify-between max-w-4xl px-4 mt-1 text-sm opacity-80"></div>
    </div>
  );
}
