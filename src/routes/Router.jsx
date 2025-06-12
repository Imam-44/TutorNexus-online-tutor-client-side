import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import FindTutors from "../Pages/FindTutors";
import Registration from "../Pages/Registration";
import SignIn from "../Pages/SignIn";
import AddTutorials from "../Pages/AddTutorials";
import MyTutorials from "../Pages/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children:[{
      index: true,
      element: <Home/>   
    },
    {
      path: '/find-tutors',
      element: <FindTutors/>
    },
    {
      path: '/add-tutorials',
      element: <AddTutorials/>
    },
    {
      path: '/my-tutorials',
      element: <MyTutorials/>
    },
    {
      path: '/my-booked-tutors',
      element: <MyBookedTutors/>
    },
    {
      path: '/register',
      element: <Registration/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    }
  ]
  }
])

export default router;