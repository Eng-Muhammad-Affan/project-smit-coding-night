import { PageHero } from "../components/PageHero";
import { InnerNavbar } from "../components/InnerNavbar";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Explore", path: "/explore" },
  { label: "Leaderboard", path: "/leaderboard" },
];

const allRequests = [
  {
    id: 1,
    tags: [
      { label: "Web Development", color: "#0A7B6E", bg: "#DFF5F2" },
      { label: "High", color: "#B84A1A", bg: "#FDE8DF" },
      { label: "Solved", color: "#1A6FAA", bg: "#DCF0FF" },
    ],
    title: "Need help",
    description: "helpn needed",
    author: "Ayesha Khan",
    location: "Karachi",
    helpers: 1,
  },
  {
    id: 2,
    tags: [
      { label: "Web Development", color: "#0A7B6E", bg: "#DFF5F2" },
      { label: "High", color: "#B84A1A", bg: "#FDE8DF" },
      { label: "Solved", color: "#1A6FAA", bg: "#DCF0FF" },
    ],
    title: "Need help making my portfolio responsive before demo day",
    description: "My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.",
    author: "Sara Noor",
    location: "Karachi",
    helpers: 1,
    extraTags: [
      { label: "HTML/CSS", color: "#555", bg: "#EDEDED" },
      { label: "Responsive", color: "#555", bg: "#EDEDED" },
      { label: "Portfolio", color: "#555", bg: "#EDEDED" },
    ],
  },
  {
    id: 3,
    tags: [
      { label: "Design", color: "#7B1A8A", bg: "#F5DCF5" },
      { label: "Medium", color: "#8A6A1A", bg: "#FFF3D4" },
      { label: "Open", color: "#1A6FAA", bg: "#DCF0FF" },
    ],
    title: "Looking for Figma feedback on a volunteer event poster",
    description: "I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.",
    author: "Ayesha Khan",
    location: "Lahore",
    helpers: 1,
    extraTags: [
      { label: "Figma", color: "#555", bg: "#EDEDED" },
      { label: "Poster", color: "#555", bg: "#EDEDED" },
      { label: "Design Review", color: "#555", bg: "#EDEDED" },
    ],
  },
  {
    id: 4,
    tags: [
      { label: "Career", color: "#555", bg: "#EDEDED" },
      { label: "Low", color: "#555", bg: "#EDEDED" },
      { label: "Open", color: "#1A6FAA", bg: "#DCF0FF" },
    ],
    title: "Need mock interview support for internship applications",
    description: "Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.",
    author: "Hassan Ali",
    location: "Lahore",
    helpers: 0,
    extraTags: [
      { label: "Career", color: "#555", bg: "#EDEDED" },
      { label: "Interviews", color: "#555", bg: "#EDEDED" },
    ],
  },
];

interface Tag {
  label: string;
  color: string;
  bg: string;
}

export default function ExplorePage() {
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
        label="EXPLORE"
        heading="Find community problems you can solve."
        subtext="Browse all active and solved requests from the HelplHub AI community."
      />
      <InnerNavbar links={navLinks} />

      <div className="px-4 md:px-6 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allRequests.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl p-6 flex flex-col justify-between"
              style={{ backgroundColor: "#FAFAF8", minHeight: "260px" }}
            >
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {req.tags.map((tag: Tag) => (
                    <span
                      key={tag.label}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                      style={{ color: tag.color, backgroundColor: tag.bg }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-xs text-gray-500 mb-3" style={{ lineHeight: "1.6" }}>{req.description}</p>
                {req.extraTags && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {req.extraTags.map((tag: Tag) => (
                      <span
                        key={tag.label}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ color: tag.color, backgroundColor: tag.bg }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-end justify-between mt-3 pt-3 border-t" style={{ borderColor: "#EEE9E0" }}>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{req.author}</p>
                  <p className="text-xs text-gray-400">{req.location} • {req.helpers} helper interested</p>
                </div>
                <button
                  className="text-xs font-semibold text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0A9B8A" }}
                >
                  Open<br />details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
