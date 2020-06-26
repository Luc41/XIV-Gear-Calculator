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

      <q-item
        clickable
        v-ripple
        :active="link === 'bard'"
        @click="link = 'bard'"
        active-class="my-menu-link"
        to="/bard"
        dense
      >
        <q-item-section avatar>
          <q-icon name="img:/images/03_DPS/Job/Bard.png" />
        </q-item-section>
        <q-item-section>Bard</q-item-section>
      </q-item>

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
      :content-inset-level=".5"
      group="selectGroup"
      expand-separator
      icon="img:/images/00_ROLE/TankRole.png"
      label="Tank"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-expansion-item
      :content-inset-level=".5"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="治疗"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>生产&采集</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level=".5"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="生产"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-expansion-item
      :content-inset-level=".5"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="采集"
      caption
    >
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
        dense
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>
        <q-item-section>inbox</q-item-section>
      </q-item>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'LeftDrawer',
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
