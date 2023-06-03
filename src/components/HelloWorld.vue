<template>
  <div class="grid justify-center items-center md:px-64 sm:px-8 mb-16 md:px-2">
    <div class="hello my-8">
      <button class="bg-green-500 text-white hover:bg-green-600 rounded-xl p-4 text-xl font-black" @click="$router.push('/login')">
        Начать
      </button>
      <h1 class="text-2xl font-black mt-8">{{ msg }}</h1>
    </div>

    <div class="flex justify-center space-x-4 items-start" style="max-width: 300px">
      <div class="flex flex-col justify-center items-center shadow-lg p-8 border-2 rounded-lg space-y-2">
        <img src="@/assets/bus.svg" width="86">
        <h1 class="text-lg font-bold">Узнавате время прибытия нужного вам общественного транспорта</h1>
      </div>
      <div class="flex flex-col justify-center items-center shadow-lg p-8 border-2 rounded-lg space-y-2" style="max-width: 300px">
        <img src="@/assets/route-square.svg" width="86">
        <h1 class="text-lg font-bold">Получайте информацию о маршрутах вашего города</h1>
      </div>
      <div class="flex flex-col justify-center items-center shadow-lg p-8 border-2 rounded-lg space-y-2" style="max-width: 300px">
        <img src="@/assets/data-2.svg" width="86">
        <h1 class="text-lg font-bold">Контактируйте с водителем</h1>
      </div>      
        
    </div>

  </div>

</template>

<script>

  import '@/assets/tailwind.css'

  export default {
    
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->














<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
