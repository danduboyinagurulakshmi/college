// import About from "../About/About";
// import Contact from "../Contact/Contact";
// import Home from "../Home/Home";
// import Login from "../Login/Login";
// import{BrowserRouter,Routes,Route} from "react-router-dom"
// function Links(){
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/"element={<Login/>}/>
//             <Route path="/Home"element={<Home/>}/>
//             <Route path="/About"element={<About/>}/>
//             <Route path="/Contact"element={<Contact/>}/>
//             <Route path="/"element={<Login/>}/>
//         </Routes>
//         </BrowserRouter>
        
//         </>


//     )
// }
// export default Links;
// import About from "../About/About";
// import Contact from "../Contact/Contact";
// import Home from "../Home/Home";
// import Login from "../Login/Login";
// import Register from "../Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing"


export default function Links() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

