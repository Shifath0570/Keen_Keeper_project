import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import TimeLine from "../Pages/TimeLine/TimeLine";
import ErrorPage from "../Pages/ErrorPage.jsx/ErrorPage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";
import States from "../Pages/States/States";


export const router = createBrowserRouter ([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {index: true, Component: HomePage},
      {path: '/timeline', Component: TimeLine},
      {path: '/friendDetails/:id', Component: FriendDetails, loader: ()=> fetch('/friends.json')},
      {path: '/states', Component: States},
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])