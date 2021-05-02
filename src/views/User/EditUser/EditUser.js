import axios from 'axios';

export default {
  name: 'EditRoute',
  data() {
    return {
      User_id: this.$route.query.User_id,
      model: {
        User_id: 0,
        Firstname: '',
        Lastname: '',
        Email: '',
        User_password: '',
        User_password_confirm: '',
        Block_account: false,
      },
    };
  },

  created(){
    if (this.User_id) {
      this.getData();
    }
  },

  methods: {
    
    getData() {
      axios
      .post('graphql', {
        query : `query{getuser(id: ${this.User_id}){
          User_id 
          Firstname 
          Lastname 
          Email 
          Reg_date 
        }
      }`
      })
        .then((res) => {
          console.log(res.data.data.getuser);
          this.model.User_id = res.data.data.getuser.User_id;
          this.model.Firstname = res.data.data.getuser.Firstname;
          this.model.Lastname= res.data.data.getuser.Lastname;
          this.model.Email = res.data.data.getuser.Email;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    sendEdit() {
      axios
        .post('graphql', {
          query: `mutation{updateUser(id: ${this.model.User_id}, user:{User_id: ${this.model.User_id},Firstname: "${this.model.Firstname}", Lastname: "${this.model.Lastname}", Email: "${this.model.Email}", User_password: "${this.model.User_password}", Block_account: ${this.model.Block_account}}){User_id}}`,
        })
        .then((res) => {
          console.log(res.data)
          this.$router.push('/admin/users');
        })
        .catch((err) => console.log(err));
    },
    sendDelete() {
      axios
        .post('graphql',{
          query: `mutation{
            deleteUser(id: ${this.model.User_id}){
              success
            }
          }`
        })
        .then((res) => {
          console.log(res.data)
          this.$router.push('/admin/drivers');
        })
        .catch((err) => console.log(err));
    },
  },
};
