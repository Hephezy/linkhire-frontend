"use client";

import { usePathname } from 'next/navigation';

export const useUserType = () => {
  const pathName = usePathname();

  const getUserType = () => {
    if (pathName.includes("/employer") || pathName.includes("/(employer)") || pathName.startsWith("/employer")) {
      return "employer";
    }

    if (pathName.includes("/seeker") || pathName.includes("/(seeker)") || pathName.startsWith("/seeker") || pathName.includes("/(loading)/page")) {
      return "seeker";
    }

    // Set default to seeker for other routes
    return "seeker";
  };

  return getUserType();
};