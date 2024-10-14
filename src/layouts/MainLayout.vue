<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="top_nav">
        <!-- Left-aligned Avatar -->
        <q-toolbar-title>
          <q-btn round style="margin: 5px">
            <q-avatar style="background-color: #303030" text-color="white"
              ><div class="text-weight-light">OK</div></q-avatar
            >
            <q-menu style="position: relative; top: 50px">
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">Einstellungen</div>
                  <q-list
                    ><q-item clickable v-ripple
                      ><q-item-section avatar
                        ><q-icon name="person"></q-icon></q-item-section
                      ><q-item-section left>Profil</q-item-section></q-item
                    ><q-item clickable v-ripple
                      ><q-item-section avatar
                        ><q-icon name="payments"></q-icon></q-item-section
                      ><q-item-section left
                        >Zahlungsinfo.</q-item-section
                      ></q-item
                    ></q-list
                  >

                  <q-toggle
                    icon="dark_mode"
                    v-model="isDarkMode"
                    label="Darkmode"
                    @click="toggleDarkMode"
                  />
                </div>

                <q-separator vertical inset class="q-mx-lg"></q-separator>

                <div class="column items-center">
                  <q-avatar style="background-color: #303030" text-color="white"
                    >OK</q-avatar
                  >

                  <div class="text-subtitle1 q-mt-md q-mb-xs">Oliver Kahn</div>
                  <div class="text-weight-regular text-secondary">
                    ID: 1239212
                  </div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    push
                    size="md"
                    v-close-popup
                  ></q-btn>
                </div>
              </div>
              <div class="row">
                <div class="q-mx-lg text-weight-regular text-secondary">
                  v. [DEV] 0.0.1
                </div>
              </div>
            </q-menu></q-btn
          >
        </q-toolbar-title>

        <!-- Right-aligned Buttons -->
        <q-btn flat round dense icon="notifications_none"
          ><q-badge floating style="background-color: #ff5863" rounded>
            1</q-badge
          ></q-btn
        >
        <q-btn flat round dense icon="help_outline" style="margin-left: 10px" />
        <q-btn flat round dense icon="polymer" style="margin-left: 10px" />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="top_nav custom-footer-shadow">
      <q-tabs
        v-model="currentTab"
        align="justify"
        class="q-pa-none"
        active-color="accent"
        indicator-color="primary"
        color="grey-8"
        shrink
      >
        <q-tab
          v-for="tab in tabs"
          :key="tab.name"
          :name="tab.name"
          :icon="tab.icon"
          :label="tab.label"
          @click="onTabClick(tab.name)"
          :to="tab.to"
          exact
          :class="{
            'unselected-tab': currentTab !== tab.name,
            'custom-tab-label': true,
          }"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const router = useRouter();

defineOptions({
  name: "MainLayout",
});

const tabs = [
  { name: "home", icon: "home", label: "Home", to: "/" },
  { name: "Vereine", icon: "groups", label: "Vereine", to: "/clubs" },
  { name: "Events", icon: "event", label: "Events", to: "/events" },
  {
    name: "settings",
    icon: "qr_code_scanner",
    label: "Scannen",
    to: "/scanner",
  },
];

const currentTab = ref("home");

const onTabClick = (tabName) => {
  currentTab.value = tabName;
  // Programmatically navigate if needed
  router.push(tabs.find((tab) => tab.name === tabName).to);
};

const $q = useQuasar();
const isDarkMode = ref($q.dark.isActive);

const toggleDarkMode = () => {
  isDarkMode.value = !$q.dark.isActive;
  $q.dark.set(isDarkMode.value);
};

onMounted(() => {
  isDarkMode.value = $q.dark.isActive;
});
</script>

<style scoped>
.unselected-tab {
  color: rgb(170, 170, 170); /* Color for unselected tabs */
}
.custom-footer-shadow {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7); /* Custom black shadow */
}
.custom-tab-label .q-tab__label {
  text-transform: none; /* Prevent uppercase transformation */
}

.top_nav {
  background-color: var(--q-toolbar);
  color: var(--q-iconcolor);
}

.bottom_nav {
  background-color: var(--q-bottomnav);
  color: var(--q-iconcolor);
}
</style>
