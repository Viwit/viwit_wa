import axios from 'axios';

export default {
  name: 'EditRoute',
  data() {
    return {
      idRoute: this.$route.query.idRoute,
      editMode: false,
      model: {
        idRoute: 0,
        nameRoute: '',
        initialBusStop: '',
        finalBusStop: '',
        approximateDuration: '',
      },
    };
  },
  created(){
    if (this.idRoute) {
      this.editMode = true;
      this.getData();
    }
  },

  computed: {
    formFilled() {
      if (
        !this.model.idRoute &&
        this.model.nameRoute &&
        this.model.initialBusStop &&
        this.model.finalBusStop &&
        this.model.approximateDuration
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    getData() {
      const idRoute = this.$route.query.idRoute;
      axios
        .post('graphql', {
          query : `query{getRouteByIdRoute(idRoute: ${idRoute}){idRoute nameRoute initialBusStop approximateDuration finalBusStop}}`
        })
        .then((res) => {
          console.log(res.data.data.getRouteByIdRoute);
          this.model = res.data.data.getRouteByIdRoute
        })
        .catch((err) => {
          console.log(err)
        });
    },
    sendEdit() {
      axios
        .post('graphql', {
          query : `mutation{
            putRoute(idRoute: ${this.model.idRoute}, route: {
              idRoute: ${this.model.idRoute},
              nameRoute: "${this.model.nameRoute}",
              initialBusStop: "${this.model.initialBusStop}",
              finalBusStop: "${this.model.finalBusStop}",
              approximateDuration: "${this.model.approximateDuration}",
            }){
              idRoute
              nameRoute
              initialBusStop
              finalBusStop
              approximateDuration
            }
          }`
        })
        .then((res) => {
          console.log(res.data.data.putRoute);
          this.$router.push(`/admin/routes`);
        })
        .catch((err) => {
          console.log(err)
        });
    },
    sendCreate() {
      axios
        .post('graphql', {
          query: `mutation{postRoute(
            route: {
              nameRoute: "${this.model.nameRoute}", 
              initialBusStop: "${this.model.initialBusStop}",
              finalBusStop: "${this.model.finalBusStop}",
              approximateDuration: "${this.model.approximateDuration}"
            }
            )
            {
              message
            }
          }`,
        })
        .then((res) => {
          console.log(res.data.data);
          this.$router.push(`/admin/routes`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendDelete() {
      axios
        .post('graphql', {
          query : `mutation{
            deleteRoute(idRoute: ${this.model.idRoute}){
              idRoute
            }
          }`
        })
        .then((res) => {
          console.log('Delete');
          this.$router.push(`/admin/routes`);
        })
        .catch((err) => {
          console.log(err)
        });
    },
  },
};
