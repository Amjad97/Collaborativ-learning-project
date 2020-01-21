import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
// core components
import NavBar from "shared/components/Navbars/NavBar";
import ProfileLayout from "./components/ProfileLayout";

function ProfilePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  const {
    params: { id },
    path
  } = props.match;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <NavBar path={path} isLoggedIn={isLoggedIn} />
      <ProfileLayout userId={id} />
    </>
  );
}

export default inject("store")(observer(ProfilePage));
