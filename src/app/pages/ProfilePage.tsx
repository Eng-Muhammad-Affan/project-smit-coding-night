import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHero } from "../components/PageHero";
import { InnerNavbar } from "../components/InnerNavbar";
import { useAppStore } from "../store/useAppStore";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Onboarding", path: "/login" },
  { label: "Profile", path: "/profile" },
];

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().min(1, "Location is required"),
  skills: z.string().min(1, "Skills are required"),
  interests: z.string(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const user = useAppStore((s) => s.user);
  const updateProfile = useAppStore((s) => s.updateProfile);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      location: user?.location ?? "",
      skills: user?.skills ?? "",
      interests: user?.interests ?? "",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    updateProfile({
      name: data.name,
      location: data.location,
      skills: data.skills,
      interests: data.interests,
    });
  };

  const skillTags = (user?.skills ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const badgeTags = user?.badges ?? [];

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
        label="PROFILE"
        heading={user?.name ?? "Profile"}
        subtext={`${user?.role ?? "Member"} • ${user?.location ?? ""}`}
      />
      <InnerNavbar links={navLinks} />

      <div className="px-4 md:px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Public Profile */}
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
              PUBLIC PROFILE
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ letterSpacing: "-0.02em" }}>
              Skills and reputation
            </h2>

            {/* Trust Score */}
            <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: "#EEE9E0" }}>
              <span className="text-sm text-gray-600">Trust score</span>
              <span className="text-sm font-semibold text-gray-900">{user?.trustScore ?? 0}%</span>
            </div>

            {/* Contributions */}
            <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: "#EEE9E0" }}>
              <span className="text-sm text-gray-600">Contributions</span>
              <span className="text-sm font-semibold text-gray-900">{user?.contributions ?? 0}</span>
            </div>

            {/* Skills */}
            <div className="pt-4 mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-2.5">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skillTags.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ color: "#0A7B6E", backgroundColor: "#DFF5F2" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-gray-900 mb-2.5">Badges</p>
              <div className="flex flex-wrap gap-2">
                {badgeTags.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ color: "#555", backgroundColor: "#EDEDED" }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Edit Profile */}
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
              EDIT PROFILE
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ lineHeight: "1.15", letterSpacing: "-0.025em" }}>
              Update your identity
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* Name + Location Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <input
                    {...register("location")}
                    type="text"
                    className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                  />
                  {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Skills</label>
                <input
                  {...register("skills")}
                  type="text"
                  placeholder="Figma, UI/UX, HTML/CSS, Career Guidance"
                  className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2"
                  style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                />
                {errors.skills && <p className="text-xs text-red-500">{errors.skills.message}</p>}
              </div>

              {/* Interests */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Interests</label>
                <input
                  {...register("interests")}
                  type="text"
                  placeholder="Hackathons, UI/UX, Community Building"
                  className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2"
                  style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white mt-1 hover:opacity-90 transition-opacity disabled:opacity-60"
                style={{ backgroundColor: "#0A9B8A" }}
              >
                {isSubmitting ? "Saving..." : "Save profile"}
              </button>
              {isSubmitSuccessful && (
                <p className="text-xs text-center" style={{ color: "#0A9B8A" }}>Profile updated successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
