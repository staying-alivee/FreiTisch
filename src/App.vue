<template>
  <nav>
    <RouterLink to="/"> Home </RouterLink> 
    <RouterLink to="/login"> Login </RouterLink> 
    <RouterLink to="/register"> Register </RouterLink> 
  </nav>
  <main>
  <router-view/>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
