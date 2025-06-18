import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import FindTutors from "../Pages/FindTutors";
import Registration from "../Pages/Registration";
import SignIn from "../Pages/SignIn";
import AddTutorials from "../Pages/AddTutorials";
import MyTutorials from "../Pages/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors";
import axios from "axios";
import TutorDetails from "../Pages/tutorDetails";
import PrivateRoute from "../context/PrivetRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{
      index: true,
      loader: () => axios(`${import.meta.env.VITE_API_URL}/tutorials`),
      element: <Home />
    },
    {
      path: '/find-tutors',
      element: <FindTutors />
    },
    {
      path: '/tutorial/:id',
      loader: ({ params }) =>
      axios(`${import.meta.env.VITE_API_URL}/tutorial/${params.id}`),
      element: <TutorDetails />
    },
    {
      path: '/add-tutorials',
      element: <AddTutorials />
    },
    {
      path: '/my-tutorials/:email',
      loader: ({params}) =>
       axios(`${import.meta.env.VITE_API_URL}/my-tutorials/${params.email}`),
      element: <PrivateRoute><MyTutorials /></PrivateRoute>
    },
    {
      path: '/my-booked-tutors',
      element: <MyBookedTutors />
    },
    {
      path: '/register',
      element: <Registration />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    }
    ]
  }
])

export default router;