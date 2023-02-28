import React from "react";
import { Box } from "devextreme-react";
import { Item } from "devextreme-react/box";

import {
  Chart,
  Series,
  CommonSeriesSettings,
  Label,
  Format,
  Legend,
} from "devextreme-react/chart";

const configStatusColor = {
  YellowGreen: "#8FD31F",
  Green: "#12781D",
  Red: "#DB0C0C",
  Orange: "#FFBD33",
};

function MachineProductionCard({ machine, number }) {
  return (
    <div className="machine-card">
      <Box direction="col" width="100%" height={450}>
        {/* **********************        Tile      ********************* */}

        {/* **********************        Group 1      ********************* */}
        <Item ratio={2} baseSize={0}>
          <div className="header-card">
            MAQUINA {number}
            {machine.departmentName ? (
              <p>Dep: {machine.departmentName}</p>
            ) : (
              <></>
            )}
          </div>

          <Box direction="row" width="100%" height={70}>
            <Item ratio={1}>
              <div
                className="status-card"
                style={{ backgroundColor: configStatusColor[machine.sitcolor] }}
              >
                {machine.sitname}
              </div>
            </Item>

            <Item ratio={1}>
              <div className="status-card-1">
                {`Speed: ${machine.speed.toFixed(2)}`}
              </div>
            </Item>
          </Box>
          {/* **********************        Group 2     ********************* */}
          <Box direction="row" width="100%" height={70}>
            <Item ratio={1}>
              <Box direction="col" width="100%" height={125}>
                <Item ratio={1}>
                  <div className="rect demo-dark">Active work order:</div>
                </Item>

                <Item ratio={2}>
                  <div className="status-card-1">{machine.wohnumber}</div>
                </Item>
              </Box>
            </Item>

            <Item ratio={1}>
              <Box direction="col" width="100%" height={125}>
                <Item ratio={1}>
                  <div className="rect demo-dark">Product:</div>
                </Item>
                <Item ratio={2}>
                  <div className="status-card-1">{machine.matcode}</div>
                </Item>
              </Box>
            </Item>
          </Box>
          {/* **********************        Group 3     ********************* */}
          <Box direction="row" width="100%" height={70} align="center">
            <Item ratio={1}>
              <Box direction="col" width="100%" height={125}>
                <Item ratio={1}>
                  <div className="rect demo-dark">Product name:</div>
                </Item>
                <Item ratio={2}>
                  <div className="status-card-1">{machine.matname}</div>
                </Item>
              </Box>
            </Item>
          </Box>
          {/* **********************       Group 4     ********************* */}
          <Box direction="row" width="100%" height={70}>
            <Item ratio={1}>
              <Box direction="col" width="100%" height={70}>
                <Item ratio={1}>
                  <div className="rect demo-dark">Quantity required:</div>
                </Item>

                <Item ratio={2}>
                  <div className="status-card-1">
                    {Math.trunc(machine.quantityrequired)}
                  </div>
                </Item>
              </Box>
            </Item>

            <Item ratio={1}>
              <Box direction="col" width="100%" height={125}>
                <Item ratio={1}>
                  <div className="rect demo-dark">Quantity produced:</div>
                </Item>
                <Item ratio={2}>
                  <div className="status-card-1">
                    {Math.trunc(machine.quantityproduced)}
                  </div>
                </Item>
              </Box>
            </Item>
          </Box>

          {/* **********************        Group Kpi     ********************* */}
          <Chart id="chart" rotated={true} dataSource={[machine]} height={170}>
            <CommonSeriesSettings
              argumentField="serie"
              type="bar"
              hoverMode="allArgumentPoints"
              selectionMode="allArgumentPoints"
            >
              <Label visible={true}>
                <Format type="fixedPoint" precision={0} />
              </Label>
            </CommonSeriesSettings>
            <Series
              color="#12781D"
              argumentField="serie"
              valueField="tprod"
              name="Producida"
            />
            <Series color="#FFBD33" valueField="tprep" name="Preparada" />
            <Series color="#DB0C0C" valueField="tpar" name="Paros" />
            <Legend
              verticalAlignment="top"
              horizontalAlignment="center"
            ></Legend>
          </Chart>
        </Item>
      </Box>
    </div>
  );
}

export default MachineProductionCard;
