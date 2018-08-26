import HTTP from 'axios'
import { CryptoProServiceMock as CryptoProService } from './cryptoProService'

export const Authorize = async function (guid, thumbprint, role, selectedOrganizationId) {
	let signatureValue = await CryptoProService.signDataAsync(guid, thumbprint)
	return HTTP.post('Auth/Authorize', {role, selectedOrganizationId, signatureValue})
			   .catch(error => window.alert('Ошибка при авторизации ' + error))
}
