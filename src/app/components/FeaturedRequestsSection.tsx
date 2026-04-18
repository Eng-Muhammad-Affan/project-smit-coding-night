import { useNavigate } from "react-router";

interface Tag {
  label: string;
  color: string;
  bg: string;
}

interface RequestCard {
  id: number;
  tags: Tag[];
  title: string;
  description: string;
  author: string;
  location: string;
  helpers: number;
  extraTags?: Tag[];
}

const requests: RequestCard[] = [
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
    description:
      "My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.",
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
    description:
      "I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.",
    author: "Ayesha Khan",
    location: "Lahore",
    helpers: 1,
    extraTags: [
      { label: "Figma", color: "#555", bg: "#EDEDED" },
      { label: "Poster", color: "#555", bg: "#EDEDED" },
      { label: "Design Review", color: "#555", bg: "#EDEDED" },
    ],
  },
];

export function FeaturedRequestsSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#0A9B8A" }}
        >
          FEATURED REQUESTS
        </p>

        {/* Heading + Button Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Community problems currently in motion
          </h2>
          <button
            onClick={() => navigate("/explore")}
            className="text-sm font-medium px-4 py-2 rounded-full border self-start sm:self-auto whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              borderColor: "#0A9B8A",
              color: "#0A9B8A",
              backgroundColor: "transparent",
            }}
          >
            View full feed
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl p-6 flex flex-col justify-between"
              style={{ backgroundColor: "#F5F1EA", minHeight: "260px" }}
            >
              {/* Top */}
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {req.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                      style={{ color: tag.color, backgroundColor: tag.bg }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2">{req.title}</h3>

                {/* Description */}
                <p className="text-xs text-gray-500 mb-3" style={{ lineHeight: "1.6" }}>
                  {req.description}
                </p>

                {/* Extra tags */}
                {req.extraTags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {req.extraTags.map((tag) => (
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

              {/* Bottom */}
              <div className="flex items-end justify-between mt-3 pt-3 border-t" style={{ borderColor: "#DDD8CF" }}>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{req.author}</p>
                  <p className="text-xs text-gray-400">
                    {req.location} • {req.helpers} helper interested
                  </p>
                </div>
                <button
                  className="text-xs font-semibold text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#0A9B8A" }}
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
  );
}