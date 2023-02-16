<script >

import Navbar from "./components/Navbar.vue"
export default{
  components:{Navbar}
}
</script>

<template> 
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>

</style>
