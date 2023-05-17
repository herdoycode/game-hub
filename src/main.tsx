import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ThemeContext from "./context/ThemeContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import routes from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ThemeContext>
  </React.StrictMode>
);
