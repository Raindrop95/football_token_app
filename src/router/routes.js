const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashboardUser.vue") },
      { path: "clubs", component: () => import("pages/Clubs.vue") },
      { path: "events", component: () => import("pages/ClubEvents.vue") },
      { path: "scanner", component: () => import("pages/CodeScanner.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
