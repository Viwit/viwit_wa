import BarSimple from "@/views/charts/CChartBarSimple";
import Table from "@/views/base/Table";
import axios from 'axios';

export default {
  name: 'Dashboard',
  components: {
    BarSimple,
    Table,
  },
  data() {
    return {
      data_table: [],
      data_all: [
        {
          id: 1,
          backgroundColor: "rgba(0,0,0,.2)",
          promedio: 4.5,
          dataPoints: [1, 2, 3, 4, 0],
          label: "Conductor",
        },
        {
          id: 2,
          backgroundColor: "rgba(0,255,0,.2)",
          promedio: 3.5,
          dataPoints: [1, 4, 3, 4, 0],
          label: "Bus",
        },
        {
          id: 3,
          backgroundColor: "rgba(0,0,255,.2)",
          promedio: 2.5,
          dataPoints: [4, 2, 3, 4, 0],
          label: "Ruta",
        },
      ],
    };
  },
  
  created(){
    this.getData()
  },

  methods: {
    getData() {
      axios
        .post('graphql',{
          query: "{getAllScores{ id kind score}}"
        })
        .then((res) => {
          console.log(res.data.data.getAllScores);
          this.calculateData(res.data.data.getAllScores);
        })
        .catch((err) => {
          console.log(err)
        });
    },
    calculateData(data){
      var dataPoints1 = [0,0,0,0,0,0]
      var dataPoints2 = [0,0,0,0,0,0]
      var dataPoints3 = [0,0,0,0,0,0]
      var promedio1 = 0
      var promedio2 = 0
      var promedio3 = 0
      var n1 = 0;
      var n2 = 0;
      var n3 = 0;
      data.forEach(element => {
        if(element.kind == 1){
          dataPoints1[element.score] += 1;
          promedio1 += element.score;
          n1 += 1;
        }else if(element.kind == 2){
          dataPoints2[element.score] += 1;
          promedio2 += element.score;
          n2 += 1;
        }else if(element.kind == 3){
          dataPoints3[element.score] += 1;
          promedio3 += element.score;
          n3 += 1;
        }
        this.data_table.push(element);
        
      });
      this.data_all[0].dataPoints = dataPoints1;
      this.data_all[1].dataPoints = dataPoints2;
      this.data_all[2].dataPoints = dataPoints3;
      this.data_all[0].promedio = promedio1/n1;
      this.data_all[1].promedio = promedio2/n2;
      this.data_all[2].promedio = promedio3/n3;
    },

    dataToLabel(data_table) {
      data_table.forEach((element) => {
        if (element.kind == 1) {
          element.kind = "Conductor";
        }else if (element.kind == 2){
          element.kind = "Bus";
        }else if (element.kind == 3){
          element.kind = "Ruta";
        }
      });
      return data_table
    },

  },
  
};