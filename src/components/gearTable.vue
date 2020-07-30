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
    <template v-slot:loading>
      <q-inner-loading
        showing
        color="grey-7"
      />
    </template>
    <template v-slot:top>
      <q-btn
        label="submit"
        @click="onSubmit()"
      />
    </template>
    <template v-slot:body-cell-Name="props">
      <q-td :props="props">
        <q-icon
          :name="'img:https://xivapi.com' + props.row.Icon"
          size="sm"
        />
        {{ props.row.Name }}
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
      this.data = this.$store.state.itemsStorage.slice(0, 5)
      console.log(this.data[0].Icon)
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
