import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmptyPage from "./EmptyPage";
import Assignment from "./pages/Assignment";
import Result from "./pages/Result";
import Course from "./pages/Course";
import About from "./pages/About";
import Home from "./pages/Home";
import ProtectedRoute from "./customHooks/ProtectedRoute";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const useRole = useSelector((state) => state.user.registerData[0].role);
  console.log(useRole)
  return (
    <BrowserRouter>
      <Routes>
        {useRole ? (
          <>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
                <Route path="/assignment" element={<Assignment />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
                <Route path="/result" element={<Result />} />
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
