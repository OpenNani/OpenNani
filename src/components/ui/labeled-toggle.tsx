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
          "relative inline-flex items-center rounded-[14px] bg-blue-500 p-1",
          className
        )}
      >
        <div
          className="absolute top-1 bottom-1 rounded-[11px] bg-white transition-all duration-300 ease-in-out"
          style={{
            left: selectedIndex === 0 ? "4px" : "50%",
            right: selectedIndex === 0 ? "50%" : "4px",
          }}
        />
        {options.map((option, index) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onValueChange(option.value)}
            className={cn(
              "relative z-4 px-3 py-0.5 text-base font-medium duration-300",
              "rounded-full whitespace-nowrap",
              value === option.value
                ? "text-black"
                : "text-[#393967]"
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
