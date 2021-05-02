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
        <template #editar="{item}">
          <td>
            <CButton
              block
              variant="outline"
              color="primary"
              @click="emitEdit(item)"
              >Editar
            </CButton>
          </td>
        </template>

        <template #eliminar="{item}">
          <td>
            <CButton
              block
              variant="outline"
              color="danger"
              @click="emitDelete(item)"
              >Eliminar
            </CButton>
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
          return [
            'licensePlateBus',
            'model',
            'seatedPassengerCapacity',
            'standingPassengerCapacity',
            'debtCollectorIdUser',
            'editar',
            'eliminar',
          ];
        case 'rutas':
          return [
            'name',
            'initialbusstop',
            'finalbusstop',
            'duration',
            'editar',
            'eliminar',
          ];
        case 'conductores':
          return [
            'driversLicense',
            'name',
            'driverExperience',
            'averageDriverRating',
            'editar',
            'eliminar',
          ];
        default:
          [
            'firstname',
            'lastname',
            'email',
            'wallet',
            'blockaccount',
            'editar',
            'eliminar',
          ];
      }
    },
  },
  methods: {
    emitEdit(item) {
      this.$emit('edit', item);
    },
    emitDelete(item) {
      this.$emit('erase', item);
    },
  },
};
</script>
