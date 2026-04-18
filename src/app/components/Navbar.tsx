import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="w-full px-6 md:px-10 py-3 flex items-center justify-between"
    >
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: "#0A9B8A" }}
        >
          H
        </div>
        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">HelplHub AI</span>
      </button>

      {/* Center nav links */}
      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm font-medium text-gray-900 border-b-2 pb-0.5"
          style={{ borderColor: "#0A9B8A" }}
        >
          Home
        </button>
        <button
          onClick={() => navigate("/explore")}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          Explore
        </button>
        <button
          onClick={() => navigate("/leaderboard")}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          Leaderboard
        </button>
        <button
          onClick={() => navigate("/ai-center")}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          AI Center
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/notifications")}
          className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
        >
          Live community signals
        </button>
        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium text-white px-4 py-2 rounded-full transition-opacity hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#0A9B8A" }}
        >
          Join the platform
        </button>
      </div>
    </nav>
  );
}
