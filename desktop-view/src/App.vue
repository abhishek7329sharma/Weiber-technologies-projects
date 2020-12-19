<template>
  <!-- APP CONTAINERS STARTS -->
  <div id="app">
    <!-- NAVBAR STARTS -->
    <div id="nav" class="">
      <b-container fluid class="bv-example-row">
        <b-row class="p-2">
          <b-col cols="sm-8" style="display:flex; align-items:center;" class="">
            <b-avatar
              class="mr-3"
              src="https://placekitten.com/640/360"
              size="6rem"
            ></b-avatar>
            <!-- DESCRIPTION OF SHOP -->
            <div class="header mt-2 ">
              <!-- SHOP NAME -->
              <h6 style="font-weight:bold; color:#404356;">
                Cafe Canopic
                <b-badge pill variant="success" size="xm">OPEN</b-badge>
              </h6>
              <!-- SHOP ADDRESS -->
              <h6 style="color:#808080; font-weight:bold;">
                Warehum
                <b-icon
                  icon="pencil-square"
                  font-scale="1"
                  class="icon"
                ></b-icon>
              </h6>
              <p style="color:#a3a3a3; font-size:smaller;">
                24 Long Neck Road, Wareham, MA, 02050
              </p>
            </div>
          </b-col>
          <b-col cols="sm-4" align="right" class="mt-auto mb-auto pr-3">
            <div class="person">
              <b-button class="signin">
                <b-icon
                  icon="person"
                  font-scale="1.3"
                  variant="danger"
                ></b-icon>
                Sign in
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- NAVBAR ENDS -->

    <!-- ......................................... -->

    <!-- MAIN CONTAINER STARTS -->
    <div class="main-container ">
      <b-container fluid class="">
        <b-row class="mt-4">
          <!-- LEFT CONTAINER STARTS-->
          <b-col cols="3 ">
            <div class=" sidebar ml-3 mr-5">
              <ul>
                <!-- Used v-for for items using LIST RENDERING METHOD -->
                <li href="" v-for="items in item" :key="items">
                  {{ items }}
                </li>
              </ul>
            </div>
          </b-col>
          <!-- LEFT CONTAINER ENDS-->

          <!-- ................................ -->

          <!-- MIDDLE CONTAINER STARTS-->
          <b-col
            cols="6 
          "
            style="font-weight:bold; padding-top:5px;"
          >
            <!-- PRODUCT NAME  -->
            <h5 class="heading">Iced Drink</h5>
            <!-- Used v-for for products using LIST RENDERING METHOD -->
            <div
              class="Item mb-5 shadow bg-white"
              v-b-modal.modal-tall
              v-for="product in products"
              :key="product"
            >
              <b-avatar
                :src="product.image"
                class="mr-3"
                size="7em"
                style="margin-top:-3%; margin-left:-3%;"
              >
              </b-avatar>
              <div class=" item-title">
                <span>{{ product.title }}</span>
              </div>
              <div class="mt-auto mb-auto ml-auto mr-3">
                <span class="mr-4 price">{{ product.price }}</span>
                <button class="heartfill">
                  <b-icon icon="heart-fill"></b-icon>
                </button>
              </div>
            </div>
            <b-modal
              id="modal-tall"
              title="Overflowing Content"
              hide-footer="false"
              hide-header="false"
            >
              <p class="m-0">
                <ModalPopUp />
              </p>
            </b-modal>
          </b-col>
          <!-- MIDDLE CONTAINER ENDS-->
          <!-- ............................. -->
          <!-- RIGHT CONTAINER STARTS-->
          <b-col cols="3" class="p-0">
            <div class="shrink-button">
              <button @click="toggle = !toggle">
                <b-icon
                  icon="chevron-double-right"
                  font-scale="1"
                  class="h2"
                ></b-icon>
              </button>
            </div>
            <div class="right-container" v-show="toggle">
              <EmptyCart v-show="!EmptyCart" />
            </div>
          </b-col>
          <!-- RIGHT CONTAINER ENDS-->
        </b-row>
      </b-container>
    </div>
    <!-- MAIN CONTAINER ENDS -->
  </div>
  <!-- APP CONTAINER ENDS -->
</template>

<script>
import EmptyCart from "./components/EmptyCart";
import ModalPopUp from "./components/ModalPopUp";
export default {
  components: {
    EmptyCart,
    ModalPopUp,
  },
  data() {
    return {
      toggle: true,
      EmptyCart: false,
      // ITEMS DETAILS
      item: [
        "All",
        "Iced Drinks",
        "Hot Drinks",
        "Tea",
        "Baked Goods",
        "Breakfast",
        "Lunch",
        "Bagels",
        "Favorites",
      ],
      // PRODUCT DETAILS
      products: [
        {
          title: "Iced Latte",
          price: "$5.06",
          image: "https://placekitten.com/640/360",
        },
        {
          title: "Iced Mocha",
          price: "$5.72",
          image: "https://placekitten.com/640/360",
        },
        {
          title: "Cold Brew",
          price: "$5.28",
          image: "https://placekitten.com/640/360",
        },
        {
          title: "Iced Macha Latte",
          price: "$6.27",
          image: "https://placekitten.com/640/360",
        },
      ],
    };
  },
};
</script>
