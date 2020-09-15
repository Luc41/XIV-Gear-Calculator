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
                  color="grey-6"
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
                      class="q-ma-xs text-center bg-grey-5"
                    >
                      <q-chip
                        color="transparent"
                        text-color="black"
                      >
                        {{ baseParams[0].Name }}
                        :
                        {{ baseParams[0].BaseValue }}
                      </q-chip>
                      <q-space />
                      <q-chip
                        color="green"
                        text-color="white"
                        class="q-mt-none"
                        style="border-radius: 4px;"
                      >
                        + {{ baseParams[0].BonusValue }}
                      </q-chip>
                    </q-card>
                  </div>
                </div>
                <div
                  v-for="i in 4"
                  :key="i"
                  class="row"
                >
                  <div
                    class="col"
                    v-for="stat in baseParams.slice(2*i-1, 2*i+1)"
                    :key="stat.index"
                  >
                    <q-card
                      bordered
                      class="q-ma-xs text-center bg-grey-5"
                    >
                      <q-chip
                        color="transparent"
                        text-color="black"
                      >
                        {{ stat.Name }}
                        :
                        {{ stat.BaseValue }}
                      </q-chip>
                      <q-space />
                      <q-chip
                        color="green"
                        text-color="white"
                        class="q-mt-none"
                        style="border-radius: 4px;"
                      >
                        + {{ stat.BonusValue }}
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
      <div class="col-12 col-md-8 col-sm col-xs">
        <q-scroll-area
          style="height: 100vh;"
          :delay="1200"
        >
          <div class="q-gutter-sm">
            <gear-table
              v-for="equipslot in equipSlotCategory.primary"
              :key="equipslot.index"
              :title="equipslot.name"
            />

            <template v-if="$store.state.selectedJob === 'Paladin'">
              <gear-table
                v-for="equipslot in equipSlotCategory.secondary"
                :key="equipslot.index"
                :title="equipslot.name"
              />
            </template>

            <gear-table
              v-for="equipslot in equipSlotCategory.armor"
              :key="equipslot.index"
              :title="equipslot.name"
            />
            <gear-table
              v-for="equipslot in equipSlotCategory.accessories"
              :key="equipslot.index"
              :title="equipslot.name"
            />

            <template v-if="showFood">
              <gear-table
                v-for="equipslot in equipSlotCategory.food"
                :key="equipslot.index"
                :title="equipslot.name"
              />
            </template>
          </div>
        </q-scroll-area>
      </div>
    </div>

    <q-page-sticky
      position="top"
      expand
      class="bg-blue-grey-4 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          {{ $store.state.selectedJob }}
          <q-badge
            align="top"
            color="green"
            class="shadow-1"
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
import gearFilter from '../components/gearFilter'
import levelFilter from '../components/levelFilter'
import specFilter from '../components/specFilter'
import gearTable from '../components/gearTable'

import { queryObject, baseParamsFilter } from '../utils/data'
import { getItems } from '../api/api'

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
      equipSlotCategory: {
        primary: [
          { id: 1, name: 'MainHand' }
        ],
        secondary: [
          { id: 2, name: 'OffHand' }
        ],
        armor: [
          { id: 3, name: 'Head' },
          { id: 4, name: 'Body' },
          { id: 5, name: 'Gloves' },
          { id: 6, name: 'Waist' },
          { id: 7, name: 'Legs' },
          { id: 8, name: 'Feet' }
        ],
        accessories: [
          { id: 9, name: 'Ears' },
          { id: 10, name: 'Neck' },
          { id: 11, name: 'Wrists' },
          { id: 12, name: 'FingerL' },
          { id: 13, name: 'FingerR' }
        ],
        food: [
          { id: 14, name: 'Food' }
        ]
      },
      baseParams: baseParamsFilter(),
      pagination: {
        rowsPerPage: 0
      },
      showFood: true
    }
  },

  methods: {
    onSubmit () {
      var arr = []
      arr.push({
        name: 'classjob',
        val: sessionStorage.getItem('selectedJob')
      })
      const childrenData = [
        {
          name: 'race',
          val: this.$refs.specFilter.raciesModel
        },
        {
          name: 'tribe',
          val: this.$refs.specFilter.clansModel
        },
        {
          name: 'level',
          val: this.$refs.specFilter.levelSlider
        },
        {
          name: 'levelitem',
          val: this.$refs.levelFilter.itemLevel.bottom.toString() + ',' + this.$refs.levelFilter.itemLevel.top.toString()
        },
        {
          name: 'levelequip',
          val: this.$refs.levelFilter.equipLevel.bottom.toString() + ',' + this.$refs.levelFilter.equipLevel.top.toString()
        }
      ]
      arr = arr.concat(childrenData)
      // console.log(arr)
      this.$store.commit('submitQuery', arr)
      this.loadItems()
    },
    onReset () {
      this.$refs.specFilter.onReset()
      this.$refs.levelFilter.onReset()
      this.$refs.gearFilter.onReset()
      this.$q.notify({
        type: 'positive',
        position: 'top',
        timeout: 1000,
        message: 'Query has reset.'
      })
    },
    async loadItems () {
      try {
        const baseInfo = ['ID', 'Name', 'Icon', 'LevelItem']
        const baseStats = ['Stats', 'MateriaSlotCount']
        const baseModifier = ['CanBeHq', 'Rarity', 'Recipes', 'IsAdvancedMeldingPermitted']
        const equipSlotCategory = ['EquipSlotCategory']
        const columns = baseInfo.concat(baseStats).concat(baseModifier).concat(equipSlotCategory).join(',')
        var data = queryObject(columns)

        var items = await getItems(data)

        for (var index = 1; index < items.Pagination.PageTotal; index++) {
          data.page = index + 1
          data.body.from += 100
          // data.limit = items.Pagination.ResultsTotal - items.Pagination.Results
          const itemsInNextPage = await getItems(data)
          // console.log(itemsInNextPage)
          items.Results = items.Results.concat(itemsInNextPage.Results)
        }

        this.$store.commit('updateSessionStorage', {
          name: 'itemsStorage',
          val: JSON.stringify(items.Results)
        })
      } catch (error) {
        console.log('Failed to load items.' + error)
        this.$q.notify({
          type: 'negative',
          position: 'top',
          timeout: 1000,
          message: 'Load data error.'
        })
      }
      // .then(response => {
      //   this.$store.commit('updateSessionStorage', {
      //     name: 'itemsStorage',
      //     val: JSON.stringify(response.Results)
      //   })
      // })
      // .catch(error => {
      //   console.log('Failed to load items.' + error)
      //   this.$q.notify({
      //     type: 'negative',
      //     position: 'top',
      //     timeout: 1000,
      //     message: 'Load data error.'
      //   })
      // })
    }
  }
}
</script>

<style lang="scss" scope>
</style>
