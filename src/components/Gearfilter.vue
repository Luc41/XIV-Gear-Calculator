<template>
  <q-card class="bg-secondary q-mx-xs">
    <q-card-section horizontal>
      <q-card-section>
        rare
      </q-card-section>
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
            self="center middle"
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
            self="center middle"
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
            self="center middle"
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
            self="center middle"
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
            self="center middle"
            content-class="bg-pink text-white shadow-4"
          >
            Aetherial Items
          </q-tooltip>
        </q-chip>
      </q-card-actions>
    </q-card-section>

    <q-separator
      color="orange"
      inset
    />

    <q-card-section horizontal>
      <q-card-section>
        cate
      </q-card-section>
      <q-card-actions>
        <q-chip
          :selected.sync="categories.General"
          color="orange"
          text-color="white"
          dense
          icon=""
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
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
            anchor="top middle"
            self="center middle"
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
            anchor="top middle"
            self="center middle"
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
            anchor="top middle"
            self="center middle"
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
  name: 'Gearfilter',
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
  computed: {
    // compute selected options (need modified)
    selection () {
      return Object.keys(this.desert)
        .filter(type => this.desert[type] === true)
        .join(', ')
    }
  }

}
</script>

<style>

</style>
