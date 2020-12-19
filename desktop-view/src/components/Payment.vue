<template>
  <div>
    <div v-show="payment">
      <div id="main-container">
        <p
          class="h5 pt-4 "
          style="color:#383c50; font-weight:bold"
          align="center"
        >
          Checkout
        </p>
        <p
          class="h6 mb-2  pt-4 "
          style="color:#505263; font-weight:bold"
          align="left"
        >
          Choose payment method
        </p>
        <select name="cards" id="cards">
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Cards">Debit Cards</option>
          <option value="Apple">Apple</option>
        </select>
        <div class="shop">
          <p
            class="h6 mb-2  pt-4 "
            style="color:#818188; font-size:15px; font-weight:bold; "
            align="left"
          >
            Enter your card details
          </p>
          <input
            type="text"
            name=""
            id=""
            class="cardnumber p-1"
            placeholder="Card Number"
          />
          <b-row class="mt-3">
            <b-col cols="2" align="center">
              <p class="expiry">Expiry</p>
            </b-col>
            <b-col cols="5" align="center">
              <input
                type="text"
                name=""
                id=""
                class="cardnumber p-1"
                placeholder="Month"
              />
            </b-col>
            <b-col cols="5" align="center">
              <input
                type="text"
                name=""
                id=""
                class="cardnumber p-1"
                placeholder="Year"
              />
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col cols="2" align="center">
              <p class="expiry">CVV</p>
            </b-col>
            <b-col cols="5" align="center">
              <input type="text" name="" id="" class="cardnumber p-1" />
            </b-col>
          </b-row>
          <div class="check-box ml-3">
            <b-row class="ml-0 mr-0 mt-3">
              <b-col align="left" class="pl-0 pr-0">
                <div class="checkbox-container">
                  <input type="checkbox" name="checkbox" id="cb21" />
                  <label for="cb21"
                    ><span class="ml-4" style="font-size:14px;">
                      Save this card for future use</span
                    ></label
                  >
                </div>
              </b-col>
            </b-row>
          </div>
        </div>

        <p
          align="left"
          style="color:#75767d; font-size:12px; font-weight:bold;"
          class="m-0 mt-5"
        >
          Subtotal
          <span class="mr-2" style="float:right;">$18.89</span>
        </p>
        <p
          align="left"
          style="color:#75767d; font-size:12px; font-weight:bold;"
          class="m-0"
        >
          Tax(6%)
          <span class="mr-2" style="float:right;">$1.13</span>
        </p>
        <p
          align="left"
          style="color:#75767d; font-size:12px; font-weight:bold;"
          class="m-0"
        >
          Prepration Time
          <span class="mr-2" style="float:right;">20mins.</span>
        </p>
        <p
          class="m-0 mt-3"
          style="font-size:small; color:#8d8d92; font-weight:bold;"
        >
          Total
        </p>
        <p class="m-0" style="color:#f4b2b1; font-weight:bold;">
          $12.62
        </p>
      </div>
      <div class="footer mb-5" id="footer" @click="goToCheckOut()">
        <p
          class="text-center m-0"
          style="color:white; font-weight:bold; font-size:15px;"
        >
          <!-- @click="$bvModal.show('modal-scoped')" -->
          <button>
            Order Now
          </button>
        </p>
      </div>
    </div>
    <Checkout v-show="checkout" />
  </div>
</template>

<script>
import Checkout from "./Checkout";
export default {
  name: "Payment",
  data() {
    return {
      payment: true,
      checkout: false,
    };
  },
  methods: {
    goToCheckOut: function() {
      this.checkout = !this.checkout;
      this.payment = !this.payment;
    },
  },
  components: {
    Checkout,
  },
};
</script>
