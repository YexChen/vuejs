<template>
	<div>
		<button v-on:click ="increment">+</button>
		<button v-on:click ="decrement" >-</button>
		<span>{{num}}</span>
	</div>
</template>

<script>
	export default{
		props : ["num"],
		data (){
			return{
			}
		},
		methods : {
			increment(){
				this.$emit("incre");
			},
			decrement(){
				this.$emit("decre");
			}
		}
	}
</script>