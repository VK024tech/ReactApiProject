import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";



const root = createRoot(document.querySelector("#root"));

root.render(  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={'hello'} />
    </Routes>
  </BrowserRouter>);
