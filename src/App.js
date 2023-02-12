import "./App.less";
import "@ant-design/flowchart/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Header from "./components/nav/Header";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import React from "react";
import { auth } from "./common/firebase";
import { refreshToken } from "./redux/actions/authAction";

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((user) => {
            dispatch(refreshToken(user, idTokenResult.token))
          })
          .catch((err) => {
            console.log(err);
          });
        navigate('/')
      }
    });
    return () => unsubscribe();

  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
