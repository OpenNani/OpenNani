import * as React from "react"
import { cn } from "@/lib/utils"

export interface LabeledToggleOption {
  value: string
  label: string
}

export interface LabeledToggleProps {
  options: [LabeledToggleOption, LabeledToggleOption]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

const LabeledToggle = React.forwardRef<HTMLDivElement, LabeledToggleProps>(
  ({ options, value, onValueChange, className }, ref) => {
    const selectedIndex = options.findIndex((opt) => opt.value === value)

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center rounded-full bg-[#0EA5E9] p-1.5",
          className
        )}
      >
        <div
          className="absolute top-1.5 bottom-1.5 rounded-full bg-white transition-all duration-300 ease-in-out"
          style={{
            left: selectedIndex === 0 ? "6px" : "50%",
            right: selectedIndex === 0 ? "50%" : "6px",
          }}
        />
        {options.map((option, index) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onValueChange(option.value)}
            className={cn(
              "relative z-10 px-8 py-2.5 text-base font-medium transition-colors duration-300",
              "rounded-full whitespace-nowrap",
              value === option.value
                ? "text-black"
                : "text-[#0284C7] hover:text-[#0369A1]"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    )
  }
)
LabeledToggle.displayName = "LabeledToggle"

export { LabeledToggle }
