import React, { use, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount } from "../redux/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
const userData =useSelector((state)=>state.user.registerData)

const handleSubmit = (e) => {
  e.preventDefault()
  let loginData = userData.find((item) => item.email === formData.email && item.password === formData.password)
  if (loginData) {
    console.log(loginData,"88")
    dispatch(loginAccount(loginData))
    navigate("/")
  }

}
 
  return (
    <div className="w-full h-screen flex ">
      <div className="w-[30%] m-auto pb-8  bg-white rounded shadow-[inset_0px_0px_10px_3px_#00000024]">
        <div className="py-4 px-8 text-black text-xl border-b border-black/10 text-center font-[500]">
          Login Now
        </div>
        <form onSubmit={handleSubmit} className="py-4 px-8">
         
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))} value={formData.email}
              className="appearance-none border outline-none rounded w-full py-2 px-3 text-grey-darker"
              type="email"
              placeholder="Your email address"
            />
          </div>
         
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Password <span className="text-red-600">*</span>
            </label>
            <input onChange={(e) => setFormData((prevData) => ({ ...prevData, password: e.target.value }))} value={formData.password}
              className="appearance-none border outline-none rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              placeholder="Your secure password"
            />
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              className="bg-blue bg-black hover:bg-white cursor-pointer text-white border-2 border-black hover:text-black font-bold py-1.5 px-6 rounded-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center">
          <button
            onClick={() => navigate("/register")}
            className="cursor-pointer text-grey-dark text-sm no-underline hover:text-blue-900"
          >
            Don't have an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
