import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwrite/config"; // Import account from your Appwrite config

// Create Context
const AuthContext = createContext();

// Custom Hook for using context easily
export const useAuth = () => useContext(AuthContext);

// Auth Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if the user is logged in when the app loads
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const currentUser = await account.get(); // Fetch logged-in user details
                setUser(currentUser);
            } catch (error) {
                console.log("No active session found:", error);
                setUser(null); // Clear user data if session expired or no user found
            } finally {
                setIsLoading(false);
            }
        };

        getCurrentUser();
    }, []);

    // Login Function
    const login = async (email, password) => {
        try {
            const session = await account.createEmailPasswordSession(email, password);
            const currentUser = await account.get();
            setUser(currentUser);
            return { success: true, message: "Login successful!" };
        } catch (error) {
            return { success: false, message: "Invalid email or password." };
        }
    };

    // Logout Function
    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            console.log("Failed to logout:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};