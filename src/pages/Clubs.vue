<template>
  <q-page style="overflow-y: scroll">
    <div class="q-pa-md">
      <div class="row">
        <q-card flat style="border-radius: 15px; width: 95vw; min-height: 80vh">
          <q-input
            style="border-radius: 15px; margin: 10px"
            bottom-slots
            rounded
            outlined
            @update:modelValue="searchClub"
            v-model="input_club"
            label="Vereinssuche"
          >
            <template v-slot:prepend>
              <q-icon name="search"></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click="
                  input_club = '';
                  filteredClubs = clubs;
                "
                class="cursor-pointer"
              ></q-icon>
            </template>
          </q-input>
          <div v-if="filteredClubs.length === 0">
            <div
              class="text-weight-regular text-secondary"
              style="text-align: center"
            >
              Du folgst aktuell keinen Verein!
            </div>
            <div
              style="text-align: center"
              class="text-weight-regular text-secondary"
            >
              Du kannst deinen Verein suchen und diesem folgen!
            </div>
          </div>
          <q-list v-else>
            <q-item
              clickable
              v-ripple
              v-for="club in filteredClubs"
              :key="club.id"
              @click="openClubDetails(club)"
            >
              <q-item-section side left avatar>
                <q-avatar>
                  <img :src="club.clubIcon" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <div class="text-body1">{{ club.name }}</div>
                <div class="text-weight-regular text-secondary">
                  {{ club.address }}
                </div>
              </q-item-section>

              <q-item-section side right>
                <q-btn
                  flat
                  round
                  dense
                  @click.stop="toggleFollowing(club)"
                  :icon="club.is_following ? 'star' : 'star_outline'"
                  :color="club.is_following ? 'lime-14' : 'grey'"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="showClubDetails">
      <q-card style="width: 95vw; border-radius: 10px">
        <q-card-section>
          <ClubDetails :selectedClub="selectedClub"
        /></q-card-section>
        <q-card-actions
          ><q-btn color="secondary" flat v-close-popup
            >Schließen</q-btn
          ></q-card-actions
        ></q-card
      ></q-dialog
    >
  </q-page>
</template>

<script>
import ClubDetails from "../components/ClubDetails.vue";
export default {
  components: { ClubDetails },
  name: "IndexPage",
  data() {
    return {
      showClubDetails: false,
      input_club: "",
      selectedClub: null,
      favoriteClubs: [
        {
          id: "23FI9ASDU9098772",
          clubIcon: "/development/club_images/weitmar_45.jpg",
          name: "SC Weitmar 45",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: true,
        },
        {
          id: "ODO0123OASD23123",
          clubIcon: "/development/club_images/altenbochum.jpg",
          name: "FC Altenbochum 1920/28 e.V.",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: true,
        },
      ],
      clubs: [
        {
          id: "23FI9ASDU9098772",
          clubIcon: "/development/club_images/weitmar_45.jpg",
          name: "SC Weitmar 45",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: true,
        },
        {
          id: "ODO0123OASD23123",
          clubIcon: "/development/club_images/weitmar_09.png",
          name: "SV Blauweiß Weitmar 09",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: true,
        },
        {
          id: "OOTASD00123ASD",
          clubIcon: "/development/club_images/steinkuhl.png",
          name: "SV Bochum-Steinkuhl",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: false,
        },
        {
          id: "O0123123IWD90",
          clubIcon: "/development/club_images/vfl_bochum.jpg",
          name: "VfL Bochum",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: false,
        },
        {
          id: "GK12315ASD98932",
          clubIcon: "/development/club_images/bvb.png",
          name: "Dortmund BVB",
          address: "Musterstraße 10, 99999 Musterstadt",
          is_following: false,
        },
      ],
      filteredClubs: [],
    };
  },
  watch: {
    input_club(val) {
      if (val.length == 0) {
        this.filteredClubs = this.favoriteClubs;
      }
    },
  },
  mounted() {
    this.filteredClubs = this.favoriteClubs;
  },
  methods: {
    toggleFollowing(club) {
      if (club.is_following == false) {
        this.favoriteClubs.push(club);
      } else {
        this.favoriteClubs.pop(club);
      }

      club.is_following = !club.is_following;
    },
    searchClub() {
      const searchTerm = this.input_club.toLowerCase();
      this.filteredClubs = this.clubs.filter((club) =>
        club.name.toLowerCase().includes(searchTerm)
      );
    },
    openConsumptionCard(club) {
      // Implement the logic to open the consumption card
      console.log("Opening club:", club.name);
    },
    openClubDetails(club) {
      this.selectedClub = club;
      this.showClubDetails = true;
    },
  },
};
</script>

<style lang="sass">
.row-column-width
  .row > div
    padding: 0px 0px
  .row + .row
    margin-top: 1rem
</style>
