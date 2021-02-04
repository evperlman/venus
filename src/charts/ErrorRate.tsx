// /**
//  * @name ErrorRate
//  * @desc Chart that displays in historical status page rendering historical load statistics. Child component of ChartContainer.
//  */

// import React, { useState, useEffect, useContext } from "react";
// import Area from "@ant-design/charts/es/area";
// import { historicalContext } from "../contexts/historicalContext";
// function ErrorRate(): JSX.Element {
  
//   const { serviceData } = useContext(historicalContext);

//   let config = {
//             data: serviceData.error_rate,
//             xField: "timestamp",
//             yField: "value",
//             autoAdjust: true,            
//             xAxis: {
//               max: 15, 
//               label: {
//                 formatter: function formatter(v:any) {
//                   return v.slice(11,19); 
//                 }
//              }
//             },
//             yAxis: {
//               label: {
//                 formatter: function formatter(v:any) {
//                   return v / 10 + '%'; 
//                 }
//              }
//             },
//             seriesField: "service", 
//             animation: {
//               appear: {
//                 animation: 'path-in',
//                 duration: 1000,
//               },
//             },
//           };
//   console.log(config.data, 'config error_rate')
//   return <Area {...config} autoFit={true} />;
// }
// export { ErrorRate };


/**
 * @name ErrorRate
 * @desc Chart that displays in historical status page rendering historical load statistics. Child component of ChartContainer.
 */

import React, { useContext } from "react";
import Line from "@ant-design/charts/es/line";
import { historicalContext } from "../contexts/historicalContext";
const ErrorRate: React.FC = () => {
  
  const { serviceData } = useContext(historicalContext);

  let config = {
            data: serviceData.error_rate,
            xField: "timestamp",
            yField: "value",
            autoAdjust: true,            
            xAxis: {
              max: 15, 
              label: {
                formatter: function formatter(v:any) {
                  return v.slice(11,19); 
                }
             }
            },
            yAxis: {
              label: {
                formatter: function formatter(v:any) {
                  return v / 10 + '%'; 
                }
             }
            },
            seriesField: "service", 
            animation: {
              appear: {
                animation: 'path-in',
                duration: 1000,
              },
            },
          };
  console.log(config.data, 'config error_rate')
  return <Line {...config} />;
}
export { ErrorRate };