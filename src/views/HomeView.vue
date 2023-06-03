<template>
  <div class="home mt-8">
  	<div class="flex justify-center">
    	<img alt="Dorid logo" src="../assets/logo.png">  		
  	</div>
    <HelloWorld msg="Мы ценим ваше время"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
