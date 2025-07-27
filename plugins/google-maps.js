export default function (_, inject) {
  if (process.client) {
    // Load Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `AIzaSyBkFRRZR53_bxa4-rMzB1kp9LB3hEPhGbw`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      inject('google', window.google);
    };

    document.head.appendChild(script);
  }
}