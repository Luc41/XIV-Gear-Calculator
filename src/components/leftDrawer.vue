<template>
  <q-scroll-area class="fit">
    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>Disciples of War & Magic</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level=".0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/DPSRole.png"
      label="DPS"
      caption
    >
      <q-banner
        dense
        class="bg-grey-4 text-center"
      >
        Range
      </q-banner>
      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.rangedps"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>

      <q-banner
        dense
        class="bg-grey-4 text-center"
      >
        Melee
      </q-banner>

      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.meleedps"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>

      <q-banner
        dense
        class="bg-grey-4 text-center"
      >
        Magic
      </q-banner>

      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.magic"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level=".0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/TankRole.png"
      label="Tank"
      caption
    >
      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.tank"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level=".0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/HealerRole.png"
      label="Healer"
      caption
    >
      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.healer"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>Disciples of Hand & Land</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level=".0"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Crafter"
      caption
    >
      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.crafter"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level=".0"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Gatherer"
      caption
    >
      <q-list
        class="bg-grey-2 text-center q-pa-xs"
      >
        <q-item
          class="text-right job-list"
          v-for="job in jobs.gatherer"
          :key="job.short"
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="text-white bg-blue shadow-2"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>
import { classJobCategory } from '../utils/data'

export default {
  name: 'LeftDrawer',
  components: {
  },
  data () {
    return {
      jobs: classJobCategory
    }
  },
  methods: {
    /** deprecated */
    /*
    clickEvent (param) {
      this.$store.commit('updateSessionStorage', param)
    }
    */
  }
}
</script>

<style lang="scss">
.job-list {
  border-radius: 5px;
}
</style>
