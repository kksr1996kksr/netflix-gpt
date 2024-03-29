import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // Using this useEffect for establishing 1 Event Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sign In
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        //Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className={
        (user ? "px-10" : "px-64") +
        " absolute z-10 w-full py-2 bg-transparent bg-gradient-to-b from-black flex justify-between"
      }
    >
      <img
        className="w-44 bg-transparent justify-start"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={AVATAR} alt="avatar" />
          <button
            className="bg-red-600 p-2 m-2 text-white rounded-md font-bold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
