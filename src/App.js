import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import Login from "./Login";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
