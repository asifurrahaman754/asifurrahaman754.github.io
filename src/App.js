import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import PageLoad from "./components/PageLoad";

import ScrollTopTop from "./ScrollTopTop";
import "./_app.scss";
const AboutScreen = React.lazy(() => import("./pages/AboutScreen"));
const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));
const Blogs = React.lazy(() => import("./pages/Blogs"));
const ProjectScreen = React.lazy(() => import("./pages/ProjectScreen"));
const AllProject = React.lazy(() => import("./pages/AllProject"));

function App() {
  return (
    <>
      <ScrollingProvider>
        <Suspense fallback={<PageLoad />}>
          <Router>
            <ScrollTopTop />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/portfolio/:name" element={<ProjectScreen />} />
              <Route path="/projects" element={<AllProject />} />
            </Routes>
          </Router>
        </Suspense>
      </ScrollingProvider>
    </>
  );
}

export default App;
