import { useTaiFactoryContext } from "../providers/TaiFactoryProvider";
import { Link, useHistory } from "react-router-dom";
import { Tabs } from "devextreme-react";
import React from "react";
import LOGO from "../assets/company_logo.png";

const Header = () => {
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
  return (
    <>
      <Link to="/">
        {" "}
        <img src={LOGO} alt="Company_logo" />
      </Link>
      <Tabs
        dataSource={data}
        valueExpr="code"
        onItemClick={onTabsSelectionChanged}
      />
    </>
  );
};

export default Header;
