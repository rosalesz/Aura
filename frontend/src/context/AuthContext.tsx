import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import api from '../api/client';

interface User {
    id: number;
    email: string;
    name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    const response = await api.get('/auth/me');
                    setUser(response.data);
                } catch (error) {
                    console.error("Failed to load user", error);
                    logout();
                }
            }
            setLoading(false);
        };

        loadUser();
    }, [token]);

    const login = async (email: string, password: string) => {
        const response = await api.post('/auth/login', { email, password });
        const { access_token, user } = response.data;
        localStorage.setItem('token', access_token);
        setToken(access_token);
        setUser(user);
    };

    const register = async (name: string, email: string, password: string) => {
        const response = await api.post('/auth/register', { name, email, password });
        const { access_token, user } = response.data;
        localStorage.setItem('token', access_token);
        setToken(access_token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
