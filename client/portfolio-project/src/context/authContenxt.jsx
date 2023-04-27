import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null))
    const [profileUser, setProfileUser] = useState(null)

    const login = async (inputs) => {
        const response = await axios.post("/api/auth/login", inputs)
        setCurrentUser(response.data)
    };

    const logout = async () => {
        const response = await axios.post("/api/auth/logout")
        setCurrentUser(null)
    };

    const user = async (userName) => {
        const response = await axios.get(`/api/users/${userName}`)
        setProfileUser(response.data)
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return <AuthContext.Provider value={{ login, logout, user, currentUser, profileUser }}>{children}</AuthContext.Provider>
}