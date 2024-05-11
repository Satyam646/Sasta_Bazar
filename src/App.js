import "./App.css";
import HomePage from "./Pages/HomePage/homePage";
import React, { Suspense } from "react";
import Path from "./services/Routes/Routes";
function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Path />
    </Suspense>
  );
}

export default App;
