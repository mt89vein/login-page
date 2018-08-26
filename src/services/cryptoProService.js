import CryptoPro from 'crypto-pro'
import HTTP from 'axios'

export const CryptoProService = (function () {
	async function tryCallAsync (methodName, ...rest) {
		return CryptoPro.call(methodName, ...rest)
			.catch(err => window.alert('Ошибка при обращении к плагину Крипто-Про: "' + err + '"'))
	}

	/**
	 * Получить список доступных ролей для каждого отпечатка сертификата
	 * @returns {Promise<List<Role, Thumbprint>>}
	 */
	async function getAvailableRolesForCertificates (certificates) {
		/**
		 * Получить отпечатки из списка сертификатов
		 * @param certList
		 * @returns {Promise<List<Thumbprint:string>}
		 */
		const getThumbprints = async (certList) => Promise.all(certList.map(cert => cert.Thumbprint))
		/**
		 *  Получить роли для отпечатков
		 * @param thumbprints
		 * @returns {Promise<List<Role, Thumbprint>>}
		 */
		const getRolesForThumbprints = async (thumbprints) => HTTP.post('/Auth/GetAvailableCertificates', {thumbprints})

		if (certificates) {
			return getThumbprints(certificates)
				.then(getRolesForThumbprints)
		}
		return []
	}

	return {
		/**
		 * Получить сертификат по отпечатку
		 * @param thumbprint
		 * @returns {Promise<*>}
		 */
		async getCertificateByThumbprintAsync (thumbprint) {
			return tryCallAsync('getCert', thumbprint)
		},
		/**
		 * Получить список сертификатов для отображения пользователю
		 * @returns {Promise<List<Role:int, Thumbprint:string, SubjectName:string, Name: string, ValidTo:datetime>>}
		 */
		async getCertificateListAsync () {
			/**
			 * Преобразует список сертификатов к словарю <thumbprint:string, certificate:object>
			 * @param certList
			 * @returns {Promise<any>}
			 */
			function toCertificatesDictionary (certList) {
				return certList.reduce((result, cert) => {
					result[cert.thumbprint] = cert
					return result
				}, {})
			}

			let certificates = await tryCallAsync('getCertsList')
			let availableRolesForCertificates = await getAvailableRolesForCertificates(certificates)
			const certificatesDictionary = toCertificatesDictionary(certificates)
			return availableRolesForCertificates.map(certificate => {
				let cert = certificatesDictionary[certificate.Thumbprint]
				let thumbprintRole = availableRolesForCertificates.find(w => w.Thumbprint === cert.thumbprint)
				return {
					Role: thumbprintRole.Role,
					Thumbprint: cert.thumbprint,
					SubjectName: cert.subjectName,
					Name: cert.name,
					ValidTo: cert.validTo,
				}
			})
		},
		/**
		 * Получить список доступных организаций по отпечатку
		 * @param thumbprint
		 * @returns {Promise<List<Id:int, Name:string, Default:bool>>}
		 */
		async getAvailableOrganizationsAsync (thumbprint) {
			return HTTP.post('/Auth/GetAvailableOrganizations', {thumbprint})
		},
		/**
		 * Подписать raw-string
		 * @param data - данные
		 * @param thumbprint - отпечаток
		 * @returns {Promise<*>} - подпись
		 */
		async signDataAsync (data, thumbprint) {
			return tryCallAsync('signData', thumbprint, window.btoa(data))
		},
	}
})()

export const CryptoProServiceMock = (function () {
	function getRandomInt (min, max) {
		return Math.floor(Math.random() * (max - min)) + min
	}

	async function tryCallAsync (methodName, ...rest) {
		return CryptoPro.call(methodName, ...rest)
			.catch(err => window.alert('Ошибка при обращении к плагину Крипто-Про: "' + err + '"'))
	}

	/**
	 * Получить список доступных ролей для каждого отпечатка сертификата
	 * @returns {Promise<List<Role, Thumbprint>>}
	 */
	async function getAvailableRolesForCertificates (certificates) {
		return certificates.map(cert => ({Thumbprint: cert.thumbprint, Role: Math.pow(2, getRandomInt(1, 7)) - 1}))
	}

	return {
		/**
		 * Получить сертификат по отпечатку
		 * @param thumbprint
		 * @returns {Promise<*>}
		 */
		async getCertificateByThumbprintAsync (thumbprint) {
			return tryCallAsync('getCert', thumbprint)
		},
		/**
		 * Получить список сертификатов для отображения пользователю
		 * @returns {Promise<List<Role:int, Thumbprint:string, SubjectName:string, Name: string, ValidTo:datetime>>}
		 */
		async getCertificateListAsync () {
			/**
			 * Преобразует список сертификатов к словарю <thumbprint:string, certificate:object>
			 * @param certList
			 * @returns {Promise<any>}
			 */
			function toCertificatesDictionary (certList) {
				return certList.reduce((result, cert) => {
					result[cert.thumbprint] = cert
					return result
				}, {})
			}

			let certificates = await tryCallAsync('getCertsList')
			let availableRolesForCertificates = await getAvailableRolesForCertificates(certificates)
			const certificatesDictionary = toCertificatesDictionary(certificates)
			return availableRolesForCertificates.map(certificate => {
				let cert = certificatesDictionary[certificate.Thumbprint]
				let thumbprintRole = availableRolesForCertificates.find(w => w.Thumbprint === cert.thumbprint)
				return {
					Role: thumbprintRole.Role,
					Thumbprint: cert.thumbprint,
					SubjectName: cert.subjectName,
					Name: cert.name,
					ValidTo: cert.validTo,
				}
			})
		},
		/**
		 * Получить список доступных организаций по отпечатку
		 * @param thumbprint
		 * @returns {Promise<List<Id:int, Name:string, Default:bool>>}
		 */
		async getAvailableOrganizationsAsync (thumbprint) {
			return new Promise((resolve, reject) => {
				let count = getRandomInt(1, 10)
				let organizations = []
				for (let i = 0; i < count; i++) {
					organizations.push({
						Id: i,
						Name: 'Организация ' + i,
						Default: false,
					})
				}
				if (count > 3) {
					let defaultOrganizationIndex = getRandomInt(1, count)
					organizations[defaultOrganizationIndex].Default = true
				}
				resolve(organizations)
			})
		},
		/**
		 * Подписать raw-string
		 * @param data - данные
		 * @param thumbprint - отпечаток
		 * @returns {Promise<*>} - подпись
		 */
		async signDataAsync (data, thumbprint) {
			return tryCallAsync('signData', thumbprint, window.btoa(data))
		},
	}
})()
