import React from "react";
import { Zap, Brain, Rocket, Trophy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant AI Implementation",
    description:
      "Learn to integrate AI tools into your workflow immediately, seeing results from day one.",
  },
  {
    icon: Brain,
    title: "Practical AI Knowledge",
    description:
      "Gain hands-on experience with real-world AI applications that matter in your industry.",
  },
  {
    icon: Rocket,
    title: "10x Productivity Boost",
    description:
      "Master techniques that will dramatically increase your efficiency and output quality.",
  },
  {
    icon: Trophy,
    title: "Industry Recognition",
    description:
      "Earn a certificate that proves your AI proficiency to employers and clients.",
  },
];

export function Features() {
  return (
    <div className="py-24 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to master AI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive course covers all aspects of AI implementation in
            the workplace, from basic concepts to advanced applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none flex items-center justify-center">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col border-2 border-[#FFE612] rounded-2xl p-10"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-[#FFE612]"
                    aria-hidden="true"
                  />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
