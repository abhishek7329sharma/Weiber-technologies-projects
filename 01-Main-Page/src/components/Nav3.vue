<template>
  <div id="nav3">
    <b-container fluid="sm" class="">
      <b-row class="pt-3 pr-3 pl-3 pb-0">
        <b-col align="left" class="p-2 ">
          <p
            @click="hideModal()"
            class="h5 mb-2 "
            style=" color: #057484; font-size:20px"
          >
            <b-icon icon="chevron-left" font-scale="1" style=""></b-icon>Back
          </p>
        </b-col>

        <b-col align="right" class="p-2 text-align-center ">
          <p class="h5 mb-2 " style="font-weight:normal; color: black;">
            <b-icon icon="house-door-fill" font-scale="1" style=""></b-icon>
            Paul
            <b-icon icon="chevron-down" font-scale="1" style=""></b-icon>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Nav3",
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style>
/* navbar styling */
/* ELEMENTS SELECTOR */
.yourcart {
  font-weight: bold;
  font-size: larger;
}
#nav3 {
  background-color: white;
}
</style>
