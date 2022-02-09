import Header from "../component/header";
import Adds from "../componets/adds";
import Footer from "../component/footer";
import SecondPage from "../secondPageComponent/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostForm from "../postComponent/postForn";
import LogInForm from "../logInComponent/index";
import SignUpComponent from "../signUpComp/index";
const WrappeHeaderFooter = (Child) => {
  return (
    <>
      <Header />
      <Child />
      <Footer />
    </>
  );
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={WrappeHeaderFooter(Adds)} />
        <Route path="/secondPage" element={WrappeHeaderFooter(SecondPage)} />
        <Route path="/PostForm" element={<PostForm />} />
        <Route path="/LogInForm" element={<LogInForm />} />
        <Route path="/SignUpComponent" element={<SignUpComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
