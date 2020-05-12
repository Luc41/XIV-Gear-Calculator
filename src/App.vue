<template>
  <q-layout view="hHh Lpr lFf">
    <q-header
      reveal
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

    <q-drawer
      v-model="leftDrawerOpen"
      elevated
      show-if-above
      :width="240"
      content-class="bg-grey-2"
    >
      <LeftDrawerContent />
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
import LeftDrawerContent from './components/Leftdrawer'

export default {
  name: 'LayoutDefault',

  components: {
    LeftDrawerContent
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
</style>
