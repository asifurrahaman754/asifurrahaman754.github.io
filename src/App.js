import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import PageLoad from "./components/PageLoad";
import NotFound from "./pages/404";

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
            <PageLoad />
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
