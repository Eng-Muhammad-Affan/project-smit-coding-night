import { PageHero } from "../components/PageHero";
import { InnerNavbar } from "../components/InnerNavbar";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Explore", path: "/explore" },
  { label: "Leaderboard", path: "/leaderboard" },
];

const helpers = [
  {
    rank: 1,
    initials: "AK",
    color: "#0A9B8A",
    name: "Ayesha Khan",
    skills: "Figma, UI/UX, Career Guidance",
    trust: 100,
    contributions: 35,
    badges: ["Design Ally", "Fast Responder", "Top Mentor"],
    badgeTitle: "Top Mentor • Design Ally",
    barColor: "#0A9B8A",
  },
  {
    rank: 2,
    initials: "HA",
    color: "#2D3748",
    name: "Hassan Ali",
    skills: "JavaScript, React, Git/GitHub",
    trust: 88,
    contributions: 24,
    badges: ["Code Rescuer", "Bug Hunter"],
    badgeTitle: "Code Rescuer • Bug Hunter",
    barColor: "#D4A030",
  },
  {
    rank: 3,
    initials: "SN",
    color: "#E06C20",
    name: "Sara Noor",
    skills: "Python, Data Analysis",
    trust: 74,
    contributions: 11,
    badges: ["Community Voice"],
    badgeTitle: "Community Voice",
    barColor: "#0A9B8A",
  },
];

export default function LeaderboardPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse 55% 55% at 0% 0%, rgba(180,225,215,0.4) 0%, transparent 55%), radial-gradient(ellipse 55% 55% at 100% 0%, rgba(255,215,175,0.45) 0%, transparent 55%), #EDE8DF",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <PageHero
        label="LEADERBOARD"
        heading={`Recognize the people who keep the community moving.`}
        subtext="Trust score, contribution count, and badges create visible momentum for reliable helpers."
      />
      <InnerNavbar links={navLinks} />

      <div className="px-4 md:px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Rankings */}
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
              TOP HELPERS
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ letterSpacing: "-0.025em" }}>
              Rankings
            </h2>

            <div className="flex flex-col gap-3">
              {helpers.map((helper) => (
                <div
                  key={helper.rank}
                  className="flex items-center gap-4 rounded-xl p-4 border"
                  style={{ borderColor: "#EEE9E0", backgroundColor: "#FFFFFF" }}
                >
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: helper.color }}
                  >
                    {helper.initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      #{helper.rank} {helper.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{helper.skills}</p>
                  </div>

                  {/* Stats */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-gray-900">{helper.trust}%</p>
                    <p className="text-xs text-gray-400">{helper.contributions} contributions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Badge System */}
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
              BADGE SYSTEM
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ letterSpacing: "-0.025em" }}>
              Trust and achievement
            </h2>

            <div className="flex flex-col gap-4">
              {helpers.map((helper) => (
                <div
                  key={helper.rank}
                  className="rounded-xl p-5 border"
                  style={{ borderColor: "#EEE9E0", backgroundColor: "#FFFFFF" }}
                >
                  {/* Trust bar */}
                  <div className="mb-3">
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#EEE9E0" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${helper.trust}%`, backgroundColor: helper.barColor }}
                      />
                    </div>
                  </div>

                  {/* Name + Title */}
                  <p className="text-sm font-bold text-gray-900 mb-0.5">{helper.name}</p>
                  <p className="text-xs text-gray-400">{helper.badgeTitle}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {helper.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ color: "#555", backgroundColor: "#EDEDED" }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
