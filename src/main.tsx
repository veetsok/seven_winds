import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./user.InterfaceLayer/shared/styles/default.style.css";
import "./user.InterfaceLayer/shared/styles/fonts.style.css";
import "./user.InterfaceLayer/shared/styles/styled.css";
import { store } from "./business.InterfaceLayer/store/rootReducer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import mainRouter from "./user.InterfaceLayer/router";

const routers = createBrowserRouter(mainRouter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </React.StrictMode>
);
