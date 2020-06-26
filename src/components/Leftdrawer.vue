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

      <sidebar-select
        @click="link = 'brd'"
        active-class="my-menu-link"
        to="/bard"
        src="/images/03_DPS/Job/Bard.png"
        job="Bard"
      />

      <q-item
        clickable
        v-ripple
        :active="link === 'mach'"
        @click="link = 'mach'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Machinist.png" />
        </q-item-section>
        <q-item-section>Machinist</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'dancer'"
        @click="link = 'dancer'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Dancer.png" />
        </q-item-section>
        <q-item-section>Dancer</q-item-section>
      </q-item>

      <q-banner
        dense
        class="bg-info text-white no-shadow"
      >
        物理近战
      </q-banner>

      <q-item
        clickable
        v-ripple
        :active="link === 'drag'"
        @click="link = 'drag'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Dragoon.png" />
        </q-item-section>
        <q-item-section>Dragoon</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'monk'"
        @click="link = 'monk'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Monk.png" />
        </q-item-section>
        <q-item-section>Monk</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'sam'"
        @click="link = 'sam'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Samurai.png" />
        </q-item-section>
        <q-item-section>Samruai</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'nin'"
        @click="link = 'nin'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Ninja.png" />
        </q-item-section>
        <q-item-section>Ninja</q-item-section>
      </q-item>

      <q-banner
        dense
        class="bg-info text-white no-shadow"
      >
        魔法
      </q-banner>

      <q-item
        clickable
        v-ripple
        :active="link === 'blm'"
        @click="link = 'blm'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Blackmage.png" />
        </q-item-section>
        <q-item-section>Black Mage</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'sum'"
        @click="link = 'sum'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Summoner.png" />
        </q-item-section>
        <q-item-section>Summoner</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'rdm'"
        @click="link = 'rdm'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Redmage.png" />
        </q-item-section>
        <q-item-section>Red Mage</q-item-section>
      </q-item>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/TankRole.png"
      label="Tank"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'pal'"
        @click="link = 'pal'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/01_TANK/Job/Paladin.png" />
        </q-item-section>
        <q-item-section>Paladin</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'war'"
        @click="link = 'war'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/01_TANK/Job/Warrior.png" />
        </q-item-section>
        <q-item-section>Warrior</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'drk'"
        @click="link = 'drk'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/01_TANK/Job/DarkKnight.png" />
        </q-item-section>
        <q-item-section>Dark Knight</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'gnb'"
        @click="link = 'gnb'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/01_TANK/Job/Gunbreaker.png" />
        </q-item-section>
        <q-item-section>Gunbreaker</q-item-section>
      </q-item>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/HealerRole.png"
      label="Healer"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'whm'"
        @click="link = 'whm'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/02_HEALER/Job/Whitemage.png" />
        </q-item-section>
        <q-item-section>White Mage</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'sch'"
        @click="link = 'sch'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/02_HEALER/Job/Scholar.png" />
        </q-item-section>
        <q-item-section>Scholar</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'ast'"
        @click="link = 'ast'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/02_HEALER/Job/Astrologian.png" />
        </q-item-section>
        <q-item-section>Astrologian</q-item-section>
      </q-item>
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
      <q-item
        clickable
        v-ripple
        :active="link === 'alc'"
        @click="link = 'alc'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Alchemist.png" />
        </q-item-section>
        <q-item-section>Alchemist</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'arm'"
        @click="link = 'arm'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Armorer.png" />
        </q-item-section>
        <q-item-section>Armorer</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'bsm'"
        @click="link = 'bsm'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Blacksmith.png" />
        </q-item-section>
        <q-item-section>Blacksmith</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'crp'"
        @click="link = 'crp'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Carpenter.png" />
        </q-item-section>
        <q-item-section>Carpenter</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'cul'"
        @click="link = 'cul'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Culinarian.png" />
        </q-item-section>
        <q-item-section>Culinarian</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'gsm'"
        @click="link = 'gsm'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Goldsmith.png" />
        </q-item-section>
        <q-item-section>Goldsmith</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'ltw'"
        @click="link = 'ltw'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Leatherworker.png" />
        </q-item-section>
        <q-item-section>Leatherworker</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'wvr'"
        @click="link = 'wvr'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/04_CRAFTER/Weaver.png" />
        </q-item-section>
        <q-item-section>Weaver</q-item-section>
      </q-item>
    </q-expansion-item>

    <q-expansion-item
      :content-inset-level="0"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="Gatherer"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'btn'"
        @click="link = 'btn'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/05_GATHERER/Botanist.png" />
        </q-item-section>
        <q-item-section>Botanist</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'min'"
        @click="link = 'min'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/05_GATHERER/Miner.png" />
        </q-item-section>
        <q-item-section>Miner</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'fsh'"
        @click="link = 'fsh'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/05_GATHERER/Fisher.png" />
        </q-item-section>
        <q-item-section>Fisher</q-item-section>
      </q-item>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>
import sidebarSelect from './sidebarSelect'

export default {
  name: 'LeftDrawer',
  components: {
    sidebarSelect
  },
  data () {
    return {
      link: 'inbox'
    }
  }
}
</script>

<style lang="scss" scope>
.my-menu-link {
  color: white;
  background: #f2c037;
  border-radius: 0 32px 32px 0;
  margin: 1% 0% 1% 0%;
}
</style>
