<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background-size: cover; background-position: center top;">
      <b-container >
        <!-- Mask -->
        <span class="mask bg-gradient-warning opacity-8"></span>
        <b-row>
        <!-- <b-col xl="4" class="order-xl-2 mb-5">
          <user-card></user-card>
        </b-col> -->
        <b-col xl="12" class="order-xl-1">
          <card>
            <b-row align-v="center" slot="header" >
      
            <b-col cols="12">
              <h3 class="mb-0">Latest News </h3>
            </b-col>

          </b-row>
          <b-row v-for="item in news" :key="item" align-v="center"  >
      
            <h3>{{item.title}}</h3>
          <img :src=item.media alt="">
          <p>{{item.summary}}</p>
          <a :href=item.link target="_blank">Click For More</a>

          </b-row>
          </card>

          <!-- <edit-profile-form></edit-profile-form> -->
        </b-col>
      </b-row>
        
      </b-container>
    </div>
<!-- 
    <b-container fluid class="mt--6">
      
    </b-container> -->
  </div>
</template>
<script>
  import EditProfileForm from './Pages/UserProfile/EditProfileForm';
  // import UserCard from './Pages/UserProfile/UserCard.vue';
  import axios from 'axios';
  export default {
    components: {
      EditProfileForm,
      // UserCard
    },
    data() {
    return {
      news:[]
    }
  },
    mounted(){
      this.getNews()
    },
    methods:{
      getNews() {
axios({
    "method":"GET",
    "url":"https://covid-19-news.p.rapidapi.com/v1/covid",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-news.p.rapidapi.com",
    "x-rapidapi-key":"28aefdea65msha1c927b88f9e110p105d22jsnb5c235c0917e",
    "useQueryString":true
    },"params":{
    "lang":"en",
    "media":"True",
    "q":"covid-19"
    }
    })
    .then((response)=>{
      this.news = response.data.articles
    })
    .catch((error)=>{
      console.log(error)
    })
    }
    }
  };
</script>
<style>
</style>
