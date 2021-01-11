<template>
  <q-table
    :title="title"
    dense
    square
    flat
    bordered
    style="margin-right: 9px;"
    card-class="bg-grey-2 text-black"
    table-header-class="bg-grey-4"
    table-class="text-black hide-scrollbar"
    :data="itemsShow"
    :columns="columns"
    row-key="Name"
    selection="single"
    :selected.sync="selected"
    :loading="loading"
    :pagination.sync="pagination"
    :rows-per-page-options="[0]"
    hide-bottom
    no-data-label="Found nothing, please refresh"
    loading-label="Loading data"
  >
    <!-- <template #loading>
      <q-inner-loading
        showing
        color="grey-7"
      />
    </template> -->

    <!-- <template #top-right>
      <q-btn
        flat
        color="red"
        @click="onSubmit()"
      />
    </template> -->

    <template #body-cell-Name="props">
      <q-td
        :props="props"
        @mouseover="itemInfo = true"
        @mouseout="itemInfo = false"
      >
        <q-icon
          :name="'img:https://xivapi.com' + props.row.Icon"
          size="md"
        />
        <q-badge
          align="top"
          color="grey-8"
          class="q-ml-xs"
          :label="'iLv ' + props.row.LevelItem"
        />
        <q-badge
          align="bottom"
          color="transparent"
          text-color="black"
          style="margin: 0 0 0 -4.5em;"
          class="ellipsis"
        >
          {{ props.row.Name }}
          <q-icon
            :name="'img:/images/hq-dark.png'"
            size="10px"
            class="q-mx-xs"
            v-if="props.row.CanBeHq === 1"
          />
        </q-badge>
      </q-td>
    </template>

    <template #body-cell-Materia="props">
      <q-td :props="props">
        <q-btn
          flat
          :ripple="false"
          padding="xs"
          class="row"
        >
          <div class="col">
            <q-icon
              v-for="slot in props.row.MateriaSlotCount"
              :key="'slot' + slot"
              class="slot q-pr-xs"
              :id="'slot' + slot"
            />
            <template v-if="props.row.IsAdvancedMeldingPermitted === 1">
              <q-icon
                v-for="advanceslot in props.row.MateriaSlotCount === 2 ? 3 : 4"
                :key="'advanceslot' + advanceslot"
                class="advanceSlot q-pr-xs"
                :id="'advanceSlot' + advanceslot"
              />
            </template>
          </div>
          <q-popup-proxy>
            <pop-materia-melding :data="props.row" />
          </q-popup-proxy>
        </q-btn>
      </q-td>
    </template>

    <template #body-cell-1="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(1)] !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(1)].NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(1)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-2="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(2)] !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(2)].NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(2)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-3="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(3)] !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(3)].NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(3)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-4="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(4)] !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(4)].NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(4)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-5="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(5)] !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(5)].NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(5)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>

    <template #body-cell-6="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(6)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(6)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(6)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-19="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(19)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(19)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(19)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-22="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(22)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(22)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(22)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-27="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(27)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(27)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(27)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-44="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(44)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(44)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(44)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-45="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(45)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(45)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(45)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-46="props">
      <q-td :props="props">
        <template v-if="props.row.Stats[statName(46)] !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats[statName(46)].NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats[statName(46)].HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>

    <!-- <template #bottom>
      {{ JSON.stringify(selected) }}
    </template> -->
  </q-table>
</template>

<script>
import { mapState } from 'vuex'

import popMateriaMelding from './materiaMelding'

export default {
  name: 'GearTable',
  components: {
    popMateriaMelding
  },
  props: {
    title: {
      type: String,
      default: 'Unknown'
    },
    loading: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data () {
    return {
      itemsShow: [],
      selected: [],
      itemInfo: false,
      pagination: {
        rowsPerPage: 20
      }
    }
  },
  methods: {
    refreshTable () {
      // clear itemsShow
      this.itemsShow.splice(0, this.itemsShow.length)

      const rawdata = this.$store.state.itemsStorage
      for (var item in rawdata) {
        if (rawdata[item].EquipSlotCategory[this.title] === 1) {
          this.itemsShow.push(rawdata[item])
        }
      }
    },
    getStatsCap () {
      // const baseValue = null
      // const slotModifier = null
      // const roleModifier = null
      return 0
    },
    statName (id) {
      var statName = ''
      for (var index in this.$store.state.baseParamsStorage) {
        if (this.$store.state.baseParamsStorage[index].ID === id) {
          statName = this.$store.state.baseParamsStorage[index].Name
        }
      }
      return statName
    }
  },
  watch: {
  },
  computed: {
    ...mapState([
      'columns'
    ])
  }
}
</script>

<style>
.slot {
  background: url(../../public/images/materia.png);
  display: inline-block;
  height: 15px;
  width: 15px;
/*
  border-style: solid;
  border-color: red;
  border-width: 1px;
*/
}

.advanceSlot {
  background: url(../../public/images/materia.png);
  display: inline-block;
  height: 15px;
  width: 15px;
/*
  border-style: solid;
  border-color: red;
  border-width: 1px
*/
}

#slot1,#slot2,#slot3,#slot4,#slot5 {
  background-position: -4px -4.5px;
  background-size: 9em;
}

#advanceSlot1,#advanceSlot2,#advanceSlot3,#advanceSlot4 {
  background-position: -5px -29px;
  background-size: 9em;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
