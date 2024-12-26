import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EmailVerfiy = () => {
  axios.defaults.withCredentials = true
  const inputRefs = React.useRef([]);
  const {backendUrl, isLoggedIn, userData, getUserData} = useContext(AppContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const otpArray = inputRefs.current.map(e=>e.value)
      const otp = otpArray.join("")
      const {data} = await axios.post(backendUrl + "/api/auth/verify-account", {otp})
      if(data.success) {
        toast.success(data.message)
        getUserData()
        navigate("/")
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  useEffect(()=>{
    isLoggedIn && userData && userData.isAccountVerified && navigate("/")
  },[isLoggedIn, userData])

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />
      <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Email Verify OTP
        </h1>
        <p className="text-center mb-6 text-indigo-300 text">
          Enter the 6-digit code sent to your email id.
        </p>
        <div className="flex justify-between mb-8">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                ref={(e) => (inputRefs.current[index] = e)}
                type="text"
                maxLength="1"
                key={index}
                required
                className="w-12 h-12 outline-none bg-[#333A5C] text-white text-center text-xl rounded-md"
              />
            ))}
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full text-white">
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default EmailVerfiy;
