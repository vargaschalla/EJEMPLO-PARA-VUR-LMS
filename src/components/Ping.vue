<template>
  <div>
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>
<script>
//import axios from 'axios';
import client from "../api";

export default {
  name: 'Ping',
  data: function() {
    return {
      msg: "ping"
    }
  },   
  methods: {
    getMessage: function() {
      //const path = 'http://localhost:8081/v1/ping';
      client.get('/v1/ping')
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created: function() {
    this.getMessage();
  }, 
}
</script>