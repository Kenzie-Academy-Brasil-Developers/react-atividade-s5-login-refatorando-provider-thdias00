import { AuthProvider } from "./Auth";
import { ReactNode } from "react";

interface ProviderData {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderData) => {
  return <AuthProvider>{children}</AuthProvider>;
};
