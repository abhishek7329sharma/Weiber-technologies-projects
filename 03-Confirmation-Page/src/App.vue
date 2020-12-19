<template>
  <div id="app">
    <Nav />
    <div class="main-container">
      <div class="container ">
        <b-icon
          icon="check-circle"
          font-scale="7.5"
          variant="success"
          class="pt-3 mt-5"
          animation="fade"
        ></b-icon>
        <h2 class="congratulations">Congratulations</h2>
        <h4 class="description">
          Your order will be ready for pickup in 18-20 mins.
        </h4>
        <hr />
        <b-row>
          <b-col cols="4">
            <h5 class="schedule">How</h5>
            <h5 class="bold-liner">Pickup</h5>
          </b-col>
          <b-col cols="8">
            <h5 class="schedule ">When</h5>
            <h5 class="bold-liner">Thurday, Sept 23, 2020, 3:20 PM</h5>
          </b-col>
        </b-row>

        <hr />

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
</template>
<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main-container {
  background: rgb(235, 233, 233);

  padding: 15px 5px;
}
.container {
  background: white;
  padding-bottom: 15px;
}
.congratulations {
  color: rgb(44, 43, 43);
  margin-top: 20px;
}
.description {
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
  color: rgb(88, 86, 86);
}
.where-heading {
  color: rgb(88, 86, 86);
  font-weight: bold;

  font-size: 20px;
  line-height: 18px;
}
.where-para {
  color: rgb(88, 86, 86);

  font-size: 18px;
}
.help {
  color: rgb(88, 86, 86);

  font-size: x-large;
}
</style>
