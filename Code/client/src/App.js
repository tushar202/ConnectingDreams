import React, { useEffect } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/landingPage";
import HomePage from "./components/homePage";
import { userActions } from "./store/user";
import SIOFormPage from "./components/sioFormPage";
import CDFFormPage from "./components/cdfFormPage";
import CMFormPage from "./components/cmFormPage";
import CaseStudyPage from "./components/caseStudyPage";
import DreamUploadPage from "./components/dreamUploadPage";
import CDFAdminPage from "./components/cdfAdminPage";
import SIOAdminPage from "./components/sioAdminPage";
import CaseStudyUploadPage from "./components/caseStudyUploadPage";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      console.log(token);
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      } else {
        const tokenResponse = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}user/verifyToken`,
          null,
          {
            headers: { "x-auth-token": token },
          }
        );
        console.log(tokenResponse.data);
        if (tokenResponse.data) {
          const userRes = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}user/currentUser`,
            {
              headers: { "x-auth-token": token },
            }
          );
          console.log(userRes)
          dispatch(
            userActions.setUserData({ token: token, user: userRes.data.user })
          );
        }
      }
    };

    checkLoggedIn();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        {!userData.token ? (
          <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Navigate to='/' />} />
            <Route path="/form1" element={<Navigate to='/' />} />
            <Route path="/form2" element={<Navigate to='/' />} />
            <Route path="/form3" element={<Navigate to='/' />} />
            <Route path="/caseStudy/:id" element={<Navigate to='/' />} />
            <Route path="/dreamUpload" element={<Navigate to='/' />} />
            <Route path="/cdfAdminConsole" element={<Navigate to='/' />} />
            <Route path="/sioAdminConsole" element={<Navigate to='/' />} />
            <Route path="/createCaseStudy" element={<Navigate to='/' />} />
          </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/form1" element={<SIOFormPage />} />
            <Route path="/form2" element={<CDFFormPage />} />
            <Route path="/form3" element={<CMFormPage />} />
            <Route path="/caseStudy/:id" element={<CaseStudyPage />} />
            <Route path="/dreamUpload" element={<DreamUploadPage />} />
            <Route path="/cdfAdminConsole" element={<CDFAdminPage />} />
            <Route path="/sioAdminConsole" element={<SIOAdminPage />} />
            <Route path="/createCaseStudy" element={<CaseStudyUploadPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
