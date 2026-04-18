import React from "react";

interface PageHeroProps {
  label: string;
  heading: string;
  subtext?: string;
  extra?: React.ReactNode;
}

export function PageHero({ label, heading, subtext, extra }: PageHeroProps) {
  return (
    <div className="w-full px-4 md:px-6 pt-5 pb-3">
      <div
        className="w-full rounded-2xl px-8 py-9 md:px-10"
        style={{ backgroundColor: "#1B3836" }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#4EC9B8" }}
        >
          {label}
        </p>
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-3"
          style={{ lineHeight: "1.1", letterSpacing: "-0.025em" }}
        >
          {heading}
        </h1>
        {subtext && (
          <p className="text-sm max-w-lg" style={{ color: "#9BB8B4", lineHeight: "1.6" }}>
            {subtext}
          </p>
        )}
        {extra}
      </div>
    </div>
  );
}