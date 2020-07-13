<template>
  <q-card class="bg-info">
    <q-card-section horizontal>
      <q-card-section class="q-pr-none">
        <q-select
          class="ellipsis"
          style="width: 8em;"
          standout="bg-info text-white"
          v-model="raciesModel"
          :loading="raceSelectLoadingState"
          transition-show="jump-up"
          transition-hide="jump-down"
          :options="$store.state.raciesStorage"
          option-label="Name"
          option-value="Name"
          emit-value
          dense
          label="Racies"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          class="ellipsis"
          style="width: 12em;"
          standout="bg-info text-white"
          v-model="clansModel"
          :loading="clanSelectLoadingState"
          :disable="disableClanSelect"
          transition-show="jump-up"
          transition-hide="jump-down"
          :options="cascader"
          option-label="Name"
          option-value="Name"
          emit-value
          dense
          label="Clans"
        />
      </q-card-section>
    </q-card-section>

    <q-separator
      color="white"
      inset
    />

    <q-card-section
      horizontal
      class="q-mr-sm"
    >
      <q-card-section class="text-white text-capitalize">
        level
      </q-card-section>

      <q-slider
        class="q-mt-sm q-mr-sm"
        v-model="levelSlider"
        :min="1"
        :max="80"
        :step="1"
        snap
        label-always
      />

      <q-card-actions>
        <q-btn-group flat>
          <q-btn
            icon="remove"
            color="blue"
            text-color="white"
            dense
            @click="levelSlider -= 1"
            :disable="levelSlider <= 1"
          />
          <q-btn
            icon="add"
            color="blue"
            text-color="white"
            dense
            @click="levelSlider += 1"
            :disable="levelSlider >= 80"
          />
        </q-btn-group>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
import { getRacies, getTribes } from '../api/api'

export default {
  name: 'SpecFilter',
  data () {
    return {
      raciesModel: null,
      raceSelectLoadingState: true,
      clansModel: null,
      cascader: null,
      clanSelectLoadingState: true,
      disableClanSelect: true,
      levelSlider: 80
    }
  },
  methods: {
    loadRacies () {
      getRacies()
        .then(response => {
          this.$store.state.raciesStorage = response.Results
        })
        .catch(error => {
          console.log(error)
        })
        .finally(
          this.raceSelectLoadingState = false
        )
    },
    loadTribes () {
      getTribes()
        .then(response => {
          this.$store.state.clansStorage = response.Results
        })
        .catch(error => {
          console.log(error)
        })
        .finally(
          this.clanSelectLoadingState = false
        )
    }
  },
  created () {
    this.loadRacies()
    this.loadTribes()
  },
  watch: {
    raciesModel (val) {
      this.clansModel = null
      if (val) {
        this.disableClanSelect = false
      }
      let index = 0
      for (const i in this.$store.state.raciesStorage) {
        switch (val) {
          case this.$store.state.raciesStorage[i].Name:
            this.cascader = this.$store.state.clansStorage.slice(2 * index, 2 * (index + 1))
            break
          default:
            break
        }
        index += 1
      }
    }
  },
  mounted () {

  }
}
</script>

<style>

</style>
