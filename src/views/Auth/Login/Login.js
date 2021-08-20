import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      alert1: false,
      model: {
        email: '',
        password: ''
      }
    };
  },
  methods:{
    login(){
    
      axios
        .post('graphql', {
          query:
            `{get_login(email: "${this.model.email}", password: "${this.model.password}"){isLogin}}`,
        })
        .then((res) => {
          if(res.data.data.get_login == 1){

          }
        })
        .catch((err) => {
          this.alert1 = true
        });
    },
    register(){
      this.$router.push('/register');
    }
  }
}