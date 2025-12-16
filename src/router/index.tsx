import { FC } from "react";
import { createBrowserRouter } from 'react-router-dom'


import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import Edit from "../pages/question/Edit";
import Stat from "../pages/question/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      {
        path: "question",
        element: <QuestionLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "edit/:id", element: <Edit /> },
          { path: "stat/:id", element: <Stat /> },  
        ],
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          { path: "list", element: <List /> },
          { path: "trash", element: <Trash /> },
          { path: "star", element: <Star /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;


export const HOME_PATHNAME = '/';
export const LOGIN_PATHNAME = '/login';
export const REGISTER_PATHNAME = '/register';
export const MANAGE_INDEX_PATHNAME = '/manage/list';


