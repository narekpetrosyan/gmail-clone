import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/user/UserActions";
import { auth } from "../../firebase";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);

  const signOut = () => {
    auth.signOut().then(dispatch(logoutUser()));
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://i.blogs.es/1499b7/gmail/1366_521.png" alt="" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={signOut}>
          {user?.photoUrl ? (
            <Avatar src={user?.photoUrl} />
          ) : (
            <Avatar style={{ textTransform: "uppercase" }}>
              {user?.email[0]}
            </Avatar>
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
