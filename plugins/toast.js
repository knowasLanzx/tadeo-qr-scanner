// plugins/toast.js
export default (_, inject) => {
  inject('toast', {
    success: (msg) => alert(`✅ ${msg}`),
    error: (msg) => alert(`❌ ${msg}`)
  })
}