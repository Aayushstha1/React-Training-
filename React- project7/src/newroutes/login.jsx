// import { useReducer } from "react";

import { useNavigate } from "react-router-dom";

// const reducer = (state, action) => {
//   if (action.type === "username") {
//     return { ...state, username: action.payload };
//   } else {
//     if (action.hello == "password") {
//       window.alert("insecure password");
//       return state;
//     } else {
//       return { ...state, password: action.hello };
//     }
//   }
// };
// const initialState = {
//   username: "tezz",
//   password: "dddd",
// };
// export default function LoginPage() {
//   const [formData, dispatch] = useReducer(reducer, initialState);
//   console.log("-----formData", formData);
//   return (
//     <div style={{ width: "100%", textAlign: "center" }}>
//       <h1>Login Page</h1>
//       <form>
//         <div>
//           <input
//             type="text"
//             placeholder="username"
//             value={formData.username}
//             onChange={(e) =>
//               dispatch({ type: "username", payload: e.target.value })
//             }
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="password"
//             value={formData.password}
//             onChange={(e) => dispatch({ hello: e.target.value })}
//           />
//         </div>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }

export default function login() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const username = formData .get("username");
      const password = formData.get("password");
      console.log("Username", username);
      console.log("password", password);
  
      const credentials = { username, password};
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        });
        const data = await response.json();
        console.log(data);
  //   const response = await fetch('https://fakestoreapi.com/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(credentials)
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data));
    if(data.token) {
      localStorage.setItem('token', data.token);
      navigate("/Products")
    }
  } catch (error) {
    console.error('Error:', error);
    window.alert("Invalid credentials");
    throw error;
  }
  
  
      e.target.reset();
    };
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button type="">Reset</button><br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  