<template>
	<div class="flex justify-center">
		<Navigator/>
	</div>
	<div class="p-8 mx-64 border-2 rounded-xl" style="max-width: 750px">
		<h1 class="font-light text-grey text-xl">Ваше местоположение: <span class="font-black"><br>
			{{$store.state.location.latitude}}<br/>
			{{$store.state.location.longitude}}<br>
			{{$store.state.locInfo.text}}
		</span></h1>

		<div class="flex flex-col">
			<div class="bg-gray-200 rounded-xl rounded-b-none p-4 mt-8">
				<h1 class="font-bold text-xl align-start">Недавние маршруты</h1>
			</div>
			<div class="border-2 rounded-xl rounded-t-none p-4 space-y-4">

				<div class="flex items-center justify-between space-x-16" v-for="(route, index) in $store.state.routes.recent" :key="index">
						<div class="flex items-center space-x-4">
							<h1 v-html="route.number" class="border-2 p-2 font-bold text-2xl text-green-700 align-start">
							</h1>
							<h1 class="text-md">{{ route.routes }}</h1>
						</div>
						<button class="bg-green-500 text-white p-2 rounded-xl text-lg hover:bg-green-600">Перейти</button>
				</div>

			</div>
		</div>
			<div class="flex flex-col">
				<div class="bg-gray-200 rounded-xl rounded-b-none p-4 mt-8">
					<h1 class="font-bold text-xl align-start">Поблизости</h1>
				</div>
				<div class="border-2 rounded-xl rounded-t-none p-4 space-y-4">

					<div class="flex items-center justify-between space-x-16" v-for="(route, index) in $store.state.routes.near" :key="idex">
						<div class="flex items-center space-x-4">
							<h1 v-html="route.number" class="border-2 p-2 font-bold text-2xl text-green-700 align-start">
							</h1>
							<h1 class="text-md">{{ route.routes }}</h1>
						</div>
						<button class="bg-green-500 text-white p-2 rounded-xl text-lg hover:bg-green-600">Перейти</button>
					</div>

				</div>
			</div>
	</div>

</template>
<script>
	import '@/assets/tailwind.css'
	import Navigator from '@/components/NavBar'
	import axios from 'axios'

	export default {
		components: {
			Navigator
		},
		data: () => ({
			
		}),
		mounted() {
			const p = navigator.geolocation.getCurrentPosition((data) => {
				this.$store.state.location = data.coords
				console.log(data.coords)

				axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.$store.state.location.longitude},${this.$store.state.location.latitude}.json?limit=1&access_token=pk.eyJ1IjoiYWJ1YmFrcnNoIiwiYSI6ImNsaDF0NXo3NzA3Y24zb25wMmViZ3ExbTMifQ.mxkSE9xxV486lzxogWKhdw`)
				.then(data => {
					this.$store.state.locInfo = data.data.features[0]
					console.log(this.$store.state.locInfo)
				})



			}, (error => {
				console.warn(error)
			}), {enableHighAccuracy: true,timeout: 5000,
  maximumAge: 0,})

			


		}
		
	}
</script>