import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppStore } from "../store/useAppStore";

const loginSchema = z.object({
  demoUser: z.string().min(1, "Please select a demo user"),
  role: z.string().min(1, "Please select a role"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const demoUsers = [
  { value: "ayesha", label: "Ayesha Khan", name: "Ayesha Khan", location: "Karachi", skills: "Figma, UI/UX, HTML/CSS, Career Guidance", interests: "Hackathons, UI/UX, Community Building", trustScore: 100, contributions: 35, badges: ["Design Ally", "Fast Responder", "Top Mentor"] },
  { value: "hassan", label: "Hassan Ali", name: "Hassan Ali", location: "Lahore", skills: "JavaScript, React, Git/GitHub", interests: "Open Source, Web Dev", trustScore: 88, contributions: 24, badges: ["Code Rescuer", "Bug Hunter"] },
  { value: "sara", label: "Sara Noor", name: "Sara Noor", location: "Karachi", skills: "Python, Data Analysis", interests: "Data Science, ML", trustScore: 74, contributions: 11, badges: ["Community Voice"] },
];

const roles = ["Both", "Need Help", "Can Help"];

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAppStore((s) => s.login);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      demoUser: "ayesha",
      role: "Both",
      email: "community@helphub.ai",
      password: "demo1234",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    const user = demoUsers.find((u) => u.value === data.demoUser) || demoUsers[0];
    login({
      name: user.name,
      role: data.role,
      location: user.location,
      skills: user.skills,
      interests: user.interests,
      trustScore: user.trustScore,
      contributions: user.contributions,
      badges: user.badges,
    });
    navigate("/dashboard");
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
      {/* Top Navbar */}
      <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: "#0A9B8A" }}
          >
            H
          </div>
          <span className="text-sm font-semibold text-gray-900">HelplHub AI</span>
        </button>
        <div className="flex items-center gap-5">
          {["Home", "Explore", "Leaderboard"].map((link) => (
            <button
              key={link}
              onClick={() => navigate(link === "Home" ? "/" : `/${link.toLowerCase()}`)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full px-4 md:px-10 pb-10 pt-2">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 rounded-2xl overflow-hidden">
          {/* Left Dark Panel */}
          <div
            className="flex-1 rounded-2xl p-8 md:p-10 flex flex-col justify-between"
            style={{ backgroundColor: "#1B3836", minHeight: "460px" }}
          >
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "#4EC9B8" }}
              >
                COMMUNITY ACCESS
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-5"
                style={{ lineHeight: "1.1", letterSpacing: "-0.025em" }}
              >
                Enter the support network.
              </h2>
              <p className="text-sm mb-6" style={{ color: "#9BB8B4", lineHeight: "1.6" }}>
                Choose a demo identity, set your role, and jump into a multi-page product flow designed
                for asking, offering, and tracking help with a premium interface.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Role-based entry for Need Help, Can Help, or Both",
                  "Direct path into dashboard, requests, AI Center, and community feed",
                  "Persistent demo session powered by LocalStorage",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#9BB8B4" }}>
                    <span className="mt-0.5">•</span>
                    <span style={{ lineHeight: "1.5" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right White Panel */}
          <div
            className="flex-1 rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: "#FAFAF8" }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0A9B8A" }}
            >
              LOGIN / SIGNUP
            </p>
            <h2
              className="text-4xl font-black text-gray-900 mb-7"
              style={{ lineHeight: "1.15", letterSpacing: "-0.025em" }}
            >
              Authenticate your community profile
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* Demo User Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Select demo user</label>
                <div className="relative">
                  <select
                    {...register("demoUser")}
                    className="w-full appearance-none rounded-xl border px-4 py-3 text-sm text-gray-900 pr-10 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8", focusRingColor: "#0A9B8A" }}
                  >
                    {demoUsers.map((u) => (
                      <option key={u.value} value={u.value}>{u.label}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                </div>
                {errors.demoUser && <p className="text-xs text-red-500">{errors.demoUser.message}</p>}
              </div>

              {/* Role Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Role selection</label>
                <div className="relative">
                  <select
                    {...register("role")}
                    className="w-full appearance-none rounded-xl border px-4 py-3 text-sm text-gray-900 pr-10 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                </div>
                {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
              </div>

              {/* Email + Password Row */}
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="community@helphub.ai"
                    className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                  />
                  {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white mt-1 hover:opacity-90 transition-opacity disabled:opacity-60"
                style={{ backgroundColor: "#0A9B8A" }}
              >
                {isSubmitting ? "Entering..." : "Continue to dashboard"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
