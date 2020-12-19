<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <div id="main-container">
      <p
        class="h5 mb-2  pt-4 "
        style="color:#94949a; font-weight:bold"
        align="left"
      >
        Checkout
      </p>
      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Pickup Address
        <b-icon
          icon="check-circle-fill"
          variant="success"
          class="ml-2"
        ></b-icon>
      </p>
      <div class="shop mt-4">
        <h3 style="color:#32364b; font-weight:bold">Cafe canopic</h3>
        <p style="color:#a2a2a2; font-size:14px; ">
          3745 Tail Ends Road, Bay Village, Boston, MA, 44140
        </p>
        <p style="color:#a2a2a2; font-size:14px; ">(888) 123 1234</p>
      </div>

      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Pickup By
      </p>
      <div class="shop mt-4">
        <p style="color:#a2a2a2; font-size:20px; margin-bottom:0; ">
          Paul Andrews
        </p>
      </div>

      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Choose payment method
      </p>

      <div id="dropdownlist" class="shop  mt-4">
        <br />
        <ejs-dropdownlist
          :dataSource="localData"
          :fields="localField"
          placeholder="Credit Card"
        >
        </ejs-dropdownlist>
      </div>
      <div class="shop mt-4">
        <p
          class="h5 mb-2  pt-4 "
          style="color:#818188; font-size:18px; "
          align="left"
        >
          Enter your card details
        </p>
        <input
          type="text"
          name=""
          id=""
          class="cardnumber p-2"
          placeholder="Card Number"
        />
        <b-row class="mt-3">
          <b-col cols="2" align="center"><p class="expiry">Expiry</p></b-col>
          <b-col cols="5" align="center">
            <input
              type="text"
              name=""
              id=""
              class="cardnumber p-2"
              placeholder="Month"
            />
          </b-col>
          <b-col cols="5" align="center">
            <input
              type="text"
              name=""
              id=""
              class="cardnumber p-2"
              placeholder="Year"
            />
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col cols="2" align="center"><p class="expiry">CVV</p></b-col>
          <b-col cols="5" align="center">
            <input type="text" name="" id="" class="cardnumber p-2" />
          </b-col>
        </b-row>
      </div>
      <div class="check-box ml-3">
        <b-row class="ml-0 mr-0 mt-3">
          <b-col align="left" class="pl-0 pr-0">
            <div class="checkbox-container mb-3 mt-3">
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
      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Points
      </p>
      <div class="points p-2">
        <p class="mr-4 mt-2" align="left" style="color:#8a8a90">Available</p>
        <p class="mt-2">200=<span style="color:#59b675">$2.00</span></p>
        <button class="redeem ml-5">Redeem</button>
      </div>

      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Promo Code
      </p>
      <div class="shop mt-4">
        <p class="mb-0" style="color:#606169">
          Paul20
          <span style="float:right;">
            <b-icon icon="check-circle-fill" variant="success"></b-icon
          ></span>
        </p>
      </div>
      <p
        class="mt-2"
        style="color:#acacb1; font-weight:bold; margin-bottom:60px; "
        align="left"
      >
        Discount on code = <span style="color:#59b675">$4.00</span>
      </p>

      <p align="left" style="color:#75767d; font-size:20px; font-weight:bold;">
        Prepration Time <span class="mr-2" style="float:right;">20mins.</span>
      </p>
    </div>
    <div id="footer">
      <b-row>
        <b-col class="left" align="left"
          ><h5 class="mb-0">Total</h5>
          <h3 class="price-total m-0">$16.02</h3></b-col
        >
        <b-col class=" mt-4 p-0" align="center"
          ><h5 class="right">Order Now</h5></b-col
        >
      </b-row>
    </div>
  </div>
</template>
<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  data: function() {
    return {
      localData: [
        { Id: "card1", Card: "Visa" },
        { Id: "card2", Card: "MasterCared" },
        { Id: "card3", Card: "Apple" },
      ],
      localField: { value: "Id", text: "Card" },
    };
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import url(https://cdn.syncfusion.com/ej2/material.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
}

#nav {
  border-top: 2px solid #f0f3f7;
  border-bottom: 2px solid #f0f3f7;
  background-color: white;
}
#main-container {
  background-color: #f8f8f8;
  padding-left: 15px;
}
#footer {
  background-color: #007585;
  padding: 8px;
  color: white;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.shop {
  background-color: white;
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid #eef0f5;
  text-align: left;
  padding: 10px 15px;
  font-weight: bold;
}
.cardnumber {
  border: 1px solid #dbd6d3;
  width: 100%;
  border-radius: 5px;
  color: black;
}
.cardnumber::placeholder {
  color: #cbcbcb;
}
.expiry {
  color: #7e7f85;
  font-size: small;
  margin-top: 10px;
}

//checkbox styling

//checkbox style
.checkbox-container {
  display: flex;
  align-items: center;
}
.checkbox-container label {
  cursor: pointer;
  display: flex;
  color: dimgrey;
  font-size: 16px;
  // font-weight: bold;
}
.checkbox-container input[type="checkbox"] {
  cursor: pointer;
  position: absolute;
  opacity: 0;
}
.checkbox-container label::before {
  content: "";
  width: 25px;
  height: 25px;
  border: 2px solid #3797a4;
  border-radius: 0.15em;
  margin-right: 11px;

  margin-bottom: 0;
}
.checkbox-container label:hover::before,
.checkbox-container input[type="checkbox"]:hover + label::before {
  background-color: #9adde6;
}
.checkbox-container input[type="checkbox"]:focus + label::before {
  box-shadow: 0 0 20px #62cfdd;
}
.checkbox-container input[type="checkbox"]:checked + label::before {
  content: "\002714";
  background-color: #3797a4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
//points
.points {
  display: flex;
}
.redeem {
  background: white;
  color: #4095a2;
  border: 1px solid #e4e1df;
  border-radius: 5px;
  height: 30px;
  width: 100%;
}
.redeem:hover {
  background: #4095a2;
  color: white;
}
.left .price-total {
  font-size: 35px;
  font-weight: bolder;
}
.right {
  font-weight: bold;
  padding: 0;
  font-size: 25px;
}
</style>
