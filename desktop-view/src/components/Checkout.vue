<template>
  <div>
    <div v-show="checkout">
      <div id="main-container">
        <p
          class="h5 pt-4 "
          style="color:#383c50; font-weight:bold"
          align="center"
        >
          Checkout
        </p>
        <div class="text-left ml-3 mr-3">
          <p style="color:#505263; font-weight:bold" class="mb-2">
            Pickup Address
            <b-icon
              icon="check-circle-fill"
              variant="success"
              class=""
            ></b-icon>
          </p>
          <div class="shop mb-2">
            <h6 style="color:#32364b; font-weight:bold">
              Cafe Canopic
            </h6>
            <p style="color:#a2a2a2; font-size:11px; " class="m-0">
              3745 Tail Ends Road, Bay Village, Boston, MA, 44140
            </p>
            <p style="color:#a2a2a2; font-size:11px; " class="m-0">
              (888) 123 1234
            </p>
          </div>

          <p style="color:#505263; font-weight:bold" class="mb-2">
            Pickup By
          </p>
          <div class="shop mt-2 mb-2">
            <p style="color:#a2a2a2; font-size:11px; margin-bottom:0; ">
              Paul Andrews
            </p>
          </div>
          <p style="color:#505263; font-weight:bold" class="mb-2">
            Points
          </p>
          <div class="points">
            <p class="mr-4 mt-1" align="left" style="color:#8a8a90">
              Available
            </p>
            <p class="mt-1">200=<span style="color:#59b675">$2.00</span></p>
            <button class="redeem ml-5">Redeem</button>
          </div>
          <p
            class=" mb-1  pt-1 "
            style="color:#505263; font-weight:bold"
            align="left"
          >
            Promo Code
          </p>
          <div class="shop mt-2">
            <p class="mb-0" style="color:#606169; font-size:11px;">
              Paul20
              <span style="float:right;">
                <b-icon icon="check-circle-fill" variant="success"></b-icon
              ></span>
            </p>
          </div>
          <p class="discount">
            Discount on code= <span style="color:#84c697">$4.00</span>
          </p>
          <p
            align="left"
            style="color:#75767d; font-size:12px; font-weight:bold;"
            class="m-0"
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
        </div>
        <p class="m-0 mt-3" style="font-size:small;">Total</p>
        <p class="m-0" style="color:#f4b2b1; font-weight:bold;">
          $12.62
        </p>
      </div>
      <div class="footer mb-5" id="footer" @click="goToCongratulations()">
        <p
          class="text-center m-0"
          style="color:white; font-weight:bold; font-size:15px;"
        >
          <button>
            Choose Payment Method
          </button>
        </p>
      </div>
    </div>
    <Congratulations v-show="congratulations" />
  </div>
</template>
<script>
import Congratulations from "./Congratulations";
export default {
  name: "Checkout",
  data() {
    return {
      checkout: true,
      congratulations: false,
    };
  },
  methods: {
    goToCongratulations: function() {
      this.checkout = !this.checkout;
      this.congratulations = !this.congratulations;
    },
  },
  components: {
    Congratulations,
  },
};
</script>
<style></style>
