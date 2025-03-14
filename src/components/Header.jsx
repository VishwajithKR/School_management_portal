import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutAccount } from "../redux/userSlice";

const Header = () => {
  const role = useSelector((state) => state.user.registerData[0].role);
  const dispatch = useDispatch();
  const location = useLocation();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/course", label: "Course" },
    { path: "/about", label: "About" },
  ];

  switch (role) {
    case "student":
      navLinks.splice(2, 0, { path: "/assignment", label: "Assignment" });
      navLinks.splice(3, 0, { path: "/result", label: "Result" });
      break;
    case "teacher":
      navLinks.splice(2, 0, { path: "/class", label: "Classes" });
      navLinks.splice(3, 0, { path: "/syllabus", label: "Syllabus" });
      break;
    case "principal":
      navLinks.splice(2, 0, { path: "/managementattendance", label: "Manage Attendance" });
      navLinks.splice(3, 0, { path: "/studentlist", label: "Student's List" });
      break;
    case "admin":
      navLinks.splice(2, 0, { path: "/addmission", label: "Admission" });
      navLinks.splice(3, 0, { path: "/compliance", label: "Compliance" });
      break;
    default:
      console.warn("Unknown role: ", role);
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

           
              <img
                title="profile"
                width={50}
                height={60}
                className="border-white/80 p-0.5 rounded-full cursor-pointer"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                alt="profile"
              />
           
          </>
        )}

      <div className="flex w-1/2 items-center justify-start absolute -bottom-[7rem] border-[#5c8dc5] overflow-hidden rounded-lg right-10 border-2">
        <ul className="flex flex-col gap-2 w-full bg-gray-300 rounded-lg">
        <Link to="/profile">  <li className="hover:bg-[#5c8dc5] hover:text-white w-full cursor-pointer px-4 py-2 ">Profile</li> </Link>
         <li onClick={() => dispatch(logoutAccount())} className="hover:bg-[#5c8dc5] hover:text-white w-full cursor-pointer px-4 py-2">Logout</li>
        </ul>
      </div>

      </div>
    </div>
  );
};

export default Header;
