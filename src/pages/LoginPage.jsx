
// import { useReducer } from "react";
// const reducer = (state, action)=>{
//     if (action.type === "username") {
//         return {
//             ...state,
//             username: action.payload
//         }
        
//         }
//         else  {
//             if(action.hello === "password"){
//                 window.alert("Insecure password");
//                 return state;
//             }
//             else {
                
//             return {...state, password: action.hello};
//     }
//         }
// };

const initialState = {
  username: "Aayush",
  password: "Aayush12345667890",
};

export default function LoginPage() {
  const handleSubmit = (e) => { // Corrected function name
      e.preventDefault();
      const formData = new FormData(e.target); // Fixed typo: "Form" to "FormData"
      const username = formData.get("username"); // Fixed syntax for getting form data
      const password = formData.get("password");
      console.log("Username:", username);
      console.log("Password:", password);
      e.target.reset(); // Fixed typo: "e.reset()" to "e.target.reset()"
  };

  return (
      <div style={{ width: "100%", textAlign: "center" }}>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
              <div>
                  <input type="text" name="username" placeholder="Username" />
              </div>
              <div>
                  <input type="password" name="password" placeholder="Password" />
              </div>
              <div>
                  <button type="submit">Login</button>
              </div>
          </form>
      </div>
  );
}