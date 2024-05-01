import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./component/Spinner";



function App() {
  
  return (
    <>
     
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<Home />} />
              <Route Component={'userList'} element={<Home />} />
            </Routes>
          </Suspense>
        </>
     
    
  );
}

export default App;