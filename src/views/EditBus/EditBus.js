import axios from 'axios';

export default {
  name: 'EditRoute',
  data() {
    return {
      model: {
        idRoute: 0,
        nameRoute: '',
        initialBusStop: '',
        finalBusStop: '',
        approximateDuration: '',
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
