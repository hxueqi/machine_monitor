import { React, useState } from "react";
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
import MachineProductionCard from "./components/MachineProductionCard";
import MachineMonitorCard from "./components/MachineMonitorCard";

const App = () => {
  return (
    <div className="app">
      <div class="loader"></div>
      <TaiFactoryContextProvider>
        <DepartmentRouter />
      </TaiFactoryContextProvider>
    </div>
  );
};

const DepartmentRouter = () => {
  const [cardsView, setCardsView] = useState(1);

  return (
    <Router>
      <Header action={setCardsView} />

      <Switch>
        <Route
          path="/home"
          render={(props) => <AllMachines {...props} changeView={cardsView} />}
        />
        <Route
          path="/:id"
          render={(props) => <MachineGrid {...props} cardsView={cardsView} />}
        />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

const AllMachines = ({ changeView }) => {
  const departments = useTaiFactoryContext() || [];

  const SelectedView =
    changeView === 1 ? MachineProductionCard : MachineMonitorCard;

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
      {workunits.map((machine, index) => {
        return (
          <SelectedView
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
