<template>
  <q-scroll-area class="fit">
    <q-toolbar class="bg-secondary text-white no-shadow">
      <q-toolbar-title>战斗</q-toolbar-title>
    </q-toolbar>
    <q-expansion-item
      :content-inset-level=".5"
      group="selectGroup"
      expand-separator
      icon="mail"
      label="物理远程"
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
      label="物理近战"
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
      label="魔法"
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
      label="坦克"
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
