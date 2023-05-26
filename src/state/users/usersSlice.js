import { createSlice } from '@reduxjs/toolkit';
import { substractHours, tailwindColorsPalette } from '../../utils';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    usersShow: [],
    isLoading: false,
    user: {},
    events: [],
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
      state.usersShow = payload;
      state.isLoading = false;
    },
    setService: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
    hideUser: (state, { payload }) => {
      state.usersShow = state.users.filter(({ id }) => payload.id !== id);
    },
    showUser: (state, { payload }) => {
      state.usersShow.push(state.users.filter(({ id }) => payload.id === id)[0]);
    },
    parseServicesToEvents: (state) => {
      state.events = state.usersShow
        .map((user) => {
          const services = user.services.map((service) => {
            return { ...service, color: user.color, user_id: user.id };
          });
          return services;
        })
        .flat(1)
        .map((service) => {
          return {
            id: service.id,
            start: substractHours(service.expected_date, 5),
            title: service.service_type,
            backgroundColor: tailwindColorsPalette.filter(
              (palette) => palette.paletteName === service.color
            )[0].swatches[0].color,
            textColor: tailwindColorsPalette.filter(
              (palette) => palette.paletteName === service.color
            )[0].swatches[4].color,
            borderColor: tailwindColorsPalette.filter(
              (palette) => palette.paletteName === service.color
            )[0].swatches[3].color,
            extendedProps: { color: service.color, user_id: service.user_id },
          };
        });
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setUsers, setService, hideUser, showUser, setLoading, parseServicesToEvents } =
  usersSlice.actions;
