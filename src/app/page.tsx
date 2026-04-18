"use client"
import { useState } from "react";

const NAV_LINKS = ["Home", "Explore", "Leaderboard", "AI Center"];

const STATS = [
  {
    label: "MEMBERS",
    value: "384+",
    desc: "Students, mentors, and helpers in the loop.",
  },
  {
    label: "REQUESTS",
    value: "72+",
    desc: "Support posts shared across learning journeys.",
  },
  {
    label: "SOLVED",
    value: "69+",
    desc: "Problems resolved through fast community action.",
  },
];

const LIVE_FEATURES = [
  {
    title: "AI request intelligence",
    desc: "Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.",
  },
  {
    title: "Community trust graph",
    desc: "Badges, helper rankings, trust score boosts, and visible contribution history.",
  },
  {
    title: "100%",
    desc: "Top trust score currently active across the sample mentor network.",
  },
];

const CORE_FLOW = [
  {
    title: "Ask for help clearly",
    desc: "Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.",
  },
  {
    title: "Discover the right people",
    desc: "Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.",
  },
  {
    title: "Track real contribution",
    desc: "Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.",
  },
];

const FEATURED_REQUESTS = [
  {
    tags: [
      { label: "Web Development", color: "bg-[#1a1a2e] text-white" },
      { label: "High", color: "bg-[#c0392b] text-white" },
      { label: "Solved", color: "bg-[#27ae60] text-white" },
    ],
    title: "Need help",
    desc: "helpn needed",
    author: "Ayesha Khan",
    location: "Karachi",
    helpers: "1 helper interested",
  },
  {
    tags: [
      { label: "Web Development", color: "bg-[#1a1a2e] text-white" },
      { label: "High", color: "bg-[#c0392b] text-white" },
      { label: "Solved", color: "bg-[#27ae60] text-white" },
    ],
    title: "Need help making my portfolio responsive before demo day",
    desc: "My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.",
    author: "Sara Noor",
    location: "Karachi",
    helpers: "1 helper interested",
    skillTags: ["HTML/CSS", "Responsive", "Portfolio"],
  },
  {
    tags: [
      { label: "Design", color: "bg-[#2c3e50] text-white" },
      { label: "Medium", color: "bg-[#e67e22] text-white" },
      { label: "Open", color: "bg-[#2980b9] text-white" },
    ],
    title: "Looking for Figma feedback on a volunteer event poster",
    desc: "I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.",
    author: "Ayesha Khan",
    location: "Lahore",
    helpers: "1 helper interested",
    skillTags: ["Figma", "Poster", "Design Review"],
  },
];

