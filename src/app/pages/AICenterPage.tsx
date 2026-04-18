import { PageHero } from "../components/PageHero";
import { InnerNavbar } from "../components/InnerNavbar";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Create Request", path: "/explore" },
  { label: "AI Center", path: "/ai-center" },
];

const aiRequests = [
  {
    id: 1,
    title: "Need help",
    summary: "AI summary: Web Development request with high urgency. Best suited for members with relevant expertise.",
    tags: [
      { label: "Web Development", color: "#0A7B6E", bg: "#DFF5F2" },
      { label: "High", color: "#B84A1A", bg: "#FDE8DF" },
    ],
  },
  {
    id: 2,
    title: "Need help making my portfolio responsive before demo day",
    summary: "Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries.",
    tags: [
      { label: "Web Development", color: "#0A7B6E", bg: "#DFF5F2" },
      { label: "High", color: "#B84A1A", bg: "#FDE8DF" },
    ],
  },
  {
    id: 3,
    title: "Looking for Figma feedback on a volunteer event poster",
    summary: "A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value.",
    tags: [
      { label: "Design", color: "#7B1A8A", bg: "#F5DCF5" },
      { label: "Medium", color: "#8A6A1A", bg: "#FFF3D4" },
    ],
  },
  {
    id: 4,
    title: "Need mock interview support for internship applications",
    summary: "Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.",
    tags: [
      { label: "Career", color: "#555", bg: "#EDEDED" },
      { label: "Low", color: "#555", bg: "#EDEDED" },
    ],
  },
];

export default function AICenterPage() {
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
        label="AI CENTER"
        heading="See what the platform intelligence is noticing."
        subtext="AI-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations."
      />
      <InnerNavbar links={navLinks} />

      <div className="px-4 md:px-6 py-5 flex flex-col gap-5">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "TREND PULSE",
              value: "Web Development",
              desc: "Most common support area based on active community requests.",
              large: true,
            },
            {
              label: "URGENCY WATCH",
              value: "2",
              desc: "Requests currently flagged high priority by the urgency detector.",
              large: false,
            },
            {
              label: "MENTOR POOL",
              value: "2",
              desc: "Trusted helpers with strong response history and contribution signals.",
              large: false,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#FAFAF8" }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">{stat.label}</p>
              <p
                className={`font-black text-gray-900 mb-2 ${stat.large ? "text-2xl" : "text-4xl"}`}
                style={{ lineHeight: "1.2" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-400" style={{ lineHeight: "1.55" }}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="rounded-2xl p-7 md:p-8" style={{ backgroundColor: "#FAFAF8" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
            AI RECOMMENDATIONS
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-5" style={{ letterSpacing: "-0.02em" }}>
            Requests needing attention
          </h2>

          <div className="flex flex-col gap-4">
            {aiRequests.map((req) => (
              <div
                key={req.id}
                className="rounded-xl p-5 border"
                style={{ borderColor: "#EEE9E0", backgroundColor: "#FFFFFF" }}
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{req.title}</h3>
                <p className="text-xs text-gray-500 mb-3" style={{ lineHeight: "1.6" }}>{req.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {req.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ color: tag.color, backgroundColor: tag.bg }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
