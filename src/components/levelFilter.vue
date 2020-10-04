<template>
  <q-card class="bg-grey-2">
    <q-card-section
      class="q-pa-sm"
    >
      <div class="text-black text-center text-capitalize">
        item level range
      </div>

      <q-card-actions align="around">
        <q-input
          v-model.number="itemLevel.bottom"
          :step="5"
          :min="0"
          :max="itemLevel.top"
          type="number"
          style="width: 9em;"
          standout
          dense
        />

        <q-input
          v-model.number="itemLevel.top"
          :step="5"
          :min="itemLevel.bottom"
          :max="itemLevel.max"
          type="number"
          style="width: 9em;"
          standout
          dense
        />
      </q-card-actions>
    </q-card-section>

    <q-separator
      color="black"
      inset
    />

    <q-card-section
      class="q-pa-sm"
    >
      <div class="text-black text-center text-capitalize">
        equip level range
      </div>

      <q-card-actions align="around">
        <q-input
          v-model.number="equipLevel.bottom"
          :step="1"
          :min="1"
          :max="equipLevel.top"
          type="number"
          style="width: 9em;"
          standout
          dense
        />

        <q-input
          v-model.number="equipLevel.top"
          :step="1"
          :min="equipLevel.bottom"
          :max="equipLevel.max"
          type="number"
          style="width: 9em;"
          standout
          dense
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
      itemLevel: {
        bottom: 470,
        top: 505,
        max: 505
      },
      equipLevel: {
        bottom: 1,
        top: 80,
        max: 80
      }
    }
  },
  methods: {
    onReset () {
      this.itemLevel = {
        bottom: 470,
        top: 505,
        max: 505
      }
      this.equipLevel = {
        bottom: 1,
        top: 80,
        max: 80
      }
    }
  }
}
</script>

<style lang="scss" scope>

</style>
