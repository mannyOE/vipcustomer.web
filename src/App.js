import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes, GLobalStyles } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Stores
import { Store } from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import Docs from "./pages/Docs";
import Consultation from "./components/consultation/Consultation";
import PasswordRecovery from "./pages/PasswordRecovery";
import Aboutus from "pages/Aboutus";
import Login from "pages/auth/Login";
import FAQ from "./pages/FAQ";
import CsvUpload from "pages/CsvUpload";
import SignUp from "./pages/auth/SignUp";
import PasswordChange from "./pages/PasswordChange";
import Privacy from "./pages/Privacy";
import Mission from "pages/Mission";
import Demo from "components/Demo/Demo";
import Terms from "pages/terms/Terms";

function App() {
  const { theme } = Store();

  return (
    <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
      <GLobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/password-recovery">
            <Route index element={<PasswordRecovery />} />
            <Route path="change" element={<PasswordChange />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/csv-upload" element={<CsvUpload />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
