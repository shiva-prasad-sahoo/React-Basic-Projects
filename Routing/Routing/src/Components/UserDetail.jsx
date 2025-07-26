import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const userData = {
    rishi: { name: "Rishi", Age: 20, Emailid: "abcd@gmail.com" },
  };

  //doubts-> the [], use params usage, how data was accessed in details
  const { userId } = useParams();
  //useparams returns a object {userId: "rishi"}
  //userid always returns a string

  const user = userData[userId];
  return user ? (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.Age}</p>
      <p>Email: {user.Emailid}</p>
    </div>
  ) : (
    <p>User not found</p>
  );
}

export default UserDetail;
