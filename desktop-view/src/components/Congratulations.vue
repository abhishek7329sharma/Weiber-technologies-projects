<template>
  <div>
    <div class="container ">
      <b-icon
        icon="check-circle"
        font-scale="7.5"
        variant="success"
        class="pt-3 mt-5"
        animation="fade"
      ></b-icon>
      <h5 class="congratulations">Congratulations</h5>
      <p class="description">
        Your order will be ready for pickup in 18-20 mins.
      </p>

      <b-row>
        <b-col cols="4">
          <p class="schedule m-0">How</p>
          <p class="bold-liner m-0">Pickup</p>
        </b-col>
        <b-col cols="8">
          <p class="schedule m-0 ">When</p>
          <p class="bold-liner m-0">Thurday, Sept 23, 2020, 3:20 PM</p>
        </b-col>
      </b-row>

      <p class="where-where m-0 mt-5">Where</p>
      <p class="where-heading m-0">Cafe Canopic</p>
      <p class="where-para m-0">
        24 Long Neck Road, Warehum, <br />
        MA 02050
      </p>
      <p class="where-para m-0 mt-2">Phone:(888) 123 1234</p>
    </div>
    <p class=" help mb-5">
      <b-icon icon="life-preserver" class="mr-2"> </b-icon>Help with this order
    </p>
  </div>
</template>

<script>
export default {
  name: "Congratulations",
};
</script>
