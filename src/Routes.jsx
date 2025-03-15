import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Assignment from "./pages/Assignment";
import Result from "./pages/Result";
import Course from "./pages/Course";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Class from './pages/Class';
import Syllabus from './pages/Syllabus';
import ManagementAttendance from "./pages/ManagementAttendance";
import Addmission from "./pages/Addmission";
import Compliance from "./pages/Compliance";
import StudentList from "./pages/StudentList";
import EmptyPage from "./EmptyPage";
import ProtectedRoute from "./customHooks/ProtectedRoute";
import { useSelector } from "react-redux";
// import { roleBasedRoutes } from "./assets/Formdata";

const AppRoutes = () => {
  const useRole = useSelector((state) => state?.user?.registerData[0]?.role);
  return (
    <BrowserRouter>
      <Routes>
        {useRole !=="" ? (
          <>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
                <Route path="/assignment" element={<Assignment />} />
                <Route path="/result" element={<Result />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
              <Route path="/class" element={<Class />} />
              <Route path="/syllabus" element={<Syllabus />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={["principal"]} />}>
              <Route path="/managementattendance" element={<ManagementAttendance />} />
              <Route path="/studentlist" element={<StudentList />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/addmission" element={<Addmission />} />
              <Route path="/compliance" element={<Compliance />} />
              </Route>
              <Route path="/course" element={<Course />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<EmptyPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
