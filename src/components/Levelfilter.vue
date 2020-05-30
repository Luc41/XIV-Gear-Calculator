<template>
  <q-card class="bg-primary q-mx-xs">
    <q-card-section
      class="numInput"
      horizontal
    >
      <q-card-section>il range</q-card-section>

      <q-card-actions>
        <q-input
          v-model.number="il_RangeBottom"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="max-width: 70px;"
          class="q-px-xs"
        />
        <q-input
          v-model.number="il_RangeTop"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="max-width: 70px;"
          class="q-px-xs"
        />
      </q-card-actions>
    </q-card-section>

    <q-separator
      color="orange"
      inset
    />

    <q-card-section
      class="numInput"
      horizontal
    >
      <q-card-section>lv range</q-card-section>
      <q-card-actions>
        <q-input
          v-model.number="lev_RangeBottom"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="max-width: 70px"
          class="q-px-xs"
        />
        <q-input
          v-model.number="lev_RangeTop"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="max-width: 70px"
          class="q-px-xs"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Levelfilter',
  data () {
    return {
      snap: {
        min: '470',
        max: '505'
      },
      il_RangeBottom: 470,
      il_RangeTop: 505,
      lev_RangeBottom: 1,
      lev_RangeTop: 80
    }
  }

}
</script>

<style>

</style>
