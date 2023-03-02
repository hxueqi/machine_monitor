import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import NavigationList from './NavigationList';
import Header from './Header';

function Page({ setCardsView, component }) {
  const [openDraw, setOpenDraw] = useState(false);
  const onOutsideClick = () => {
    setOpenDraw(false);
  };

  return (
    <>
      <Header setOpenDraw={setOpenDraw} openDraw={openDraw} setCardsView={setCardsView} />
      <Drawer
        opened={openDraw}
        openedStateMode="push"
        revealMode="expand"
        position="left"
        component={NavigationList}
        closeOnOutsideClick={onOutsideClick}
        height="100%"
      >
        <div id="content" className="content-container">
          { component }
        </div>
      </Drawer>
    </>
  );
}

export default Page;
