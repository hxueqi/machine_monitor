import Toolbar from 'devextreme-react/toolbar';
import { Link } from 'react-router-dom';
import SelectBox from 'devextreme-react/select-box';
import ArrayStore from 'devextreme/data/array_store';
import React from 'react';

const configOptions = [
  { id: 1, option: 'Monitor Producción' },
  { id: 2, option: 'Machine Monitor' },
];

function Header({ setOpenDraw, openDraw, setCardsView }) {
  const toolbarItems = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => { setOpenDraw(!openDraw); },
    },
  }];

  return (
    <div className="header">
      <Toolbar items={toolbarItems} width={50} style={{ marginRight: '10px' }} />
      <Link to="/" className="logo" />
      <div className="select-view">
        <SelectBox
          dataSource={
                        new ArrayStore({
                          data: configOptions,
                          key: 'id',
                        })
                    }
          displayExpr="option"
          valueExpr="id"
          defaultValue={configOptions[0].id}
          placeholder="Select view..."
          onValueChanged={({ value }) => setCardsView(value)}
        />
      </div>
    </div>
  );
}

export default Header;
