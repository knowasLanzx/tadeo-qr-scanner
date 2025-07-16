<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex flex-column align-center">
        <v-card-title class="headline">QR CODE</v-card-title>

        <v-card-text class="w-100">
          <!-- Reader Target Div -->
          <div id="reader" style="min-height: 100px;"></div>

          <!-- Upload Image -->
          <input
            type="file"
            accept="image/*"
            @change="handleUpload"
            class="mt-4"
          />

          <!-- Display Result Below Upload -->
          <div v-if="scannedText" class="mt-4">
            <strong>Scanned Result:</strong>
            <div>{{ scannedText }}</div>
          </div>

          <v-btn class="mt-4" @click="notify">Show Toast</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>





<script>
import { Html5Qrcode } from "html5-qrcode";

export default {
  name: "QRScannerPage",
  data() {
    return {
      scannedText: null
    };
  },
  methods: {
    notify() {
      this.$toast.success("Successfully submitted!", { timeout: 2000 });
    },
    handleUpload(event) {
      const file = event.target.files[0];
      if (!file || !file.type.startsWith("image/")) {
        this.$toast.error("Please upload a valid image.");
        return;
      }

      const html5QrCode = new Html5Qrcode("reader");
      html5QrCode
        .scanFile(file, true)
        .then(decodedText => {
          console.log("Scanned:", decodedText);
          this.scannedText = decodedText;
          this.$toast.success(`Scanned: ${decodedText}`);
        })
        .catch(err => {
          console.error("Scan error:", err);
          this.$toast.error("Failed to scan QR code from image.");
        });
    }
  }
};
</script>
