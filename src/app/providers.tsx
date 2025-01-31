"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { UserState } from "@/types";
import { v4 as uuidv4 } from "uuid";
import dateToLocale from "@/utils/dateToLocale";

const USER_KEY = "fw_user";

export const getStoredUser = (): UserState | null => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(USER_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const createUser = (): UserState => {
  const user: UserState = {
    id: uuidv4(),
    cart: [],
    lastUpdated: dateToLocale(new Date()),
  };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
};

const UserContext = createContext<{
  user: UserState | null;
  updateUser: (updates: Partial<UserState>) => void;
  isUpdating: boolean;
}>({
  user: null,
  updateUser: () => {},
  isUpdating: false,
});

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserState | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const storedUser = getStoredUser();
    setUser(storedUser || createUser());
  }, []);

  async function updateUser(updates: Partial<UserState>): Promise<void> {
    setIsUpdating(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser((prev) => {
          if (!prev) return null;
          const updated = {
            ...prev,
            ...updates,
            lastUpdated: dateToLocale(new Date()),
          };
          localStorage.setItem("fw_user", JSON.stringify(updated));
          resolve();
          return updated;
        });
        setIsUpdating(false);
      }, 500);
    });
  }

  return (
    <UserContext.Provider value={{ user, updateUser, isUpdating }}>
      {children}
    </UserContext.Provider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}
