<template>

		<nav class="w-screen flex justify-center pt-4">
		    <div class="flex justify-between items-center flex-wrap space-x-6 bg-green-500 rounded-full p-2" 
		    style="box-shadow: 1px 1px 7px green; z-index: 3">
		    		<router-link :class="[link_classes, {'active-link': $route.path == '/time'}]" to="/home" @click="navigate('home')">
		    			<img src="@/assets/bus.svg" width="35" />
		    			<button>Время</button>
		    		</router-link>

		    		<router-link :class="[link_classes, {'active-link': $store.state.theTab == 'search' ? true : false}]" to="/search" @click="navigate('search')">
		    			<img src="@/assets/route-square.svg" width="35" />
		    			<button>Маршруты</button>
		    		</router-link> 

		    		<router-link :class="[link_classes, {'active-link': $store.state.theTab == 'profile' ? true : false}]" to="/profile" @click="navigate('profile')">
		    			<img src="@/assets/data-2.svg" width="35" />
		    			<button>Информация</button>
		    		</router-link> 

		    		<router-link :class="[link_classes, {'active-link': $store.state.theTab == 'invest' ? true : false}]" to="/invest" @click="navigate('invest')">
		    			<img src="@/assets/setting.svg" width="35" />
		    			<button>Настройки</button>
		    		</router-link> 

		    		
		    </div>
	  </nav>

</template>
<script>

	import '@/assets/tailwind.css'

	export default {
		name: 'NavBar',
		data: () => ({
			link_classes: [
				'text-white',
				'font-bold', 
				'p-2' ,
				'flex', 
				'space-x-2', 
				'items-center',
				'hover:bg-green-400',
				'rounded-full'
			]

		}),
		methods: {
			navigate(to) {
				this.$store.state.theTab = to;
			}
		},
	
	}
</script>
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  .active-link {
      color: #000;
      background: #fff;
      border-radius: 44px;
   }

}
</style>