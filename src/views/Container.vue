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
              class="q-pa-xs bg-yellow animate__animated animate__slideInLeft"
              style="animation-delay: .4s;"
            >
              <q-card-section class="q-pa-xs">
                <span class="text-h5">Overall</span>
              </q-card-section>

              <q-separator />
              <q-card-section class="q-pa-none">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="row"
                >
                  <div
                    class="col"
                    v-for="param in data.slice(2*(i-1), 2*i)"
                    :key="param"
                  >
                    <q-card
                      flat
                      class="q-ma-xs text-center bg-orange animate__animated animate__flipInX"
                    >
                      <q-chip
                        color="transparent"
                        text-color="white"
                      >
                        {{ param.Name }}
                        :
                        {{ param.Value }}
                      </q-chip>
                      <q-space />
                      <q-chip
                        color="green"
                        text-color="white"
                        class="q-mt-none"
                        style="border-radius: 4px;"
                      >
                        + {{ param.Plus }}
                      </q-chip>
                    </q-card>
                  </div>
                  <div
                    class="col"
                    v-if="i === 5"
                  />
                </div>
              </q-card-section>
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
            <gear-table title="weapon" />

            <gear-table
              title="sub weapon"
              v-if="$store.state.job === 'Paladin'"
            />

            <gear-table title="Head" />

            <gear-table title="Body" />

            <gear-table title="Hand" />

            <gear-table title="Belt" />

            <gear-table title="Leg" />

            <gear-table title="Shoe" />

            <gear-table title="ear" />

            <gear-table title="necklace" />

            <gear-table title="wrist" />

            <gear-table title="ring-l" />

            <gear-table title="ring-r" />

            <gear-table title="food" />
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
      data: [
        { ID: 1, Name: 'HP', Value: 1000000, Plus: 10000 },
        { ID: 2, Name: 'MP', Value: 1000000, Plus: 10000 },
        { ID: 3, Name: 'STR', Value: 100000, Plus: 1000 },
        { ID: 4, Name: 'CTH', Value: 100001, Plus: 1001 },
        { ID: 5, Name: 'DTH', Value: 100002, Plus: 1002 },
        { ID: 6, Name: 'DET', Value: 100003, Plus: 1003 },
        { ID: 7, Name: 'SS', Value: 100004, Plus: 1004 },
        { ID: 8, Name: 'VIT', Value: 100005, Plus: 1005 },
        { ID: 8, Name: 'PTY', Value: 100006, Plus: 1006 }
      ]
    }
  },
  mounted () {
    this.$axios
      .get('https://xivapi.com/patchlist')
      .then(response => (this.$store.state.patch = response.data.reverse()))
      .catch(error => console.log(error))
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
  animation-delay: 1s;
}
</style>
