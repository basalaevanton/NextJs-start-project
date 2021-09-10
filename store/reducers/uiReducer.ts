import {
  UiState,
  UiAction,
  UiActionTypes,
} from '../../interfaces/ui.interface';

const initialState: UiState = {
  showModal: false,
  redux: 'я редакс',
};

export const uiReducer = (state = initialState, action: UiAction): UiState => {
  switch (action.type) {
    case UiActionTypes.OPEN_MODAL:
      return { ...state, showModal: true };
    case UiActionTypes.CLOSE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};
