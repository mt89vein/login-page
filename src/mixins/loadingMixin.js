import { Loading } from 'element-ui'

export const LoadingMixin = {
	data () {
		return {
			loadingServicePool: {},
		}
	},
	methods: {
		startLoadingSpinner (id, text = 'Загрузка', target = null, ref = null, fullscreen = false) {
			let loadingService = Loading.service({
				target: fullscreen ? null : this.$target(ref, target),
				fullscreen,
				text,
			})
			this.$set(this.loadingServicePool, id, loadingService)
			this.loadingServicePool[id] = loadingService
		},
		stopLoadingSpinner (id) {
			let loadingService = this.loadingServicePool[id]
			if (loadingService) {
				loadingService.close()
				this.$delete(this.loadingServicePool, id)
			}
		},
	},
	computed: {
		$target () {
			return (ref = null, target = null) => {
				if (ref === null && target === null) {
					return this.$el
				}
				if (ref !== null && target !== null) {
					return this.$refs[ref].$el.querySelector(target)
				}
				if (ref !== null && target === null) {
					return this.$refs[ref].$el
				}
				return document.querySelector(target)
			}
		},
	},
}
