<template>
  <q-page
    class="q-pa-md"
    padding
    style="padding-top: 66px"
  >
    <div class="row q-gutter-sm">
      <div class="col-auto">
        <div class="column">
          <div class="col q-gutter-sm">
            <spec-filter class="animate__animated animate__slideInLeft" />

            <level-filter
              class="animate__animated animate__slideInLeft"
              style="animation-delay: .1s;"
            />

            <gear-filter
              class="animate__animated animate__slideInLeft"
              style="animation-delay: .2s;"
            />

            <q-btn-group
              spread
              class="animate__animated animate__slideInLeft"
              style="animation-delay: .3s;"
            >
              <q-btn
                label="Apply"
                color="green"
                text-color="white"
                icon="sync"
              />

              <q-btn
                label="Reset"
                color="orange"
                text-color="white"
                icon="replay"
              />
            </q-btn-group>

            <q-card
              class="q-mt-sm bg-yellow animate__animated animate__slideInLeft"
              style="animation-delay: .4s;"
            >
              <q-card-section horizontal>
                <span class="text-h5 q-mt-sm q-ml-md">Overall</span>
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
                      <q-card-section class="text-caption text-center text-white bg-brown">
                        <span>{{ props.row.name }}</span>
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
                      <q-card-section class="text-caption text-center text-white bg-brown">
                        <span>{{ props.row.name }}</span>
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
                      <q-card-section class="text-caption text-center text-white bg-brown">
                        <span>{{ props.row.name }}</span>
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

    <q-page-sticky
      position="top"
      expand
      class="bg-accent text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          {{ $store.state.job }}

          <q-badge
            align="top"
            color="green"
          >
            {{ $store.state.patch[0].Name }}
          </q-badge>
        </q-toolbar-title>

        <q-btn
          flat
          label="share"
          icon="share"
        />
      </q-toolbar>
    </q-page-sticky>
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
        { name: 'HP', value: 100000 },
        { name: 'MP', value: 100000 },
        { name: 'strength', value: 10000 },
        { name: 'direct hit', value: 10100 },
        { name: 'critical hit', value: 10002 },
        { name: 'determination', value: 10300 },
        { name: 'skillspeed', value: 10400 },
        { name: 'vitality', value: 10500 }
      ]
    }
  },
  mounted: {
    getPatch () {
      this.$axios
        .get('https://xivapi.com/patchlist')
        .then(response => (this.$store.state.patch = response.data.reverse()))
        .catch(error => console.log(error))
    },
    getStatus () {
      this.$axios
        .get('https://xivapi.com/patchlist')
        .then(response => (this.$store.state.charStatus = response.data.reverse()))
        .catch(error => console.log(error))
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
