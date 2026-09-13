"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MemberModal({ isOpen, onClose }: MemberModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  // Check login state on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("gwandaru_member_email");
    if (savedUser) {
      setIsLoggedIn(true);
      setCurrentUser(savedUser);
    }
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("gwandaru_member_email", email);
    setIsLoggedIn(true);
    setCurrentUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("gwandaru_member_email");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/95 backdrop-blur-md px-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-secondary-400 hover:text-accent-500 transition-colors p-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-500"
            aria-label="Close members portal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Container */}
          <div className="w-full max-w-md bg-primary-900/60 border border-accent-500/20 p-8 md:p-10 shadow-2xl relative">
            {isLoggedIn ? (
              <div className="text-center space-y-6">
                <span className="font-manrope text-accent-500 text-[0.65rem] tracking-[0.3em] uppercase block">
                  Member Portal
                </span>
                <h3 className="font-cinzel text-accent-300 text-2xl tracking-[0.15em]">
                  Welcome, Sanctuary Member
                </h3>
                <p className="font-cormorant text-secondary-300 text-lg italic">
                  {currentUser}
                </p>
                <div className="w-12 h-px bg-accent-500/30 mx-auto" />
                <p className="font-sans text-secondary-400 text-xs font-light leading-relaxed">
                  You have full member access. Enjoy unlimited essay reaction lengths and priority dispatches.
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full border border-accent-500/30 hover:border-accent-500 text-accent-300 font-manrope text-[0.7rem] uppercase tracking-[0.25em] py-3 bg-accent-500/5 hover:bg-accent-500/15 transition-all duration-300 cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="text-center">
                  <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.3em] uppercase block mb-2">
                    Members Chamber
                  </span>
                  <h3 className="font-cinzel text-accent-300 text-2xl tracking-[0.15em] font-normal mb-2">
                    Member Access
                  </h3>
                  <p className="font-cormorant text-secondary-400 text-base italic font-light">
                    Log in for unlimited reflection length &amp; member privileges
                  </p>
                </div>

                <div className="w-10 h-px bg-accent-500/30 mx-auto" />

                <div className="space-y-4">
                  <div>
                    <label className="block font-manrope text-[0.6rem] tracking-[0.25em] uppercase text-secondary-500 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="member@sanctuary.com"
                      className="w-full bg-primary-950/80 border border-accent-500/20 focus:border-accent-500 text-accent-200 p-3 text-sm font-sans outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-manrope text-[0.6rem] tracking-[0.25em] uppercase text-secondary-500 mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-primary-950/80 border border-accent-500/20 focus:border-accent-500 text-accent-200 p-3 text-sm font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full border border-accent-500/40 hover:border-accent-500 text-accent-300 font-manrope text-[0.7rem] uppercase tracking-[0.25em] py-3.5 bg-accent-500/10 hover:bg-accent-500/20 transition-all duration-300 cursor-pointer"
                >
                  Enter Portal
                </button>
              </form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
