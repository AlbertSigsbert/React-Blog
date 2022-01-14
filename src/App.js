import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Authors from "./pages/Authors";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyles } from "./styled/Global";
function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>AM Blog</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />

        <main>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/:blogSlug" element={<Blog />} />
            </Routes>
          </ScrollToTop>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
