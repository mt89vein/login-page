<template>
	<base-modal :title="title"
	            :visible="modal.show"
	            ref="dialog"
	            @close="onCancelClick">
		<template v-if="certificates.length === 0">
			Поиск сертификатов...
		</template>
		<template v-else>
			<el-breadcrumb v-if="stage > 0" separator-class="el-icon-arrow-right">
				<el-breadcrumb-item><a href="#" @click.prevent="setStage(0)">Сертификат</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="#" @click.prevent="setStage(1)">Роль</a></el-breadcrumb-item>
				<el-breadcrumb-item v-if="stage > 1"><a href="#" @click.prevent="setStage(2)">Организация</a>
				</el-breadcrumb-item>
			</el-breadcrumb>
			<certificates-list v-if="stage === 0"
			                   :certificates="certificates"
			                   :current-certificate="currentCertificate"
			                   @select="onCertificateSelect"
			/>
			<roles-list v-if="stage === 1"
			            :roles="roles"
			            :current-role="currentRole"
			            @select="onRoleSelect"
			/>
			<organizations-list v-if="stage === 2"
			                    :organizations="organizations"
			                    :current-organization="currentOrganization"
			                    @select="onOrganizationSelect"
			/>
		</template>

		<template slot="footer">
			<button v-if="stage > 0"
			        class="btn btn-primary"
			        @click="deselect"
			        v-shortkey="['arrowleft']"
			        @shortkey="deselect">
				Назад
			</button>
			<button class="btn btn-primary"
			        :disabled="!canSelect"
			        @click="select"
			        v-shortkey="{ arrowright: ['arrowright'], enter: ['enter']}"
			        @shortkey="select">
				Выбрать
			</button>
		</template>
	</base-modal>
</template>

