<template>
  <q-table
    :title="title"
    dense
    hide-bottom
    card-class="bg-grey-6 text-white"
    table-header-class="bg-grey-9"
    table-class="text-white"
    :data="data"
    :columns="columns"
    row-key="Name"
    selection="single"
    :selected.sync="selected"
    :loading="loading"
    :pagination.sync="pagination"
    :rows-per-page-options="[0]"
    no-data-label="Find nothing, may need refresh"
    loading-label="Loading data"
  >
    <template #loading>
      <q-inner-loading
        showing
        color="grey-7"
      />
    </template>

    <template #top-right>
      <q-btn
        label="submit"
        @click="onSubmit()"
      />
    </template>

    <template #body-cell-Name="props">
      <q-td
        :props="props"
        class="q-gutter-x-xs"
      >
        <q-icon
          :name="'img:https://xivapi.com' + props.row.Icon"
          size="sm"
        />
        <q-badge
          color=""
          :label="'iLv ' + props.row.LevelItem"
          class="text-caption text-weight-thin"
        />
        {{ props.row.Name }}
      </q-td>
    </template>

    <template #body-cell-3="props">
      <q-td :props="props">
        <q-badge class="text-caption">
          {{ props.row.BaseParamValue1 }}
        </q-badge>
      </q-td>
    </template>
    <template #body-cell-2="props">
      <q-td :props="props">
        <q-badge class="text-caption">
          {{ props.row.BaseParamValue0 }}
        </q-badge>
      </q-td>
    </template>
    <template #body-cell-27="props">
      <q-td :props="props">
        <div v-if="props.row.Stats.CriticalHit !== undefined">
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
        </div>
        <q-badge
          v-else
          color="green"
          class="text-caption"
        >
          0
        </q-badge>
      </q-td>
    </template>
    <template #body-cell-22="props">
      <q-td :props="props">
        <div v-if="props.row.Stats.DirectHitRate !== undefined">
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
        </div>
        <q-badge
          v-else
          color="green"
          class="text-caption"
        >
          0
        </q-badge>
      </q-td>
    </template>
    <template #body-cell-44="props">
      <q-td :props="props">
        <div v-if="props.row.Stats.Determination !== undefined">
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
        </div>
        <q-badge
          v-else
          color="green"
          class="text-caption"
        >
          0
        </q-badge>
      </q-td>
    </template>
    <template #body-cell-45="props">
      <q-td :props="props">
        <div v-if="props.row.Stats.SkillSpeed !== undefined">
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
        </div>
        <q-badge
          v-else
          color="green"
          class="text-caption"
        >
          0
        </q-badge>
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'GearTable',
  props: {
    title: {
      type: String,
      default: 'Unknown'
    },
    columns: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return {
      selected: [],
      loading: false,
      data: [],
      pagination: {
        rowsPerPage: 0
      }
    }
  },
  methods: {
    onSubmit () {
      const rawdata = this.$store.state.itemsStorage
      var data = []
      for (var item in rawdata) {
        if (rawdata[item].EquipSlotCategory[this.title] === 1) {
          data.push(rawdata[item])
        }
      }
      console.log(data)
      this.data = data
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
