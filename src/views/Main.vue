<template>
  <q-page class="flex flex-center">
    <div class="absolute-center">
      <span class="text-h1 text-orange text-weight-bold">test title</span>
      <br>
      <span class="text-h3 text-orange-5">test subtitle</span>
      <br>
      <q-btn
        label="test"
        to="/c"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<style>
.q-page {
  background: url('../assets/testBg.jpg');
  background-size: cover;
}
</style>
