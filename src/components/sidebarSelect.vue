<template>
  <q-item
    clickable
    v-ripple
    :active="active"
    :active-class="activeClass"
    :to="to"
    dense
  >
    <q-item-section avatar>
      <q-icon :name="'img:' + src" />
    </q-item-section>
    <q-item-section>{{ job }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'SidebarSelect',
  props: {
    activeClass: {
      type: String,
      default: function () {
        return ''
      }
    },
    to: {
      type: String,
      default: function () {
        return '/'
      }
    },
    src: {
      type: String,
      default: function () {
        return '/'
      }
    },
    job: {
      type: String,
      default: function () {
        return 'unknown'
      }
    }
  }

}
</script>

<style>

</style>
