import { Routes, Route } from "react-router-dom";
import Home from "./home";


function Routers() {
  return(<>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/phone" element={<></>}  />
        <Route path="/:appType" element={<></>}  />
        <Route path="/:appType" element={<></>}  />
        <Route path="/:appType" element={<></>}  />
      </Routes>
  </>)
}
export default Routers