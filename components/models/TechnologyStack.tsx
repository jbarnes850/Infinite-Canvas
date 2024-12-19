"use client";

import { motion } from "framer-motion";
import { Cpu, Network, Lock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DistributedTrainingDemo } from "./DistributedTrainingDemo";

export function TechnologyStack() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground">
          Experience the power of local AI training with your own hardware
        </p>
      </div>

      {/* Interactive Demo */}
      <DistributedTrainingDemo />

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium">Local Processing</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Your data stays on your devices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>No cloud dependencies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Full control over your models</span>
                </li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Network className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium">Distributed Power</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Use multiple devices together</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Automatic workload distribution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Seamless device coordination</span>
                </li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium">Privacy First</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Complete data privacy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Secure model storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>No data sharing required</span>
                </li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium">Apple Silicon Optimized</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Native M1/M2/M3 support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Hardware-accelerated training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="block w-1 h-1 rounded-full bg-primary" />
                  <span>Efficient memory usage</span>
                </li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}