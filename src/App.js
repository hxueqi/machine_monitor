import React from "react";
import "devextreme/dist/css/dx.carmine.css";
import {
  TaiFactoryContextProvider,
  useTaiFactoryContext,
} from "./providers/TaiFactoryProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MachineGrid from "./components/MachineGrid";
import MachineCard from "./components/MachineCard";
// import LoadingView from "./components/LoadingView";

const App = () => {
  return (
    <div className="app">
      <TaiFactoryContextProvider>
        <DepartmentRouter />
      </TaiFactoryContextProvider>
    </div>
  );
};

const DepartmentRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" render={(props) => <AllMachines {...props} />} />
        <Route path="/:id" render={(props) => <MachineGrid {...props} />} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

const AllMachines = () => {
  const departments = useTaiFactoryContext() || [];
  const workunits = departments
    .map((department) =>
      department.workunits.map((workunit) => ({
        ...workunit,
        departmentName: department.sbaname,
      }))
    )
    .flat();

  return (
    <div className="card-rows">
      {/* {LoadingView} */}
      {workunits.map((machine, index) => {
        return (
          <MachineCard
            key={`machine${index}`}
            machine={machine}
            number={index + 1}
          />
        );
      })}
    </div>
  );
};

export default App;
