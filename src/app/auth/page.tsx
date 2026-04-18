"use client"
import { useState } from "react";

const DEMO_USERS = ["Ayesha Khan", "Sara Noor", "Ali Hassan", "Zara Sheikh"];
const ROLES = ["Need Help", "Can Help", "Both"];

export default function HelpHubLogin() {
  const [demoUser, setDemoUser] = useState("Ayesha Khan");
  const [role, setRole] = useState("Both");
  const [email, setEmail] = useState("community@helphub.ai");
  const [password, setPassword] = useState("········");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        background:
          "radial-gradient(ellipse at top left, #c8ddd4 0%, #e8e4d8 30%, #f0ebe0 55%, #f5e8d0 75%, #f0dcc0 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ── NAVBAR ── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-base"
            style={{ background: "#1a6b5a" }}
          >
            H
          </div>
          <span
            className="font-semibold text-base"
            style={{ color: "#111827" }}
          >
            HelpHub AI
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Explore", "Leaderboard"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium transition-colors hover:text-gray-900"
              style={{ color: "#4b5563" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-5 h-0.5 bg-gray-700 block" />
          <span className="w-5 h-0.5 bg-gray-700 block" />
          <span className="w-5 h-0.5 bg-gray-700 block" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm">
          {["Home", "Explore", "Leaderboard"].map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-gray-700">
              {link}
            </a>
          ))}
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* ── LEFT PANEL — Community Access ── */}
          <div
            className="rounded-3xl p-8 md:p-10 flex flex-col justify-between"
            style={{
              background: "#1b3a30",
              minHeight: 480,
            }}
          >
            <div>
              <p
                className="text-xs font-bold tracking-widest mb-6"
                style={{ color: "#7ab5a0", letterSpacing: "0.15em" }}
              >
                COMMUNITY ACCESS
              </p>

              <h1
                className="font-extrabold leading-tight mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                }}
              >
                Enter the support
                <br />
                network.
              </h1>

              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#a0c4b8", maxWidth: 380 }}
              >
                Choose a demo identity, set your role, and jump into a
                multi-page product flow designed for asking, offering, and
                tracking help with a premium interface.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Role-based entry for Need Help, Can Help, or Both",
                  "Direct path into dashboard, requests, AI Center, and community feed",
                  "Persistent demo session powered by LocalStorage",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#c8e0d8" }}
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT PANEL — Login Form ── */}
          <div
            className="rounded-3xl p-8 md:p-10 flex flex-col justify-center"
            style={{
              background: "#ffffff",
              minHeight: 480,
            }}
          >
            <p
              className="text-xs font-bold tracking-widest mb-5"
              style={{ color: "#1a9b7a", letterSpacing: "0.15em" }}
            >
              LOGIN / SIGNUP
            </p>

            <h2
              className="font-extrabold leading-tight mb-8"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "#111827",
                lineHeight: 1.1,
              }}
            >
              Authenticate your
              <br />
              community profile
            </h2>

            <div className="flex flex-col gap-5">
              {/* Select demo user */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-medium"
                  style={{ color: "#374151" }}
                >
                  Select demo user
                </label>
                <div className="relative">
                  <select
                    value={demoUser}
                    onChange={(e) => setDemoUser(e.target.value)}
                    className="w-full appearance-none rounded-xl px-4 py-3 text-sm font-medium pr-10 focus:outline-none focus:ring-2"
                    style={{
                    //   background: "#f9fafb",
                      border: "1.5px solid #e5e7eb",
                      color: "#111827",
                      background: "#1a9b7a",
                    }}
                  >
                    {DEMO_USERS.map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Role selection */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-medium"
                  style={{ color: "#374151" }}
                >
                  Role selection
                </label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full appearance-none rounded-xl px-4 py-3 text-sm font-medium pr-10 focus:outline-none focus:ring-2"
                    style={{
                      background: "#f9fafb",
                      border: "1.5px solid #e5e7eb",
                      color: "#111827",
                    }}
                  >
                    {ROLES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Email + Password row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{
                      background: "#f9fafb",
                      border: "1.5px solid #e5e7eb",
                      color: "#374151",
                    }}
                    placeholder="community@helphub.ai"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{
                      background: "#f9fafb",
                      border: "1.5px solid #e5e7eb",
                      color: "#374151",
                    }}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-4 rounded-2xl text-white font-bold text-base tracking-wide transition-opacity hover:opacity-90 active:scale-[0.99] mt-1"
                style={{
                  background: "linear-gradient(90deg, #1a9b7a 0%, #17876a 100%)",
                  boxShadow: "0 4px 24px rgba(26,155,122,0.25)",
                }}
                onClick={() => alert("Navigating to dashboard...")}
              >
                Continue to dashboard
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}