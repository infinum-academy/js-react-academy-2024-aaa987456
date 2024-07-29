import { swrKeys } from "@/fetchers/swrKeys";
import { mutate } from "swr";

export const handleLogout = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (error) {
    console.error("Error removing authToken from localStorage:", error);
  }

  mutate(swrKeys.user, null);
};
