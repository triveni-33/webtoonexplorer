import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Webtoons from "../pages/Webtoons";
import WebtoonDetails from "../pages/WebtoonDetails";
import AddWebtoon from "../pages/AddWebtoon";
import EditWebtoon from "../pages/EditWebtoon";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../pages/Favorites";

function AppRoutes() {
 return (
   <Routes>
     <Route path="/" element={<Home />} />

     <Route path="/webtoons" element={<Webtoons />} />
     <Route path="/webtoons/:id" element= {
         <ProtectedRoute>
           <WebtoonDetails />
         </ProtectedRoute>
       }/>

     <Route
       path="/add-webtoon"
       element={
         <ProtectedRoute>
           <AddWebtoon />
         </ProtectedRoute>
       }
     />

     <Route
       path="/edit-webtoon/:id"
       element={
         <ProtectedRoute>
           <EditWebtoon />
         </ProtectedRoute>
       }
     />


     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/logout" element={<Logout />} />
     <Route
  path="/favorites"
  element={<Favorites />}
/>
   </Routes>
 );
}

export default AppRoutes;