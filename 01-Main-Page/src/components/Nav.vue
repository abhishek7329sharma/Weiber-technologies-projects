<template>
  <div class="container p-2  navabar" align="right">
    <b-nav type="dark" align="right">
      <b-nav-item class=""><a href="" class="nav-bar ">Sign in</a></b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>

<style>
/* navbar styling */

a.nav-bar {
  color: #32364b;
  font-weight: bold;
  text-decoration: none;
}
a.nav-bar:hover {
  color: #505250;

  text-decoration: none;
}
</style>
