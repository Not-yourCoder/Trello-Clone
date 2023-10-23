import "./App.css";
import Header from "./component/Header/Header";
import Dashboard from "./component/dashboard/Dashboard";


function App() {
  return (
    <>
      <div className="wrapper bg-body__bg">
        <Header />
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
