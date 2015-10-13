import React, {PropTypes} from 'react';
import {Group, Shape} from 'react-art';

const DIFF = 0.5;

export default function Tile(props) {
  const BORDER_PATH = `M0,0 H ${props.width} V ${props.height} H 0 V 0`;
  const FILL_PATH = `M${DIFF},${DIFF} H ${props.width - DIFF} V ${props.height - DIFF} H ${DIFF} Z`;

  return (
      <Group
        onMouseDown={(e) => props.onMouseDown(e)}
        onMouseMove={(e) => props.onMouseMove(e)}
        onMouseUp={(e) => props.onMouseUp(e)}
        x={props.x} y={props.y}>

        <Shape d={BORDER_PATH} stroke={'black'} />
        <Shape
          fill={props.tile.color} d={FILL_PATH} />
      </Group>
  );
}

Tile.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  tile: PropTypes.object.isRequired
};
