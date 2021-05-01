import axios from 'axios';

export default {
  name: 'EditRoute',
  data() {
    return {
      driversLicense: this.$route.query.driversLicense,
      editMode: false,
      model: {
        driversLicense: 0,
        name: '',
        driverExperience: '',
        averageDriverRating: ''
      },
    };
  },
  created(){
    if(this.driversLicense){
      this.editMode = true;
      this.getData()
    }
  },
  methods: {
    getData() {
      axios
        .post('graphql',{
          query : `query {getDriverByDriversLicense(driversLicense: "${this.driversLicense}"){ driversLicense name driverExperience averageDriverRating}}`
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
