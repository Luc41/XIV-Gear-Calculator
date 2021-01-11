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

        <q-toolbar-title>
          Gear Calculator
          <q-btn
            flat
            dense
            round
            to="/"
            icon="home"
          />
        </q-toolbar-title>

        <!-- temp disabled -->
        <q-btn
          v-show="false"
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

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      content-class="bg-grey-2"
    >
      <left-drawer />
    </q-drawer> -->

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
import { getPatches, getRacies, getTribes, getBaseParams } from './api/api'
// import leftDrawer from './components/leftDrawer'

export default {
  name: 'LayoutDefault',

  components: {
    // leftDrawer
  },

  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      currentDatabase: this.$store.state.database
    }
  },

  methods: {
    async loadData () {
      try {
        this.$q.loading.show({
          message: 'Fetching data.'
        })
        const patches = await getPatches()
        const racies = await getRacies()
        const tribes = await getTribes()
        const baseParams = await getBaseParams()
        this.$store.commit('updatePatch', patches)
        this.$store.commit('updateSessionStorage', {
          name: 'raciesStorage',
          val: JSON.stringify(racies.Results)
        })
        this.$store.commit('updateSessionStorage', {
          name: 'clansStorage',
          val: JSON.stringify(tribes.Results)
        })
        this.$store.commit('updateSessionStorage', {
          name: 'baseParamsStorage',
          val: JSON.stringify(baseParams.Results)
        })
        return Promise.resolve(true)
      } catch (error) {
        console.log(error)
        this.$q.loading.hide()
        this.$q.notify({
          type: 'negative',
          position: 'top',
          timeout: 1000,
          message: 'Can not fetch data from XIVAPI.'
        })
        return Promise.reject(error)
      }
    }
  },

  async created () {
    const loadStatus = await this.loadData()
    if (loadStatus) {
      this.$q.loading.hide()
    } else {
      console.log(loadStatus)
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
  }
}
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

html,body {
  background-color: grey;
}

.text-brand {
  color: linear-gradient(to right, #6e6e6e, #303030);
}
.bg-brand {
  background: linear-gradient(to right, #6e6e6e, #303030);
}
</style>
