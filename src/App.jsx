import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, AuthLayout } from "./auth";
import { About, BlogLayout, Contact, Home } from "./pages";
import { Navbar, Footer } from "./components/index";
import Preview from "./pages/blogs/Preview";
import TopHeading from "./components/navbar/TopHeading";
import TopNav from "./components/navbar/TopNav";
import BlogForm from "./pages/blogs/BlogForm";
import BlogList from "./pages/blogs/BlogList";
import Blogs from "./pages/blogs/Blogs";
const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar  */}
      <TopNav />
      <TopHeading />
      <Navbar />
      <Routes>
        {/*  Private Route  */}
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        {/*  Public Route  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogLayout />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/addblog" element={<BlogForm />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/getblog" element={<Blogs />} />
      </Routes>
      b{/*  Footer  */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
