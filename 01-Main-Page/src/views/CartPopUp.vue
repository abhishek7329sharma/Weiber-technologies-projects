<template>
  <div id="">
    <b-container>
      <b-row class="p-2">
        <b-col align="left" class="">
          <p class="yourcart mt-2">Your cart</p>
        </b-col>
        <b-col align="right" class=" ">
          <p class="p mt-2 " style="font-weight:bold; color: #3797a4;">
            <b-icon icon="x" font-scale="1.5" style=""></b-icon>Close
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-0">
      <div class="item-display">
        <b-row class="pl-3 pr-3 pt-3">
          <b-col align="left" class="items">Iced Latte</b-col>
          <b-col align="right" class="price">$12.62</b-col>
        </b-row>
        <p class="order-details  pl-3 pb-0 pt-0">
          Milk(light), Cream(Regular), Soya Milk(Extra), Sugar(Extra), Raw
          Sugar(regular), Espresso
        </p>
        <b-row class="pl-3 pr-3 ">
          <b-col align="right" class="">
            <div>
              <button class="qtyBox" id="sub">-</button>
              <input
                class="qtyBox__input"
                type="text"
                name="incdec"
                id="qtyBox"
                readonly=""
                value="2"
              />
              <button class="qtyBox" id="add">+</button>
              <b-icon icon="pencil-square" class="ml-4" variant="info"></b-icon>
              <b-icon icon="trash" class="ml-2" variant="info"></b-icon>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="item-display">
        <b-row class="pl-3 pr-3 pt-3">
          <b-col align="left" class="items">Iced Macha Latte</b-col>
          <b-col align="right" class="price">$6.27</b-col>
        </b-row>
        <p class="order-details  pl-3 pb-0 pt-0">
          Milk(light), Cream(Regular), Soya Milk(Extra), Sugar(Extra), Raw
          Sugar(regular), Espresso
        </p>
        <b-row class="pl-3 pr-3 ">
          <b-col align="right" class="">
            <div>
              <button class="qtyBox" id="sub">-</button>
              <input
                class="qtyBox__input"
                type="text"
                name="incdec"
                id="qtyBox"
                readonly=""
                value="1"
              />
              <button class="qtyBox" id="add">+</button>
              <b-icon icon="pencil-square" class="ml-4" variant="info"></b-icon>
              <b-icon icon="trash" class="ml-2" variant="info"></b-icon>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="sub-totat mb-3">
        <b-row>
          <b-col align="left"
            >Subtotal
            <br />
            Tax(6%)
          </b-col>
          <b-col align="right"
            >$18.89
            <br />
            $1.13
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row class="mt-5">
          <b-col align="left">Prepration Time</b-col>
          <b-col align="right">20mins.</b-col>
        </b-row>
      </div>
    </b-container>
    <div id="" class="footer">
      <b-row>
        <b-col cols="4" class="left" align="left"
          ><h6 class="mb-0">Total</h6>
          <h3 class="price-total m-0">$20.02</h3></b-col
        >
        <b-col cols="8" class=" p-0"
          ><h5 class="right mt-3 ml-3" style="float:right;">
            Proceed to checkout
          </h5></b-col
        >
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPopUp",
  components: {},
};
</script>
<style>
.footer {
  background-color: #007585;
  padding: 8px;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
}
/* 
 header section */
.items {
  font-weight: bold;
  font-size: normal;
}
.item-display {
  color: dimgrey;
}
.price {
  font-weight: normal;
  font-size: large;
}
.order-details {
  text-align: left;
  font-size: 11px;
}
/* increment/ decrement button */
.qtyBox {
  width: 20px;
  height: 20px;
  font-size: 11px;
  border-radius: 50%;
  outline: none;
  border: 2px solid #3797a4;
  background-color: white;
  color: #3797a4;
  cursor: pointer;
}
.qtyBox:active {
  color: white;
  background-color: #3797a4;
}
.qtyBox__input {
  border: none;
  width: 20px;
  height: 20px;
  outline: none;
  padding: 4px 0;
  text-align: center;
  color: dimgrey;
  font-size: 20px;
  margin: 0 5px;
  font-weight: bold;
}
.sub-totat {
  margin-top: 200px;
  color: dimgrey;
}
.footer {
  background-color: #3797a4;
  color: white;
  margin: 0;
  font-weight: bold;
}
.right {
  font-weight: bold;
}
.yourcart {
  font-weight: bold;
  font-size: larger;
}
</style>
