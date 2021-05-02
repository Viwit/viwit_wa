import EntityTable from '@/components/EntityTable';
import axios from 'axios';

export default {
  name: 'UserList',
  components: {
    EntityTable,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .post('graphql', {
          query:
            '{getusers{User_id Firstname Lastname Email}}',
        })
        .then((res) => {
          console.log(res.data.data.getusers)
          res.data.data.getusers.forEach((element) => {
            //TO DO CORREGIR :V
            element.Wallet = "TO DO /UserList"
            element.Blockaccount= 'TO DO /UserList'
            this.items.push(element);
            console.log(element)
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editUser(user) {      
      this.$router.push(`/admin/edit/user?User_id=${user.User_id}`);
    },
    deleteUser(user) {
      axios
        .post('graphql',{
          query: `mutation{
            deleteUser(id: ${user.User_id}){
              success
            }
          }`
        })
        .then(res =>{
          this.items = []
          this.getData();
        })
        .catch((err) => console.log(err));
    },
  },
};