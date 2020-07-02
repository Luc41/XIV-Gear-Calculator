<template>
  <q-item
    clickable
    v-ripple
    :active="active"
    active-class="job-menu-link"
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
    to: {
      type: String,
      default: function () {
        return '/'
      }
    },
    src: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  }

}
</script>

<style lang="scss">
.job-menu-link {
  color: white;
  background: #f2c037;
}
</style>
