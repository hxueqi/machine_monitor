import React from 'react';
import MachineProductionCard from './MachineProductionCard';
import MachineMonitorCard from './MachineMonitorCard';

function CardRow({ workunits, cardsView }) {
  const SelectedView = cardsView === 1 ? MachineProductionCard : MachineMonitorCard;
  return (
    <div className="card-rows">
      {workunits.map((machine, index) => (
        <SelectedView
          key={machine.sbacode + machine.matcode + Math.random()}
          machine={machine}
          number={index + 1}
        />
      ))}
    </div>
  );
}

export default CardRow;
