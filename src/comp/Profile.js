import React from "react";
import PropTypes from "prop-types";

const Profile = (
  props,
  { fullName = "ahmed", bio = "ay haga", profession = "frontend developer" }
) => {
  return (
    <>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <h3>{profession}</h3>
      <img src={props.children} />
      <button
        onClick={() => {
          props.alert1(fullName);
        }}
      >
        click me
      </button>
    </>
  );
};

export default Profile;
Profile.propTypes = {
  anyProp: PropTypes.string,
};
