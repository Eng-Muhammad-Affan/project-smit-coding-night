import { useNavigate } from "react-router";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full px-6 md:px-10 pb-10 pt-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Panel */}
          <div
            className="flex-1 rounded-2xl p-7 md:p-9 flex flex-col justify-between"
            style={{ backgroundColor: "#F5F1EA", minHeight: "480px" }}
          >
            {/* Top content */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "#0A9B8A" }}
              >
                SMIT GRAND CODING NIGHT 2026
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5"
                style={{ lineHeight: "1.15", letterSpacing: "-0.02em" }}
              >
                Find help faster.
                <br />
                Become help that
                <br />
                matters.
              </h1>
              <p className="text-sm text-gray-500 max-w-sm mb-7" style={{ lineHeight: "1.6" }}>
                HelplHub AI is a community-powered support network for students, mentors,
                creators, and builders. Ask for help, offer help, track impact, and let AI surface
                smarter matches across the platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-9">
                <button
                  onClick={() => navigate("/login")}
                  className="text-sm font-semibold text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0A9B8A" }}
                >
                  Open product demo
                </button>
                <button
                  onClick={() => navigate("/explore")}
                  className="text-sm font-medium text-gray-700 px-5 py-2.5 rounded-full border hover:bg-gray-100 transition-colors"
                  style={{ borderColor: "#CCCCCC", backgroundColor: "transparent" }}
                >
                  Post a request
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t" style={{ borderColor: "#DDD8CF" }}>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">MEMBERS</p>
                <p className="text-3xl font-bold text-gray-900">384+</p>
                <p className="text-xs text-gray-400 mt-1" style={{ lineHeight: "1.5" }}>
                  Students, mentors,
                  <br />
                  and helpers in the
                  <br />
                  loop.
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">REQUESTS</p>
                <p className="text-3xl font-bold text-gray-900">72+</p>
                <p className="text-xs text-gray-400 mt-1" style={{ lineHeight: "1.5" }}>
                  Support posts
                  <br />
                  shared across
                  <br />
                  learning journeys.
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">SOLVED</p>
                <p className="text-3xl font-bold text-gray-900">69+</p>
                <p className="text-xs text-gray-400 mt-1" style={{ lineHeight: "1.5" }}>
                  Problems resolved
                  <br />
                  through fast
                  <br />
                  community action.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel — Dark Card */}
          <div
            className="lg:w-[360px] xl:w-[400px] rounded-2xl p-7 md:p-9 flex flex-col"
            style={{ backgroundColor: "#1B3836", minHeight: "480px" }}
          >
            {/* Top label + yellow blob */}
            <div className="flex items-start justify-between mb-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#4EC9B8" }}
              >
                LIVE PRODUCT FEEL
              </p>
              <div
                className="w-12 h-12 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#D4A030" }}
              />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ lineHeight: "1.15", letterSpacing: "-0.02em" }}
            >
              More than a form.
              <br />
              More like an
              <br />
              ecosystem.
            </h2>

            {/* Subtext */}
            <p className="text-sm mb-6" style={{ color: "#9BB8B4", lineHeight: "1.6" }}>
              A polished multi-page experience inspired by product platforms, with AI summaries, trust scores,
              contribution signals, notifications, and leaderboard momentum built directly in HTML, CSS,
              JavaScript, and LocalStorage.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-3 flex-1">
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "#243E3C" }}
              >
                <p className="text-sm font-semibold text-white mb-1">AI request intelligence</p>
                <p className="text-xs" style={{ color: "#7BA8A4", lineHeight: "1.5" }}>
                  Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.
                </p>
              </div>

              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "#243E3C" }}
              >
                <p className="text-sm font-semibold text-white mb-1">Community trust graph</p>
                <p className="text-xs" style={{ color: "#7BA8A4", lineHeight: "1.5" }}>
                  Badges, helper rankings, trust score boosts, and visible contribution history.
                </p>
              </div>

              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "#243E3C" }}
              >
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-xs" style={{ color: "#7BA8A4", lineHeight: "1.5" }}>
                  Top trust score currently active across the sample mentor network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}