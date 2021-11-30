import { CertificateState, CertificateAction } from "../interfaces/certificates";

const initState: CertificateState = {
  certificates: [],
  loading: false,
  error: null
}

const certificateReducer = (state = initState, {type, payload, id}: CertificateAction) => {

  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FAILED':
      return {
        ...state,
        loading: false,
        error: payload
      }
    case 'ALL_CERTIFICATES':
      return {
        ...state,
        loading: false,
        error: null,
        certificates: payload
      }
    case 'GET_CERTIFICATE':
      state = {
        ...state,
        loading: false,
        error: null
      }
      return state.certificates.filter(certificate => certificate.id === id);
    case 'UPDATE_CERTIFICATE':
      return {
        ...state,
        loading: false,
        error: null,
        certificates: state.certificates.map(certificate => {
          if (certificate.id === id) return {
            ...certificate,
            ...payload
          }
          return certificate;
        })
      }
    case 'DELETE_CERTIFICATE':
      return {
        ...state,
        loading: false,
        error: null,
        certificates: state.certificates.filter(certificate => certificate.id !== id)
      }
    default:
      return state;
  }
}

export default certificateReducer;