<template>
  <div class="row">
    <div class="col" align="center">
      <div class="text-h6 text-weight-bold" style="margin-top: 10px">
        Verzehrkarte kaufen
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <q-stepper
        v-model="step"
        header-nav
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title=""
          icon="shopping_cart"
          :done="step > 1"
          :header-nav="step > 1"
        >
          <div class="row">
            Bitte wähle eine Verzehrkarte aus, um das Guthaben aufzuladen.
          </div>
          <div class="row">
            <div class="col" align="center">
              <q-chip
                style="margin-top: 20px; margin-bottom: 20px"
                v-for="option in cardOptions"
                :key="option.value"
                :selected="selectedOption === option.value"
                @update:selected="selectOption(option.value)"
                color="primary"
                text-color="white"
                size="large"
              >
                {{ option.value }} €
              </q-chip>
            </div>
          </div>
          <q-stepper-navigation>
            <q-btn
              @click="
                () => {
                  done1 = true;
                  step = 2;
                }
              "
              color="primary"
              rounded
              :disable="enableNextButton"
              size="small"
              label="Weiter"
            ></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title=""
          icon="credit_card"
          :done="step > 2"
          :header-nav="step > 2"
        >
          Wähle bitte eine Zahlungsart aus und gebe dann deine Zahlungsdetails
          ein.

          <q-list>
            <q-item
              tag="label"
              v-ripple
              style="
                margin-top: 10px;
                border-color: var(--q-secondary);
                border-width: 1px;
                border-style: solid;
                border-radius: 13px;
              "
            >
              <q-item-section>
                <q-item-label>
                  <div class="row">
                    <div class="col">
                      <img
                        src="../assets/icons/paypal.svg"
                        alt=""
                        srcset=""
                        width="45px"
                      />
                    </div>
                    <div class="col-9">
                      <div
                        class="row text-caption text-weight-bold"
                        style="text-wrap: wrap"
                      >
                        max.mustermann@email.de
                      </div>
                      <div
                        class="row text-caption text-weight-regular"
                        style="text-wrap: wrap"
                      >
                        Max Mustermann
                      </div>
                    </div>
                  </div>
                </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-radio
                  v-model="selectedPayment"
                  val="PayPal"
                  color="teal"
                ></q-radio>
              </q-item-section>
            </q-item>
            <q-item
              tag="label"
              v-ripple
              style="
                border-color: var(--q-secondary);
                border-width: 1px;
                border-style: solid;
                margin-top: 10px;
                border-radius: 13px;
              "
            >
              <q-item-section>
                <q-item-label>
                  <div class="row" align="left">
                    <div class="col">
                      <img
                        src="../assets/icons/mastercard.svg"
                        alt=""
                        style="border-radius: 5px"
                        srcset=""
                        width="45px"
                      />
                    </div>
                    <div class="col-9">
                      <div
                        class="row text-caption text-weight-bold"
                        style="text-wrap: wrap"
                      >
                        5555 2XXX XXXX XXX9
                      </div>
                      <div
                        class="row text-caption text-weight-regular"
                        style="text-wrap: wrap"
                      >
                        09/24
                      </div>
                    </div>
                  </div>
                </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-radio
                  v-model="selectedPayment"
                  val="MasterCard"
                  color="teal"
                ></q-radio>
              </q-item-section>
            </q-item>
          </q-list>

          <q-stepper-navigation>
            <q-btn
              @click="
                () => {
                  done2 = true;
                  step = 3;
                }
              "
              color="primary"
              rounded
              size="small"
              label="Weiter"
            ></q-btn>
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Zurück"
              class="q-ml-sm"
            ></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step :name="3" title="" icon="point_of_sale" :header-nav="step > 3">
          Kontrolliere bitte noch einmal deine Bestellung und schließe diesen
          Kauf durch einen Klick auf "Bezahlen" ab.
          <div class="text-h6 text-weight-bold" style="margin-top: 20px">
            Betrag: {{ selectedOption }},00 €
          </div>
          <div class="text-h7 text-weight-bold">
            Zahlungsmittel:
            <p class="text-weight-regular">{{ selectedPayment }}</p>
          </div>

          <q-stepper-navigation>
            <q-btn
              color="primary"
              @click="confirmPayment()"
              rounded
              icon="payments"
              :loading="loading"
              size="small"
              label="Bezahlen"
            ></q-btn>
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Zurück"
              class="q-ml-sm"
            ></q-btn>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedClub"],
  data() {
    return {
      step: 1,
      currentBalance: "14,00",
      slide: "event1",
      name: "Apples",
      message: "I like apples",
      club: "",

      cardOptions: [
        { value: "10", selected: false },
        { value: "15", selected: false },
        { value: "20", selected: false },
      ],
      selectedOption: null,
      selectedPayment: null,
      selected: false,
      size: 150,
      enableNextButton: true,
      loading: false,
    };
  },
  methods: {
    selectOption(value) {
      this.selectedOption = value;
      this.enableNextButton = false;
    },
    confirmPayment() {
      this.loading = true;
    },
  },
  mounted() {},
};
</script>

<style>
.carousel_style {
  color: var(--q-carousel-control) !important;
}
</style>
