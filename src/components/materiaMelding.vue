<template>
  <q-card>
    <q-card-section class="text-center q-pb-none">
      Materia Melding
    </q-card-section>
    <q-card-section>
      <q-table
        dense
        flat
        bordered
        wrap-cells
        separator="cell"
        :data="stats"
        :columns="columns"
      >
        <template #body-cell-stats="props">
          <q-td :props="props">
            {{ props.row.name }}
          </q-td>
        </template>
        <template #body-cell-6="props">
          <q-td
            v-if="props.row[6] !== undefined"
            :props="props"
          >
            {{ props.row[6] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>
        <template #body-cell-19="props">
          <q-td
            v-if="props.row[19] !== undefined"
            :props="props"
          >
            {{ props.row[19] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>
        <template #body-cell-22="props">
          <q-td
            v-if="props.row[22] !== undefined"
            :props="props"
          >
            {{ props.row[22] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>
        <template #body-cell-27="props">
          <q-td
            v-if="props.row[27] !== undefined"
            :props="props"
          >
            {{ props.row[27] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>
        <template #body-cell-44="props">
          <q-td
            v-if="props.row[44] !== undefined"
            :props="props"
          >
            {{ props.row[44] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>
        <template #body-cell-45="props">
          <q-td
            v-if="props.row[45] !== undefined"
            :props="props"
          >
            {{ props.row[45] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>
        <template #body-cell-46="props">
          <q-td
            v-if="props.row[46] !== undefined"
            :props="props"
          >
            {{ props.row[46] }}
          </q-td>
          <q-td
            v-else
            :props="props"
            class="text-green"
          >
            0
          </q-td>
        </template>

        <template #bottom>
          <q-chip
            outline
            color="green"
            size="xs"
            label="below cap"
          />
          <q-chip
            outline
            color="orange"
            size="xs"
            label="on cap"
          />
          <q-chip
            outline
            color="red"
            size="xs"
            label="above cap"
          />
        </template>
      </q-table>
    </q-card-section>
    <q-card-section class="q-py-none">
      <q-card
        bordered
        class="no-shadow"
      >
        <q-card-section
          horizontal
          class="justify-around"
        >
          <q-card-section class="q-gutter-y-xs">
            <div
              v-for="slot in data.MateriaSlotCount"
              :key="slot"
              class="row q-gutter-x-sm items-center"
            >
              <q-select
                dense
                outlined
                style="width: 10rem"
                :options="materia"
                option-value="ID"
                option-label="Url"
                v-model="slots[slot]"
              />
              <span>100%</span>
            </div>
          </q-card-section>
          <template v-if="data.MateriaSlotCount < 5">
            <q-separator vertical />
            <q-card-section class="q-gutter-y-xs">
              <div
                v-for="advanceSlot in 5-data.MateriaSlotCount"
                :key="advanceSlot"
                class="row q-gutter-x-sm items-center"
              >
                <q-select
                  dense
                  outlined
                  style="width: 10rem"
                  :disable="data.IsAdvancedMeldingPermitted === 0 ? true : false"
                  :options="materia"
                  v-model="advanceSlots[advanceSlot]"
                />
                <span>10%</span>
              </div>
            </q-card-section>
          </template>
        </q-card-section>
      </q-card>
    </q-card-section>
    <q-card-actions>
      <q-btn
        flat
        dense
        size="12px"
        :ripple="false"
        icon="cancel"
        label="cancel"
      />
      <q-btn
        flat
        dense
        size="12px"
        :ripple="false"
        icon="done"
        label="apply"
      />
      <q-space />
      <q-btn
        flat
        dense
        size="12px"
        :ripple="false"
        icon="delete"
        label="clear"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import {
  getMateria,
  getMateriaJoinRate,
  getExtraColumns
  // getGameContent
  // getItemLevelModifier
} from '../api/api'

export default {
  name: 'MateriaMelding',
  props: {
    data: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      columns: [{ name: 'stats', align: 'right', required: true, label: 'Stats' }],
      stats: [{ name: 'Current Value' }, { name: 'to cap' }],
      materia: [],
      materiaJoinRate: [],
      slots: [],
      advanceSlots: []
    }
  },
  created () {
    this.getColumns()
    this.getData()
    this.getStatsCap()
  },
  beforeMount () {
    getMateria()
      .then(response => {
        this.materia = response.Results
        // console.log(this.materia)
      })
      .catch(error => {
        console.log(error)
      })
    getMateriaJoinRate()
      .then(response => {
        this.materiaJoinRate = response.Results
        // console.log(this.materiaJoinRate)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    getColumns () {
      const basic = this.$store.state.columns
      for (var index in basic) {
        if (basic[index].name > 5) {
          this.columns.push(basic[index])
        }
      }
      // console.log('columns: ', this.columns)
    },
    getData () {
      for (var index in this.data.Stats) {
        if (this.data.Stats[index].ID > 5) {
          this.stats[0] = {
            ...this.stats[0],
            [this.data.Stats[index].ID]:
              this.data.CanBeHq === 0 ? this.data.Stats[index].NQ : this.data.Stats[index].HQ
          }
          // console.log('stats: ', this.stats)
        } else {
          continue
        }
      }
    },
    getStatsCap () {
      const columns = ['BaseParamModifier']
      // var modifierRole = {}
      const baseParamModifier = getExtraColumns(this.data.ID, columns.join(',')).then(response => {
        return Promise.resolve(response.BaseParamModifier)
      })
      baseParamModifier.then(value => {
        console.log(value)
      })
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
