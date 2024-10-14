<template>
  <div class="row">
    <div class="col">
      <q-avatar
        ><img :src="consumptionCard.clubIcon" alt="" srcset=""
      /></q-avatar>
    </div>
    <div class="col">
      <div class="row">
        <div class="col" align="right">
          <div class="text-h6">{{ consumptionCard.club }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col" align="right">
          <div class="text-weight-regular text-secondary">
            ID: {{ consumptionCard.id }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" align="right">
          <div class="text-weight-regular text-secondary">
            {{ consumptionCard.createdAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col" align="center">
      <qrcode-vue :value="consumptionCard.id" :size="size" level="M" />
    </div>
  </div>
  <div class="row">
    <div class="col" align="right">
      <div class="text-h6">{{ consumptionCard.value }} €</div>
      <div class="text-weight-bold text-primary">Offenes Guthaben</div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    QrcodeVue,
  },
  props: ["selectedConsumptionCardId"],
  data() {
    return {
      showBuyConsumptionCard: false,
      name: "Apples",
      message: "I like apples",
      consumptionCard: "",

      size: 150,
    };
  },
  mounted() {
    this.consumptionCard = this.selectedConsumptionCardId;
  },
};
</script>

<style></style>
