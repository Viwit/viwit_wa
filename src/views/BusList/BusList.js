import EntityTable from '@/components/EntityTable';
import axios from 'axios';

export default {
  name: 'BusList',
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
            '{getAllBus{licensePlateBus model seatedPassengerCapacity standingPassengerCapacity debtCollectorIdUser}}',
        })
        .then((res) => {
          console.log(res.data);
          res.data.data.getAllBus.forEach((element) => {
            this.items.push(element);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addBus(){
      this.$router.push('edit/bus?createMode=true')
    },
    editBus(bus) {      
      this.$router.push(`/admin/edit/bus?licensePlateBus=${bus.licensePlateBus}`);
    },
    deleteBus(bus) {
      axios
        .post('graphql',{
          query: `mutation{ deleteBus(licensePlate:"${bus.licensePlateBus}"){ licensePlateBus } }`
        })
        .then(res =>{
          this.items = []
          this.getData();
        })
        .catch((err) => console.log(err));
    },
  },

}