<template>
  <div>
    <div>
      <b-container>
        <div class="main-container pl-3 pr-3  pt-3">
          <h6 class="modal-heading  mb-3">
            Iced Latte
            <div class="float-right">
              <span class="mr-4 modal-price">$5.06</span>
              <button class="modal-heartfill">
                <b-icon icon="heart-fill"></b-icon>
              </button>
            </div>
          </h6>

          <p class="  modal-description" align="left">
            Smooth and refreshing, the iced latte espresso, milk, ice cubes and
            a flovourable syrup if you like. It's sort of the middle ground
            between the plain iced coffee and the decadent Frapuccino.
          </p>
          <Price :msg="message"></Price>
          <hr />
          <div align="left mr-auto">
            <h6 class="modal-heading-option ">Choose the size</h6>
            <div class="option-modal">
              <input type="radio" name="radio" id="check1" />
              <label for="check1">16 oz</label>
            </div>
            <div class="option-modal">
              <input type="radio" name="radio" id="check2" />
              <label for="check2">24 oz</label>
            </div>
          </div>

          <hr />

          <div align="left">
            <h6 class="modal-heading-option ">Milk and Creamers</h6>
            <div class="check-box">
              <b-row>
                <b-col cols="5" align="left" class="pl-0 pr-0">
                  <div class="modal-checkbox-container mb-3 mt-3">
                    <input type="checkbox" name="checkbox" id="cb1" />
                    <label for="cb1">Milk</label>
                  </div>
                  <div class="modal-checkbox-container mb-3">
                    <input type="checkbox" name="checkbox" id="cb2" />
                    <label for="cb2">Cream</label>
                  </div>
                  <div class="modal-checkbox-container mb-3">
                    <input type="checkbox" name="checkbox" id="cb3" />
                    <label for="cb3">Oat Milk</label>
                  </div>
                  <div class="modal-checkbox-container mb-3">
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
            <h6 class="modal-heading-option ">Sweetners</h6>
            <div class="check-box">
              <b-row>
                <b-col cols="5" align="left" class="pl-0 pr-0">
                  <div class="modal-checkbox-container mb-3 mt-3">
                    <input type="checkbox" name="checkbox" id="cb5" />
                    <label for="cb5">Sugar</label>
                  </div>
                  <div class="modal-checkbox-container mb-3">
                    <input type="checkbox" name="checkbox" id="cb6" />
                    <label for="cb6">Raw Sugar</label>
                  </div>
                  <div class="modal-checkbox-container mb-3">
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
            <h6 class="modal-heading-option ">Add Espresso</h6>
            <div class="check-box">
              <b-row>
                <b-col cols="5" align="left" class="pl-0 pr-0">
                  <div class="modal-checkbox-container mb-3 mt-3">
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
            <h6 class="modal-heading-option ">Special Instructions</h6>
            <b-form-textarea
              id="textarea-auto-height"
              class=" mt-4 mb-4"
              placeholder=""
              rows="3"
              max-rows="8"
            ></b-form-textarea>
          </div>
          <b-row class="ml-0 mr-0 pb-4 justify-content-center">
            <button class="modal-qtyBox" @click="modalSub">-</button>
            <input
              class="modal-qtyBox__input"
              type="text"
              name="incdec"
              id="qtyBox"
              readonly=""
              v-bind:value="count"
            />
            <button class="modal-qtyBox" @click="modalAdd">+</button>
          </b-row>
        </div>
        <div class="pl-3 pr-3">
          <p
            align="left"
            style="color:#75767d; font-size:12px; font-weight:bold;"
            class="m-0 mt-3"
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
            style="font-size:small; color:#8d8d92; font-weight:bold; text-align:center;"
          >
            Total
          </p>
          <p
            class="m-0"
            style="color:#f4b2b1; font-weight:bold; text-align:center;"
          >
            $12.62
          </p>
        </div>
      </b-container>
    </div>
    <div class="modal-footer">
      <p
        class="text-center m-0"
        style="color:white; font-weight:bold; font-size:15px;"
      >
        <!-- @click="$bvModal.show('modal-scoped')" -->
        <button>
          Add to cart
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    modalSub: function() {
      this.count--;
    },
    modalAdd: function() {
      this.count++;
    },
  },
};
</script>
