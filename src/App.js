import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";

import ScrollTopTop from "./ScrollTopTop";
import "./_app.scss";
const AboutScreen = React.lazy(() => import("./pages/AboutScreen"));
const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));
const Blogs = React.lazy(() => import("./pages/Blogs"));

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
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </Router>
        </Suspense>
      </ScrollingProvider>
    </>
  );
}

export default App;
