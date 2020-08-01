<template>
  <q-card>
    <q-card-section class="text-center">
      Materia Melding
    </q-card-section>
    <q-card-section horizontal>
      <q-card-section>
        <q-markup-table
          dense
          bordered
          flat
          wrap-cells
          separator="cell"
        >
          <thead>
            <tr>
              <th class="text-center">
                stats
              </th>
              <th class="text-center">
                current value
              </th>
              <th class="text-center">
                ..to cap
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                Vitality
              </td>
              <td class="text-center">
                0
              </td>
              <td class="text-center">
                0
              </td>
            </tr>
            <tr>
              <td class="text-center">
                Mind
              </td>
              <td class="text-center">
                0
              </td>
              <td class="text-center">
                0
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-card-section>
        <q-select
          outlined
          dense
          style="width: 150px;"
        />
      </q-card-section>
    </q-card-section>
    <q-card-actions>
      <q-btn
        flat
        :ripple="false"
        icon="mail"
        label="cancel"
      />
      <q-btn
        flat
        :ripple="false"
        icon="mail"
        label="apply"
      />
      <q-space />
      <q-btn
        flat
        :ripple="false"
        icon="mail"
        label="clear"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'MateriaMelding',
  props: {
  },
  data () {
    return {
    }
  }

}
</script>

<style>

</style>
