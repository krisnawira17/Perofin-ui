import "./App.css";
import Layout from "./components/layout";

function App() {
  return (
    // <div className="flex flex-row gap-2">
    //   <div id="dashboard-content" className="flex-1">
    //     Content
    //   </div>
    // </div>
    <Layout>
      <div id="dashboard-content" className="flex-1">
        Content
      </div>
    </Layout>
  );
}

export default App;
