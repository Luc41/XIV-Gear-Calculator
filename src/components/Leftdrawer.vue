<template>
  <q-scroll-area class="fit">
    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>战斗</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/DPSRole.png"
      label="DPS"
    >
      <q-banner
        dense
        class="bg-info text-white no-shadow"
      >
        物理远程
      </q-banner>

      <div
        v-for="job in jobs.slice(0,3)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>

      <q-banner
        dense
        class="bg-info text-white no-shadow"
      >
        物理近战
      </q-banner>

      <div
        v-for="job in jobs.slice(3,7)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>

      <q-banner
        dense
        class="bg-info text-white no-shadow"
      >
        魔法
      </q-banner>

      <div
        v-for="job in jobs.slice(7,10)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/TankRole.png"
      label="Tank"
      caption
    >
      <div
        v-for="job in jobs.slice(10,14)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/HealerRole.png"
      label="Healer"
      caption
    >
      <div
        v-for="job in jobs.slice(14,17)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>
    </q-expansion-item>

    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>生活</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Crafter"
      caption
    >
      <div
        v-for="job in jobs.slice(17,24)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Gatherer"
      caption
    >
      <div
        v-for="job in jobs.slice(24,27)"
        :key="job.index"
      >
        <sidebar-select
          :active="link === job.short"
          @click="link = job.short"
          :to="'/' + job.job"
          :job="job.job"
          :src="job.src"
        />
      </div>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>
import sidebarSelect from './sidebarSelect'

const jobs = [
  { index: 1, job: 'Bard', short: 'brd', src: '/images/03_DPS/Job/Bard.png' },
  { index: 2, job: 'Machinist', short: 'mch', src: '/images/03_DPS/Job/Machinist.png' },
  { index: 3, job: 'Dancer', short: 'dnc', src: '/images/03_DPS/Job/Dancer.png' },
  { index: 4, job: 'Dragoon', short: 'drg', src: '/images/03_DPS/Job/Dragoon.png' },
  { index: 5, job: 'Monk', short: 'mnk', src: '/images/03_DPS/Job/Monk.png' },
  { index: 6, job: 'Samurai', short: 'sam', src: '/images/03_DPS/Job/Samurai.png' },
  { index: 7, job: 'Ninja', short: 'nin', src: '/images/03_DPS/Job/Ninja.png' },
  { index: 8, job: 'Blackmage', short: 'blm', src: '/images/03_DPS/Job/Blackmage.png' },
  { index: 9, job: 'Summoner', short: 'smr', src: '/images/03_DPS/Job/Summoner.png' },
  { index: 10, job: 'Redmage', short: 'rdm', src: '/images/03_DPS/Job/Redmage.png' },
  { index: 11, job: 'Paladin', short: 'pld', src: '/images/01_TANK/Job/Paladin.png' },
  { index: 12, job: 'Warrior', short: 'war', src: '/images/01_TANK/Job/Warrior.png' },
  { index: 13, job: 'Darkknight', short: 'drk', src: '/images/01_TANK/Job/Darkknight.png' },
  { index: 14, job: 'Gunbreaker', short: 'gnb', src: '/images/01_TANK/Job/Gunbreaker.png' },
  { index: 15, job: 'Whitemage', short: 'whm', src: '/images/02_HEALER/Job/Whitemage.png' },
  { index: 16, job: 'Scholar', short: 'sch', src: '/images/02_HEALER/Job/Scholar.png' },
  { index: 17, job: 'Astrologian', short: 'ast', src: '/images/02_HEALER/Job/Astrologian.png' },
  { index: 18, job: 'Alchemist', short: 'alc', src: '/images/04_CRAFTER/Alchemist.png' },
  { index: 19, job: 'Armorer', short: 'arm', src: '/images/04_CRAFTER/Armorer.png' },
  { index: 20, job: 'Blacksmith', short: 'bsm', src: '/images/04_CRAFTER/Blacksmith.png' },
  { index: 21, job: 'Carpenter', short: 'crp', src: '/images/04_CRAFTER/Carpenter.png' },
  { index: 22, job: 'Culinarian', short: 'cul', src: '/images/04_CRAFTER/Culinarian.png' },
  { index: 23, job: 'Goldsmith', short: 'gsm', src: '/images/04_CRAFTER/Goldsmith.png' },
  { index: 24, job: 'Leatherworker', short: 'ltw', src: '/images/04_CRAFTER/Leatherworker.png' },
  { index: 25, job: 'Botanist', short: 'btn', src: '/images/05_GATHERER/Botanist.png' },
  { index: 26, job: 'Miner', short: 'min', src: '/images/05_GATHERER/Miner.png' },
  { index: 27, job: 'Fisher', short: 'fsh', src: '/images/05_GATHERER/Fisher.png' }
]

export default {
  name: 'LeftDrawer',
  components: {
    sidebarSelect
  },
  data () {
    return {
      link: '',
      jobs: jobs
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scope>

</style>
