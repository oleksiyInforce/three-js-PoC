//write me a auth provider that will provide the auth context to the app

import { GoogleOAuthProvider } from "@react-oauth/google";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

export const AuthContext = createContext<{
  token?: string;
  setToken: (token: string) => void;
  logout: () => void;
  profile?: any;
}>({
  setToken: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>();
  const [profile, setProfile] = useState();

  const fetchProfile = async (token: string) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      setProfile(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      const savedToken = JSON.parse(auth);
      setToken(savedToken);
      fetchProfile(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  const logout = () => {
    setToken(undefined);
    localStorage.removeItem("token");
  };

  return (
    <GoogleOAuthProvider clientId="610440714707-d5fh8otca0m4rskgkrpk949vkh2q5irh.apps.googleusercontent.com">
      <AuthContext.Provider
        value={{
          token,
          setToken,
          logout,
          profile,
        }}
      >
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};

export const useAuth = () => useContext(AuthContext);
