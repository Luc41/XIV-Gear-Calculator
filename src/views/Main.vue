<template>
  <q-page
    class="q-pa-md"
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

    <div class="row q-gutter-sm">
      <div class="col-auto">
        <div class="column">
          <div class="col q-gutter-sm">
            <spec-filter />

            <level-filter />

            <gear-filter />

            <q-btn
              color="positive"
            >
              <q-icon
                left
                name="sync"
              />
              <span>Apply Filter</span>
            </q-btn>

            <q-btn
              color="negative"
            >
              <q-icon
                left
                name="functions"
              />
              <span>Calculate</span>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="col">
        <q-scroll-area
          style="height: 100%;"
          :delay="1200"
        >
          <gear-table title="Head" />
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import gearFilter from '../components/gearFilter'
import levelFilter from '../components/levelFilter'
import specFilter from '../components/specFilter'
import gearTable from '../components/gearTable'

export default {
  name: 'Main',
  components: {
    gearFilter,
    levelFilter,
    specFilter,
    gearTable
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
