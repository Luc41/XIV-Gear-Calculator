<template>
  <q-card class="bg-info">
    <q-card-section horizontal>
      <q-card-section>
        <q-select
          standout="bg-info text-white"
          v-model="model"
          transition-show="jump-up"
          transition-hide="jump-up"
          :options="Racies"
          option-value="racies"
          option-label="racies"
          emit-value
          dense
          label="Racies"
          style="width: 14em;"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          standout="bg-info text-white"
          v-model="model1"
          transition-show="jump-up"
          transition-hide="jump-up"
          :options="Racies"
          option-label="born"
          option-value="born"
          emit-value
          dense
          label="Born"
          style="width: 16em;"
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
        label
        style="margin-right: 2em;"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Specfilter',
  data () {
    return {
      model: null,
      model1: null,
      Racies: [
        { racies: 'Hyur', born: ['Midlander', 'Highlander'] },
        { racies: 'Miqo\'te', born: ['Seeker of the Sun', 'Keeper of the Moon'] },
        { racies: 'Lalafell', born: ['Plainsfolk', 'Dunesfolk'] },
        { racies: 'Elezen', born: ['Wildwood', 'Duskwight'] },
        { racies: 'Roegadyn', born: ['Hellsguard', 'Sea Wolf'] },
        { racies: 'Au Ra', born: ['Xaela', 'Raen'] },
        { racies: 'Viera', born: ['Rava', 'Veena'] },
        { racies: 'Hrothgar', born: ['Helions', 'The Lost'] }
      ],
      levelSlider: 80
    }
  },
  mounted: {
    Cascade (fa) {

    }
  }

}
</script>

<style>

</style>
