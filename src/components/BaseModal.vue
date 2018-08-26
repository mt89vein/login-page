<template>
	<el-dialog :visible="visible"
			   v-on="$listeners"
			   v-bind="props"
			   top="5vh">
		<h4 slot="title" class="modal-header">{{title}}</h4>
		<slot class="modal-body"/>
		<div slot="footer" class="modal-footer">
			<slot name="footer"/>
		</div>
	</el-dialog>
</template>

<script>
	import {Dialog} from 'element-ui'

	export default {
		name: 'base-modal',
		components: {
			'el-dialog': Dialog,
		},
		model: {
			event: 'close',
			prop: 'show',
		},
		props: {
			visible: {
				type: Boolean,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			appendToBody: {
				type: Boolean,
				required: false,
				default: () => true,
			},
		},
		computed: {
			props () {
				return {...this.$attrs, ...this.$props}
			},
		},
	}
</script>

