<template>
  <div>
    <div class="empty" v-show="emptyCart">
      <div id="main-container ">
        <h5 class="title" style="margin-bottom:100px;">Your Order</h5>
        <b-icon icon="cart4" font-scale="10" class=" "></b-icon>
        <h6 class="cart-status">No item in cart</h6>
      </div>
      <div class="footer" @click="goToYourOrder()">
        Proceed to Checkout
      </div>
    </div>
    <Yourorder v-show="yourOrder" />
  </div>
</template>
<script>
import Yourorder from "./Yourorder";
export default {
  name: "EmptyCart",
  data() {
    return {
      emptyCart: true,
      yourOrder: false,
    };
  },
  components: {
    Yourorder,
  },
  methods: {
    goToYourOrder: function() {
      this.emptyCart = !this.emptyCart;
      this.yourOrder = !this.yourOrder;
    },
  },
};
</script>
