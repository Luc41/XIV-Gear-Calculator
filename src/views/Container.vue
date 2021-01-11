<template>
  <q-page
    class="q-pa-md"
    padding
  >
    <div class="row justify-center">
      <q-banner
        rounded
        dense
        inline-actions
        class="bg-grey-7 text-white col-md-10 col-sm"
      >
        <q-btn-dropdown
          flat
          icon="img:/images/03_DPS/Job/Bard.png"
          class="bg-transparent"
          content-class="hide-scrollbar"
          :label="this.$route.params.job !== undefined ? this.$route.params.job : 'select job'"
          :to="'/c/'.concat(this.$route.params.job)"
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
      </q-banner>
    </div>
    <div class="row justify-center q-mt-xs">
      <router-view class="col-md-10 col-sm" />
    </div>
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

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
