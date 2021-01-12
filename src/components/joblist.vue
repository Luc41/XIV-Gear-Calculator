<template>
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

    <q-banner
      dense
      class="bg-grey-7 text-white"
    >
      crafter
    </q-banner>
    <q-item
      dense
      v-for="job in joblist.crafter"
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
      class="bg-grey-7 text-white"
    >
      gatherer
    </q-banner>
    <q-item
      dense
      v-for="job in joblist.gatherer"
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
