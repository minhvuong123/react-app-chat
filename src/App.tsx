import { Outlet, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ConversationsPage } from "./pages/ConversationsPage";
import { ConversationChannelPage } from "./pages/ConversationChannelPage";
import { ConversationSidebar } from "./components/conversations/ConversationSidebar";
import mockConversations from './__mocks__/conversations';
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="conversations" element={
          <AuthenticatedRoute>
            <Layout />
          </AuthenticatedRoute>
        }>
          <Route index element={<ConversationsPage />} />
          <Route path=":id" element={<ConversationChannelPage />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <ConversationSidebar conversations={mockConversations} />
      <Outlet />
    </>
  )
}

export default App;
