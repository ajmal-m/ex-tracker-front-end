
import { useEffect, useState, type ReactNode } from "react";
import axiosInstance from "../api/axiosInstance";
import {  useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children } : { children : ReactNode}) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {

    const verifyAuth = async () => {
      try {
        await axiosInstance.get("/auth/verify");
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/login")
      }
    }

    verifyAuth();
  },[]);


  if(loading) return null;


  return children;
}
