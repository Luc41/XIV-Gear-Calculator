<template>
  <q-card class="bg-grey-2">
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

    <q-separator
      color="black"
      inset
    />

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
  name: 'GearFilter',
  data () {
    return {
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
    onSubmit () {
      const query = {
        rarity: {
          name: 'rarity',
          val: this.computedRarity
        },
        category: {
          name: 'category',
          val: this.computedCatgories
        }
      }
      this.$store.commit('submitQuery', query.rarity)
      this.$store.commit('submitQuery', query.category)
    },
    onReset () {
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
  computed: {
    computedRarity: function () {
      var hash = ''
      for (var key in this.rarity) {
        if (this.rarity[key]) {
          hash += 1
        } else {
          hash += 0
        }
      }
      return hash
    },
    computedCatgories: function () {
      var hash = ''
      for (var key in this.categories) {
        if (this.categories[key]) {
          hash += 1
        } else {
          hash += 0
        }
      }
      return hash
    }
  }
}
</script>

<style>

</style>
