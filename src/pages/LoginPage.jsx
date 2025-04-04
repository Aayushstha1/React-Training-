
import { useReducer } from "react";
const reducer = (state, action)=>{
    if (action.type === "username") {
        return {
            ...state,
            username: action.payload
        }
    }
};
const initialState = {
    username: "Aayush",
    password: "Aayush123",
};

export default function LoginPage() {
  
    const [formData, dispatch] = useReducer(reducer, initialState);
    console.log(formData);
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>Login Page</h1>
      <form><div>

        <input type="text" placeholder="Username"  value={formData.username}  onChange={(e) =>dispatch({type: "username", payload: e.target.value})}/>
        </div>
        <div>
        <input type="password" placeholder="Password" value={formData.password}  onChange={(e)=>dispatch({type: "password", payload: e.target.value})}/>
        </div>
        <div>
        <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );
}