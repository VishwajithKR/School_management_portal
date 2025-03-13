import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const role = useSelector((state) => state.user.registerData[0].role);
  const location = useLocation();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/course", label: "Course" },
    { path: "/about", label: "About" },
  ];

  if (role === "student") {
    navLinks.splice(2, 0,{ path: "/assignment", label: "Assignment" });
  } else if (role === "teacher") {
    navLinks.splice(2, 0,{ path: "/result", label: "Result" });
  }

  return (
    <div className="flex w-full h-20 bg-[#5c8dc5] sticky top-0 justify-between items-center px-2">
      <div className="w-[20%] flex items-center justify-center gap-3.5">
        <img
          title="NVKS"
          width={50}
          height={60}
          className="border-3 border-white/80 p-0.5 rounded-full cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/014/179/554/small/school-icons-design-in-blue-circle-png.png"
          alt="school"
        />
        <h2
          title="NVKS"
          className="text-black/60 hover:text-black font-bold text-[28px] cursor-pointer"
        >
          NVKS
        </h2>
      </div>
      <div className="w-[60%] flex items-center justify-center font-bold text-[16px] px-16">
        <ul className="flex justify-evenly w-full text-black/60">
          {navLinks.map(({ path, label }) => (
            <Link to={path} key={path}>
              <li
                className={`cursor-pointer ${
                  location.pathname === path ? "text-black font-extrabold" : "text-black/60 hover:text-black"
                }`}
              >
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[20%] flex items-center justify-end pr-12 gap-2.5 relative">
        {role && (
          <>
            <h2
              title={role}
              className={` font-bold text-[20px] uppercase cursor-pointer ${
                location.pathname === "/profile" ? "text-black font-extrabold" : "text-black/60 hover:text-black"
              }`}
            >
              {role}
            </h2>

            <Link to="/profile">
              <img
                title="profile"
                width={50}
                height={60}
                className="border-white/80 p-0.5 rounded-full cursor-pointer"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                alt="profile"
              />
            </Link>
          </>
        )}

        
      </div>
    </div>
  );
};

export default Header;
