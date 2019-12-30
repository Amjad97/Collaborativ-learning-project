import React from "react";

// core components
import NavBar from "shared/components/Navbars/NavBar.js";
import Footer from "shared/components/Footer/Footer.js";
import ProfileLayout from "./components/ProfileLayout";

function ProfilePage(props) {
  const { path } = props.match;

  return (
    <>
      <NavBar path={path} />
      <ProfileLayout />
      <Footer color="#4174FF" />
    </>
  );
}

export default ProfilePage;
