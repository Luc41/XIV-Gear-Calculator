<template>
  <q-table
    :title="title"
    flat
    dense
    card-class="bg-grey-2 text-black"
    table-header-class="bg-grey-4"
    table-class="text-black"
    :data="itemsShow"
    :columns="columns"
    row-key="Name"
    selection="single"
    :selected.sync="selected"
    :loading="loading"
    :pagination.sync="pagination"
    :rows-per-page-options="[0]"
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
        class="ellipsis"
        @mouseover="itemInfo = true"
        @mouseout="itemInfo = false"
      >
        <div class="row">
          <q-icon
            :name="'img:https://xivapi.com' + props.row.Icon"
            size="md"
          />
          <div class="q-ml-xs col">
            <div class="column">
              <q-badge
                align="middle"
                color="grey-8"
                class="self-start"
                :label="'iLv ' + props.row.LevelItem"
              />
              <div class="col">
                {{ props.row.Name }}
                <q-icon
                  :name="'img:/images/hq-dark.png'"
                  v-if="props.row.CanBeHq === 1"
                  class="q-ma-none"
                />
              </div>
            </div>
          </div>
        </div>
      </q-td>
    </template>

    <template #body-cell-Materia="props">
      <q-td :props="props">
        <q-btn
          flat
          :ripple="false"
          padding="xs"
        >
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
          <q-popup-proxy>
            <pop-materia-melding :data="props.row" />
          </q-popup-proxy>
        </q-btn>
      </q-td>
    </template>

    <template #body-cell-1="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Strength !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Strength.NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Strength.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-2="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Dexterity !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Dexterity.NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Dexterity.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-3="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Vitality !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Vitality.NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Vitality.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-4="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Intelligence !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Intelligence.NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Intelligence.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-5="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Mind !== undefined">
          <q-badge
            color="blue"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Mind.NQ }}
          </q-badge>
          <q-badge
            color="blue"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Mind.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>

    <template #body-cell-6="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Piety !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Piety.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Piety.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-19="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Tenacity !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Tenacity.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Tenacity.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-22="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.DirectHitRate !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.DirectHitRate.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.DirectHitRate.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-27="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.CriticalHit !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.CriticalHit.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.CriticalHit.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-44="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.Determination !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.Determination.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.Determination.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-45="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.SkillSpeed !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.SkillSpeed.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.SkillSpeed.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>
    <template #body-cell-46="props">
      <q-td :props="props">
        <template v-if="props.row.Stats.SpellSpeed !== undefined">
          <q-badge
            color="green"
            v-if="props.row.CanBeHq === 0"
            class="text-caption"
          >
            {{ props.row.Stats.SpellSpeed.NQ }}
          </q-badge>
          <q-badge
            color="green"
            v-else
            class="text-caption"
          >
            {{ props.row.Stats.SpellSpeed.HQ }}
          </q-badge>
        </template>
      </q-td>
    </template>

    <template #bottom>
      {{ JSON.stringify(selected) }}
    </template>
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
    }
  },
  watch: {
  },
  computed: {
    ...mapState([
      'columns'
    ])
    // data () {
    //   const rawdata = this.$store.state.itemsStorage
    //   var tmp = []
    //   for (var item in rawdata) {
    //     if (rawdata[item].EquipSlotCategory[this.title] === 1) {
    //       tmp.push(rawdata[item])
    //     }
    //   }
    //   return tmp
    // }
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
</style>
