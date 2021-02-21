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
          <b-row v-for="item in news" :key="item" class="text-justified"  >
              <b-col lg="12">
            <h2 class="h2">{{item.name}}</h2></b-col>
            <b-col lg=2>
          <img :src=item.image.thumbnail.contentUrl width="100%" alt="" v-if="item.image">
            </b-col>
            <b-col lg="10">
          <p >{{item.description}}
          <a :href=item.url target="_blank">Click For More</a></p>
            </b-col>
            <b-col lg="12">
          <hr>
            </b-col>
            
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
import { json } from 'd3';
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
    "url":"https://bing-news-search1.p.rapidapi.com/news/search",
    "headers":{
    "content-type":"application/octet-stream",
    "x-bingapis-sdk":"true",
    "x-rapidapi-host":"bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key":"aac1eb2f6fmsh18af0e0eb733d8fp149a4ejsn0d351c58c35d",
    "useQueryString":true
    },"params":{
    "q":"sacramento",
    "freshness":"Day",
    }
    })
    .then((response)=>{
      this.news = response.data.value
      // console.log("news",JSON.stringify(this.news))
      for(var i=0;i<this.news.length;i++) {
        
        console.log(this.news[i].image)
      }
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
