import { Navigate } from "react-router-dom";
import "./index.css";

// interface User {
//   username: string;
//   email: string;
// }

function App() {
  // const user = {username: 'matheus', email: 'matheus@gmail.com'}
  const loggedIn = false
  if (!loggedIn) return <Navigate to="/signin" />
}

export default App;
