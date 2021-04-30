export default {
  name: 'Login',
  methods:{
    login(){
      this.$router.push('/admin');
    },
    register(){
      this.$router.push('/register');
    }
  }
}