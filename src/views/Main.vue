<template>
  <q-page
    class="flex q-pa-md"
    style="padding-top: 60px"
  >
    <q-page-sticky
      position="top"
      expand
      class="bg-accent text-white"
    >
      <q-toolbar>
        <q-toolbar-title>Title</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <div class="column">
      <div class="col">
        <q-item class="bg-primary">
          <q-item-section>
            <q-item-label overline>
              il range
            </q-item-label>
          </q-item-section>
          <q-input
            v-model.number="il_RangeBottom"
            type="number"
            outlined
            dense
            bg-color="white"
            :input-style="{color: 'orange'}"
            style="max-width: 70px"
            class="q-mx-xs"
          />
          <q-input
            v-model.number="il_RangeTop"
            type="number"
            outlined
            dense
            bg-color="white"
            :input-style="{color: 'orange'}"
            style="max-width: 70px"
            class="q-mx-xs"
          />
        </q-item>

        <q-separator spaced />

        <q-item class="bg-secondary">
          <q-item-section>
            <q-item-label overline>
              lev range
            </q-item-label>
          </q-item-section>
          <q-input
            v-model.number="lev_RangeBottom"
            type="number"
            outlined
            dense
            bg-color="white"
            :input-style="{color: 'orange'}"
            style="max-width: 70px"
            class="q-mx-xs"
          />
          <q-input
            v-model.number="lev_RangeTop"
            type="number"
            outlined
            dense
            bg-color="white"
            :input-style="{color: 'orange'}"
            style="max-width: 70px"
            class="q-mx-xs"
          />
        </q-item>
      </div>
      <div class="col">
        <img
          alt="Quasar logo"
          src="../assets/logo.png"
        >
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      snap: {
        min: '470',
        max: '505'
      },
      il_RangeBottom: 470,
      il_RangeTop: 505,
      lev_RangeBottom: 1,
      lev_RangeTop: 80
    }
  }
}
</script>

<style>
</style>
