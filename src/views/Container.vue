<template>
  <q-page
    class="q-pa-md"
    padding
  >
    <div class="column">
      <div class="col">
        <q-banner
          rounded
          inline-actions
          class="bg-grey text-white"
        >
          <span class="text-h5">Bard</span>
          <q-badge
            align="top"
            color="green"
            class="shadow-1"
          >
            <template v-if="$store.state.patch === null">
              <q-spinner-dots
                color="white"
              />
            </template>
            <template v-else>
              {{ $store.state.patch.Name }}
            </template>
          </q-badge>
          <template v-slot:action>
            <q-btn
              flat
              label="share"
              icon="share"
              align="right"
            />
          </template>
          <template v-slot:avatar>
            <q-icon
              name="img:/images/03_DPS/Job/Bard.png"
              color="primary"
            />
          </template>
        </q-banner>
      </div>
      <div class="col">
        <router-view />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scope>
body {
  background-image: url('../assets/testBg.jpg');
  background-position: inherit;
}
</style>
