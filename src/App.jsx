import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Skill from "./pages/skill/Skill";
import Orders from "./pages/orders/Orders";
import MySkills from "./pages/mySkills/MySkills";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/skill/:id",
          element: <Skill />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/MySkills",
          element: <MySkills />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
