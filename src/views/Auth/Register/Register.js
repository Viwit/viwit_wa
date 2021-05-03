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
  computed: {
    formFilled() {
      if (
        this.model.Firstname &&
        this.model.Lastname &&
        this.model.Email &&
        this.model.Password &&
        this.model.Passwordconfirm && 
        (this.model.Passwordconfirm == this.model.Password)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    postData() {
      if(this.model.Password == this.model.Passwordconfirm){
        this.alert1 = false;
        axios
          .post('graphql',{
            query: `{setUser(user:{
              Firstname: "${this.model.Firstname}"
              Lastname: "${this.model.Lastname}"
              Email: "${this.model.Email}"
              User_password: "${this.model.User_password}"
              Block_account: ${this.model.Block_account}
            }){
              User_id
            }}}`
          })
          .then((res) => {
            this.$router.push(`/login`);
          })
          .catch((err) => {
            console.log('Error Register');
            console.log(err)
          });
      }else{
        this.alert1 = true;
      }
    },
  },
};