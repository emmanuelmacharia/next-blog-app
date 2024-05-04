"use server"
import { signOut, signIn } from "../auth"


export const handleGhLogin = async () => {
    await signIn("github");
}


export const handleLogout = async() => {
    await signOut({redirectTo: "http://localhost:3000/login"})
}
