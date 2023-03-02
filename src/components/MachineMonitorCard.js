import React from 'react';
import { configBackgroundColor, configBorderColor } from './utils/configColors';

const isActivated = (sitcolor) => (sitcolor === 'Green' ? 'ACTIVE' : 'INACTIVE');

function MachineMonitorCard({ machine } = {}) {
  const { sitcolor, matcodecons, matcode } = machine || {};
  return (
    <div
      className="monitor-card"
      style={{
        backgroundColor: configBackgroundColor[sitcolor],
        borderColor: configBorderColor[sitcolor],
      }}
    >
      <div className="monitor-header">{matcodecons}</div>
      <div className="monitor-card-row">
        <div>{matcode}</div>
        <div>{isActivated(sitcolor)}</div>
      </div>
    </div>
  );
}

export default MachineMonitorCard;
