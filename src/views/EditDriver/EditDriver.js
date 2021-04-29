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
  methods: {
    getData() {
      axios
        .post('')
        .then((res) => {

        })
        .catch((err) => {
          
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
