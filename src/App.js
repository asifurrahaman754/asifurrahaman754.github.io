import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import ScrollTopTop from "./ScrollTopTop";
import "./_app.scss";
const AboutScreen = React.lazy(() => import("./pages/AboutScreen"));
const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));

function App() {
  return (
    <>
      <ScrollingProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <ScrollTopTop />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
            </Routes>
          </Router>
        </Suspense>
      </ScrollingProvider>
    </>
  );
}

export default App;
