import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/routes/PublicRoutes";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { Navbar } from "./components/Navbar.jsx";
import { lazy, Suspense } from "react";
import { publicRoutes } from "./config/route-configs/public.routes";
import { protectedRoutes } from "./config/route-configs/protected.routes";
import AppLayout from "./components/layouts/AppLayout.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route element={<PublicRoute />}>
              {publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Route>
            <Route element={<AppLayout/>}>
            <Route element={<ProtectedRoute />}>
            
              {protectedRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              </Route>
             
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
