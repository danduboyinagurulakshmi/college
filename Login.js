// import "./Login.css"
// function Login() {
//   return(
//     <>
//     Email: <input type="text" id="Email" placeholder="enter ur gmail"/>
//     Password: <input type="text" id="Password" placeholder="enter ur password"/>
//     <button type="Login">Login</button>
//     <button type="New Register?">New Register</button>
    
//     </>
//   )
// }
// export default Login;
import "./Login.css";

function Login() {
  return (
    <>
      <form>
        <div>
          Email:<input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div>
          Password:
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
        <button type="button">New Register</button>
      </form>
    </>
  );
}

export default Login;

// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <>
//       <form>
//         <div>
//           Email:
//           <input type="email" placeholder="Enter your email" />
//         </div>

//         <div>
//           Password:
//           <input type="password" placeholder="Enter your password" />
//         </div>

//         <button type="submit">Login</button>

//         <Link to="/register">
//           <button type="button">New Register</button>
//         </Link>
//       </form>
//     </>
//   );
// }

// export default Login;

