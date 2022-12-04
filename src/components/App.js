import React, { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dog.ceo/api/breeds/image/random");
      const res = await data.json();
      setUrl(res.message);
    };
    fetchData().catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div>
      {url ? <img src={url} alt="A Random Dog" /> : <p>"Loading..." </p>}
    </div>
  );
}

export default App;
