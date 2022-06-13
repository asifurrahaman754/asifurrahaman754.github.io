import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import PageLoad from "./components/PageLoad";
import NotFound from "./pages/NotFound";

import ScrollTopTop from "./ScrollTopTop";
import "./_app.scss";
const AboutScreen = React.lazy(() => import("./pages/About"));
const HomeScreen = React.lazy(() => import("./pages/Home"));
const Blogs = React.lazy(() => import("./pages/AllBlogs"));
const ProjectScreen = React.lazy(() => import("./pages/ProjectDetail"));
const AllProject = React.lazy(() => import("./pages/Allprojects"));

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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Suspense>
      </ScrollingProvider>
    </>
  );
}

export default App;
