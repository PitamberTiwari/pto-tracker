"use server"

import { signIn, signOut } from "next-auth/react";

export const login = async () => signIn("microsoft-entra-id", { redirectTo: "/" });
export const logout = async () => signOut({ redirectTo: "/" });
