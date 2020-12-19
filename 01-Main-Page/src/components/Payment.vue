<template>
  <div id="Payment">
    <div id="nav">
      <Nav3 />
    </div>

    <div id="main-container">
      <p
        class="h5 mb-1  pt-4 "
        style="color:#606069; font-size:18px; "
        align="left"
      >
        Checkout
      </p>
      <p
        class="h5 mb-2  pt-4 "
        style="color:#31354a; font-weight:bolder; font-size:18px; "
        align="left"
      >
        Pickup Address
        <b-icon
          icon="check-circle-fill"
          class="ml-2"
          style="color:#72d08b;"
        ></b-icon>
      </p>
      <div class="shop mt-3">
        <h6 style="color:#32364b; font-weight:bolder; font-size:17px;">
          Cafe canopic
        </h6>
        <p style="color:#84858d; font-size:13px; " class="mb-0">
          3745 Tail Ends Road, Bay Village, Boston, MA, 44140
        </p>
        <p style="color:#84858d; font-size:13px; " class="mb-0">
          (888) 123 1234
        </p>
      </div>

      <p
        class="h5 mt-3 mb-3 "
        style="color:#31354a; font-weight:bolder; font-size:18px; "
        align="left"
      >
        Pickup By
      </p>
      <div class="shop mt-2">
        <p style="color:#a2a2a2; font-size:13px; margin-bottom:0; ">
          {{ person }}
        </p>
      </div>

      <p
        class="h5 mb-3  mt-3"
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Choose payment method
      </p>

      <div class="dropdown shop p-0 mt-2">
        <div class="dropdown-select p-2">
          <span class="select">Credit Card</span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-chevron-down"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div class="dropdown-list">
          <div class="dropdown-list_item">Credit Card</div>
          <div class="dropdown-list_item">Debit Card</div>
          <div class="dropdown-list_item">Apple</div>
        </div>
      </div>

      <div class="shop mt-4">
        <p
          class="h5 mb-4  pt-2 "
          style="color:#505263; font-size:15px; font-weight:bold; "
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
        <div class="check-box ml-0">
          <b-row class="ml-0 mr-0 mt-3">
            <b-col align="left" class="pl-0 pr-0">
              <div class="checkbox-container mb-3 mt-3">
                <input type="checkbox" name="checkbox" id="cb21" />
                <label for="cb21"
                  ><span class="ml-4" style="font-size:14px; color: #505263;">
                    Save this card for future use</span
                  ></label
                >
              </div>
            </b-col>
          </b-row>
        </div>
      </div>

      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Points
      </p>
      <div class="points p-2">
        <p
          class="mr-4 mt-2"
          align="left"
          style="color:#8a8a90; font-size:16px;"
        >
          Available
        </p>
        <p class="mt-2" style="font-size:16px;">
          200=<span style="color:#59b675; font-size:16px;">$2.00</span>
        </p>
        <button class="redeem ml-5 ">Redeem</button>
      </div>

      <p
        class="h5 mb-2  pt-4 "
        style="color:#505263; font-weight:bold"
        align="left"
      >
        Promo Code
      </p>
      <div class="shop mt-3">
        <p class="mb-0" style="color:#606169; font-size:15px;">
          Paul20
          <span style="float:right;">
            <b-icon icon="check-circle-fill" variant="success"></b-icon
          ></span>
        </p>
      </div>
      <p
        class="mt-2"
        style="color:#87878d; font-weight:bold; margin-bottom:60px; font-size:15px; "
        align="left"
      >
        Discount on code = <span style="color:#59b675">$4.00</span>
      </p>

      <p align="left" style="color:#87878d; font-size:18px; " class="m-0">
        Prepration Time <span class="mr-2" style="float:right;">20mins.</span>
      </p>
    </div>
    <div class="footer-payment">
      <b-row>
        <b-col class="left justify-items-center" align="left"
          ><h5 class="mb-0" style="font-size:14px;">Total</h5>
          <h3 class="price-total m-0" style="font-size:20px;">$16.02</h3></b-col
        >
        <b-modal id="my-modal" hide-header="false" hide-footer="false">
          <Confirmation />
        </b-modal>
        <b-col class="justify-items-auto mt-2 ml-3 p-0" align="center"
          ><h5 class="right " v-b-modal="'my-modal'" style="font-size:20px;">
            Order Now
          </h5></b-col
        >
      </b-row>
    </div>
  </div>
</template>
<script>
import Nav3 from "../components/Nav3";
import Confirmation from "../components/Confirmation";
export default {
  name: "Payment",
  data: function() {
    return {
      person: "Paul Andrews",
    };
  },
  components: {
    Nav3,
    Confirmation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
#Payment {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f8f8f8;
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
.dropdown {
  position: relative;
}
.dropdown:hover .dropdown-list {
  opacity: 1;
  visibility: visible;
}
.dropdown-select {
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  cursor: pointer;
  color: rgb(132, 133, 141);
}
.dropdown-list {
  background-color: white;
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear, visibility 0.2s linear;
}
.dropdown-list_item {
  font-size: 13px;
  padding: 10px;
  color: rgb(132, 133, 141);
}
.dropdown-list_item:hover {
  font-size: 13px;
  padding: 5px;
  color: white;
  background-color: #007585;
}
.footer-payment {
  background-color: #007585;
  padding: 8px;
  color: white;
  padding: 10px 20px;
  margin-top: auto;
}
.shop {
  background-color: white;
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid #dfdbd9;
  text-align: left;
  padding: 10px 15px;
  font-weight: bold;
}
.cardnumber {
  border: 1px solid #dbd6d3;
  width: 100%;
  border-radius: 8px;
  color: black;
}
.cardnumber::placeholder {
  color: #cbcbcb;
  font-size: 15px;
  font-weight: 400;
}
.expiry {
  color: #505263;
  font-size: small;
  margin-top: 10px;
}

/* checkbox styling */

/* checkbox style */
.checkbox-container {
  display: flex;
  align-items: center;
}
.checkbox-container label {
  cursor: pointer;
  display: flex;
  color: dimgrey;
  font-size: 16px;
  font-weight: bold;
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

.checkbox-container input[type="checkbox"]:checked + label::before {
  content: "\002714";
  background-color: #3797a4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
/* points */
.points {
  display: flex;
}
.redeem {
  background: white;
  color: #4095a2;
  border: 1px solid #e4e1df;
  border-radius: 7px;
  height: 30px;
  width: 100%;
  padding: 8px 20px;
  font-size: 16px;
  height: 20%;
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
  margin-left: 18px;
  padding: 0;
  font-size: 25px;
}
</style>
