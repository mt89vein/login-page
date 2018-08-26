<template>
	<div class="list-group list-group-hover" v-shortkey="{up: ['arrowup'], down: ['arrowdown']}" @shortkey="onShortKey">
		<div v-for="(role, $index) in roles"
		     :key="role.Value"
		     class="list-group-item"
		     :class="{'active': $index === currentRoleIndex}"
		     @click="() => onRoleClick($index)">
			{{role.Name}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'roles-list',
		props: {
			roles: {
				type: Array,
				required: true,
			},
			currentRole: {
				required: true,
				validator: v => typeof v === 'object' || v === null,
			}
		},
		data () {
			return {
				currentRoleIndex: null,
			}
		},
		mounted () {
			if (this.currentRole !== null) {
				this.currentRoleIndex = this.roles.findIndex(w => w.Value === this.currentRole.Value)
			}
		},
		methods: {
			onRoleClick (index) {
				this.currentRoleIndex = index
				this.$emit('select', index)
			},
			onShortKey (event) {
				switch (event.srcKey) {
					case 'up':
						if (this.currentRoleIndex === null) {
							this.onRoleClick(this.roles.length - 1)
						} else if (this.currentRoleIndex > 0) {
							this.onRoleClick(--this.currentRoleIndex)
						}
						break
					case 'down':
						if (this.currentRoleIndex === null) {
							this.onRoleClick(0)
						} else if (this.currentRoleIndex + 1 < this.roles.length) {
							this.onRoleClick(++this.currentRoleIndex)
						}
						break
				}
			}
		},
	}
</script>
