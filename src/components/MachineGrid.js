import React from "react";
import MachineCard from "./MachineCard";
import {useParams} from "react-router-dom";
import useWorkUnitsByDepartment from "../hooks/useDepartmentByCode";


const MachineGrid = () => {
  const { id } = useParams();
  const workunits = useWorkUnitsByDepartment(id);

  return (
     <div className="card-rows">
         {workunits.map((machine, index) => {
             return <MachineCard key={`machine${index}`} machine={machine} number={index + 1}/>
         })}
     </div>

  );
}

export default MachineGrid;
