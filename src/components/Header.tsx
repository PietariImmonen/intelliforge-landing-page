import { Brain, ChevronRight } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 sticky top-0 bg-white z-50 opacity-90">
      <div className="flex items-center gap-2">
        <Brain className="w-8 h-8 text-[#FFE612]" />
        <span className="text-xl font-bold">IntelliForge</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="hover:text-[#FFE612] transition-colors">
          Features
        </a>
        <a href="#pricing" className="hover:text-[#FFE612] transition-colors">
          Pricing
        </a>
        <a
          href="#testimonials"
          className="hover:text-[#FFE612] transition-colors"
        >
          Success Stories
        </a>
        <a
          href="https://intelliforge.vercel.app/onboarding"
          className="bg-[#FFE612] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
        >
          Get Started <ChevronRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}
