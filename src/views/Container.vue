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
        <q-toolbar-title>{{ $store.state.job }}</q-toolbar-title>

        <q-btn
          flat
          round
          icon="share"
        />
      </q-toolbar>
    </q-page-sticky>

    <div class="row q-gutter-sm">
      <div class="col-auto">
        <div class="column">
          <div class="col q-gutter-sm">
            <spec-filter class="animate__animated animate__slideInLeft" />

            <level-filter class="animate__animated animate__slideInLeft" />

            <gear-filter class="animate__animated animate__slideInLeft" />

            <q-btn
              color="positive"
              class="animate__animated animate__slideInLeft"
            >
              <q-icon
                left
                name="sync"
              />
              <span>Apply Filter</span>
            </q-btn>

            <q-card class="q-mt-sm bg-yellow animate__animated animate__slideInLeft">
              <q-card-section horizontal>
                <span class="text-h4 text-grey q-mt-sm q-ml-md">Overall</span>
              </q-card-section>

              <q-separator />

              <q-table
                grid
                :data="data.slice(0,3)"
                :columns="columns"
                row-key="name"
                hide-header
                hide-pagination
                :pagination.sync="pagination"
                :rows-per-page-options="[0]"
                class="animate__animated animate__flipInX"
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

              <q-table
                grid
                :data="data.slice(3,6)"
                :columns="columns"
                row-key="name"
                hide-header
                hide-pagination
                :pagination.sync="pagination"
                :rows-per-page-options="[0]"
                class="animate__animated animate__flipInX"
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

              <q-table
                grid
                :data="data.slice(6,9)"
                :columns="columns"
                row-key="name"
                hide-header
                hide-pagination
                :pagination.sync="pagination"
                :rows-per-page-options="[0]"
                class="animate__animated animate__flipInX"
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
      <div class="col animate__animated animate__slideInUp">
        <q-scroll-area
          style="height: 100%; width: 100%;"
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
  name: 'Container',
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
        { name: 'HP', value: 100 },
        { name: 'MP', value: 100 },
        { name: 'strength', value: 100 },
        { name: 'direct hit', value: 101 },
        { name: 'critical hit', value: 102 },
        { name: 'determination', value: 103 },
        { name: 'skillspeed', value: 104 },
        { name: 'vitality', value: 105 }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.animate__animated.animate__slideInUp {
  animation-duration: .8s;
}

.animate__animated.animate__slideInLeft {
  animation-duration: .8s;
}

.animate__animated.animate__flipInX {
  animation-duration: 1s;
  animation-delay: .8s;
}
</style>
