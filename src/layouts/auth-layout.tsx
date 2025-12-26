import { memo } from "react";
import {Outlet} from 'react-router';

const AuthLayout = memo(() => {
    return(
    <>
    <h1>Auth Navbar</h1>
    <Outlet/>
    </>
    )
});

export default AuthLayout;