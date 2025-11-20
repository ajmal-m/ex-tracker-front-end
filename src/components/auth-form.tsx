import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";

type PropType = {
    AuthType : string;
}

const AuthForm = memo(( { AuthType } : PropType) => {
    const [authData, setAuthData] = useState({ email :"" , password:""});

    const updateAuthData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const {name, value} = e.target;
            setAuthData( prev => ({ ...prev , [name]: value }));
        } catch (error) {
            console.log(error); 
        }
    },[]);


    const handleSubmit = useCallback((e : React.FormEvent<HTMLFormElement> ) => {
        try {
            e.preventDefault();
            console.log(authData)
        } catch (error) {
            console.log(error);
        }
    },[authData])


    return(
        <div className="min-w-80 min-h-80 bg-[#101828] dark:bg-[#101828] rounded border flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full p-4 flex flex-col gap-4">
                <h1 className="text-center text-white text-3xl font-bold">{AuthType} Account</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white text-sm font-regular">Email</label>
                    <input 
                        type="text" name="email" id="email" 
                        className="border border-white p-2 text-white rounded" 
                        placeholder="Enter email address"
                        onChange={updateAuthData}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-white text-sm font-regular">Password</label>
                    <input 
                        type="password" name="password" id="password" 
                        className="border border-white p-2 text-white rounded" 
                        placeholder="Enter password" 
                        onChange={updateAuthData}
                    />
                </div>
                <button type="submit" 
                    className="w-full border border-white p-2 bg-[#101828] 
                    transition-all duration-300 ease-in cursor-pointer rounded 
                    text-white hover:bg-[#233354] uppercase"
                >
                    {AuthType}
                </button>
                <div className="text-center text-white underline">
                    <Link to={`${ AuthType === "Sign Up" ? '/login' : '/sign-up' }`}>
                    {
                        AuthType === "Sign Up" ? 'Login account' : 'create a new account'
                    }
                    </Link>
                </div>
            </form>
        </div>
    )
});

export default AuthForm;