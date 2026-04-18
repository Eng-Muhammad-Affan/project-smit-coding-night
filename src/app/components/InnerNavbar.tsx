import { useNavigate, useLocation } from "react-router";

interface NavLink {
  label: string;
  path: string;
}

interface InnerNavbarProps {
  links: NavLink[];
}

export function InnerNavbar({ links }: InnerNavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full px-4 md:px-6 py-1">
      <div
        className="flex items-center justify-between rounded-2xl px-5 py-3"
        style={{ backgroundColor: "rgba(245,241,234,0.95)", backdropFilter: "blur(8px)" }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: "#0A9B8A" }}
          >
            H
          </div>
          <span className="text-sm font-semibold text-gray-900 hidden sm:block">HelplHub AI</span>
        </button>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-sm font-medium px-3 py-1.5 rounded-full transition-all"
                style={
                  isActive
                    ? { backgroundColor: "#0A9B8A", color: "#fff" }
                    : { color: "#6B7280", backgroundColor: "transparent" }
                }
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
