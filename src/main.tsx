import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContext from "./context/ThemeContext";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeContext>
  </React.StrictMode>
);
