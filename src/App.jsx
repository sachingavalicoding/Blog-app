import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn, SignUp, AuthLayout } from "./auth"
import { About, BlogLayout, Contact, Home } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar  */}
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
      </Routes>
      {/*  Footer  */}
    </BrowserRouter>
  )
}

export default App