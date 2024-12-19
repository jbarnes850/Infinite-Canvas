"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AI_MODELS } from "@/lib/constants/models";
import { ModelCard } from "@/components/models/ModelCard";
import { TechnologyStack } from "@/components/models/TechnologyStack";

export default function ModelsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-7xl space-y-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            AI Models & Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by Apple MLX and local compute, our models deliver exceptional results without compromising privacy
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button 
              size="lg" 
              className="btn-gradient"
              onClick={() => router.push("/playground")}
            >
              Start Creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push("/docs")}
            >
              View Documentation
            </Button>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Available Models */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Available Models</h2>
            <p className="text-muted-foreground">
              Choose from our range of specialized AI models, each optimized for specific tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}