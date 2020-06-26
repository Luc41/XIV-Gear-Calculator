<template>
  <q-layout view="hHh Lpr lFf">
    <q-header
      elevated
      class="flat"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      test
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      content-class="bg-grey-2"
    >
      <left-drawer />
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      bordered
      overlay
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import leftDrawer from './components/leftDrawer'

export default {
  name: 'LayoutDefault',

  components: {
    leftDrawer
  },

  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
html,body {
  overflow: hidden;
  background-image: linear-gradient(#d0021b,#000000);
}
</style>
