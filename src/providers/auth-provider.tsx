"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "admin" | "employee";

export interface User {
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state (uses a mock session in development only)
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // TODO: replace with real API session check
        let storedUser: User | null = null;
        try {
          if (process.env.NODE_ENV === "development") {
            const sessionData = sessionStorage.getItem("loanprox_session");
            if (sessionData) {
              const parsed = JSON.parse(sessionData) as Partial<User>;
              if (
                typeof parsed.name === "string" &&
                typeof parsed.email === "string" &&
                (parsed.role === "admin" || parsed.role === "employee")
              ) {
                storedUser = {
                  name: parsed.name,
                  email: parsed.email,
                  role: parsed.role,
                  ...(typeof parsed.avatarUrl === "string" && parsed.avatarUrl.startsWith("https://images.unsplash.com/") ? { avatarUrl: parsed.avatarUrl } : {}),
                };
              }
            }
          }
        } catch (error) {
          console.error("Failed to load session:", error);
        }

        if (storedUser) {
          setUser(storedUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (role: UserRole) => {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "Client-side role selection is disabled in production. Authentication must be performed via server-side session validation."
      );
    }
    setIsLoading(true);
    // Mimic API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newUser: User = {
      name: role === "admin" ? "John Doe" : "Jane Doe",
      email: role === "admin" ? "john.doe@loanprox.com" : "jane.doe@loanprox.com",
      role,
      avatarUrl: role === "admin"
        ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
        : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    };
    setUser(newUser);
    try {
      sessionStorage.setItem("loanprox_session", JSON.stringify(newUser));
    } catch {}
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser(null);
    try {
      sessionStorage.removeItem("loanprox_session");
    } catch {}
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
