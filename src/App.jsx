import * as React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Redirect from "./Redirect";
import "./App.css";


export async function personaLoader({ params }) {
  const persona = (params.persona);
  return { persona };
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "persona/:persona",
    element: <Redirect />,
    loader: personaLoader
  },
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
