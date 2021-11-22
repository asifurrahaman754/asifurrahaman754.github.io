import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import HomeScreen from "./components/pages/HomeScreen";

function App() {
  return (
    <>
      <ScrollingProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        </Suspense>
      </ScrollingProvider>
    </>
  );
}

export default App;
