import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision className="relative overflow-hidden py-24 sm:py-32 min-h-[90vh] flex items-center">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <HoverBorderGradient
              containerClassName="text-sm leading-6 text-gray-200 background-transparent"
              duration={2}
            >
              Transform your workflow with AI{" "}
              <a
                href="https://intelliforge.vercel.app/onboarding"
                className="font-semibold text-[#FFE612]"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </HoverBorderGradient>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Master AI for the{" "}
            <span className="text-[#FFE612]">Modern Workplace</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how to leverage AI to revolutionize your work. Join
            thousands of professionals who have transformed their productivity
            through our comprehensive AI training.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://intelliforge.vercel.app/onboarding"
              className="rounded-full bg-[#FFE612] px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Start Learning Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
