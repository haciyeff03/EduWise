import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Courses, Home, Login, Plans, Professions, Register } from "./pages";

function App() {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/professions" element={<Professions />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
