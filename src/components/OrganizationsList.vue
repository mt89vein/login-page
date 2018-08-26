<template>
	<div class="list-group list-group-hover" v-shortkey="{up: ['arrowup'], down: ['arrowdown']}" @shortkey="onShortKey">
		<div v-for="(organization, $index) in organizations"
		     :key="organization.Id"
		     class="list-group-item"
		     :class="{'active': $index === currentOrganizationIndex}"
		     @click="() => onOrganizationClick($index)">
			{{organization.Name}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'organizations-list',
		props: {
			organizations: {
				type: Array,
				required: true,
			},
			currentOrganization: {
				required: true,
				validator: v => typeof v === 'object' || v === null,
			}
		},
		data () {
			return {
				currentOrganizationIndex: null,
			}
		},
		mounted () {
			if (this.currentOrganization !== null) {
				this.currentOrganizationIndex = this.organizations.findIndex(w => w.Id === this.currentOrganization.Id)
			}
		},
		methods: {
			onOrganizationClick (index) {
				this.currentOrganizationIndex = index
				this.$emit('select', index)
			},
			onShortKey (event) {
				switch (event.srcKey) {
					case 'up':
						if (this.currentOrganizationIndex === null) {
							this.onOrganizationClick(this.organizations.length - 1)
						} else if (this.currentOrganizationIndex > 0) {
							this.onOrganizationClick(--this.currentOrganizationIndex)
						}
						break
					case 'down':
						if (this.currentOrganizationIndex === null) {
							this.onOrganizationClick(0)
						} else if (this.currentOrganizationIndex + 1 < this.organizations.length) {
							this.onOrganizationClick(++this.currentOrganizationIndex)
						}
						break
				}
			}
		},
	}
</script>
