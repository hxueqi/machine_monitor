import React from 'react';
import CardRow from './CardRow';
import useWorkUnits from '../hooks/useWorkUnits';

function MachineGrid({ cardsView }) {
  const workunits = useWorkUnits();

  return (<CardRow workunits={workunits} cardsView={cardsView} />);
}

export default MachineGrid;