<script>
	import { Breadcrumb, BreadcrumbItem } from 'element-ui'
	import FormGroup from '../components/FormGroup'
	import BaseModal from '../components/BaseModal'
	import { LoadingMixin } from '../mixins/loadingMixin'
	import CertificatesList from './CertificatesList'
	import RolesList from './../components/RolesList'
	import OrganizationsList from './../components/OrganizationsList'
	import { CryptoProServiceMock as CryptoProService } from '../services/cryptoProService'
	import { Authorize } from '../services/authorizeService'

	export default {
		name: 'login-modal',
		components: {
			CertificatesList,
			BaseModal,
			FormGroup,
			RolesList,
			OrganizationsList,
			'el-breadcrumb': Breadcrumb,
			'el-breadcrumb-item': BreadcrumbItem,
		},
		mixins: [
			LoadingMixin,
		],
		props: {
			modal: {
				type: Object,
				required: true,
			},
		},
		data () {
			return {
				certificates: [],
				roles: [],
				organizations: [],
				selectedRole: null,
				selectedOrganization: null,
				selectedCertificate: null,
				currentCertificate: null,
				currentRole: null,
				currentOrganization: null,
			}
		},
		async mounted () {
			this.startLoadingSpinner(0, 'Загрузка сертификатов', '.el-dialog', 'dialog')
			this.certificates = await CryptoProService.getCertificateListAsync()
			await this.tryCertificateSelect()
			this.stopLoadingSpinner(0)
		},
		methods: {
			onCancelClick () {
				this.$emit('cancel')
			},
			async select () {
				switch (this.stage) {
					case 0:
						await this.onCertificateSelect(null, true)
						break
					case 1:
						await this.onRoleSelect(null, true)
						break
					case 2:
						await this.onOrganizationSelect(null, true)
						break
				}
			},
			deselect () {
				this.setStage(this.stage - 1)
			},
			async tryCertificateSelect () {
				if (this.certificates.length === 1 && this.currentCertificate === null) {
					this.selectedCertificate = this.certificates[0]
					this.currentCertificate = this.certificates[0]
					if (this.selectedCertificate !== null) {
						this.startLoadingSpinner(1, 'Загрузка ролей', '.list-group', 'dialog')
						this.roles = this.getAvailableRoles(this.selectedCertificate.Role)
						await this.tryRoleSelect()
						this.stopLoadingSpinner(1)
					}
				}
			},
			async tryRoleSelect () {
				if (this.roles.length === 1 && this.currentRole === null) {
					this.selectedRole = this.roles[0]
					this.currentRole = this.roles[0]
					if (this.selectedCertificate != null) {
						this.startLoadingSpinner(2, 'Загрузка ролей', '.list-group', 'dialog')
						this.organizations = await CryptoProService.getAvailableOrganizationsAsync(
							this.selectedCertificate.Thumbprint)
						await this.tryOrganizationSelect()
						this.stopLoadingSpinner(2)
					}
				}
			},
			async tryOrganizationSelect () {
				if (this.organizations.length === 1 && this.currentOrganization === null) {
					this.selectedOrganization = this.organizations[0]
					this.currentOrganization = this.organizations[0]
					if (this.selectedOrganization !== null) {
						this.startLoadingSpinner(3, 'Авторизация', '.el-dialog', 'dialog')
						await Authorize(
							'abc', this.selectedCertificate.Thumbprint, this.selectedRole.Value,
							this.selectedOrganization.Id
						)
						this.stopLoadingSpinner(3)
					}
				}
			},
			async onCertificateSelect (index, isSubmit) {
				if (index !== null) {
					this.currentCertificate = this.certificates[index]
				}
				if (isSubmit === true) {
					this.selectedCertificate = this.currentCertificate
				}
				if (this.selectedCertificate !== null) {
					this.startLoadingSpinner(4, 'Загрузка ролей', '.list-group', 'dialog')
					this.roles = this.getAvailableRoles(this.selectedCertificate.Role)
					await this.tryRoleSelect()
					this.stopLoadingSpinner(4)
				}
			},
			async onRoleSelect (index, isSubmit) {
				if (index !== null) {
					this.currentRole = this.roles[index]
				}
				if (isSubmit === true) {
					this.selectedRole = this.currentRole
				}
				if (this.selectedCertificate != null && this.selectedRole != null) {
					this.startLoadingSpinner(5, 'Загрузка списка организаций', '.list-group', 'dialog')
					this.organizations = await CryptoProService.getAvailableOrganizationsAsync(
						this.selectedCertificate.Thumbprint)
					if (this.selectedRole.Name === 'Заказчик') {
						await this.tryOrganizationSelect()
					} else {
						let defaultOrganizationIndex = this.organizations.findIndex(w => w.Default)
						if (defaultOrganizationIndex) {
							await this.onOrganizationSelect(defaultOrganizationIndex, true)
						}
					}
					this.stopLoadingSpinner(5)
				}
			},
			async onOrganizationSelect (index, isSubmit) {
				if (index !== null) {
					this.currentOrganization = this.organizations[index]
				}
				if (isSubmit === true && this.currentOrganization !== null) {
					this.selectedOrganization = this.currentOrganization
					this.startLoadingSpinner(6, 'Авторизация', '.el-dialog', 'dialog')
					await Authorize(
						'abc', this.selectedCertificate.Thumbprint, this.selectedRole.Value,
						this.selectedOrganization.Id
					)
					this.stopLoadingSpinner(6)
				}
			},
			setStage (stage) {
				switch (stage) {
					case 0:
						this.selectedCertificate = null
						this.selectedRole = null
						this.selectedOrganization = null
						break
					case 1:
						this.selectedRole = null
						this.selectedOrganization = null
						break
					case 2:
						this.selectedOrganization = null
						break
				}
			},
			getAvailableRoles (role) {
				let result = []
				if (role === undefined) {
					return result
				}
				if ((role & 1) === 1) {
					result.push({Name: 'Заказчик', Value: 1})
				}
				if ((role & 2) === 2) {
					result.push({Name: 'ГРБС', Value: 2})
				}
				if ((role & 4) === 4) {
					result.push({Name: 'Финансовый орган', Value: 4})
				}
				if ((role & 8) === 8) {
					result.push({Name: 'Администратор', Value: 8})
				}
				if ((role & 16) === 16) {
					result.push({Name: 'Уполномоченный орган', Value: 16})
				}
				if ((role & 32) === 32) {
					result.push({Name: 'Организатор совместных закупок', Value: 32})
				}
				if ((role & 64) === 64) {
					result.push({Name: 'Служба технической поддержки', Value: 64})
				}

				return result
			},
			onShortKey (event) {
				switch (event.srcKey) {
					case 'left':
						this.deselect()
						break
					case 'rigth':
						this.select()
						break
				}
			}
		},
		computed: {
			canSelect () {
				switch (this.stage) {
					case 0:
						return this.currentCertificate !== null
					case 1:
						return this.currentRole !== null
					case 2:
						return this.currentOrganization !== null
					default:
						return false
				}
			},
			title () {
				switch (this.stage) {
					case 0:
						return 'Выберите сертификат'
					case 1:
						return 'Выберите роль'
					case 2:
						return 'Выберите организацию'
					default:
						return ''
				}
			},
			stage () {
				let stage = 0
				if (this.selectedCertificate && this.currentCertificate) {
					stage++
				}
				if (this.selectedRole && this.currentRole) {
					stage++
				}
				return stage
			},
		},
		watch: {
			currentCertificate (oldCert, newCert) {
				if (oldCert && newCert && oldCert.Thumbprint !== newCert.Thumbprint) {
					this.currentRole = null
					this.currentOrganization = null
				}
			},
			currentRole (oldRole, newRole) {
				if (oldRole && newRole && oldRole.Value !== newRole.Value) {
					this.currentOrganization = null
				}
			}
		}
	}
</script>

<style lang="scss">
	.el-dialog__body {
		.el-breadcrumb {
			margin: -35px 0px 5px 10px;
			padding: 10px 0px;
			a:hover {
				color: #337ab7;
			}
		}
		.list-group-hover .list-group-item:hover {
			background-color: #f5f5f5;
			&.active {
				color: #fff;
				background-color: #337ab7;
				border-color: #337ab7;
			}
		}
	}
</style>
