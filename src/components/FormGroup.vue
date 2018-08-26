<template functional>
	<div class="form-group" :class="{'required': props.required}">
		<label class="control-label"
			   :class="[ {['col-md-' + props.labelWidth]: !props.withoutMd }, props.labelClass ]">
			{{props.label}}
		</label>
		<slot name="tips" />
		<div :class="{['col-md-' + props.inputWidth]: !props.withoutMd }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'form-group',
		props: {
			label: {
				type: String,
				required: true,
			},
			required: {
				type: Boolean,
				required: false,
				default: () => false,
			},
			labelWidth: {
				required: false,
				default: () => 3,
			},
			inputWidth: {
				required: false,
				default: () => 9,
			},
			labelClass: {
				required: false,
				default: () => '',
			},
			withoutMd: {
				type: Boolean,
				required: false,
				default: () => false,
			},
		},
	}
</script>
