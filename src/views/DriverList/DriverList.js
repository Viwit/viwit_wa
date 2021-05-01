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
    addDriver(){
      this.$router.push('admin/edit/driver?createMode=true')
    },
    editDriver(driver) {      
      this.$router.push(`/admin/edit/driver?driversLicense=${driver.driversLicense}`);
    },
    deleteDriver(driver) {
      axios
        .post('graphql',{
          query: `mutation{ deleteDriver(driversLicense:"${driver.driversLicense}"){ driversLicense } }`
        })
        .then(res =>{
          this.items = []
          this.getData();
        })
        .catch((err) => console.log(err));
    },
  },
};