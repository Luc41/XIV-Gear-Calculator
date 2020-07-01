<template>
  <q-card class="bg-primary q-pa-sm">
    <q-card-section
      class="numInput"
      horizontal
    >
      <q-card-section>il range</q-card-section>

      <q-space />

      <q-card-actions class="q-gutter-sm">
        <q-input
          v-model.number="il_RangeBottom"
          :step="5"
          :min="0"
          :max="il_RangeTop"
          type="number"
          standout
          dense
          dark
        />

        <q-input
          v-model.number="il_RangeTop"
          :step="5"
          :min="il_RangeBottom"
          :max="il_PatchMax"
          type="number"
          standout
          dense
          dark
        />
      </q-card-actions>
    </q-card-section>

    <q-separator
      color="white"
      size="2px"
      style="border-radius: 2px;"
    />

    <q-card-section
      class="numInput"
      horizontal
    >
      <q-card-section>lv range</q-card-section>

      <q-space />

      <q-card-actions class="q-gutter-sm">
        <q-input
          v-model.number="lv_RangeBottom"
          :step="1"
          :min="1"
          :max="lv_RangeTop"
          type="number"
          standout
          dense
          dark
        />

        <q-input
          v-model.number="lv_RangeTop"
          :step="1"
          :min="lv_RangeBottom"
          :max="lv_PatchMax"
          type="number"
          standout
          dense
          dark
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'LevelFilter',
  data () {
    return {
      il_RangeBottom: 470,
      il_RangeTop: 505,
      il_PatchMax: 505,
      lv_RangeBottom: 1,
      lv_RangeTop: 80,
      lv_PatchMax: 80
    }
  }
}
</script>

<style lang="scss" scope>
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>
