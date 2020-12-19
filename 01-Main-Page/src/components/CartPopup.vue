<template>
  <div id="CartPopup">
    <div id="nav">
      <Nav2 />
    </div>
    <b-container>
      <div class="main-container pl-1 pr-1  pt-3">
        <h5 class=" heading  mb-3">Iced Latte</h5>
        <p class="  description" align="left">
          Smooth and refreshing, the iced latte espresso, milk, ice cubes and a
          flovourable syrup if you like. It's sort of the middle ground between
          the plain iced coffee and the decadent Frapuccino.
        </p>
        <Price :msg="message"></Price>
        <hr />
        <div align="left mr-auto">
          <h5 class="heading-option mb-3">Choose the size</h5>
          <div class="option">
            <input type="radio" name="radio" id="check1" />
            <label for="check1">16 oz</label>
          </div>
          <div class="option">
            <input type="radio" name="radio" id="check2" />
            <label for="check2">24 oz</label>
          </div>
        </div>

        <hr />

        <div align="left">
          <h5 class="heading-option mb-3">Milk and Creamers</h5>
          <div class="check-box">
            <b-row>
              <b-col cols="5" align="left" class="pl-0 pr-0">
                <div class="checkbox-container mb-3 mt-3">
                  <input type="checkbox" name="checkbox" id="cb1" />
                  <label for="cb1">Milk</label>
                </div>
                <div class="checkbox-container mb-3">
                  <input type="checkbox" name="checkbox" id="cb2" />
                  <label for="cb2">Cream</label>
                </div>
                <div class="checkbox-container mb-3">
                  <input type="checkbox" name="checkbox" id="cb3" />
                  <label for="cb3">Oat Milk</label>
                </div>
                <div class="checkbox-container mb-3">
                  <input type="checkbox" name="checkbox" id="cb4" />
                  <label for="cb4">Soy Milk</label>
                </div>
              </b-col>

              <b-col cols="7" align="center" class="pl-0 pr-0">
                <div class="quantity mt-3">
                  <div class="radio mb-1">
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr1"
                    />
                    <label class="radio__label" for="mr1">Light</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr2"
                    />
                    <label class="radio__label" for="mr2">Regular</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr3"
                    />
                    <label class="radio__label" for="mr3">Extra</label>
                  </div>
                </div>
                <div class="quantity mt-3">
                  <div class="radio mb-1 ">
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr4"
                    />
                    <label class="radio__label" for="mr4">Light</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr5"
                    />
                    <label class="radio__label" for="mr5">Regular</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr6"
                    />
                    <label class="radio__label" for="mr6">Extra</label>
                  </div>
                </div>
                <div class="quantity mt-3">
                  <div class="radio mb-1 ">
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr7"
                    />
                    <label class="radio__label" for="mr7">Light</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr8"
                    />
                    <label class="radio__label" for="mr8">Regular</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr9"
                    />
                    <label class="radio__label" for="mr9">Extra</label>
                  </div>
                </div>
                <div class="quantity mt-3">
                  <div class="radio ">
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr10"
                    />
                    <label class="radio__label" for="mr10">Light</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr11"
                    />
                    <label class="radio__label" for="mr11">Regular</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr12"
                    />
                    <label class="radio__label" for="mr12">Extra</label>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>

        <hr />
        <div align="left">
          <h5 class="heading-option mb-3">Sweetners</h5>
          <div class="check-box">
            <b-row>
              <b-col cols="5" align="left" class="pl-0 pr-0">
                <div class="checkbox-container mb-3 mt-3">
                  <input type="checkbox" name="checkbox" id="cb5" />
                  <label for="cb5">Sugar</label>
                </div>
                <div class="checkbox-container mb-3">
                  <input type="checkbox" name="checkbox" id="cb6" />
                  <label for="cb6">Raw Sugar</label>
                </div>
                <div class="checkbox-container mb-3">
                  <input type="checkbox" name="checkbox" id="cb7" />
                  <label for="cb7">Simple Syrup</label>
                </div>
              </b-col>

              <b-col cols="7" align="center" class="pl-0 pr-0">
                <div class="quantity mt-3">
                  <div class="radio mb-1">
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr13"
                    />
                    <label class="radio__label" for="mr13">Light</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr14"
                    />
                    <label class="radio__label" for="mr14">Regular</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr15"
                    />
                    <label class="radio__label" for="mr15">Extra</label>
                  </div>
                </div>
                <div class="quantity mt-3">
                  <div class="radio mb-1 ">
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr16"
                    />
                    <label class="radio__label" for="mr16">Light</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr17"
                    />
                    <label class="radio__label" for="mr17">Regular</label>
                    <input
                      class="radio__input"
                      type="radio"
                      name="myRadio"
                      id="mr18"
                    />
                    <label class="radio__label" for="mr18">Extra</label>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>

        <hr />
        <div align="left">
          <h5 class="heading-option mb-3">Add Espresso</h5>
          <div class="check-box">
            <b-row>
              <b-col cols="5" align="left" class="pl-0 pr-0">
                <div class="checkbox-container mb-3 mt-3">
                  <input type="checkbox" name="checkbox" id="cb8" />
                  <label for="cb8">Espresso</label>
                </div>
              </b-col>
              <b-col cols="7" class="mt-auto mb-auto" style="font-size:14px;"
                ><Price :msg="message1"></Price
              ></b-col>
            </b-row>
          </div>
        </div>
        <hr />
        <div align="left">
          <h5 class="heading-option mb-3">Special Instructions</h5>
          <b-form-textarea
            id="textarea-auto-height"
            class=" mt-4 mb-4"
            placeholder=""
            rows="3"
            max-rows="8"
          ></b-form-textarea>
        </div>
        <b-row class="ml-0 mr-0 pb-4 justify-content-center">
          <button class="qtyBox" id="sub">-</button>
          <input
            class="qtyBox__input"
            type="text"
            name="incdec"
            id="qtyBox"
            readonly=""
            value="0"
          />
          <button class="qtyBox " id="add">+</button>
        </b-row>
      </div>
    </b-container>
    <div id="footer-cartpopup" class="mt-4 pt-2 pb-2">
      <b-row>
        <b-col class="left mt-auto" align="left"
          ><h6 class=" item-total mb-0">Item Total</h6>
          <h3 class="price-total m-0">$12.62</h3></b-col
        >
        <b-col class=" mt-2" align="center">
          Add item to cart
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Nav2 from "./Nav2";
import Price from "./Price";

