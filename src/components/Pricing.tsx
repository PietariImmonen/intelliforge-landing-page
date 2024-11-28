import { Check } from "lucide-react";

const features = [
  "Access to AI fundamentals course",
  "Interactive learning materials",
  "Real-world case studies",
  "Practice exercises",
  "Community support",
];

export function Pricing() {
  return (
    <div className="py-24 bg-gray-50" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start your AI journey today with our flexible pricing options
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2">
          {/* Free Tier */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Free Course
                </h3>
                <p className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-700">
                  Popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Perfect for getting started with AI
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  €0
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /forever
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-[#FFE612]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#free-signup"
              className="mt-8 block rounded-md bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-black hover:ring-2"
            >
              Start Learning
            </a>
          </div>

          {/* Enterprise Tier */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Enterprise
                </h3>
                <p className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold leading-5 text-green-700">
                  Best value
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Comprehensive training for your entire team
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  €200
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /employee
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {[
                  ...features,
                  "Priority support",
                  "Custom learning paths",
                  "Team progress tracking",
                  "Dedicated success manager",
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-[#FFE612]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact-sales"
              className="mt-8 block rounded-md bg-[#FFE612] px-3 py-2 text-center text-sm font-semibold leading-6 text-black hover:bg-[#FFE612]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE612]"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
