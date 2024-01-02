import { Outlet, Route, Routes } from "react-router-dom";
import Authentication from "./pages/AuthenticationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
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
