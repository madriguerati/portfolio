import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { AnimatePresence } from "framer-motion";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <Router basename="/">
      <AnimatePresence>
        <LangProvider>
          <Routes location={location} key={location.pathname}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </LangProvider>
      </AnimatePresence>
    </Router>
  );
}

export default App;
