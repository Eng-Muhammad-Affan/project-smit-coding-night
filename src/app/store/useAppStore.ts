import { create } from "zustand";

export interface User {
  name: string;
  role: string;
  location: string;
  skills: string;
  interests: string;
  trustScore: number;
  contributions: number;
  badges: string[];
}

export interface Notification {
  id: string;
  text: string;
  type: "Status" | "Match" | "Request" | "Reputation" | "Insight";
  time: string;
  read: boolean;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  text: string;
  time: string;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  notifications: Notification[];
  messages: Message[];
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  markNotificationRead: (id: string) => void;
  markAllRead: () => void;
  sendMessage: (msg: Omit<Message, "id">) => void;
}

const defaultNotifications: Notification[] = [
  { id: "n1", text: '"Need help" was marked as solved', type: "Status", time: "Just now", read: false },
  { id: "n2", text: 'Ayesha Khan offered help on "Need help"', type: "Match", time: "Just now", read: false },
  { id: "n3", text: 'Your request "Need help" is now live in the community feed', type: "Request", time: "Just now", read: false },
  { id: "n4", text: '"Need help making my portfolio responsive before demo day" was marked as solved', type: "Status", time: "Just now", read: false },
  { id: "n5", text: '"Need help making my portfolio responsive before demo day" was marked as solved', type: "Status", time: "Just now", read: false },
  { id: "n6", text: '"Need help making my portfolio responsive before demo day" was marked as solved', type: "Status", time: "Just now", read: false },
  { id: "n7", text: "New helper matched to your responsive portfolio request", type: "Match", time: "12 min ago", read: false },
  { id: "n8", text: "Your trust score increased after a solved request", type: "Reputation", time: "1 hr ago", read: false },
  { id: "n9", text: "AI Center detected rising demand for interview prep", type: "Insight", time: "Today", read: true },
];

const defaultMessages: Message[] = [
  {
    id: "m1",
    from: "Ayesha Khan",
    to: "Sara Noor",
    text: "I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.",
    time: "09:45 AM",
  },
  {
    id: "m2",
    from: "Hassan Ali",
    to: "Ayesha Khan",
    text: "Your event poster concept is solid. I would tighten the CTA and reduce the background texture.",
    time: "11:10 AM",
  },
];

export const useAppStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  notifications: defaultNotifications,
  messages: defaultMessages,

  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateProfile: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    })),
  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
    })),
  sendMessage: (msg) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { ...msg, id: `m${Date.now()}` },
      ],
    })),
}));
