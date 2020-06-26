<template>
  <q-page
    class="q-pa-md q-mt-xl"
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
      <div class="col col-md-3 col-sm-6 col-xs-8">
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

            <q-card class="q-mt-lg bg-yellow">
              <q-card-section horizontal>
                <span class="text-h4 text-grey q-mt-sm q-ml-md">Overall</span>
              </q-card-section>

              <q-separator />

              <q-table
                grid
                :data="data"
                :columns="columns"
                row-key="name"
                hide-header
                hide-pagination
                virtual-scroll
                :pagination.sync="pagination"
                :rows-per-page-options="[0]"
              >
                <template v-slot:item="props">
                  <div class="q-pa-xs col-xs-6 col-sm-4 col-md-4">
                    <q-card
                      flat
                      class="bg-pink no-shadow"
                    >
                      <q-card-section class="text-center text-white bg-brown">
                        <strong>{{ props.row.name }}</strong>
                      </q-card-section>
                      <q-separator />
                      <q-card-section
                        class="text-white text-bold flex flex-center"
                      >
                        <div>{{ props.row.value }}</div>
                      </q-card-section>
                    </q-card>
                  </div>
                </template>
              </q-table>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col">
        <q-scroll-area
          style="height: 100%; width: 100%"
          :delay="1200"
        >
          <div class="q-gutter-sm">
            <gear-table title="Head" />

            <gear-table title="Body" />

            <gear-table title="Hand" />

            <gear-table title="Belt" />

            <gear-table title="Leg" />

            <gear-table title="Shoe" />
          </div>
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
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'value', label: 'Value', field: 'value' }
      ],
      data: [
        { name: 'strength', value: 100 },
        { name: 'direct hit', value: 101 },
        { name: 'critical hit', value: 102 },
        { name: 'determination', value: 103 },
        { name: 'skillspeed', value: 104 },
        { name: 'vitality', value: 105 },
        { name: 'test1', value: 103 },
        { name: 'test2', value: 104 },
        { name: 'test3', value: 105 }
      ]
    }
  }
}
</script>

<style>

</style>
