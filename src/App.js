import "./App.css";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";


function App() {
  const [dashboardVisible, setDashboardVisible] = useState(true);

  const showClick = () => {
    setDashboardVisible(true);
  };

  const cancelClick = () => {
    setDashboardVisible(false);
  };
  
  return (
    <div className="App">

      <Dashboard/>
      <Header/>
    </div>
  );
}

export default App;
