import axios from 'axios';
import store from '../../../store'
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
            `{get_login(email: "${this.model.email}", password: "${this.model.password}"){isLogin user_id}}`,
        })
        .then((res) => {
          if(res.data.data.get_login.isLogin == 1){
            var user = res.data.data.get_login.user_id
            axios
              .post('graphql', {
                query:
                  `mutation{post_token(id: ${user},type: "Login"){token}}`,
              })
              .then((res) => {
                store.commit('updateUser',user);
                store.commit('updateToken',res.data.data.post_token.token);
                console.log(store.state);
                this.$router.push('/admin');
              })
              .catch((err) => {
                console.log(err)
              });
          }else{
            const error = new Error('User not found');
            throw error;
          }
        })
        .catch((err) => {
          console.log(err)
          this.alert1 = true
        });
    },
    register(){
      this.$router.push('/register');
    }
  }
}