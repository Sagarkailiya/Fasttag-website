import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.js";
import toast from "react-hot-toast"; 
import { Navigate, useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(" Logged in:", user);
      // alert(`Welcome ${user.displayName}`);
      toast.success (`Welcome ${user.displayName}`);
    } catch (error) {
      console.error(" Error:", error);
      toast.error("Error:", error);
    }
    navigate("/account");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Sign in with Google</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
