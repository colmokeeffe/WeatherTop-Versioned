import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const pois = await db.poiStore.getAllPois();
      const viewData = {
        title: "[WOODLANDS] Dashboard",
        pois: pois,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPoi: {
    handler: async function (request, h) {
      const newPoi = {
        title: request.payload.title,
      };
      await db.poiStore.addPoi(newPoi);
      return h.redirect("/dashboard");
    },
  },
};
