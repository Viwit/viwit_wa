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
      axios
        .post('graphql',{
          query: "{getAllDriver{driversLicense name driverExperience averageDriverRating}}"
        })
        .then((res) => {
          console.log(res.data);
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
