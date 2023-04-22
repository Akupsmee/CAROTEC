import React from "react";
import useFetchVideos from "./utils/helper";
import Navbar from "./components/Navbar";

function App() {
  console.log(useFetchVideos());
  return (
    <main className="App">
      <Navbar />
    </main>
  );
}

export default App;
