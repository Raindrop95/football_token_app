<template>
  <div class="row">
    <div class="col">
      <q-avatar><img :src="club.clubIcon" alt="" srcset="" /></q-avatar>
    </div>
    <div class="col">
      <div class="row">
        <div class="col" align="right">
          <div class="text-h6">{{ club.name }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col" align="right">
          <div class="text-weight-regular text-secondary">
            {{ club.address }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="text-weight-bold">
      <q-icon name="calendar_month" size="sm" /> Kommende Events
    </div>
    <q-carousel
      style="margin-top: 10px"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      navigation
      control-color="secondary"
      height="300px"
      class="shadow-4 rounded-borders carousel_style"
    >
      <q-carousel-slide
        v-for="event in events"
        :key="event.id"
        :name="event.id"
        style="color: var(--q-carousel-text)"
        class="column no-wrap flex-center"
      >
        <div class="row">
          <div class="col" align="left">
            <div class="row">
              <div class="col">
                <div class="text-caption text-weight-bold text-secondary">
                  {{ event.date }} · {{ event.time }} Uhr
                </div>
                <div class="text-weight-bold text-h6" style="margin-top: 10px">
                  {{ event.title }}
                </div>
                <div class="text-caption">{{ event.description }}</div>
                <div
                  class="text-weight-bood text-caption text-secondary"
                  style="margin-top: 10px"
                >
                  <q-icon name="location_on" size="sm"></q-icon>
                  {{ event.location }}
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 10px">
              <div class="col" align="right">
                <q-btn
                  icon="calendar_month"
                  color="info"
                  outline
                  size="small"
                  label="Speichern"
                  rounded
                ></q-btn>
              </div>
            </div>
            <!-- <div class="text-weight-bold text-primary">Offenes Guthaben</div> -->
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="row" style="margin-top: 40px" align="center">
    <div class="col">
      <q-btn
        color="primary"
        size="small"
        icon="credit_card"
        rounded
        @click="showBuyConsumptionCard = true"
        label="Verzehrkarte kaufen"
      ></q-btn>
      <div class="text-caption text-weight-light text-secondary">
        Aktuelles Guthaben:
        <a class="text-caption text-weight-bold text-secondary">
          {{ currentBalance }} €
        </a>
      </div>
    </div>
  </div>
  <q-dialog v-model="showBuyConsumptionCard">
    <q-card style="width: 95vw; border-radius: 10px">
      <q-card-sections><BuyConsumptionCard /> </q-card-sections>
      <q-card-actions align="around">
        <q-btn color="secondary" flat v-close-popup
          >Abbrechen</q-btn
        ></q-card-actions
      ></q-card
    ></q-dialog
  >
</template>

<script>
import BuyConsumptionCard from "./BuyConsumptionCard.vue";
export default {
  props: ["selectedClub"],
  components: { BuyConsumptionCard },
  data() {
    return {
      showBuyConsumptionCard: false,
      currentBalance: "14,00",
      slide: "event1",
      name: "Apples",
      message: "I like apples",
      club: "",
      events: [
        {
          id: "A23192ASD129323",
          title: "Fussek für Kinder Event",
          description:
            " Fußball Event für Kinder von 4 bis 10 Jahre. Bringt Sportsachen mit! Bälle haben wir genug :)",
          date: "27.02.2024",
          time: "17:30",
          location: "Musterstraße 10, 444832 Musterstadt",
        },
        {
          id: "ADGGGDS2131",
          title: "Spiel, Spaß und Taktiken",
          description:
            "Veranstaltung für jedes Alter! Lerne die besten Taktiken von den Bundesligisten und absolviere ein Mannschaftsspiel!",
          date: "27.05.2024",
          time: "15:30",
          location: "Musterstraße 11, 444832 Musterhausen",
        },
      ],

      size: 150,
    };
  },
  mounted() {
    this.club = this.selectedClub;
    if (this.events.length > 0) {
      this.slide = this.events[0].id;
    }
  },
};
</script>

<style>
.carousel_style {
  color: var(--q-carousel-control) !important;
}
</style>
