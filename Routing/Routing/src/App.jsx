import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/Stats";
import Messages from "./Pages/Messages";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Settings from "./Pages/Settings";
import UserDetail from "./Components/UserDetail";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<h3>Welcome to the Dashboard</h3>} />
            <Route path="stats" element={<Stats />} />
            <Route path="messages" element={<Messages />} />

            <Route path="settings" element={<Settings />} />
            <Route path="users/:userId" element={<UserDetail />} />
          </Route>
          
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
