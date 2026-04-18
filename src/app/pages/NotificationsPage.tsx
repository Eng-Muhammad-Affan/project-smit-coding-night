import { PageHero } from "../components/PageHero";
import { InnerNavbar } from "../components/InnerNavbar";
import { useAppStore } from "../store/useAppStore";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Explore", path: "/explore" },
  { label: "Notifications", path: "/notifications" },
];

export default function NotificationsPage() {
  const notifications = useAppStore((s) => s.notifications);
  const markNotificationRead = useAppStore((s) => s.markNotificationRead);
  const markAllRead = useAppStore((s) => s.markAllRead);

  const typeColors: Record<string, { color: string; bg: string }> = {
    Status: { color: "#0A7B6E", bg: "#DFF5F2" },
    Match: { color: "#B84A1A", bg: "#FDE8DF" },
    Request: { color: "#1A6FAA", bg: "#DCF0FF" },
    Reputation: { color: "#7B1A8A", bg: "#F5DCF5" },
    Insight: { color: "#8A6A1A", bg: "#FFF3D4" },
  };

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
        label="NOTIFICATIONS"
        heading="Stay updated on requests, helpers, and trust signals."
      />
      <InnerNavbar links={navLinks} />

      <div className="px-4 md:px-6 py-5">
        <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#0A9B8A" }}>
                LIVE UPDATES
              </p>
              <h2 className="text-3xl font-black text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                Notification feed
              </h2>
            </div>
            <button
              onClick={markAllRead}
              className="text-xs font-medium px-3 py-1.5 rounded-full border hover:bg-gray-50 transition-colors"
              style={{ borderColor: "#DDD8CF", color: "#6B7280" }}
            >
              Mark all read
            </button>
          </div>

          {/* Notification List */}
          <div className="flex flex-col gap-0">
            {notifications.map((notif, i) => {
              const tc = typeColors[notif.type] ?? { color: "#555", bg: "#EDEDED" };
              return (
                <div
                  key={notif.id}
                  className={`flex items-start justify-between gap-4 py-4 ${
                    i < notifications.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderColor: "#EEE9E0" }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 mb-1" style={{ lineHeight: "1.5" }}>
                      {notif.text}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ color: tc.color, backgroundColor: tc.bg }}
                      >
                        {notif.type}
                      </span>
                      <span className="text-xs text-gray-400">• {notif.time}</span>
                    </div>
                  </div>

                  {/* Read/Unread badge */}
                  <button
                    onClick={() => markNotificationRead(notif.id)}
                    className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                      notif.read
                        ? "text-gray-400"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    style={
                      notif.read
                        ? {}
                        : { backgroundColor: "#EDEDED" }
                    }
                  >
                    {notif.read ? "Read" : "Unread"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
