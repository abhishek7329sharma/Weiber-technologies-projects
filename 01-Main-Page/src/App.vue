<template>
  <div id="app">
    <div class="container p-0">
      <div class="container pl-0 pr-0 pt-1 pb-1  navabar" align="right">
        <b-nav type="dark" align="right" class="">
          <b-nav-item class="">
            <a href="" class="nav-bar ">Sign in</a></b-nav-item
          >
        </b-nav>
      </div>
    </div>

    <!-- Header -->
    <div class="container header">
      <div class="row h-100 p-2">
        <div class="col-4 h-100 p-1">
          <b-avatar
            src="https://lorempixel.com/output/food-q-c-640-480-3.jpg"
            size="6rem"
          ></b-avatar>
        </div>
        <div class="col-8 h-100 p-1 ">
          <h5 class="shop-name m-0" align="center">
            Cafe Canopic
            <h6 align="center">
              <b-badge class="open" pill variant="success" align="fill"
                >OPEN</b-badge
              >
            </h6>
          </h5>
          <p class="pt-1 m-0 mb-1" style="font-weight:normal; color:black;">
            24 Long Neck Road, Wareham, MA, 02050
          </p>

          <div class="badge">
            <h6><b-badge pill variant="light mr-2">Today</b-badge></h6>

            <b-icon
              variant="primary"
              icon="pencil-square"
              font-scale="1"
            ></b-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- menu -->
    <div class="container menu h-100 pt-2 pl-4 pr-4 mb-auto">
      <div class="row p-2 align-content-center">
        <div class="col-6 align-content-center ">
          <h5 class="menu-heading">Menu</h5>
        </div>
        <div class="col-6 align-content-right" align="right">
          <b-dropdown
            id="dropdown-1"
            text="Iced Drink"
            align="right"
            variant="outline-dark"
            size="sm"
            class="m-md-5"
          >
            <b-dropdown-item>Iced Drinks</b-dropdown-item>
            <b-dropdown-item>Coffee</b-dropdown-item>
            <b-dropdown-item>Tea</b-dropdown-item>
            <b-dropdown-divider variant="light"></b-dropdown-divider>
            <b-dropdown-item>Donots</b-dropdown-item>
            <b-dropdown-item>Cakes</b-dropdown-item>
            <b-dropdown-item>Biscuits</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="p-1" style="background:transparent;">
        <p class="menu-item mt-2 mb-2">
          Iced Drinks
        </p>
        <b-modal
          ref="my-modal"
          hide-footer
          hide-header
          centered
          no-fade="false"
        >
          <div class="d-block ">
            <CartPopup />
          </div>
        </b-modal>
        <button
          block
          id="toggle-btn"
          @click="toggleModal"
          class="main-screen p-0 w-100 mb-3"
        >
          <div class="row sub-item  pt-3 pb-3    bg-white rounded">
            <div class="col-6" align="left">
              Iced Latte
            </div>
            <div class="col-6 price-main-screen" align="right">$5.06</div>
          </div>
        </button>
        <button
          block
          id="toggle-btn"
          @click="toggleModal"
          class="main-screen p-0 w-100 mb-3"
        >
          <div class="row sub-item  pt-3 pb-3 shadow-sm  bg-white rounded">
            <div class="col-6" align="left">Iced Mocha</div>
            <div class="col-6 price-main-screen" align="right">$5.72</div>
          </div>
        </button>
        <button
          block
          id="toggle-btn"
          @click="toggleModal"
          class="main-screen p-0 w-100 mb-3"
        >
          <div class="row sub-item  pt-3 pb-3  shadow-sm  bg-white rounded">
            <div class="col-6" align="left">Iced Brew</div>
            <div class="col-6 price-main-screen" align="right">$5.28</div>
          </div>
        </button>
        <button
          block
          id="toggle-btn"
          @click="toggleModal"
          class="main-screen p-0 w-100 mb-5"
        >
          <div class="row sub-item  pt-3 pb-3  shadow-sm  bg-white rounded">
            <div class="col-6" align="left">Iced Mocha Latte</div>
            <div class="col-6 price-main-screen" align="right">$6.27</div>
          </div>
        </button>
      </div>
    </div>

    <!-- footer -->

    <div class="footer pl-3 pr-2">
      <div class="row m-0 ">
        <div class="col-6 p-0 text-left ">
          <h4>
            <b-badge variant="light">2 </b-badge>
          </h4>
          <b-icon icon="cart4" style="color:white;" font-scale="2"> </b-icon>
        </div>

        <div class="view-cart col-6 pr-0 " align="right">
          <b-button @click="$bvModal.show('modal-scoped')">View Cart</b-button>

          <b-modal
            id="modal-scoped"
            hide-header="false"
            hide-footer="false"
            centered="false"
          >
            <template #default="{ hide }">
              <div id="YourOrder">
                <b-container>
                  <b-row class="p-2">
                    <b-col align="left" class="">
                      <p class="yourcart mt-2">Your cart</p>
                    </b-col>
                    <b-col align="right" class=" ">
                      <p
                        class="mt-auto"
                        style="font-weight:bold; color: #3797a4 !imortant;"
                      >
                        <button @click="hide()" class="your-order btn btn-md">
                          <b-icon icon="x" font-scale="1.5" style=""></b-icon
                          >Close
                        </button>
                      </p>
                    </b-col>
                  </b-row>
                </b-container>
                <b-container class="mb-0">
                  s
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
                    <b-row class="mt-5 mb-4">
                      <b-col align="left" style="color:#2a2e44;"
                        >Prepration Time</b-col
                      >
                      <b-col align="right" style="color:#2a2e44;"
                        >20mins.</b-col
                      >
                    </b-row>
                  </div>
                </b-container>
                <div id="" class="Your-Order-Footer ">
                  <b-row class="p-2 mt-auto mb-auto ">
                    <b-col class="left d-flex flex-column ml-2 mt-auto"
                      ><p class="mb-0" align="left" style="color:white;">
                        Total
                      </p>
                      <p class="price-total m-0 ">$20.02</p></b-col
                    >

                    <!-- The modal -->

                    <b-col cols="8" class="mt-auto"
                      ><p
                        class=" btn btn-md checkout mb-0 ml-1"
                        style="color:white; font-size:18px; font-weight:bold;"
                      >
                        Proceed to checkout
                      </p></b-col
                    >
                  </b-row>
                </div>
              </div>
            </template>
          </b-modal>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import CartPopup from "./components/CartPopup.vue";

