<template>
  <div id="Confirmation">
    <Nav4 />
    <div class="main-container-confirmation">
      <div class="container  " style="text-align:center;">
        <b-icon
          icon="check-circle"
          font-scale="7.5"
          variant="success"
          class="pt-3 mt-5"
          animation="fade"
        ></b-icon>
        <h2 class="congratulations">Congratulations</h2>
        <h4 class="description-confirmation">
          Your order will be ready for pickup in 18-20 mins.
        </h4>
        <hr />
        <b-row>
          <b-col cols="4" class=" flexing">
            <h5 class="schedule">How</h5>
            <h5 class="bold-liner">Pickup</h5>
          </b-col>
          <b-col cols="8" class="flexing">
            <h5 class="schedule ">When</h5>
            <h5 class="bold-liner">Thurday, Sept 23, 2020, 3:20 PM</h5>
          </b-col>
        </b-row>

        <hr />
        <div class="flexing">
          <h5 class="where-where">Where</h5>
          <h5 class="where-heading">Cafe Canopic</h5>
          <p class="where-para">24 Long Neck Road, Warehum, MA 02050</p>
          <p class="where-para">Phone:(888) 123 1234</p>
          <p class=" h3 help mb-5 mt-5 ">
            <b-icon icon="life-preserver" variant="info" class="mr-2"> </b-icon
            >Help with this order
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav4 from "../components/Nav4";
export default {
  name: "Confirmation",
  components: {
    Nav4,
  },
};
</script>
<style lang="scss">
#Confirmaton {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main-container-confirmation {
  background: rgb(235, 233, 233);

  padding: 15px 5px;
}
.flexing {
  display: flex;
  flex-direction: column;
}
.container {
  background: white;
  padding-bottom: 15px;
}
.congratulations {
  color: rgb(44, 43, 43);
  margin-top: 20px;
}
.description-confirmation {
  color: rgb(44, 43, 43);
  font-size: 20px;
  margin-bottom: 40px;
}

.schedule {
  color: rgb(88, 86, 86);
  text-align: left;
}
.bold-liner {
  color: rgb(88, 86, 86);
  font-weight: bold;
  text-align: left;
  font-size: 17px;
  line-height: 18px;
}
.where-where {
  color: #b1b5b6;
  font-size: normal;
  font-weight: 100;
}
.where-heading {
  color: rgb(88, 86, 86);
  font-weight: bold;

  font-size: 20px;
  line-height: 18px;
}
.where-para {
  color: #a3a2a6;
  font-size: medium;
  font-weight: 100;
  line-height: 1rem;
}
.help {
  color: rgb(51, 49, 49);
  font-weight: normal !important;
}
</style>
