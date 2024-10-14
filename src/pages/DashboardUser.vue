<template>
  <q-page style="overflow-y: scroll">
    <div class="q-pa-md row-column-width">
      <div class="row">
        <div class="col">
          <q-card flat style="border-radius: 10px">
            <q-card-section>
              <div class="text-h6">55,00 €</div>
              <div class="text-h6 text-primary">Offenes Guthaben</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col" align="center">
          <q-btn
            color="accent"
            size="md"
            style="
              width: 4em;
              height: 4em;
              border-radius: 10px;
              margin-bottom: 5px;
            "
          >
            <q-icon center size="2em" name="payments"></q-icon>
          </q-btn>
          <div style="text-align: center; font-size: 14px; font-weight: 300">
            Verzehrkarte
          </div>
        </div>
        <div class="col" align="center">
          <q-btn
            color="accent"
            size="md"
            style="
              width: 4em;
              height: 4em;
              border-radius: 10px;
              margin-bottom: 5px;
            "
          >
            <q-icon center size="2em" name="groups"></q-icon>
          </q-btn>
          <div style="text-align: center; font-size: 14px; font-weight: 300">
            Verein
          </div>
        </div>
        <div class="col" align="center">
          <q-btn
            color="accent"
            size="md"
            style="
              width: 4em;
              height: 4em;
              border-radius: 10px;
              margin-bottom: 5px;
            "
          >
            <q-icon center size="2em" name="download"></q-icon>
          </q-btn>
          <div style="text-align: center; font-size: 14px; font-weight: 300">
            Auszahlen
          </div>
        </div>
        <div class="col" align="center">
          <q-btn
            color="accent"
            size="md"
            style="
              width: 4em;
              height: 4em;
              border-radius: 10px;
              margin-bottom: 5px;
            "
          >
            <q-icon center size="2em" name="receipt_long"></q-icon>
          </q-btn>
          <div style="text-align: center; font-size: 14px; font-weight: 300">
            Transaktionen
          </div>
        </div>
      </div> -->
      <div class="row">
        <div class="col">
          <div class="text-body1">Meine Verzehrkarten</div>
          <div class="text-weight-regular text-secondary">
            5 offene Verzehrkarten / 5 Vereine
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-card flat style="border-radius: 10px">
            <q-card-section>
              <div class="row">
                <div class="col">
                  <div
                    class="text-weight-regular text-secondary"
                    style="margin-bottom: 10px"
                  >
                    Verzehrkarten
                  </div>
                </div>
                <div class="col" align="right">
                  <div
                    class="text-weight-regular text-accent"
                    style="margin-bottom: 10px"
                  >
                    Verwalten
                  </div>
                </div>
              </div>

              <q-list>
                <q-item
                  clickable
                  v-ripple
                  v-for="card in cards"
                  :key="card.id"
                  @click="openConsumptionCard(card)"
                >
                  <q-item-section side left avatar>
                    <q-avatar>
                      <img :src="card.clubIcon" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <div class="text-body1">{{ card.value }} €</div>
                    <div class="text-weight-regular text-secondary">
                      {{ card.club }}
                    </div>
                    <!-- <div
                      class="text-weight-regular text-secondary"
                      style="font-size: 11px"
                    >
                      ID: {{ card.id }}
                    </div> -->
                  </q-item-section>

                  <q-item-section side right>
                    <q-icon
                      name="keyboard_arrow_right"
                      class="text-secondary"
                      style="font-size: 3rem"
                    ></q-icon>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <q-dialog v-model="showConsumptionCard">
      <q-card style="width: 95vw; border-radius: 10px">
        <q-card-section>
          <ConsumptionCard
            :selectedConsumptionCardId="selectedCard"
            style="height: 50vh"
        /></q-card-section>
        <q-card-actions align="around">
          <q-btn color="secondary" flat v-close-popup>Schließen</q-btn>
          <q-btn
            color="primary"
            size="small"
            icon="trending_up"
            rounded
            label="Guthaben aufladen"
            @click="showBuyConsumptionCard = true"
          ></q-btn> </q-card-actions></q-card></q-dialog
    ><q-dialog v-model="showBuyConsumptionCard">
      <q-card style="width: 95vw; border-radius: 10px">
        <q-card-sections><BuyConsumptionCard /> </q-card-sections>
        <q-card-actions align="around">
          <q-btn color="secondary" flat v-close-popup
            >Abbrechen</q-btn
          ></q-card-actions
        ></q-card
      ></q-dialog
    >
  </q-page>
</template>

<script setup>
defineOptions({
  name: "DashboardUser",
});
</script>
<script>
import ConsumptionCard from "../components/ConsumptionCard.vue";
import BuyConsumptionCard from "../components/BuyConsumptionCard.vue";
export default {
  components: { ConsumptionCard, BuyConsumptionCard },
  data() {
    return {
      showBuyConsumptionCard: false,
      showConsumptionCard: false,
      selectedCard: null,
      cards: [
        {
          id: "23FI9ASDU9098772",
          clubIcon: "/development/club_images/weitmar_45.jpg",
          club: "SC Weitmar 45",
          value: "18,00",
          createdAt: "12.3.2023",
        },
        {
          id: "ODO0123OASD23123",
          clubIcon: "/development/club_images/altenbochum.jpg",
          club: "FC Altenbochum 1920/28 e.V.",
          value: "12,00",
          createdAt: "01.2.2023",
        },
        {
          id: "OOTASD00123ASD",
          clubIcon: "/development/club_images/steinkuhl.png",
          club: "SV Bochum-Steinkuhl",
          value: "7,50",
          createdAt: "01.2.2022",
        },
        {
          id: "O0123123IWD90",
          clubIcon: "/development/club_images/vfl_bochum.jpg",
          club: "VfL Bochum",
          value: "10,00",
          createdAt: "09.3.2023",
        },
        {
          id: "GK12315ASD98932",
          clubIcon: "/development/club_images/bvb.png",
          club: "Dortmund BVB",
          value: "14,00",
          createdAt: "01.10.2023",
        },
      ],
    };
  },
  methods: {
    onTabClick(tabName) {
      this.currentTab = tabName;
      // Handle tab click (navigate or update view)
    },
    openConsumptionCard(card) {
      this.selectedCard = card;
      this.showConsumptionCard = true;
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
