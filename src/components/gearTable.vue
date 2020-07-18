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
    row-key="name"
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
  </q-table>
</template>

<script>
import { getItems } from '../api/api'

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
  onSubmit () {
    getItems()
      .then(response => {
        this.data = response.Results
      })
      .catch(error => {
        return Promise.reject(error)
      })
  }

}
</script>

<style>

</style>
