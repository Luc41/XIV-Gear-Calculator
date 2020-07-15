<template>
  <q-card class="bg-primary">
    <q-card-section
      class="q-pa-sm"
    >
      <div class="text-white text-center text-capitalize">
        item level range
      </div>

      <q-card-actions align="around">
        <q-input
          v-model.number="il_RangeBottom"
          :step="5"
          :min="0"
          :max="il_RangeTop"
          :rules="[
            val => !!val || 'Require a number.',
            val => typeof val === 'number' && Math.floor(val) === val || 'Require int.',
            val => val.toString().length <= 3 || 'Maxmium 3.'
          ]"
          type="number"
          style="width: 9em;"
          standout
          dense
          dark
        />

        <q-input
          v-model.number="il_RangeTop"
          :step="5"
          :min="il_RangeBottom"
          :max="il_PatchMax"
          :rules="[
            val => !!val || 'Require a number.',
            val => typeof val === 'number' && Math.floor(val) === val || 'Require int.',
            val => val.toString().length <= 3 || 'Maxmium 3.'
          ]"
          type="number"
          style="width: 9em;"
          standout
          dense
          dark
        />
      </q-card-actions>
    </q-card-section>

    <q-separator
      color="white"
      inset
    />

    <q-card-section
      class="q-pa-sm"
    >
      <div class="text-white text-center text-capitalize">
        equip level range
      </div>

      <q-card-actions align="around">
        <q-input
          v-model.number="lv_RangeBottom"
          :step="1"
          :min="1"
          :max="lv_RangeTop"
          :rules="[
            val => !!val || 'Require a number.',
            val => typeof val === 'number' && Math.floor(val) === val || 'Require int.',
            val => val.toString().length <= 3 || 'Maxmium 3.'
          ]"
          type="number"
          style="width: 9em;"
          standout
          dense
          dark
        />

        <q-input
          v-model.number="lv_RangeTop"
          :step="1"
          :min="lv_RangeBottom"
          :max="lv_PatchMax"
          :rules="[
            val => !!val || 'Require a number.',
            val => typeof val === 'number' && Math.floor(val) === val || 'Require int.',
            val => val.toString().length <= 3 || 'Maxmium 3.'
          ]"
          type="number"
          style="width: 9em;"
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

</style>
