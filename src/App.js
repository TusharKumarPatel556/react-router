import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
//import Service from "./components/service";
import Header from "./components/header";
import Footer from "./components/footer";
import ErrorPage from "./components/error";
import OnlineService from "./components/onlineservice";
import OnlineVideo from "./components/onlinevideos";
import Language from "./components/language";
import LangInfo from "./components/langinfo";

const LazyServices = React.lazy(() => import("./components/service"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="React Router Home page" />} />
        <Route path="/language" element={<Language />}>
          <Route path="/language/:lang" element={<LangInfo />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <React.Suspense fallback={"Loading Page ...."}>
              <LazyServices />
            </React.Suspense>
          }
        >
          <Route index element={<OnlineVideo />} />
          <Route path="onlinevideos" element={<OnlineVideo />} />
          <Route path="onlineservice" element={<OnlineService />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
