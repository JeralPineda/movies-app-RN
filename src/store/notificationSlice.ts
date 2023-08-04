import {createSlice} from '@reduxjs/toolkit';

export type Notification = {
  id: string;
  type: 'error' | 'success' | 'warning' | 'info';
  message: string;
};

interface InitialState {
  notifications: Notification[] | null;
}

const initialState: InitialState = {
  notifications: null,
};

const notificatioSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications =
        state.notifications !== null
          ? [...state.notifications, action.payload].slice(-3)
          : [action.payload];
    },

    removeNotification: (state, action) => {
      state.notifications =
        state.notifications &&
        state.notifications?.filter(
          notification => notification.id !== action.payload,
        );
    },

    cleanNotifications: state => {
      state.notifications = null;
    },
  },
});

export const {addNotification, cleanNotifications, removeNotification} =
  notificatioSlice.actions;
export default notificatioSlice.reducer;
