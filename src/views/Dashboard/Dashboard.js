import BarSimple from '@/views/charts/CChartBarSimple';
import WidgetsDropdown from '@/components/WidgetsDropdown';
import Table from '@/views/base/Table';
import axios from 'axios';

export default {
  name: 'Dashboard',
  components: {
    BarSimple,
    Table,
    WidgetsDropdown,
  },
  data() {
    return {
      scores: [],
      driverChart: {
        color: 'danger',
        average: 0,
        data: [],
        label: 'Conductores',
      },
      busChart: {
        color: 'rgba(0,255,0,.2)',
        average: 0,
        data: [],
        label: 'Buses',
      },
      routeChart: {
        color: 'rgba(0,0,255,.2)',
        average: 0,
        data: [],
        label: 'Buses',
      }
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      axios
        .post('graphql', {
          query: '{getAllScores{ id kind score}}',
        })
        .then((res) => {
          this.calculateData(res.data.data.getAllScores); 
          res.data.data.getAllScores.forEach(element => {
            if(element.kind >= 0 && element.kind <= 3){
              this.scores.push({
                ID : element.id,
                Tipo: this.getType(element.kind),
                Calificacion : element.score
              })
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getType(kind){
      if(kind == 1){
        return 'Conductor'
      }else if(kind == 2){
        return 'Bus'
      }else if(kind == 3){
        return 'Ruta'
      }
    },
    calculateData(data) {
      let drivers = [];
      let buses = [];
      let routes = [];
      data.forEach((element) => {
        if (element.kind == 1) {
          drivers.push(element.score);
        } else if (element.kind == 2) {
          buses.push(element.score);
        } else if (element.kind == 3) {
          routes.push(element.score);
        }
      });
      this.driverChart.data = drivers
      this.driverChart.average = drivers.reduce((a, b) => a + b) / drivers.length;

      this.busChart.data = buses
      this.busChart.average = buses.reduce((a, b) => a + b) / buses.length;

      this.routeChart.data = routes
      this.routeChart.average = routes.reduce((a, b) => a + b) / routes.length;
    }
  },
};
