<template>
  <q-page
    class="q-pa-md"
    padding
    style="padding-top: 66px;"
  >
    <div class="row justify-center q-gutter-sm">
      <div class="col-12 col-md-auto col-sm-auto col-xs-auto">
        <div class="column">
          <div class="col q-gutter-y-sm">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-y-sm"
            >
              <spec-filter ref="specFilter" />

              <level-filter ref="levelFilter" />

              <gear-filter ref="gearFilter" />

              <q-btn-group
                spread
              >
                <q-btn
                  label="Apply"
                  color="green"
                  text-color="white"
                  icon="sync"
                  type="submit"
                />

                <q-btn
                  label="Reset"
                  color="orange"
                  text-color="white"
                  icon="replay"
                  type="reset"
                />
              </q-btn-group>
            </q-form>

            <q-card class="bg-yellow">
              <q-card-section class="q-py-none q-px-xs">
                <div class="text-h5 text-center">
                  Overall
                </div>
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
                    :key="param.ID"
                  >
                    <q-card
                      bordered
                      class="q-ma-xs text-center bg-orange"
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
      <div class="col-12 col-md-6 col-sm col-xs">
        <q-scroll-area
          style="height: 100vh;"
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
          {{ $store.state.selectedJob }}
          <q-badge
            align="top"
            color="green"
          >
            <template v-if="$store.state.patch === null">
              <q-spinner-dots
                color="white"
              />
            </template>
            <template v-else>
              {{ $store.state.patch.Name }}
            </template>
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
import { getPatches } from '../api/api'
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
  methods: {
    loadPatches () {
      getPatches()
        .then(response => {
          this.$store.commit('updatePatch', response)
        })
        .catch(error => {
          console.log('Failed to load patch.' + error)
        })
    },
    onSubmit () {
      this.$refs.specFilter.onSubmit()
      this.$refs.levelFilter.onSubmit()
      this.$refs.gearFilter.onSubmit()
    },
    onReset () {
      this.$refs.specFilter.onReset()
      this.$refs.levelFilter.onReset()
      this.$refs.gearFilter.onReset()
      this.$q.notify({
        type: 'positive',
        position: 'top',
        progress: true,
        timeout: 1000,
        message: 'query reset'
      })
    }
  },

  created () {
    this.loadPatches()
  },

  mounted () {
  }
}
</script>

<style lang="scss" scope>
</style>
