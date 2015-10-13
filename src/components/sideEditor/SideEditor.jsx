import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as TileTypeRecords from '../../domain/Tiles';

const TileTypes = Object.keys(TileTypeRecords);

class SideEditor extends Component {
  render() {
    let props = this.props;
    return (
      <aside style={{float: 'left', width: props.width, marginRight: '100px'}}>
        <div>
          This is just a stupid simple tile map editor, built using:
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>React ART</li>
          </ul>

          Directions:
          <ol>
            <li>Pick a desirable grid size</li>
            <li>Select a tile type to place (grid starts as all floor)</li>
            <li>Click or drag across tiles to place the selected tile</li>
            <li>Dragging over a tile will only change it once.  If you later place a tile over the same type, it'll place Floor instead to make undoing changes easier</li>
          </ol>
        </div>
        <fieldset>
          <legend>
            Editor
          </legend>
          <div>
            <label htmlFor="editor-grid-size">Grid Size</label>
            <input type="range" id="editor-grid-size" min="10" max="1000" step="10"
              value={props.tiles.size}
              onChange={e => props.actions.changeGridSize(e.currentTarget.value)} /><br />
            {props.tiles.size}
          </div>
          <hr />

          <div>
            <label htmlFor="editor-set-tile">Set Tile</label>
              {
                TileTypes.map((key) => {
                  return (
                    <div key={key}>
                      <label htmlFor={'editor-set-tile-' + key}>{key}</label>
                      <input type="radio" value={key} label={key} id={'editor-set-tile-' + key}
                        onChange={() => props.actions.setTileType(TileTypeRecords[key])}
                        checked={props.SelectedTileType === TileTypeRecords[key]}
                         />
                      <br />
                    </div>
                  );
                })
              }
          </div>
        </fieldset>
      </aside>
    );
  }
}

SideEditor.props = {
  tiles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
};

function select(state) {
  return {
    tiles: state.tiles,
    SelectedTileType: state.tilesEditor.get('SelectedTileType')
  };
}

export default connect(select)(SideEditor);
