import BarSimple from "@/views/charts/CChartBarSimple";
import Table from "@/views/base/Table";

export default {
  name: 'Dashboard',
  components: {
    BarSimple,
    Table,
  },
  data() {
    return {
      data_table: [
        {
          Id: "1",
          kind: "2",
          score: "4.6",
        },
        {
          Id: "2",
          kind: "3",
          score: "4.6",
        },
        {
          Id: "3",
          kind: "1",
          score: "4.2",
        },
      ],
      data_all: [
        {
          id: 1,
          backgroundColor: "rgba(0,0,0,.2)",
          promedio: 4.5,
          dataPoints: [1, 2, 3, 4, 0],
          label: "F1",
        },
        {
          id: 2,
          backgroundColor: "rgba(0,255,0,.2)",
          promedio: 3.5,
          dataPoints: [1, 4, 3, 4, 0],
          label: "F2",
        },
        {
          id: 3,
          backgroundColor: "rgba(0,0,255,.2)",
          promedio: 2.5,
          dataPoints: [4, 2, 3, 4, 0],
          label: "F3",
        },
      ],
    };
  },
  methods: {
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