import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-[#FFE612] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100/30">
              Transform your workflow with AI{' '}
              <a href="#learn-more" className="font-semibold text-[#FFE612]">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Master AI for the{' '}
            <span className="text-[#FFE612]">Modern Workplace</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how to leverage AI to revolutionize your work. Join thousands of professionals who have transformed their productivity through our comprehensive AI training.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a 
              href="https://intelliforge.vercel.app/onboarding" 
              className="rounded-full bg-[#FFE612] px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Start Learning Now <ArrowRight className="w-4 h-4" />
            </a>
            <button className="rounded-full px-8 py-3 text-base font-semibold text-white border border-white hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}