<template>
  <div>
    <div v-show="yourorder">
      <div id="main-container">
        <p
          class="h5 pt-4 "
          style="color:#383c50; font-weight:bold"
          align="center"
        >
          Your Order
        </p>

        <div class="item-display">
          <b-row class="pl-3 pr-3 pt-3">
            <b-col align="left" class="items">Iced Latte</b-col>
            <b-col align="right" class="price">$12.62</b-col>
          </b-row>
          <p class="order-details  pl-3 pb-0 pt-2">
            Milk(light), Cream(Regular), Soya Milk(Extra), Sugar(Extra), Raw
            Sugar(regular), Espresso
          </p>
          <b-row class="pl-3 pr-3 ">
            <b-col align="right" class="">
              <div>
                <button class="qtyBox" id="sub" @click="sub1()">-</button>
                <input
                  class="qtyBox__input"
                  type="text"
                  name="incdec"
                  id="qtyBox"
                  readonly=""
                  v-bind:value="count1"
                />
                <button class="qtyBox" id="add" @click="add1()">+</button>
                <b-icon
                  icon="pencil-square"
                  class="ml-4"
                  style="color:#007585"
                ></b-icon>
                <b-icon
                  icon="trash"
                  class="ml-2"
                  style="color:#007585"
                ></b-icon>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="item-display">
          <b-row class="pl-3 pr-3 pt-3">
            <b-col align="left" class="items">Iced Macha Latte</b-col>
            <b-col align="right" class="price">$6.27</b-col>
          </b-row>
          <p class="order-details  pl-3 pb-0 pt-2">
            Milk(light), Cream(Regular), Soya Milk(Extra), Sugar(Extra), Raw
            Sugar(regular), Espresso
          </p>
          <b-row class="pl-3 pr-3 ">
            <b-col align="right" class="">
              <div>
                <button class="qtyBox" id="sub" @click="sub2()">-</button>
                <input
                  class="qtyBox__input"
                  type="text"
                  name="incdec"
                  id="qtyBox"
                  readonly=""
                  v-bind:value="count2"
                />
                <button class="qtyBox" id="add" @click="add2()">+</button>
                <b-icon
                  icon="pencil-square"
                  class="ml-4"
                  style="color:#007585"
                ></b-icon>
                <b-icon
                  icon="trash"
                  class="ml-2"
                  style="color:#007585"
                ></b-icon>
              </div>
            </b-col>
          </b-row>
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
          class="m-0 mb-5"
        >
          Prepration Time
          <span class="mr-2" style="float:right;">20mins.</span>
        </p>
        <p class="m-0 mt-3" style="font-size:small;">Total</p>
        <p class="m-0" style="color:#f4b2b1; font-weight:bold;">
          $12.62
        </p>
      </div>
      <div class="footer mb-5" id="footer" @click="goToPayment()">
        <p
          class="text-center m-0"
          style="color:white; font-weight:bold; font-size:15px;"
        >
          <!-- @click="$bvModal.show('modal-scoped')" -->
          <button>
            Choose Payment Method
          </button>
        </p>
      </div>
    </div>

    <Payment v-show="yourpayment" />
  </div>
</template>

<script>
import Payment from "./Payment";
export default {
  name: "Yourorder",
  data() {
    return {
      yourorder: true,
      yourpayment: false,
      count1: 0,
      count2: 0,
    };
  },
  methods: {
    goToPayment: function() {
      this.yourpayment = !this.yourpayment;
      this.yourorder = !this.yourorder;
    },
    add1: function() {
      this.count1++;
    },
    sub1: function() {
      this.count1--;
    },
    add2: function() {
      this.count2++;
    },
    sub2: function() {
      this.count2--;
    },
  },
  components: {
    Payment,
  },
};
</script>
