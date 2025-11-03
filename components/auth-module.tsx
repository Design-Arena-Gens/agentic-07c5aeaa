"use client";

import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirebaseAuth, getGoogleProvider } from "@/lib/firebase";

export function AuthModule() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    return onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
  }, []);

  const handleGoogle = async () => {
    const auth = getFirebaseAuth();
    const provider: GoogleAuthProvider = getGoogleProvider();
    await signInWithPopup(auth, provider);
  };

  if (loading) {
    return <p className="text-center text-sm text-slate-500">Loading account...</p>;
  }

  if (user) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-sm text-slate-600">Signed in as</p>
        <p className="text-lg font-semibold text-slate-900">{user.displayName ?? user.email}</p>
        <button
          type="button"
          onClick={() => signOut(getFirebaseAuth())}
          className="w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-primary-200 hover:text-primary-700"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 text-center">
      <div>
        <h1 className="font-display text-3xl font-semibold text-slate-900">Join EduSwap Somalia</h1>
        <p className="mt-3 text-sm text-slate-600">
          Use your Google account via Firebase Authentication to manage listings, analytics, and logistics workflows.
        </p>
      </div>
      <button
        type="button"
        onClick={handleGoogle}
        className="w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
      >
        Continue with Google
      </button>
      <p className="text-xs text-slate-500">
        We never share your data without consent. Two-factor authentication enforced for all seller accounts.
      </p>
    </div>
  );
}
