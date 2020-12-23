<template>
  <q-page
    class="q-pa-md"
    padding
  >
    <div class="row justify-center">
      <div class="col-8 col-auto">
        <q-banner
          rounded
          dense
          inline-actions
          class="bg-grey text-white"
        >
          <q-btn-dropdown
            flat
            icon="img:/images/03_DPS/Job/Bard.png"
            :label="this.$route.params.job !== undefined ? this.$route.params.job : 'select job'"
          >
            <joblist />
          </q-btn-dropdown>
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
          <!-- <template v-slot:avatar>
            <q-icon
              name="img:/images/03_DPS/Job/Bard.png"
              color="primary"
              size="lg"
            />
          </template> -->
        </q-banner>
      </div>
    </div>
    <router-view />
  </q-page>
</template>

<script>
import joblist from '../components/joblist'

export default {
  name: 'Container',
  components: {
    joblist
  },
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
