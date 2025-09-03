import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);   // stores dog image URL
  const [loading, setLoading] = useState(true);     // tracks loading state

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message); // "message" field contains the image URL
        setLoading(false);
      });
  }, []); // runs once after initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
