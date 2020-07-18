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

            <q-card class="bg-grey-2">
              <q-card-section class="q-py-none q-px-xs">
                <div class="text-h5 text-center">
                  Overall
                </div>
              </q-card-section>

              <q-separator />
              <q-card-section class="q-pa-none">
                <div class="row">
                  <div class="col">
                    <q-card
                      bordered
                      class="q-ma-xs text-center bg-grey-8"
                    >
                      <q-chip
                        color="transparent"
                        text-color="white"
                      >
                        {{ currentJobStats[0].name }}
                        :
                        {{ currentJobStats[0].basevalue }}
                      </q-chip>
                      <q-space />
                      <q-chip
                        color="green"
                        text-color="white"
                        class="q-mt-none"
                        style="border-radius: 4px;"
                      >
                        + {{ currentJobStats[0].bonusvalue }}
                      </q-chip>
                    </q-card>
                  </div>
                </div>
                <div
                  v-for="i in 3"
                  :key="i"
                  class="row"
                >
                  <div
                    class="col"
                    v-for="stat in currentJobStats.slice(2*i-1, 2*i+1)"
                    :key="stat.id"
                  >
                    <q-card
                      bordered
                      class="q-ma-xs text-center bg-grey-8"
                    >
                      <q-chip
                        color="transparent"
                        text-color="white"
                      >
                        {{ stat.name }}
                        :
                        {{ stat.basevalue }}
                      </q-chip>
                      <q-space />
                      <q-chip
                        color="green"
                        text-color="white"
                        class="q-mt-none"
                        style="border-radius: 4px;"
                      >
                        + {{ stat.bonusvalue }}
                      </q-chip>
                    </q-card>
                  </div>
                  <div
                    class="col"
                    v-if="i > 3"
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
            <template v-if="$store.state.selectedJob === 'Paladin'">
              <gear-table
                v-for="equipslot in $store.state.equipSlotCategory"
                :key="equipslot.id"
                :title="equipslot.name"
                :columns="columns"
              />
            </template>
            <template v-else>
              <gear-table
                v-for="equipslot in $store.state.equipSlotCategory"
                :key="equipslot.id"
                :title="equipslot.name"
                :columns="columns"
              />
            </template>
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
import { mapGetters } from 'vuex'
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
        {
          name: 'desc',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'left', label: 'INT', field: 'int', sortable: true },
        { name: 'fat', align: 'left', label: 'CTH', field: 'cth', sortable: true },
        { name: 'carbs', align: 'left', label: 'DTH', field: 'dth', sortable: true },
        { name: 'protein', align: 'left', label: 'DET', field: 'det', sortable: true },
        { name: 'sodium', align: 'left', label: 'SS', field: 'ss', sortable: true },
        { name: 'calcium', align: 'left', label: 'VIT', field: 'vit', sortable: true }
      ],
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
        timeout: 1000,
        message: 'query reset'
      })
    }
  },

  computed: {
    ...mapGetters([
      'currentJobStats'
    ])
  }
}
</script>

<style lang="scss" scope>
</style>
