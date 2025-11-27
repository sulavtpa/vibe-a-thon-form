"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressStepsProps {
  currentStep: number
  totalSteps: number
  stepLabels: string[]
}

export function ProgressSteps({ currentStep, totalSteps, stepLabels }: ProgressStepsProps) {
  return (
    <nav aria-label="Registration progress" className="w-full mb-8">
      <ol className="flex items-center justify-center gap-4 md:gap-8">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCompleted = step < currentStep
          const isActive = step === currentStep
          const isInactive = step > currentStep

          return (
            <li key={step} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "progress-step",
                    isActive && "active",
                    isCompleted && "completed",
                    isInactive && "inactive"
                  )}
                  aria-current={isActive ? "step" : undefined}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <span>{step}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium text-center hidden md:block max-w-20",
                    isActive && "text-vibe-teal",
                    isCompleted && "text-vibe-mint",
                    isInactive && "text-vibe-dark/50"
                  )}
                >
                  {stepLabels[step - 1]}
                </span>
              </div>
              
              {step < totalSteps && (
                <div
                  className={cn(
                    "w-8 md:w-16 h-0.5 mx-2",
                    step < currentStep ? "bg-vibe-mint" : "bg-vibe-light"
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
      
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        Step {currentStep} of {totalSteps}: {stepLabels[currentStep - 1]}
      </div>
    </nav>
  )
}
