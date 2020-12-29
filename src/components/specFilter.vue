<template>
  <q-card
    flat
    square
    bordered
    class="bg-grey-2"
  >
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

    <!-- <q-separator
      color="black"
      inset
    /> -->

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

    <!-- <q-separator
      color="black"
      inset
    /> -->

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

    <!-- <q-separator
      color="black"
      inset
    /> -->

    <q-card-section
      horizontal
      class="q-px-xs"
    >
      <q-card-section class="text-black text-capitalize">
        rarity
      </q-card-section>

      <q-space />

      <q-card-actions>
        <q-chip
          :selected.sync="rarity.White"
          color="white"
          text-color="grey"
          dense
          icon=""
        >
          <q-tooltip
            anchor="top middle"
            self="bottom middle"
            content-class="bg-white text-grey-7 shadow-4"
          >
            White Items
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="rarity.Green"
          color="green"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="top middle"
            self="bottom middle"
            content-class="bg-green text-white shadow-4"
          >
            Green Items
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="rarity.Blue"
          color="blue"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="top middle"
            self="bottom middle"
            content-class="bg-blue text-white shadow-4"
          >
            Blue Items
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="rarity.Relic"
          color="purple"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="top middle"
            self="bottom middle"
            content-class="bg-purple text-white shadow-4"
          >
            Relic Items
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="rarity.Aetherial"
          color="pink"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="top middle"
            self="bottom middle"
            content-class="bg-pink text-white shadow-4"
          >
            Aetherial Items
          </q-tooltip>
        </q-chip>
      </q-card-actions>
    </q-card-section>

    <!-- <q-separator
      color="black"
      inset
    /> -->

    <q-card-section
      horizontal
      class="q-px-xs"
    >
      <q-card-section class="text-black text-capitalize">
        categories
      </q-card-section>

      <q-space />

      <q-card-actions>
        <q-chip
          :selected.sync="categories.General"
          color="orange"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="bottom middle"
            self="top middle"
            content-class="bg-orange text-white shadow-4"
          >
            General
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="categories.Crafted"
          color="orange"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="bottom middle"
            self="top middle"
            content-class="bg-orange text-white shadow-4"
          >
            Crafted
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="categories.Pvp"
          color="orange"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="bottom middle"
            self="top middle"
            content-class="bg-orange text-white shadow-4"
          >
            PVP
          </q-tooltip>
        </q-chip>
        <q-chip
          :selected.sync="categories.Food"
          color="orange"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="bottom middle"
            self="top middle"
            content-class="bg-orange text-white shadow-4"
          >
            Food
          </q-tooltip>
        </q-chip>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'SpecFilter',
  data () {
    return {
      raciesModel: null,
      clansModel: null,
      cascader: null,
      disableClanSelect: true,
      levelSlider: 80,
      itemLevel: {
        bottom: 500,
        top: 535,
        max: 535
      },
      equipLevel: {
        bottom: 1,
        top: 80,
        max: 80
      },
      rarity: {
        White: true,
        Green: true,
        Blue: true,
        Relic: true,
        Aetherial: true
      },
      categories: {
        General: true,
        Crafted: true,
        Pvp: false,
        Food: true
      }
    }
  },
  methods: {
    onReset () {
      this.raciesModel = null
      this.clansModel = null
      this.disableClanSelect = true
      this.levelSlider = 80
      this.itemLevel = {
        bottom: 500,
        top: 535,
        max: 535
      }
      this.equipLevel = {
        bottom: 1,
        top: 80,
        max: 80
      }
      this.rarity = {
        White: true,
        Green: true,
        Blue: true,
        Relic: true,
        Aetherial: true
      }
      this.categories = {
        General: true,
        Crafted: true,
        Pvp: false,
        Food: true
      }
    }
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
