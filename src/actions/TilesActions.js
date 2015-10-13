export const EVENTS = {
  EDIT_TILE: 'editTile',
  START_CHANGE_QUEUE: 'startChangeQueue',
  ADD_TO_CHANGE_QUEUE: 'addToChangeQueue',
  END_CHANGE_QUEUE: 'endChangeQueue',
  CHANGE_GRID_SIZE: 'changeGridSize',
  SET_TILE_TYPE: 'setTileType'
};

export function editTile(id, TileType) {
  return {
    type: EVENTS.EDIT_TILE,
    id,
    TileType
  };
}

export function startChangeQueue(tile) {
  return {
    type: EVENTS.START_CHANGE_QUEUE,
    tile
  };
}

export function addToChangeQueue(tile) {
  return {
    type: EVENTS.ADD_TO_CHANGE_QUEUE,
    tile
  };
}

export function endChangeQueue() {
  return {
    type: EVENTS.END_CHANGE_QUEUE
  };
}

export function changeGridSize(size) {
  return {
    type: EVENTS.CHANGE_GRID_SIZE,
    size
  };
}

export function setTileType(TileType) {
  return {
    type: EVENTS.SET_TILE_TYPE,
    TileType
  };
}
