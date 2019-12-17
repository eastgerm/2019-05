import actions from './Actions';

const Reducer = (state, action) => {
  /* eslint indent: ["error", 2, { "SwitchCase": 1 }] */
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        playerId: action.payload.playerId,
        playerTeam: action.payload.playerTeam,
        subscription: action.payload.subscription,
      };
    case actions.LOGOUT:
      return { ...state, playerId: null, playerTeam: null, subscription: null };
    default:
      throw new Error('Unhandled action!');
  }
};

export default Reducer;
