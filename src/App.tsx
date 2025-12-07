import "./App.css";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="flex flex-row gap-2">
      <Navbar />
      <div id="dashboard-content" className="flex-1">
        Content
      </div>
    </div>
  );
}

export default App;
