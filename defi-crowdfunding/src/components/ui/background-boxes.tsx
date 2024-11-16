import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  // Define colors globally using CSS variables
  let colors = [
    "var(--sky-300)",
    "var(--pink-300)",
    "var(--green-300)",
    "var(--yellow-300)",
    "var(--red-300)",
    "var(--purple-300)",
    "var(--blue-300)",
    "var(--indigo-300)",
    "var(--violet-300)",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col-${j}`}
              className="w-16 h-8 border-r border-t border-slate-700 relative"
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0.3 }, // Add transition for smoother hover effect
              }}
              animate={{
                transition: { duration: 2 },
              }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
