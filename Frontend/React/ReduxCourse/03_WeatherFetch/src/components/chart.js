import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  //lodash method
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={ props.data }>
        <SparklinesLine  color={ props.color } />
        <SparklinesReferenceLine  type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}