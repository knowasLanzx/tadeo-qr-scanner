<template>
  <div>
    <input
      id="autocomplete"
      type="text"
      placeholder="Search destination..."
      class="search-input"
    />
    <div ref="map" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      userMarker: null,
      destinationMarker: null,
      autocomplete: null,
    };
  },
  mounted() {
    const initMap = (lat, lng) => {
      this.map = new this.$google.maps.Map(this.$refs.map, {
        center: { lat, lng },
        zoom: 14,
      });

      // Show user location
      this.userMarker = new this.$google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        title: 'Your Location',
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        },
      });

      this.initAutocomplete();
    };

    // Wait for Google Maps to load
    if (this.$google) {
      this.getUserLocation(initMap);
    } else {
      const wait = setInterval(() => {
        if (this.$google) {
          clearInterval(wait);
          this.getUserLocation(initMap);
        }
      }, 100);
    }
  },
  methods: {
    getUserLocation(callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            callback(latitude, longitude);
          },
          () => {
            alert('Location access denied. Using default location.');
            callback(14.5995, 120.9842); // Manila
          }
        );
      } else {
        alert('Geolocation not supported.');
        callback(14.5995, 120.9842);
      }
    },
    initAutocomplete() {
      const input = document.getElementById('autocomplete');
      this.autocomplete = new this.$google.maps.places.Autocomplete(input);

      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          alert('No location data available');
          return;
        }

        const location = place.geometry.location;

        // Center map
        this.map.setCenter(location);

        // Add destination marker
        if (this.destinationMarker) {
          this.destinationMarker.setMap(null);
        }

        this.destinationMarker = new this.$google.maps.Marker({
          position: location,
          map: this.map,
          title: 'Destination',
        });

        console.log('Selected destination:', location.lat(), location.lng());
      });
    },
  },
};
</script>

<style scoped>
.search-input {
  width: 300px;
  padding: 10px;
  margin: 10px;
  position: absolute;
  top: 0;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
