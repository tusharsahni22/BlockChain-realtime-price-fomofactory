import { createStore, combineReducers } from 'redux';

const initialState = {
  coins: [],
  selectedCoin: 'Bitcoin',
};

function coinsReducer(state = initialState.coins, action) {
  switch (action.type) {
    case 'SET_COINS':
      return action.payload;
    default:
      return state;
  }
}

function selectedCoinReducer(state = initialState.selectedCoin, action) {
  switch (action.type) {
    case 'SET_SELECTED_COIN':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  coins: coinsReducer,
  selectedCoin: selectedCoinReducer,
});

const store = createStore(rootReducer);

export default store;