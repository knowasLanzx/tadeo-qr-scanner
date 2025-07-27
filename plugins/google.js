export default ({}, inject) => {
  if (process.client) {
    if (window.google && window.google.maps) {
      inject('google', window.google)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBkFRRZR53_bxa4-rMzB1kp9LB3hEPhGbw&libraries=places'
    script.async = true
    script.defer = true

    script.onload = () => {
      inject('google', window.google)
    }

    document.head.appendChild(script)
  }
}