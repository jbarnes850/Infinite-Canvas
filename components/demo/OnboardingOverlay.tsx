"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingStep } from "./onboarding/OnboardingStep";
import { OnboardingProgress } from "./onboarding/OnboardingProgress";
import { OnboardingControls } from "./onboarding/OnboardingControls";
import { onboardingSteps } from "./onboarding/steps";

export function OnboardingOverlay() {
  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const currentStep = onboardingSteps[step];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* Highlight current step target */}
        </div>
        
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-card p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <OnboardingStep
              title={currentStep.title}
              description={currentStep.description}
              icon={currentStep.icon}
            />
            
            <div className="flex items-center justify-between mt-6">
              <OnboardingProgress
                steps={onboardingSteps.length}
                currentStep={step}
              />
              
              <OnboardingControls
                onSkip={() => setDismissed(true)}
                onNext={() => {
                  if (step === onboardingSteps.length - 1) {
                    setDismissed(true);
                  } else {
                    setStep(s => s + 1);
                  }
                }}
                isLastStep={step === onboardingSteps.length - 1}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}