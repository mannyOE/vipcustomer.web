import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import Appcontext from "./store/contexts/AppContext";
import Authcontext from "./store/contexts/AuthContext";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="566701566583-a10g0p49b4llgle7qcf98jvvgsvtjajf.apps.googleusercontent.com">
      <BrowserRouter>
        <Appcontext>
          <Authcontext>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Authcontext>
        </Appcontext>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
