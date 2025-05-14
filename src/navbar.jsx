import logo from "./assets/logo.png";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  // Get login details from Clerk user object
  const loginDetails = user
    ? {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName,
      }
    : null;
  const [adminAccess, setAdminAccess] = useState("false");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 shadow-sm">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ width: "10%" }}
            />
            <span className="ms-3 fw-bold fs-4 text-danger">
              Project Management Tool
            </span>
          </div>
          <div>
            <button
                  className="btn btn-danger ms-4 fw-bold"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
          </div>
          {loginDetails &&
            loginDetails.email == "mkameshkamesh759@gmail.com" && (
              <div>
                <button
                  className="btn btn-danger ms-4 fw-bold"
                  onClick={() => navigate("/assign")}
                >
                  MySpace
                </button>
              </div>
            )}
          {loginDetails &&
            loginDetails.email != "mkameshkamesh759@gmail.com" && (
              <div>
                <button
                  className="btn btn-danger ms-4 fw-bold"
                  onClick={() => navigate("/task")}
                >
                  MySpace
                </button>
              </div>
            )}
          <div>
            {user ? (
              <div className="ms-4">
                <UserButton />
              </div>
            ) : (
              <button className="btn btn-danger ms-4 fw-bold" onClick={openSignIn}>
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
