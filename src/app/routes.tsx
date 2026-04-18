import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AICenterPage from "./pages/AICenterPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import NotificationsPage from "./pages/NotificationsPage";
import ExplorePage from "./pages/ExplorePage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/login", Component: LoginPage },
  { path: "/dashboard", Component: DashboardPage },
  { path: "/ai-center", Component: AICenterPage },
  { path: "/messages", Component: MessagesPage },
  { path: "/profile", Component: ProfilePage },
  { path: "/leaderboard", Component: LeaderboardPage },
  { path: "/notifications", Component: NotificationsPage },
  { path: "/explore", Component: ExplorePage },
]);
