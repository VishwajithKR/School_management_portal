import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterDropdownData } from "../assets/Formdata";
import RegisterDropdown from "../components/RegisterDropdown";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DropDownData = RegisterDropdownData;
  const [isDropdown,setIsDropdown] = useState(false)
  const dropdownRef = useRef(null);

  const [formData,setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, password } = formData;
    if (name && email && role && password) {
      dispatch(createAccount(formData));
      navigate("/login");
    }
  };
  
 
  useEffect(() => {
      const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdown(false);
          }
          };
          document.addEventListener('mousedown', handleClickOutside);
          return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  return (
    <div className="w-full h-screen flex ">
      <div className="w-[30%] m-auto pb-8  bg-white rounded shadow-[inset_0px_0px_10px_3px_#00000024]">
        <div className="py-4 px-8 text-black text-xl border-b border-black/10 text-center font-[500]">
          Create a account 
        </div>
        <form onSubmit={handleSubmit} className="py-4 px-8">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              User Name <span className="text-red-600">*</span>
            </label>
            <input onChange={(e) => setFormData({...formData,name:e.target.value})} value={formData.name}
              className="appearance-none border outline-none rounded capitalize w-full py-2 px-3 text-grey-darker"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input onChange={(e) => setFormData({...formData,email:e.target.value})} value={formData.email}
              className="appearance-none border outline-none rounded w-full py-2 px-3 text-grey-darker"
              type="email"
              placeholder="Your email address"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Role <span className="text-red-600">*</span>
            </label>
            <div ref={dropdownRef} className="w-full" >

            <div onClick={() => setIsDropdown(!isDropdown)}
              className="appearance-none border capitalize outline-none rounded w-full h-10 flex items-center px-3 "
            >{formData.role || "Select your role"}</div>
            {
              isDropdown && <RegisterDropdown setFormData={setFormData} setIsDropdown={setIsDropdown} DropDownData={DropDownData}/>
            }
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Password <span className="text-red-600">*</span>
            </label>
            <input onChange={(e) => setFormData({...formData,password:e.target.value})} value={formData.password}
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
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer text-grey-dark text-sm no-underline hover:text-blue-900"
          >
            I already have an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
