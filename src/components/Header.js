import { useTaiFactoryContext } from "../providers/TaiFactoryProvider";
import { Link, useHistory } from "react-router-dom";
import { Button } from "devextreme-react/button";
import { Tabs } from "devextreme-react";
import React from "react";
import LOGO from "../assets/company_logo.png";
import SelectBox from "devextreme-react/select-box";
import ArrayStore from "devextreme/data/array_store";
import { CheckBox } from "devextreme-react/check-box";
import DataGrid, {
  Grouping,
  Column,
  ColumnChooser,
  LoadPanel,
  Toolbar,
  Item,
} from "devextreme-react/data-grid";

const Header = ({ action }) => {
  const departments = useTaiFactoryContext() || [];

  const history = useHistory();

  const data = departments.map((department) => {
    return { text: department.sbaname, code: department.sbacode.toLowerCase() };
  });

  const onTabsSelectionChanged = ({ itemData }) => {
    if (itemData.code) {
      history.push(`/${itemData.code}`);
    }
  };

  const configOptions = [
    { id: 1, option: "Monitor Producción" },
    { id: 2, option: "Machine Monitor" },
  ];

  return (
    <>
      <div className="header">
        <div className="department_menu">
          <Button icon="menu" height={50} width={50} disabled={true} />
        </div>

        <Link to="/">
          <img src={LOGO} alt="Company_logo" />
        </Link>

        <div className="header_right">
          <SelectBox
            dataSource={
              new ArrayStore({
                data: configOptions,
                key: "id",
              })
            }
            displayExpr="option"
            valueExpr="id"
            defaultValue={configOptions[0].id}
            placeholder="Select view..."
            onValueChanged={({ value }) => action(value)}
          />

          <Button icon="user" height={50} width={50} disabled={true} />
        </div>
      </div>

      <div className="toolbar">
        <Button icon="remove" disabled={true} />

        <CheckBox defaultValue={false} text="Autorefresh" />

        <Button icon="refresh" disabled={true} />
      </div>

      <Tabs
        dataSource={data}
        valueExpr="code"
        onItemClick={onTabsSelectionChanged}
      />
    </>
  );
};

export default Header;
