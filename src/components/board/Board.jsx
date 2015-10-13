import React, { Component, PropTypes } from 'react';
import Ra, {Surface} from 'react-art';
import {connect} from 'react-redux';
import {_} from 'lodash';

import Map from './Map.jsx!';

class Board extends Component {
  constructor(...args) {
    super(...args);

    this.mouseMoveHandler = _.throttle((tile) => {
      if (!this.props.selectedTiles || this.props.selectedTiles.includes(tile)) {
        return;
      }

      this.props.actions.editTile(tile.get('id'), this.props.newTileType);
      this.props.actions.addToChangeQueue(tile);
    }, 50);
  }

  render() {
    return (
      <Surface width={this.props.width} height={this.props.height}>
        <Map width={this.props.height} height={this.props.height}
          tiles={this.props.tiles}
          mouseDownHandler={(e, tile) => {
            this.props.actions.startChangeQueue(tile);
            this.props.actions.editTile(tile.get('id'), this.props.newTileType);
          }}
          mouseMoveHandler={(e, tile) => this.mouseMoveHandler(tile)}
          mouseUpHandler={e => {
            e.preventDefault();
            this.props.actions.endChangeQueue();
          }}
          />
    </Surface>
    );
  }
}

Board.propTypes = {
  // props from parent
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,

  // from state
  tiles: PropTypes.object.isRequired,
  selectedTiles: PropTypes.object,
  newTileType: PropTypes.func
};

function select(state) {
  return {
    tiles: state.tiles,
    selectedTiles: state.tilesEditor.get('changeQueue'),
    newTileType: state.tilesEditor.get('SelectedTileType')
  };
}

export default connect(select)(Board);
