<template>
	<div id="app">
		<button class="btn btn-primary"
		        id="open-modal"
		        @click="onClick"
		        v-shortkey="['enter']"
		        @shortkey="onClick">
			Вход
		</button>
		<login-modal v-if="modal.show"
		             :modal="modal"
		             @cancel="onClose"
		/>
	</div>
</template>

<script>
	import LoginModal from './components/LoginModal'
	import { CryptoProServiceMock as CryptoProService } from './services/cryptoProService'

	export default {
		name: 'app',
		components: {
			LoginModal,
		},
		data () {
			return {
				modal: {
					show: false,
				},
			}
		},
		methods: {
			onClose () {
				this.modal.show = false
			},
			onClick () {
				this.modal.show = true
			},
		}
	}
</script>

<style lang="scss">
	#app {
		position: absolute;
		left: 50%;
		top: 50%;
		#open-modal {
			width: 200px;
			height: 70px;
			border-radius: 5px;
			font-size: 25px;
		}
	}
</style>

