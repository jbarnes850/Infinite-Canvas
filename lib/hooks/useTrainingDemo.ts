"use client";

import { useState, useCallback } from 'react';
import { AIModel } from '@/lib/types/models';

interface TrainingState {
  isTraining: boolean;
  progress: number;
  step: number;
  totalSteps: number;
  currentLoss: number;
  timeRemaining: string;
  deviceUtilization: {
    deviceId: string;
    utilization: number;
  }[];
}

export function useTrainingDemo() {
  const [trainingState, setTrainingState] = useState<TrainingState>({
    isTraining: false,
    progress: 0,
    step: 0,
    totalSteps: 1000,
    currentLoss: 1.0,
    timeRemaining: "~30 min",
    deviceUtilization: []
  });

  const startTraining = useCallback((model: AIModel) => {
    setTrainingState(prev => ({ ...prev, isTraining: true }));

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingState(prev => {
        const newStep = prev.step + 1;
        const progress = (newStep / prev.totalSteps) * 100;
        const currentLoss = Math.max(0.1, prev.currentLoss * 0.995);
        
        // Update device utilization
        const deviceUtilization = [
          { deviceId: "Mac Studio", utilization: 85 + Math.random() * 10 },
          { deviceId: "MacBook Pro", utilization: 75 + Math.random() * 15 }
        ];

        // Calculate remaining time
        const remainingSteps = prev.totalSteps - newStep;
        const timeRemaining = remainingSteps > 0 
          ? `~${Math.ceil(remainingSteps * 2 / 60)} min`
          : "Complete";

        if (newStep >= prev.totalSteps) {
          clearInterval(interval);
          return {
            ...prev,
            isTraining: false,
            progress: 100,
            currentLoss,
            timeRemaining,
            deviceUtilization
          };
        }

        return {
          ...prev,
          step: newStep,
          progress,
          currentLoss,
          timeRemaining,
          deviceUtilization
        };
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return {
    trainingState,
    startTraining
  };
}