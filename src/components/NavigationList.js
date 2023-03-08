import { useHistory } from 'react-router-dom';
import List from 'devextreme-react/list';
import React from 'react';
import { useTaiFactoryContext } from '../providers/TaiFactoryProvider';

const configIcon = {
  CIL: 'preferences',
  COL: 'palette',
  EMB: 'parentfolder',
  IMP: 'print',
  REB: 'chevrondoubleright',
};

function NavigationList({ setOpenDraw }) {
  const departments = useTaiFactoryContext() || [];
  const history = useHistory();
  const options = departments
    .map((department) => (
      {
        text: department.sbaname,
        id: department.sbacode.toLowerCase(),
        icon: configIcon[department.sbacode],
      }));

  const onItemClick = ({ itemIndex }) => {
    history.push(`/${options[itemIndex].id}`);
    setOpenDraw(false);
  };
  return (
    <div className="list" style={{ width: '200px' }}>
      <List
        dataSource={options}
        onItemClick={onItemClick}
        className="panel-list"
      />
    </div>
  );
}

export default NavigationList;
