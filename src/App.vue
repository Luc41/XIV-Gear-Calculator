<template>
  <q-layout view="hHh Lpr fFf">
    <q-header
      reveal
      elevated
      class="flat bg-brand"
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

        <q-toolbar-title>Gear Calculator</q-toolbar-title>

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

    <q-footer
      elevated
      class="bg-brand"
    >
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

html,body {
  background-image: linear-gradient(#d0021b,#000000);
}

.q-layout {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
}

.text-brand {
  color: linear-gradient(to right, #6e6e6e, #303030);
}
.bg-brand {
  background: linear-gradient(to right, #6e6e6e, #303030);
}
</style>
