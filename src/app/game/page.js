//! Add `use client` to prevent this page from being server side rendered
"use client";

import { useEffect, useState } from "react";

import signOut from "@/firebase/auth/signout";

import { toast } from "react-hot-toast";

import { useAuthContext } from "@/context/AuthContext";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === undefined) {
      return;
    }

    //* When user status is known, reset loading state to false
    setLoading(false);

    //* If user is not logged in, redirect to home page
    if (user == null) {
      router.push("/");
    }
  }, [user]);

  //* Create a function to handle the form
  const handleForm = async (event) => {
    //* Prevent the default form action
    event.preventDefault();

    const { result, error } = await signOut();

    if (error) {
      toast.error("Sign Out failed!");
      return console.log(error);
    }

    //* else successful
    toast.success("Sign Out successful!");
    console.log(result);
    return router.push("/");
  };

  if (loading) {
    return <div className="text-5xl font-bold">Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center py-10 px-10 ">
        {user && (
          <p className="text-4xl lg:text-5xl py-5 text-center ">
            Welcome, <span className="font-bold">{user.email}</span>
          </p>
        )}
        <h1 className="text-3xl lg:text-4xl px-8 py-7 text-center">
          Only logged in users can view this page!
        </h1>
        <h2 className="text-2xl lg:text-3xl px-8 pb-7 text-center">
          Check Authentication in the Firebase console to see new user
        </h2>
        {/* <Link className="btn-4"
         href="/signin" >
          Sign Out
        </Link> */}
        <button className="btn-4" 
        // onClick={handleForm} type="submit"
        >
          Sign Out v2
        </button>
      </div>
    </>
  );
}
