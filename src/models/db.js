import { userMemStore } from "./mem/user-mem-store.js";
import { poiMemStore } from "./mem/poi-mem-store.js";

export const db = {
  userStore: null,
  poiStore: null,

  init() {
    this.userStore = userMemStore;
    this.poiStore = poiMemStore;
  },
};
