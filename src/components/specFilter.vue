<template>
  <q-card class="bg-grey-2">
    <q-card-section horizontal>
      <q-card-section class="q-pr-none">
        <q-select
          class="ellipsis"
          style="width: 8em;"
          standout="bg-grey-4 text-black"
          options-selected-class="bg-grey-6 text-white"
          v-model="raciesModel"
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
          standout="bg-grey-4 text-black"
          options-selected-class="bg-grey-6 text-white"
          v-model="clansModel"
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
      color="black"
      inset
    />

    <q-card-section
      horizontal
      class="q-mr-sm"
    >
      <q-card-section class="text-black text-capitalize">
        level
      </q-card-section>

      <q-slider
        class="q-mr-sm"
        v-model="levelSlider"
        :min="1"
        :max="80"
        :step="1"
        snap
        color="grey-6"
        style="margin-top: 2%;"
        label
      />

      <q-card-actions>
        <q-btn-group flat>
          <q-btn
            icon="remove"
            color="grey-4"
            text-color="black"
            dense
            @click="levelSlider -= 1"
            :disable="levelSlider <= 1"
          />
          <q-btn
            icon="add"
            color="grey-4"
            text-color="black"
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
      clansModel: null,
      cascader: null,
      disableClanSelect: true,
      levelSlider: 80
    }
  },
  methods: {
    loadRacies () {
      getRacies()
        .then(response => {
          this.$store.commit('updateSessionStorage', {
            name: 'raciesStorage',
            val: JSON.stringify(response.Results)
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadTribes () {
      getTribes()
        .then(response => {
          this.$store.commit('updateSessionStorage', {
            name: 'clansStorage',
            val: JSON.stringify(response.Results)
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    onSubmit () {
      const query = {
        race: {
          name: 'race',
          val: this.raciesModel
        },
        tribe: {
          name: 'tribe',
          val: this.clansModel
        },
        level: {
          name: 'level',
          val: this.levelSlider
        }
      }
      this.$store.commit('submitQuery', query.race)
      this.$store.commit('submitQuery', query.tribe)
      this.$store.commit('submitQuery', query.level)
    },
    onReset () {
      this.raciesModel = null
      this.clansModel = null
      this.disableClanSelect = true
      this.levelSlider = 80
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
