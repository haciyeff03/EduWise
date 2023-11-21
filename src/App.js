import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Courses, Home, Login, Plans, Categories, Register, UserDashboard, MainPage, Lessons, Tasks } from "./pages";

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
            <Route path="/categories" element={<Categories />} />
            <Route path="/dashboard" element={<UserDashboard />}>
              <Route path="main-page" element={<MainPage />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
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
