import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
    </Layout>
  );
}

export default App;
