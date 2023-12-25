import './App.css';
import Blogs from "./pages/Blogs"
import Exercise from "./pages/Exercise"
import Food from "./pages/Food"
import Home from "./pages/Home"
import Music from "./pages/Music"
import Yoga from "./pages/Yoga"
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
const Layout=()=>{
  return(
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
</>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/Blogs",
        element: <Blogs/>,
      },
      {
        path: "/Exercise",
        element: <Exercise/>,
      },
      {
        path: "/Food",
        element: <Food/>,
      },
      {
        path: "/Music",
        element: <Music/>,
      },
      {
        path: "/Yoga",
        element: <Yoga/>,
      },
    ]
  },
]);

function App() {
  return (
   <div className='app'>
   <div className='container'>
    
    <RouterProvider router={router} />
    </div>
    </div>
  );
}


export default App;
