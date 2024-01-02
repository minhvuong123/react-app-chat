import { Outlet, Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="conversation" element={
          <div>
            <div>Conversation</div>
            <Outlet />
          </div>
        } />
        <Route path=":id" element={<div>Conversation ID Page</div>} />
      </Routes>
    </>
  );
}

export default App;
