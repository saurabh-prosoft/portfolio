import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "@/index.css";
import { store } from "@/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
