<template>
  <q-page
    class="flex q-pa-md"
    style="padding-top: 60px"
  >
    <q-page-sticky
      position="top"
      expand
      class="bg-accent text-white"
    >
      <q-toolbar>
        <q-toolbar-title>Title</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <div class="column">
      <div class="col">
        <div class="row justify-center q-gutter-sm">
          <spec-filter />

          <level-filter />

          <gear-filter />

          <q-btn
            class="q-my-lg"
            color="positive"
          >
            <q-icon name="sync" />
            <span>Apply Filter</span>
          </q-btn>
        </div>
      </div>
      <div class="col">
        <img
          alt="Quasar logo"
          src="../assets/logo.png"
        >
      </div>
    </div>
  </q-page>
</template>

<script>
import gearFilter from '../components/Gearfilter'
import levelFilter from '../components/Levelfilter'
import specFilter from '../components/Specfilter'

export default {
  name: 'Main',
  components: {
    gearFilter,
    levelFilter,
    specFilter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
