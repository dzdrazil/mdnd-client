import React, { PropTypes } from 'react';
import {Group} from 'react-art';

import Tile from './Tile.jsx!';

function mouseDownHandler(props, tile) {
  return (e) => props.mouseDownHandler(e, tile);
}

function mouseMoveHandler(props, tile) {
  return (e) => props.mouseMoveHandler(e, tile);
}

function mouseUpHandler(props, tile) {
  return (e) => {
    props.mouseUpHandler(e, tile);
  };
}

export default function Map(props) {
  let divisor = Math.pow(props.tiles.size, 0.5);
  let iWidth = props.width / divisor;
  let iHeight = props.height / divisor;

  let tiles = [];
  for (let i = 0; i < divisor; i++) {
    for (let j = 0; j < divisor; j++) {
      let tile = props.tiles.get((i * divisor) + j);

      tiles.push(
        <Tile key={tile.get('id')}
          tile={tile}
          x={j * iWidth} y={i * iHeight}
          width={iWidth} height={iHeight}
          onMouseDown={mouseDownHandler(props, tile)}
          onMouseMove={mouseMoveHandler(props, tile)}
          onMouseUp={mouseUpHandler(props, tile)} />
      );
    }
  }

  return (<Group>
    {
      tiles
    }
  </Group>);
}

Map.propTypes = {
  tiles: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  mouseDownHandler: PropTypes.func.isRequired,
  mouseMoveHandler: PropTypes.func.isRequired,
  mouseUpHandler: PropTypes.func.isRequired
};

Map.defaultProps = {
  mouseDownHandler: () => {},
  mouseMoveHandler: () => {},
  mouseUpHandler: () => {}
};