export default function HelpHubHome() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "#f5f0e8",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        color: "#1a1a1a",
      }}
    >
      {/* ── NAVBAR ── */}
      <nav
        className="flex items-center justify-between px-6 py-3 sticky top-0 z-50"
        style={{ background: "#f5f0e8", borderBottom: "1px solid #e8e0d0" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "#1a1a2e" }}
          >
            H
          </div>
          <span className="font-semibold text-sm" style={{ color: "#1a1a2e" }}>
            HelpHub AI
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-1.5 text-sm rounded-md transition-colors"
              style={
                link === "Home"
                  ? {
                      background: "#fff",
                      color: "#1a1a2e",
                      fontWeight: 600,
                      border: "1px solid #d4cfc6",
                    }
                  : { color: "#4a4a4a" }
              }
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm" style={{ color: "#4a4a4a" }}>
            Live community signals
          </span>
          <button
            className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#1a1a2e" }}
          >
            Join the platform
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-3"
          style={{ background: "#f5f0e8", borderBottom: "1px solid #e8e0d0" }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-gray-800">
              {l}
            </a>
          ))}
          <a href="#" className="text-sm text-gray-600">
            Live community signals
          </a>
          <button
            className="w-full py-2 rounded-md text-sm font-semibold text-white"
            style={{ background: "#1a1a2e" }}
          >
            Join the platform
          </button>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="px-4 md:px-8 lg:px-16 pt-10 pb-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{ background: "#eee8d8", minHeight: 480 }}
          >
            <div>
              <p
                className="text-xs font-bold tracking-widest mb-5"
                style={{ color: "#7a7060" }}
              >
                SMIT GRAND CODING NIGHT 2026
              </p>
              <h1
                className="font-bold leading-tight mb-5"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#0f1117" }}
              >
                Find help faster.
                <br />
                Become help that
                <br />
                matters.
              </h1>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#5a5040", maxWidth: 380 }}>
                HelpHub AI is a community-powered support network for students,
                mentors, creators, and builders. Ask for help, offer help, track
                impact, and let AI surface smarter matches across the platform.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  className="px-5 py-2.5 rounded-md text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ background: "#1a1a2e" }}
                >
                  Open product demo
                </button>
                <button
                  className="px-5 py-2.5 rounded-md text-sm font-semibold border hover:bg-white transition-colors"
                  style={{
                    background: "transparent",
                    borderColor: "#c0b89c",
                    color: "#1a1a2e",
                  }}
                >
                  Post a request
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4"
                  style={{ background: "#f5f0e8" }}
                >
                  <p
                    className="text-xs font-bold tracking-widest mb-1"
                    style={{ color: "#9a8e78" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ color: "#0f1117" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "#6a6050" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className="rounded-2xl p-8 relative flex flex-col"
            style={{ background: "#1a1a2e", minHeight: 480 }}
          >
            {/* Orange dot decoration */}
            <div
              className="absolute top-6 right-6 w-12 h-12 rounded-full"
              style={{ background: "#d4a843" }}
            />

            <p
              className="text-xs font-bold tracking-widest mb-5"
              style={{ color: "#9a9aaa" }}
            >
              LIVE PRODUCT FEEL
            </p>

            <h2
              className="font-bold leading-tight mb-5"
              style={{
                fontSize: "clamp(1.6rem,3vw,2.4rem)",
                color: "#f5f0e8",
                maxWidth: 340,
              }}
            >
              More than a form.
              <br />
              More like an
              <br />
              ecosystem.
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#9a9aaa", maxWidth: 340 }}
            >
              A polished multi-page experience inspired by product platforms,
              with AI summaries, trust scores, contribution signals,
              notifications, and leaderboard momentum built directly in HTML,
              CSS, JavaScript, and LocalStorage.
            </p>

            <div className="flex flex-col gap-3 mt-auto">
              {LIVE_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ color: "#f5f0e8" }}
                  >
                    {f.title}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "#9a9aaa" }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE FLOW ── */}
      <section className="px-4 md:px-8 lg:px-16 py-12" style={{ background: "#f5f0e8" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: "#7a7060" }}
          >
            CORE FLOW
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "#0f1117" }}
            >
              From struggling alone to solving together
            </h2>
            <button
              className="whitespace-nowrap px-4 py-2 rounded-md text-sm font-semibold border self-start sm:self-auto"
              style={{
                background: "#f5f0e8",
                borderColor: "#c0b89c",
                color: "#1a1a2e",
              }}
            >
              Try onboarding AI
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CORE_FLOW.map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{
                  background: "#eee8d8",
                  border: "1px solid #d8d0c0",
                }}
              >
                <p
                  className="font-bold text-base mb-2"
                  style={{ color: "#0f1117" }}
                >
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5040" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED REQUESTS ── */}
      <section className="px-4 md:px-8 lg:px-16 py-12" style={{ background: "#f5f0e8" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: "#7a7060" }}
          >
            FEATURED REQUESTS
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "#0f1117" }}
            >
              Community problems currently in motion
            </h2>
            <button
              className="whitespace-nowrap px-4 py-2 rounded-md text-sm font-semibold border self-start sm:self-auto"
              style={{
                background: "#f5f0e8",
                borderColor: "#c0b89c",
                color: "#1a1a2e",
              }}
            >
              View full feed
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURED_REQUESTS.map((req, i) => (
              <div
                key={i}
                className="rounded-xl p-5 flex flex-col justify-between"
                style={{
                  background: "#eee8d8",
                  border: "1px solid #d8d0c0",
                  minHeight: 220,
                }}
              >
                <div>
                  {/* Status tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {req.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`${t.color} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>

                  <p className="font-bold text-sm mb-1.5" style={{ color: "#0f1117" }}>
                    {req.title}
                  </p>

                  {req.desc && (
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#5a5040" }}>
                      {req.desc}
                    </p>
                  )}

                  {/* Skill tags */}
                  {req.skillTags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {req.skillTags.map((st) => (
                        <span
                          key={st}
                          className="text-xs px-2.5 py-0.5 rounded-full border"
                          style={{
                            background: "#f5f0e8",
                            borderColor: "#c0b89c",
                            color: "#3a3020",
                          }}
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0f1117" }}>
                      {req.author}
                    </p>
                    <p className="text-xs" style={{ color: "#8a7a60" }}>
                      {req.location} • {req.helpers}
                    </p>
                  </div>
                  <button
                    className="text-sm font-bold hover:underline"
                    style={{ color: "#1a1a2e" }}
                  >
                    Open
                    <br />
                    details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="px-4 md:px-8 lg:px-16 py-6"
        style={{ borderTop: "1px solid #e0d8c8", background: "#f5f0e8" }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs" style={{ color: "#8a7a60" }}>
            HelpHub AI is built as a premium-feel, multi-page community support
            product using HTML, CSS, JavaScript, and LocalStorage.
          </p>
        </div>
      </footer>
    </div>
  );
}