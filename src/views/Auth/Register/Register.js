import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      alert1: false,
      model: {
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
        Passwordconfirm: ''
      },
    };
  },
  methods: {
    postData() {
      if(this.model.Password == this.model.Passwordconfirm){
        this.alert1 = false;
        axios
          .post('graphql',{
            query: "{getAllDriver{driversLicense name driverExperience averageDriverRating}}"
          })
          .then((res) => {
            console.log('Send register completed');
            console.log(res.data);
          })
          .catch((err) => {
            console.log('Error Register');
            console.log(err)
          });
      }else{
        this.alert1 = true;
      }
    },
    prueba(){
      console.log(this.model);
      this.postData();
    }
  },
};