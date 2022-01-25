import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Authors from "./pages/Authors";
import AuthorPage from "./pages/AuthorPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Membership from "./pages/Membership";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyles } from "./styled/Global";
import TagPage from "./pages/TagPage";
import AlgoliaSearch from "./components/Common/AlgoliaSearch";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import About from "./pages/About";
import More from "./pages/More";


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
              <Route path="/" element={<Home/>} />
              <Route path="/authors" element={<Authors/>} />
              <Route path="/author/:authorName" element={<AuthorPage/>} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/tag/:tagName" element={<TagPage/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/:blogSlug" element={<Blog/>} />
              <Route path="/search" element={<AlgoliaSearch/>} />
              <Route path="/membership" element={<Membership/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/account" element={<Account/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/more" element={<More/>}/>
            </Routes>
          </ScrollToTop>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
