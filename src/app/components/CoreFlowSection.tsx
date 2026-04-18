import { useNavigate } from "react-router";

const coreFeatures = [
  {
    id: 1,
    title: "Ask for help clearly",
    description:
      "Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.",
  },
  {
    id: 2,
    title: "Discover the right people",
    description:
      "Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.",
  },
  {
    id: 3,
    title: "Track real contribution",
    description:
      "Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.",
  },
];

export function CoreFlowSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#0A9B8A" }}
        >
          CORE FLOW
        </p>

        {/* Heading + Button Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            From struggling alone to solving together
          </h2>
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium px-4 py-2 rounded-full border self-start sm:self-auto whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              borderColor: "#0A9B8A",
              color: "#0A9B8A",
              backgroundColor: "transparent",
            }}
          >
            Try onboarding AI
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl p-7 flex flex-col"
              style={{ backgroundColor: "#F5F1EA", minHeight: "160px" }}
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500" style={{ lineHeight: "1.6" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}