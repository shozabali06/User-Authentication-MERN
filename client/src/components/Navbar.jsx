import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/email-verify");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />
      <div className="flex items-center gap-3">
        <a href="https://github.com/shozabali06/User-Authentication-MERN" target="_blank">
          <img className="w-10" src={assets.github_logo} alt="github_logo" />
        </a>

        {userData ? (
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black text-white relative group">
            {userData.name[0].toUpperCase()}
            <div className="absolute hidden group-hover:block top-2 right-0 z-10 text-black rounded pt-10">
              <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded">
                {!userData.isAccountVerified && (
                  <li
                    onClick={sendVerificationOtp}
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded"
                  >
                    Verify Email
                  </li>
                )}

                <li
                  onClick={logout}
                  className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10 rounded"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
          >
            Login <img src={assets.arrow_icon} alt="arrow_icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
