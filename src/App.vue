<template>
  <div id="app">
    <navbar />
    <sidebar class="sidebar" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: { Navbar, Sidebar }
}
</script>

<style>
  .sidebar {
    position: fixed;
    min-height: 400px;
    margin: 10px;
  }
</style>
