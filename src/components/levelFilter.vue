<template>
  <q-card class="bg-primary q-pa-sm">
    <q-card-section
      class="numInput"
      horizontal
    >
      <q-card-section>il range</q-card-section>

      <q-card-actions class="q-gutter-xs">
        <q-input
          v-model.number="il_RangeBottom"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="width: 100px"
        />

        <q-field
          dark
          dense
          standout
        >
          <template v-slot:control>
            <div
              class="self-center no-outline"
              tabindex="0"
            >
              {{ il_RangeBottom }}
            </div>
          </template>
          <template v-slot:append>
            <q-btn
              flat
              round
              dense
              :disable="il_RangeBottom < 1"
              icon="remove"
              @click.stop="il_RangeBottom -= 5"
            />
            <q-separator />
            <q-btn
              flat
              round
              dense
              :disable="il_RangeBottom > 500"
              icon="add"
              @click.stop="il_RangeBottom += 5"
            />
          </template>
        </q-field>

        <q-input
          v-model.number="il_RangeTop"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="width: 100px"
        />

        <q-field
          dark
          dense
          standout
        >
          <template v-slot:control>
            <div
              class="self-center no-outline"
              tabindex="0"
            >
              {{ il_RangeTop }}
            </div>
          </template>
          <template v-slot:append>
            <q-btn
              flat
              round
              dense
              :disable="il_RangeTop < 1"
              icon="remove"
              @click.stop="il_RangeTop -= 5"
            />
            <q-separator />
            <q-btn
              flat
              round
              dense
              :disable="il_RangeTop > 500"
              icon="add"
              @click.stop="il_RangeTop += 5"
            />
          </template>
        </q-field>
      </q-card-actions>
    </q-card-section>

    <q-separator
      color="orange"
      size="3px"
      inset
    />

    <q-card-section
      class="numInput"
      horizontal
    >
      <q-card-section>lv range</q-card-section>
      <q-card-actions class="q-gutter-xs">
        <q-input
          v-model.number="lev_RangeBottom"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="width: 100px"
        />
        <q-input
          v-model.number="lev_RangeTop"
          type="number"
          outlined
          dense
          bg-color="white"
          :input-style="{color: 'orange'}"
          style="width: 100px"
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
      lev_RangeBottom: 1,
      lev_RangeTop: 80
    }
  }
}
</script>

<style>

</style>
