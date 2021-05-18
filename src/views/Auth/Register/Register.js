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
        Passwordconfirm: '',
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
        this.model.Passwordconfirm == this.model.Password
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    postData() {
      axios
        .post('graphql', {
          query: `mutation { setUser ( user: {
              Firstname: "${this.model.Firstname}"
              Lastname: "${this.model.Lastname}"
              Email: "${this.model.Email}"
              User_password: "${this.model.Password}"
              Block_account: false
            }){
              User_id
              User_type
            }}`,
        })
        .then((res) => {
          this.$router.push(`/login`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
