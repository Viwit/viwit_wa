import axios from 'axios';

export default {
  name: 'EditRoute',
  data() {
    return {
      driversLicense: this.$route.query.driversLicense,
      editMode: false,
      model: {
        driversLicense: '',
        name: '',
        driverExperience: '',
        averageDriverRating: '0',
      },
    };
  },
  created() {
    if (this.driversLicense) {
      this.editMode = true;
      this.getData();
    }
  },
  computed: {
    formFilled() {
      if (
        this.model.driversLicense &&
        this.model.name &&
        this.model.driverExperience &&
        this.model.averageDriverRating
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
          query: `query {getDriverByDriversLicense(driversLicense: "${this.driversLicense}"){ driversLicense name driverExperience averageDriverRating}}`,
        })
        .then((res) => {
          console.log(res.data.data.getDriverByDriversLicense);
          this.model = res.data.data.getDriverByDriversLicense;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendCreate() {
      axios
        .post('graphql', {
          query: `mutation{postDriver(driver:{driversLicense: "${this.model.driversLicense}", name: "${this.model.name}",driverExperience: ${this.model.driverExperience},averageDriverRating: "${this.model.averageDriverRating}"}){driversLicense}}`,
        })
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendEdit() {
      axios
        .post('graphql', {
          query: `mutation{ putDriver(
            driversLicense: "${this.model.driversLicense}",
            driver:{driversLicense: "${this.model.driversLicense}", 
            name: "${this.model.name}",driverExperience: ${this.model.driverExperience},
            averageDriverRating: "${this.model.averageDriverRating}"})
            {
              driversLicense
            }
          }`,
        })
        .then((res) => {
          console.log(res.data)
          this.$router.push('/admin/drivers');
        })
        .catch((err) => console.log(err));
    },
    sendDelete() {
      axios
        .post('graphql', {
          query: `mutation{ deleteDriver(driversLicense:"${this.model.driversLicense}"){ driversLicense } }`,
        })
        .then((res) => {
          console.log(res.data)
          this.$router.push('/admin/drivers');
        })
        .catch((err) => console.log(err));
    },
  },
};
