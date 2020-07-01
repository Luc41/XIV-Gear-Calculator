<template>
  <q-card class="bg-info">
    <q-card-section horizontal>
      <q-card-section>
        <q-select
          style="width: 8em;"
          standout="bg-info text-white"
          v-model="model"
          transition-show="jump-up"
          transition-hide="jump-up"
          :options="Racies"
          option-label="Name"
          option-value="Name"
          emit-value
          dense
          label="Racies"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          style="width: 12em;"
          standout="bg-info text-white"
          v-model="model1"
          transition-show="jump-up"
          transition-hide="jump-up"
          :options="Racies"
          option-label="Name"
          option-value="Name"
          emit-value
          dense
          label="Born"
        />
      </q-card-section>
    </q-card-section>
    <q-separator
      color="orange"
      size="3px"
      inset
    />
    <q-card-section horizontal>
      <q-card-section class="q-mx-sm">
        LEVEL
      </q-card-section>

      <q-slider
        class="q-my-sm"
        v-model="levelSlider"
        :min="1"
        :max="80"
        :step="1"
        snap
        label-always
        style="margin-right: 2em;"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'SpecFilter',
  data () {
    return {
      model: null,
      model1: null,
      Racies: null,
      levelSlider: 80
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
