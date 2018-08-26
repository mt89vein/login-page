<template>
	<div class="list-group list-group-hover" v-shortkey="{up: ['arrowup'], down: ['arrowdown']}" @shortkey="onShortKey">
		<div v-for="(certificate, $index) in certificates"
		     :key="certificate.Thumbprint"
		     class="list-group-item"
		     :class="{'active': $index === currentCertificateIndex}"
		     @click="() => onCertificateClick($index)">
			<h4 class="list-group-item-heading">
				<strong>{{certificate.Name}}</strong>
				<small class="pull-right">до {{certificate.ValidTo}}</small>
			</h4>
			<p class="list-group-item-text">
				<small>{{certificate.SubjectName}}</small>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'certificates-list',
		props: {
			certificates: {
				type: Array,
				required: true,
			},
			currentCertificate: {
				required: true,
				validator: v => typeof v === 'object' || v === null,
			}
		},
		data () {
			return {
				currentCertificateIndex: null,
			}
		},
		mounted () {
			if (this.currentCertificate !== null) {
				this.currentCertificateIndex = this.certificates.findIndex(
					w => w.Thumbprint === this.currentCertificate.Thumbprint)
			}
		},
		methods: {
			onCertificateClick (index) {
				this.currentCertificateIndex = index
				this.$emit('select', index)
			},
			onShortKey (event) {
				switch (event.srcKey) {
					case 'up':
						if (this.currentCertificateIndex === null) {
							this.onCertificateClick(this.certificates.length - 1)
						} else if (this.currentCertificateIndex > 0) {
							this.onCertificateClick(--this.currentCertificateIndex)
						}
						break
					case 'down':
						if (this.currentCertificateIndex === null) {
							this.onCertificateClick(0)
						} else if (this.currentCertificateIndex + 1 < this.certificates.length) {
							this.onCertificateClick(++this.currentCertificateIndex)
						}
						break
				}
			}
		},
	}
</script>
