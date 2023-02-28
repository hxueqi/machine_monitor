import React from "react";
import { Box } from "devextreme-react";
import { Item } from "devextreme-react/box";

function MachineMonitorCard({ machine }) {
  const configStatusColor = {
    YellowGreen: "#8FD31F",
    Green: "#12781D",
    Red: "#DB0C0C",
    Orange: "#FFBD33",
  };

  const MachineStatus =
    configStatusColor[machine.sitcolor] === "#12781D" ? "ACTIVE" : "INACTIVE";

  return (
    <div
      className="dx-card"
      style={{ backgroundColor: configStatusColor[machine.sitcolor] }}
    >
      <div className="dx-fieldset">
        <div className="dx-fieldset-header">{machine.matcodecons}</div>

        <div>{machine.matcode}</div>
        <div>{MachineStatus}</div>
      </div>
    </div>
  );
}

export default MachineMonitorCard;