// import YourOrder from "./components/YourOder";
export default {
  components: { CartPopup },
  name: "App",
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<style>
/* ID selector */
#app {
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
  padding-bottom: 58px;
}

/* ELEMENT Selector */
h1 {
  margin: 0;
}
h4 {
  margin: 0;
  display: inline;
}
h5 {
  margin: 0;
  display: inline;
}
h6 {
  display: inline;
  font-size: 8;
  text-align: center;
}
p {
  color: rgb(173, 166, 166);
  font-size: 62%;
  font-weight: bold;
}

/* CLASS Selector */

a.nav-bar {
  color: #32364b;
  font-weight: 500;
  text-decoration: none;
}
a.nav-bar:hover {
  color: #505250;

  text-decoration: none;
}
/* Header section */
.header {
  border: 1px solid rgb(228, 223, 223);
  border-right: none;
  border-left: none;
}
.shop-name {
  font-size: 17px;
  font-weight: 600;
}

/* Schedule Section */

/* menu section */
.menu {
  background-color: #f5f8f6;
  text-align: left;
}
.menu-heading {
  color: #797979;
  position: inline;
}
.dropdown {
  position: inline;
  padding-right: 0%;
  background-color: #fff;
}

.menu-item {
  color: rgb(87, 87, 84);
  text-align: left;
  font-size: 16px;
}

.sub-item {
  background-color: #fff;
  font-family: "Lato", sans-serif;
  font-family: "Noto Sans", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: #60616c;
  font-weight: 600;

  border: 1px solid #ebeef4;
}
#YourOrder .price {
  color: #60616c !important;
  font-weight: bold !important;
  font-size: medium !important;
}
.price-main-screen {
  color: #007585;
  font-weight: 600;
}
/* footer */

.footer {
  background-color: #ed7976 !important;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: auto;
}
.view-cart {
  color: #fff;
}
.notification {
  border-radius: 50%;
  padding: 6px;
  background: rgb(248, 24, 24);
  border: none;
  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-family: "Noto Sans", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}

/* Prestyling */

.badge .badge-light {
  color: #35384c !important;
  background-color: #f0ebe9 !important;
}
.footer .badge-light {
  color: white !important;
  background-color: #f6423e !important;
  border-radius: 50%;
  margin-right: 10px;
}
.text-primary {
  color: #2b8c9a !important;
}
.btn-outline-dark {
  color: #afafaf !important;
  border-color: #ebe8e7 !important;
}

/* modal css */
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0 !important;
  pointer-events: none;
}
.btn .btn-md .checkout {
  color: white;
}
.left .price-total {
  color: white;
  font-size: 22px;
}
.main-screen {
  background-color: none;
  border-color: none;
  border: none;
}
.your-order {
  color: #007585 !important;
}
/* Your order styling starts */
#YourOrder {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
  font-family: sans-serif;
}
.Your-Order-Footer {
  background-color: #007585 !important;
  /* display: flex;
  flex-direction: column; */
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.yourcart {
  color: black;
  font-size: large;
}
/* header section */
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
  border: 1px solid #3797a4;
  background-color: white;
  color: #3797a4;
  cursor: pointer;
}
.qtyBox:active {
  color: white;
  background-color: #3797a4;
  border-radius: 50%;
}
.qtyBox:hover {
  color: white;
  background-color: #3797a4;
  border-radius: 50%;
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

/* Your order styling ends */
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 0 !important;
}
.modal-footer {
  display: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.view-cart .btn-secondary {
  color: #fff;
  background-color: #ed7976 !important;
  border-color: #ed7976 !important;
}
.view-cart .btn-secondary:hover {
  border: none;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  margin-left: 56px !important;
  color: rgb(22, 165, 165) !important;
}
.btn-outline-dark:not(:disabled):not(.disabled):active,
.btn-outline-dark:not(:disabled):not(.disabled).active,
.show > .btn-outline-dark.dropdown-toggle {
  color: white !important;
  background-color: rgb(150, 223, 223) !important;
  border-color: rgb(150, 223, 223) !important;
}
.modal-open .modal {
  top: 50px;
}
</style>
