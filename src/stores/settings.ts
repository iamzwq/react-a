import { create } from "zustand";

const initialState = {
  siderCollapsed: false,
};

export const useSettingsStore = create<typeof initialState>(() => initialState);

export const setSiderCollapsed = (siderCollapsed: boolean) => {
  useSettingsStore.setState({ siderCollapsed });
};
