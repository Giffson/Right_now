import BlogDetails from "./BlogDetails";
import ErrorPage404 from "./ErrorPage404";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
        <div className="App">
        <Navbar />
      <Routes>
        <Route exact index path="/"  element={ <Home /> }/> 
        {/* <Route path="*"  element={  <ErrorPage404 /> }/>  */}
        <Route path="/blogdetails/:id" element={  <BlogDetails /> }/> 
      </Routes>   
      </div>
    </Router>
  
  
   

  );
}

export default App;
