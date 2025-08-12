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
import Loading from "../Components/Loading";
import Error from "../Pages/error";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import RefundPolicy from "../Pages/RefundPolicy";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{
      index: true,
      loader: () => axios(`${import.meta.env.VITE_API_URL}/tutorials`),
      hydrateFallbackElement: <Loading />,
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
      element: <PrivateRoute><TutorDetails /></PrivateRoute>
    },
    {
      path: '/add-tutorials',
      element: <PrivateRoute><AddTutorials /></PrivateRoute>
    },
    {
      path: '/my-tutorials/:email',
      element:<PrivateRoute><MyTutorials /></PrivateRoute>
    },
    {
      path: '/my-booked-tutorials/:email',
      element: <PrivateRoute><MyBookedTutors /></PrivateRoute>
    },
    {
      path: '/register',
      element: <Registration />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: 'terms-and-conditions',
      element: <TermsAndConditions/>
    },
    {
      path: 'privacy-policy',
      element: <PrivacyPolicy />
    },
    {
      path: 'refund-policy',
      element: <RefundPolicy />
    },
    ]
  },
  {
    path: "*",
    element: <Error />
  }
])

export default router;