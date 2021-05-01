import EntityTable from '@/components/EntityTable';
import axios from 'axios';

export default {
  name: 'DriverList',
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
            '{getAllDriver{driversLicense name   driverExperience averageDriverRating}}',
        })
        .then((res) => {
          console.log(res.data);
          res.data.data.getAllDriver.forEach((element) => {
            this.items.push(element);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editar(driversLicense) {
      this.$router.push('');
    },
    eliminar(driversLicense) {
      axios
        .post('graphql',{
          mutation: ""
        })
        .then(res =>{
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    },
  },
};
