import EntityTable from '@/components/EntityTable';
import axios from 'axios';

export default {
  name: 'RouteList',
  components: {
    EntityTable,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .post('graphql', {
          query:
            '{getAllRoute{idRoute nameRoute initialBusStop finalBusStop approximateDuration}}',
        })
        .then((res) => {
          console.log(res.data);
          res.data.data.getAllRoute.forEach((element) => {
            this.items.push(element);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editRoute(Route) {      
      this.$router.push(`/admin/edit/route?idRoute=${Route.idRoute}`);
    },
    addRoute(){
      this.$router.push('edit/route?createMode=true')
    },
    deleteRoute(route) {
      axios
        .post('graphql',{
          query: `mutation{deleteRoute(
            idRoute: ${route.idRoute})
            {
              idRoute 
              nameRoute 
              initialBusStop 
              finalBusStop
            }
          }`
        })
        .then(res =>{
          this.items = []
          this.getData();
        })
        .catch((err) => console.log(err));
    },
  },
};