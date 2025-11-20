import { memo } from "react";
import AuthForm from "../components/auth-form";

const SignUpPage = memo(() => {
    return(
        <div className="flex items-center justify-center h-screen bg-[#030712]">
            <AuthForm AuthType="Sign Up"/>
        </div>
    )
});

export default SignUpPage;