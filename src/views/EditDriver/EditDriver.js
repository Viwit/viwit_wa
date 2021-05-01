import axios from 'axios';

export default {
  name: 'EditRoute',
  data() {
    return {
      model: {
        driversLicense: 0,
        name: '',
        driverExperience: '',
        averageDriverRating: ''
      },
    };
  },
  created(){
    this.getData()
  },
  methods: {
    getData() {
      const driversLicense = this.$route.query.driversLicense;
      axios
        .post('graphql',{
          query : `query {getDriverByDriversLicense(driversLicense: "${driversLicense}"){ driversLicense name driverExperience averageDriverRating}}`
        })
        .then((res) => {
          console.log(res.data.data.getDriverByDriversLicense);
          this.model = res.data.data.getDriverByDriversLicense
        })
        .catch((err) => {
          console.log(err)
        });
    },
    sendEdit() {
      console.log('Save Edit');
    },
    sendDelete() {
      console.log('Delete');
    },
  },
};
