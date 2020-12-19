<template>
  <div>
    <b-container class="p-0">
      <b-row>
        <b-col class="price">{{ msg }}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: ["msg"],
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@100;400&display=swap");
.price {
  color: #157181 !important;
  font-weight: bold !important;
  /* font-size: large; */
  text-align: right;
  display: relative;
  font-family: "Poppins", sans-serif;
}
.row {
  display: flex;
  flex-wrap: wrap;
  /* margin-right: -15px; */
  /* margin-left: -15px; */
}
</style>
