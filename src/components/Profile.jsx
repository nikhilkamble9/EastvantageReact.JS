import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const getProfiles = async () => {
    const response = await fetch("https://randomuser.me/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setProfile(data.results[0]);
    localStorage.setItem("title", data.results[0].name.title);
    localStorage.setItem("first", data.results[0].name.first);
    localStorage.setItem("last", data.results[0].name.last);

    // printing the data
    console.log(data.results[0]);
  };
  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line
  }, []);
  const refreshTheName = () => {
    getProfiles();
  };
  const title = localStorage.getItem("title");
  const first = localStorage.getItem("first");
  const last = localStorage.getItem("last");
  return (
    <div className="Profile">
      <div className="name">
        <h3>Name :</h3>
        <span id="title">{title}</span> <span id="first">{first}</span>{" "}
        <span id="last">{last}</span>
      </div>
      <div className="email">
        <h3>Email :</h3>
        <span>{profile.email}</span>
      </div>
      <div className="btn">
        <p>
          <button onClick={refreshTheName}>Change User</button>
        </p>
      </div>
    </div>
  );
};

export default Profile;
