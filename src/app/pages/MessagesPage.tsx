import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHero } from "../components/PageHero";
import { InnerNavbar } from "../components/InnerNavbar";
import { useAppStore } from "../store/useAppStore";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Explore", path: "/explore" },
  { label: "Messages", path: "/messages" },
];

const messageSchema = z.object({
  to: z.string().min(1, "Recipient is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type MessageFormData = z.infer<typeof messageSchema>;

const users = ["Ayesha Khan", "Hassan Ali", "Sara Noor"];

export default function MessagesPage() {
  const messages = useAppStore((s) => s.messages);
  const sendMessage = useAppStore((s) => s.sendMessage);
  const user = useAppStore((s) => s.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      to: "Ayesha Khan",
      message: "",
    },
  });

  const onSubmit = (data: MessageFormData) => {
    sendMessage({
      from: user?.name ?? "You",
      to: data.to,
      text: data.message,
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    });
    reset({ to: data.to, message: "" });
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
        label="INTERACTION / MESSAGING"
        heading="Keep support moving through direct communication."
        subtext="Basic messaging gives helpers and requesters a clear follow-up path once a match happens."
      />
      <InnerNavbar links={navLinks} />

      <div className="px-4 md:px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Conversation Stream */}
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
              CONVERSATION STREAM
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-5" style={{ letterSpacing: "-0.02em" }}>
              Recent messages
            </h2>

            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="rounded-xl p-5 border"
                  style={{ borderColor: "#EEE9E0", backgroundColor: "#FFFFFF" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 mb-1.5">
                        {msg.from} → {msg.to}
                      </p>
                      <p className="text-xs text-gray-500" style={{ lineHeight: "1.6" }}>
                        {msg.text}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 text-center text-xs font-semibold rounded-xl px-3 py-2"
                      style={{ backgroundColor: "#EEE9E0", color: "#555", minWidth: "52px" }}
                    >
                      {msg.time.split(" ")[0]}
                      <br />
                      {msg.time.split(" ")[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Send Message */}
          <div className="rounded-2xl p-7" style={{ backgroundColor: "#FAFAF8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A9B8A" }}>
              SEND MESSAGE
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ lineHeight: "1.15", letterSpacing: "-0.025em" }}>
              Start a conversation
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* To */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">To</label>
                <div className="relative">
                  <select
                    {...register("to")}
                    className="w-full appearance-none rounded-xl border px-4 py-3 text-sm text-gray-900 pr-10 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                  >
                    {users.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                </div>
                {errors.to && <p className="text-xs text-red-500">{errors.to.message}</p>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  {...register("message")}
                  placeholder="Share support details, ask for files, or suggest next steps."
                  rows={6}
                  className="w-full rounded-xl border px-4 py-3 text-sm text-gray-900 resize-none focus:outline-none focus:ring-2"
                  style={{ borderColor: "#DDD8CF", backgroundColor: "#FAFAF8" }}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-60"
                style={{ backgroundColor: "#0A9B8A" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
