<template>
    <v-toolbar
    fixed
    app
    >
    <v-toolbar-items>
        <v-btn flat nuxt to="inspire">Dentro de vuetify</v-btn>
        <v-btn flat nuxt to="/">Inicio</v-btn>
        <v-btn flat nuxt to="quagga">Quagga</v-btn>
        <v-btn flat nuxt to="registro">Knex</v-btn>
    </v-toolbar-items>
      <!-- <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        @click.stop="clipped = !clipped"
      >
        Vision Tec
      </v-btn>
      <nuxt-link to="/">Vision Tec</nuxt-link>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn> -->
      <!-- <header>
        <nuxt-link to="/" class="logo">Nuxty</nuxt-link>
        <nav>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="about">About</nuxt-link></li>
                <li><nuxt-link to="services">Services</nuxt-link></li>
                <li><nuxt-link to="contact">Contact</nuxt-link></li>
            </ul>
        </nav>
    </header> -->
    </v-toolbar>
</template>
