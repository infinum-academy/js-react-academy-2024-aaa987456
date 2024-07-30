import { swrKeys } from "@/fetchers/swrKeys";
import { mutate } from "swr";

export const handleLogout = () => {
  try {
    localStorage.removeItem("authToken");
    mutate(swrKeys.user, null);
  } catch (error) {
    console.error("Error removing authToken from localStorage:", error);
  }
};
