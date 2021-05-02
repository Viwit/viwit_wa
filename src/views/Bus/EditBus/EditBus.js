import axios from 'axios';

export default {
  name: 'EditBus',
  data() {
    return {
      licensePlateBus: this.$route.query.licensePlateBus,
      editMode: false,
      model: {
        licensePlateBus: '',
        model: '',
        seatedPassengerCapacity: '0',
        standingPassengerCapacity: '0',
        debtCollectorIdUser: '0',
      },
    };
  },
  created() {
    if (this.licensePlateBus) {
      this.editMode = true;
      this.getData();
    }
  },

  computed: {
    formFilled() {
      if (
        this.model.licensePlateBus &&
        this.model.model &&
        this.model.seatedPassengerCapacity
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    getData() {
      axios
        .post('graphql', {
          query: `query {getBusByLicensePlate(licensePlate:"${this.licensePlateBus}"){licensePlateBus model seatedPassengerCapacity standingPassengerCapacity debtCollectorIdUser}}`,
        })
        .then((res) => {
          this.model = res.data.data.getBusByLicensePlate;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendCreate() {
      axios
        .post('graphql', {
          query: `mutation{postBus(bus:{licensePlateBus: "${this.model.licensePlateBus}",model: "${this.model.model}",seatedPassengerCapacity: ${this.model.seatedPassengerCapacity},standingPassengerCapacity: ${this.model.standingPassengerCapacity},debtCollectorIdUser: ${this.model.debtCollectorIdUser}}){licensePlateBus}}`,
        })
        .then((res) => {
          this.$router.push('/admin/buses');

        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendEdit() {
      axios
        .post('graphql', {
          query: `mutation{putBus(licensePlate: "${this.model.licensePlateBus}", bus:{licensePlateBus: "${this.model.licensePlateBus}",model: "${this.model.model}",seatedPassengerCapacity: ${this.model.seatedPassengerCapacity},standingPassengerCapacity: ${this.model.standingPassengerCapacity},debtCollectorIdUser: ${this.model.debtCollectorIdUser}}){licensePlateBus}}`,
        })
        .then((res) => {
          this.$router.push('/admin/buses');
        })
        .catch((err) => console.log(err));
    },
    sendDelete() {
      axios
        .post('graphql', {
          query: `mutation{ deleteBus(licensePlate:"${this.model.licensePlateBus}"){ licensePlateBus } }`,
        })
        .then((res) => {
          this.$router.push('/admin/buses');
        })
        .catch((err) => console.log(err));
    },
  },
};
