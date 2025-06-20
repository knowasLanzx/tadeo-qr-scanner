<template>
    <div class=" d-flex justify-center align-center"  style="height: 100vh;">
        <v-card max-width="500">
        <v-card-text>
            <v-form>
                <h1 style="text-align: center;">Log In</h1>
                <br>
                <v-text-field label="Email" prepend-inner-icon="mdi-email" outlined></v-text-field>
                <v-text-field label="Password" type="password" prepend-inner-icon="mdi-lock" outlined></v-text-field>
                <v-btn  :loading="loading" color="blue" size="large" type="submit" variant="elevated" block> Sign In</v-btn>
            </v-form>
        </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default{
    layout: "auth",
}
</script>