<template>
  <q-btn-dropdown
    flat
    split
    style="width: 20%;"
    icon="img:/images/03_DPS/Job/Bard.png"
    class="bg-transparent"
    content-class="hide-scrollbar"
    :label="this.$route.params.job !== undefined ? this.$route.params.job : 'select a job'"
  >
    <q-list dense>
      <q-banner
        dense
        class="bg-red-10 text-white"
      >
        rangedps
      </q-banner>
      <q-item
        dense
        v-for="job in joblist.rangedps"
        :key="job.name"
        clickable
        v-close-popup
        :to="{ name: 'Panel', params: { job: job.name } }"
      >
        <q-item-section avatar>
          <q-avatar :icon="'img:'.concat(job.src)" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ job.name }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-banner
        dense
        class="bg-red-10 text-white"
      >
        meleedps
      </q-banner>
      <q-item
        dense
        v-for="job in joblist.meleedps"
        :key="job.name"
        clickable
        v-close-popup
        :to="{ name: 'Panel', params: { job: job.name } }"
      >
        <q-item-section avatar>
          <q-avatar :icon="'img:'.concat(job.src)" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ job.name }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-banner
        dense
        class="bg-red-10 text-white"
      >
        magic
      </q-banner>
      <q-item
        dense
        v-for="job in joblist.magic"
        :key="job.name"
        clickable
        v-close-popup
        :to="{ name: 'Panel', params: { job: job.name } }"
      >
        <q-item-section avatar>
          <q-avatar :icon="'img:'.concat(job.src)" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ job.name }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-banner
        dense
        class="bg-primary text-white"
      >
        tank
      </q-banner>
      <q-item
        dense
        v-for="job in joblist.tank"
        :key="job.name"
        clickable
        v-close-popup
        :to="{ name: 'Panel', params: { job: job.name } }"
      >
        <q-item-section avatar>
          <q-avatar :icon="'img:'.concat(job.src)" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ job.name }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-banner
        dense
        class="bg-green text-white"
      >
        healer
      </q-banner>
      <q-item
        dense
        v-for="job in joblist.healer"
        :key="job.name"
        clickable
        v-close-popup
        :to="{ name: 'Panel', params: { job: job.name } }"
      >
        <q-item-section avatar>
          <q-avatar :icon="'img:'.concat(job.src)" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ job.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { classJobCategory } from '../utils/data'

export default {
  name: 'Joblist',
  data () {
    return {
      joblist: classJobCategory
    }
  }
}
</script>

<style>

</style>
