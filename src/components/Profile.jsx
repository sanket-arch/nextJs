import React from "react";

function Profile({ name, email, isVerified }) {
  console.log(name);
  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>
        verified: {isVerified ? "Email is verified" : "Email is not verified"}
      </div>
    </div>
  );
}

export default Profile;
