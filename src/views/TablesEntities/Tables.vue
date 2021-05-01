<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CTableWrapper
          :items="data(kind)"
          :fields="cabecera(kind)"
          hover
          striped
          border
          small
          fixed
          caption="Results Table"
        />
      </CCol>
    </CRow>
    <CRow class="justify-content-md-end">
      <CCol col="4" sm="4" md="2"  class="mb-3 mb-xl-0">
        <CButton block color="primary" square>Add</CButton>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'

export default {
  name: 'TablesPrueba',
  data () {
    return {
      kind: "conductores",

    }
  },  
  
  components: { CTableWrapper },
  methods: {
    valorescabecera(){
      return ['code', 'name', 'capacity', 'licensePlate', 'kind']
    },
    data(kind){
      switch (kind) {
        case 'buses': 
          return [
            {
                code:"193",
                name: "Bonanza",
                capacity:"50",
                licensePlate:"ger123",
                kind:"urban"
            },

            {
                code:"C201",
                name: "Patio Bonito",
                capacity:"30 ",
                licensePlate:"grr123",
                kind:"urban"
            },

            {
                code:"193",
                name: "Bonanza",
                capacity:"50 ",
                licensePlate:"ger123",
                kind:"urban"
            },
            {
                code:"540",
                name: "SAN VICENTE",
                capacity:"30 ",
                licensePlate:"ger125",
                kind:"urban"
            }
          ]
        case 'rutas': 
          return [
               {
                name: "T111",
                initialbusstop: "142243",
                finalbusstop: "345435",
                duration: "2 horas"
              },
              {
                name: "T111",
                initialbusstop: "142243",
                finalbusstop: "345435",
                duration: "2 horas"
              },
              {
                name: "T111",
                initialbusstop: "142243",
                finalbusstop: "345435",
                duration: "2 horas"
              },
              {
                name: "T111",
                initialbusstop: "142243",
                finalbusstop: "345435",
                duration: "2 horas"
              },
          ]
        case 'conductores': 
          return [
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              }
          ] 
        default: [
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              },
    
              {
                  license: "18iej",
                  name: "Adrian",
                  experience: "200 años",
                  averagerating: "5 puntos",
              }
          ]
        case 'users': 
          return [
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
    
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
    
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
    
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             },
    
             {
                 license: "18iej",
                 name: "Adrian",
                 experience: "200 años",
                 averagerating: "5 puntos",
             }
         ]
      }
    },

    cabecera(kind){
      switch (kind) {
        case 'buses': 
          return ['code', 'name', 'capacity', 'licensePlate', 'kind']
        case 'rutas': 
          return ['name', 'initialbusstop', 'finalbusstop','duration']
        case 'conductores': 
          return ['license', 'name', 'experience', 'averagerating']
        default:  ['firstname', 'lastname', 'email', 'wallet', 'blockaccount']
      }
    },
  }
}
</script>
