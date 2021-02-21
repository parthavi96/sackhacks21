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
      
            <b-col cols="6">
              <h3 class="mb-0">Alerts </h3>
            </b-col>
            <b-col cols="6" class="text-right">
            <base-button type="danger" @click="postalert" >Report Crime</base-button>
            
            </b-col>
          </b-row>
          
          <div>
            <b-form >
              <b-row>
              <b-col lg="6">
                <base-input
              label="Subject"
              placeholder="Title"
              v-model="alert.subject"
            >
            </base-input>
              </b-col>
              <b-col lg="6">
            <base-dropdown>
                <base-button v-model="alert.category" slot="title" type="secondary" class="dropdown-toggle">
                  Category
                </base-button>
                <a class="dropdown-item" href="#">Theft</a>
                <a class="dropdown-item" href="#">Shooting</a>
                <a class="dropdown-item" href="#">Other</a>
              </base-dropdown>
              </b-col>
              <b-col lg="6">
                <base-input
              label="Date"
              placeholder="date"
              v-model="alert.date"
            >
            </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
              label="Time"
              placeholder="time"
              v-model="alert.time"
            >
            </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="6">
                
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <base-input
              label="Description"
              placeholder="description"
              v-model="alert.desciption"
            >
            </base-input>
              </b-col>
            </b-row>
            </b-form>
          </div>
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
import firebase from "firebase"
import * as fb from "../firebase"

import BaseInput from '../components/Inputs/BaseInput.vue';
  import EditProfileForm from './Pages/UserProfile/EditProfileForm';
  // import UserCard from './Pages/UserProfile/UserCard.vue';
  export default {
    components: {
      EditProfileForm,
        BaseInput,
      // UserCard
    },
    data() {
    return {
      db_alert:[],
      alert : {
        date:"",
        description:"",
        subject:"",
        category:"",
        time:"",
        user_id:firebase.auth().currentUser.uid
      },
    }
  },
    mounted(){
      // console.log(firebase.auth().currentUser.uid)
      this.getalert()
      console.log(JSON.stringify(this.db_alert))

    },
    methods:{
      postalert() {
              fb.alertCollection.add(this.alert).then(
                res =>{
                  alert("success")
                },err=>{
                  alert(err.message)
                }
              )

      },
      getalert() {
        fb.alertCollection.get().then(res=>{
          res.docs.map(doc=>
          this.db_alert.push(doc.data()))
        },err=>{
          console.error(err)
        })
      }
    }
  };
</script>
<style>
</style>
