import { memo } from "react";
import AuthForm from "../components/auth-form";

const LoginPage = memo(() => {
    return(
        <div className="flex items-center justify-center h-screen bg-[#030712]">
            <AuthForm AuthType="Login"/>
        </div>
    )
});

export default LoginPage;