import React, { useState, useEffect } from "react";

function Linkedin() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/sonseldeep")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="p-4 bg-gray-600 text-3xl text-white">
        Github Followers :{data.followers}
      </div>
    </>
  );
}

export default Linkedin;
