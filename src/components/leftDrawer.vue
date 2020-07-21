<template>
  <q-scroll-area class="fit">
    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>战斗</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level=".2"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/DPSRole.png"
      label="DPS"
      caption
    >
      <q-banner
        dense
        class="bg-info text-white shadow-2"
      >
        物理远程
      </q-banner>

      <div
        v-for="job in jobs.rangedps"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>

      <q-banner
        dense
        class="bg-info text-white shadow-2"
      >
        物理近战
      </q-banner>

      <div
        v-for="job in jobs.meleedps"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>

      <q-banner
        dense
        class="bg-info text-white shadow-2"
      >
        魔法
      </q-banner>

      <div
        v-for="job in jobs.magic"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level=".2"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/TankRole.png"
      label="Tank"
      caption
    >
      <div
        v-for="job in jobs.tank"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level=".2"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/HealerRole.png"
      label="Healer"
      caption
    >
      <div
        v-for="job in jobs.healer"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>
    </q-expansion-item>

    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>生活</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level=".2"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Crafter"
      caption
    >
      <div
        v-for="job in jobs.crafter"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level=".2"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Gatherer"
      caption
    >
      <div
        v-for="job in jobs.gatherer"
        :key="job.short"
      >
        <q-item
          clickable
          v-ripple
          :active="$store.state.selectedJob === job.job"
          active-class="active-link"
          :to="'/' + job.job"
          dense
        >
          <q-item-section avatar>
            <q-icon :name="'img:' + job.src" />
          </q-item-section>
          <q-item-section>{{ job.job }}</q-item-section>
        </q-item>
      </div>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>

const jobs = {
  rangedps: [
    { job: 'Bard', short: 'brd', src: '/images/03_DPS/Job/Bard.png' },
    { job: 'Machinist', short: 'mch', src: '/images/03_DPS/Job/Machinist.png' },
    { job: 'Dancer', short: 'dnc', src: '/images/03_DPS/Job/Dancer.png' }
  ],
  meleedps: [
    { job: 'Dragoon', short: 'drg', src: '/images/03_DPS/Job/Dragoon.png' },
    { job: 'Monk', short: 'mnk', src: '/images/03_DPS/Job/Monk.png' },
    { job: 'Samurai', short: 'sam', src: '/images/03_DPS/Job/Samurai.png' },
    { job: 'Ninja', short: 'nin', src: '/images/03_DPS/Job/Ninja.png' }
  ],
  magic: [
    { job: 'Blackmage', short: 'blm', src: '/images/03_DPS/Job/BlackMage.png' },
    { job: 'Summoner', short: 'smr', src: '/images/03_DPS/Job/Summoner.png' },
    { job: 'Redmage', short: 'rdm', src: '/images/03_DPS/Job/RedMage.png' }
  ],
  tank: [
    { job: 'Paladin', short: 'pld', src: '/images/01_TANK/Job/Paladin.png' },
    { job: 'Warrior', short: 'war', src: '/images/01_TANK/Job/Warrior.png' },
    { job: 'Darkknight', short: 'drk', src: '/images/01_TANK/Job/DarkKnight.png' },
    { job: 'Gunbreaker', short: 'gnb', src: '/images/01_TANK/Job/Gunbreaker.png' }
  ],
  healer: [
    { job: 'Whitemage', short: 'whm', src: '/images/02_HEALER/Job/WhiteMage.png' },
    { job: 'Scholar', short: 'sch', src: '/images/02_HEALER/Job/Scholar.png' },
    { job: 'Astrologian', short: 'ast', src: '/images/02_HEALER/Job/Astrologian.png' }
  ],
  crafter: [
    { job: 'Alchemist', short: 'alc', src: '/images/04_CRAFTER/Alchemist.png' },
    { job: 'Armorer', short: 'arm', src: '/images/04_CRAFTER/Armorer.png' },
    { job: 'Blacksmith', short: 'bsm', src: '/images/04_CRAFTER/Blacksmith.png' },
    { job: 'Carpenter', short: 'crp', src: '/images/04_CRAFTER/Carpenter.png' },
    { job: 'Culinarian', short: 'cul', src: '/images/04_CRAFTER/Culinarian.png' },
    { job: 'Goldsmith', short: 'gsm', src: '/images/04_CRAFTER/Goldsmith.png' },
    { job: 'Leatherworker', short: 'ltw', src: '/images/04_CRAFTER/Leatherworker.png' }
  ],
  gatherer: [
    { job: 'Botanist', short: 'btn', src: '/images/05_GATHERER/Botanist.png' },
    { job: 'Miner', short: 'min', src: '/images/05_GATHERER/Miner.png' },
    { job: 'Fisher', short: 'fsh', src: '/images/05_GATHERER/Fisher.png' }
  ]
}

export default {
  name: 'LeftDrawer',
  components: {
  },
  data () {
    return {
      jobs: jobs
    }
  },
  methods: {
    clickEvent (param) {
      this.$store.commit('updateSessionStorage', param)
    }
  }
}
</script>

<style lang="scss">
.active-link {
  color: white;
  background-color: rgb(175, 218, 255);
}
</style>
