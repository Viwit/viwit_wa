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
  methods: {
    created(){
      if (this.User_id) {
        this.getData();
      }
    },
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
          this.model = res.data.data.getuser
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
