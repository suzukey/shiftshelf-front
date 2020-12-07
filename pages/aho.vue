<template>
  <div>
    <table>
      <template v-for="tr in rows">
        <tr :key="tr.index">
          <template v-for="cell in tr.table_cells">
            <th :key="cell.index" v-if="cell.cell_type == 'TH'">
              <input type="text" :value="cell.cell_type" />
            </th>

            <td :key="cell.index" v-else-if="cell.cell_type == 'TD'">
              <input type="text" />
            </td>
          </template>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          ban: 'gun',
        },
        {
          table_cells: [
            { cell_type: 'TH' },
            { cell_type: 'TD' },
            { cell_type: 'TD' },
          ],
        },
        {
          table_cells: [
            { cell_type: 'T' },
            { cell_type: 'TD' },
            { cell_type: 'TD' },
          ],
        },
        {
          table_cells: [
            { cell_type: 'TH' },
            { cell_type: 'TD' },
            { cell_type: 'TD' },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
table {
  width: 80%;
}
table th,
table td {
  border: thin solid rgba(0, 0, 0, 0.12);
}

table th {
  background: #ccc;
}
</style>
