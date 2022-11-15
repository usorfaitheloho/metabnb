import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import PlaceToStay from "./component/pages/PlaceToStay";
const App = () => {
  return (
    <>
     
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/place-to-stay" element={<PlaceToStay />} />
            </Routes>
        
  
    </>
  );
  
}

export default App;
