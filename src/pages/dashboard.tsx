import { memo } from "react";
import axiosInstance from "../api/axiosInstance";

const DashboardPage = memo(() => {
    const logout = async () => {
        axiosInstance.post("/auth/log-out");
        window.location.reload()
    }
    return(
        <>
            <h1>Dashboard Page</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
});

export default DashboardPage;