export default {
  name: "CartPopup",
  data() {
    return {
      showModal: true,
      message: "$5.06",
      message1: "$1.25",
    };
  },

  components: {
    Nav2,
    Price,
  },
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@100;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
.row {
  display: flex;
  flex-wrap: wrap;
  /* margin-right: -15px; */
  /* margin-left: -15px; */
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  border-top-right-radius: 25px !important;
  border-top-left-radius: 25px !important;
}

#CartPopup {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border-radius: 10px;
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
}
#footer-cartpopup {
  background-color: #ed7976;
  padding: 8px;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.modal-dialog {
  position: relative;
  width: auto;
  /* margin: 0.5rem; */
  pointer-events: none;
  border-radius: 10px;
}
/* CLASS SELECTOR */
.main-container {
  text-align: left;
  background-color: white !important;
  padding: none !important;
}
.heading {
  font-family: "Poppins", sans-serif;

  color: black;
  font-weight: bolder;
}
/* universal classes */
.heading-option {
  color: #54555e;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
}
.option {
  color: #47484b;
  font-size: medium;
  /* font-weight: bold; */
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
}
/* checkbok styling */
.option input[type="radio"] {
  display: none;
}
.option label {
  position: relative;
  cursor: pointer;
  padding: 5px;
}
.option label::before {
  content: "";
  border: 2px solid #3797a4;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: -8px 6px;
  margin-left: 0px;
  border-radius: 50%;
}
.option label::after {
  content: "";

  position: absolute;
  display: inline-block;
  background: rgba(55, 151, 164, 0.014);
  width: 16px;
  height: 16px;
  margin: -8px 20px;
  margin-left: 0px;
  border-radius: 50%;
  left: 9px;
  top: 18px;
  transition: all 0.4s;
}
.option input[type="radio"]:checked + label::after {
  background: rgba(55, 151, 164, 1);
}

.option input[type="radio"]:hover + label::after {
  background: rgba(55, 151, 164, 1);
}

/* checkbox style */
.checkbox-container {
  display: flex;
  align-items: center;
}
.checkbox-container label {
  cursor: pointer;
  display: flex;
  color: #47484b;
  font-size: 15px;
}
.checkbox-container input[type="checkbox"] {
  cursor: pointer;
  position: absolute;
  opacity: 0;
  display: hidden;
}
.checkbox-container label::before {
  content: "";
  width: 24px;
  height: 24px;
  border: 2px solid #3797a4;
  border-radius: 0.15em;
  margin-right: 8px;
  margin-left: 1.5em;
  margin-bottom: 0;
}

.checkbox-container input[type="checkbox"]:checked + label::before {
  content: "\002714";
  background-color: #3797a4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
}

/* Radio button Css */

/* button-group  */
.radio {
  display: inline-flex;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #ed7976;

  height: 28px;
}
.radio__input {
  display: none;
}

.radio__label {
  padding: 2px 10px;
  margin-bottom: 0px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: dimgrey;

  cursor: pointer;
  transition: background 0.1s;
}
.radio__label:not(:last-of-type) {
  border-right: 1px solid #ed7976;
}

.radio__input:checked + .radio__label {
  background: rgb(250, 96, 96);
  color: white;
}

.qtyBox {
  width: 25px;
  height: 25px;
  font-size: 14px;
  margin-top: -1px;
  margin-left: 1px;
  border-radius: 50%;
  outline: none;
  border: 2px solid #097a89;
  background-color: white;
  color: #097a89;
  cursor: pointer;
}
.qtyBox:active {
  color: white;
  background-color: #3797a4;
}
.qtyBox__input {
  border: none;
  width: 25px;
  height: 25px;
  outline: none;
  padding: 8px 0;
  text-align: center;
  color: dimgrey;
  font-size: 1.5em;
  margin: 0 0px;
  font-weight: bold;
  top: 1px;
  left: 1px;
}
/* 
/* need to be checked */
.univeral.heading {
  font-weight: bold;
}
.custom-nav {
  font-weight: bold;
}

/* description */

.description {
  color: #8f9095 !important;
  font-size: 13px !important;
  font-weight: bold;
  margin-top: 12px;
}
/* Options */

/* message */

.message {
  width: 100%;
  border-radius: 8px;
  height: 150px;
  border: 1px solid dimgrey;
  margin: 10px;
}

.footer {
  background-color: #ed7976;
  color: white;
  margin: auto;
}
.item-total {
  font-size: 12px;
  font-weight: normal;
}
.price-total {
  font-size: 20px;
  font-weight: bold;
}
</style>
