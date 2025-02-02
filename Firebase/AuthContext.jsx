import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect, // Import this function
  getRedirectResult,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Handle OAuth redirect result
  useEffect(() => {
    const handleRedirectResult = async () => {
      const result = await getRedirectResult(auth);
      if (result) {
        setUser(result.user);
      }
    };
    handleRedirectResult();
  }, []);

  // Email/Password Registration
  const register = async (name, email, password, photoUrl) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    // Update user profile with name and photo URL
    await updateProfile(result.user, { displayName: name, photoURL: photoUrl });
    setUser({ ...result.user, displayName: name, photoURL: photoUrl });
    return result.user;
  };

  // Email/Password Login
  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setUser(result.user);
    return result.user;
  };

  // Google Login
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  // GitHub Login
  const githubLogin = async () => {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    return result.user;
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, googleLogin, githubLogin, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
