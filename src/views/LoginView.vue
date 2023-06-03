<template>
	<div class="flex justify-center px-64 py-32">


		<div class="shadow-xl p-8 rounded-xl grid justify-center">
			<h1 class="font-bold text-black text-2xl mb-8">Войдите или регистрируйтесь</h1>
			<input type="text" v-model="username" 
			class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Имя пользователя">
			<input type="password" v-model="password" 
			class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Пароль">
			<select v-model="account_type" class="p-2 border-2 mb-8 rounded-xl text-lg outline-none">
				<option value='none' disabled selected>Выберите тип аккаунта</option>
				<option value="driver">Водитель</option>
				<option value="client">Клиент</option>
			</select>

			<button class="bg-green-500 text-white hover:bg-green-600 rounded-xl p-4 px-8 text-xl" style="justify-self: end;" @click="$router.push('/time')">Далее</button>
		</div>
	</div>


</template>
<script>
	import '@/assets/tailwind.css'
	import Navigator from '@/components/NavBar'

	export default {
		components: {
      		Navigator
    	},
		data: () => ({
			account_type: 'none'
		})
	}
</script>





