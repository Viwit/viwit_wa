<template>
  <CCard>
    <CCardHeader>
      <slot name="header"> <CIcon name="cil-grid" /> {{ caption }} </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :items="items"
        :fields="fields"
        :hover="hover"
        :striped="striped"
        :border="border"
        :small="small"
        :fixed="fixed"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        pagination
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'EntityTable',
  props: {
    items: Array,
    kind: String,
    caption: {
      type: String,
      default: 'Table',
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean,
  },
  computed: {
    
    fields() {
      switch (this.kind) {
        case 'buses':
          return ['code', 'name', 'capacity', 'licensePlate', 'kind'];
        case 'rutas':
          return ['name', 'initialbusstop', 'finalbusstop', 'duration'];
        case 'conductores':
          return ['driversLicense', 'name', 'driverExperience', 'averageDriverRating','editar','eliminar'];
        default:
          ['firstname', 'lastname', 'email', 'wallet', 'blockaccount'];
      }
    },
  },
};
</script>
