import React from "react";
import "./App.css";
import { RouterProvider } from 'react-router-dom';
import routerConfig from "./router";
import 'antd/dist/reset.css';


function App() {
  return (
    <div>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
