import { MotionConfig } from "motion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Home } from "./pages/Home.jsx";
import { Missing } from "./pages/Missing.jsx";
import { Services } from "./pages/Services.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="servicos" element={<Services />} />
            <Route path="contato" element={<Contact />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
