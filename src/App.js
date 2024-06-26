import Login from "./Login";
import Users from "./Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App=()=>{
  const baseUrl=process.env.REACT_APP_BASE_URL;
  console.log({baseUrl})
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Users" element={<Users/>}/>
        </Routes>
        </Router>
      </div>

  )

}
export default App;

