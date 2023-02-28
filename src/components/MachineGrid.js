import React from "react";
import MachineProductionCard from "./MachineProductionCard";
import MachineMonitorCard from "./MachineMonitorCard";
import { useParams } from "react-router-dom";
import useWorkUnitsByDepartment from "../hooks/useDepartmentByCode";

const MachineGrid = ({ cardsView }) => {
  const { id } = useParams();
  const workunits = useWorkUnitsByDepartment(id);
  const SelectedView =
    cardsView === 1 ? MachineProductionCard : MachineMonitorCard;

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

export default MachineGrid;
