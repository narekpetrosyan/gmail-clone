import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import MailList from "./components/Mail/MailList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SendMail from "./components/SendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { loginUser } from "./store/user/UserActions";

function App() {
  const { sendMessageIsOpen } = useSelector((state) => state.mails);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginUser({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <MailList />
              </Route>
            </Switch>
          </div>
        </div>
      )}

      {sendMessageIsOpen && <SendMail />}
    </BrowserRouter>
  );
}

export default App;
