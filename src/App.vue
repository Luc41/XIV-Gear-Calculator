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
          outline
          dense
          round
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
          icon="person"
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
        <q-btn-toggle
          v-model="currentDatabase"
          spread
          no-caps
          toggle-color="purple"
          color="white"
          text-color="black"
          :options="[
            {label: 'CN', value: true},
            {label: 'GL', value: false}
          ]"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :key="key" />
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
      rightDrawerOpen: false,
      currentDatabase: this.$store.state.database
    }
  },

  watch: {
    currentDatabase (val) {
      this.$store.commit('switchDatabase')
    }
  },

  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },

  mounted () {
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

html,body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
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
