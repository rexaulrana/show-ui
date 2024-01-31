import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./layout/Main.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
