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
            <base-button type="danger" @click="crimeForm = true">Report Crime</base-button>
            
            </b-col>
          </b-row>
          
          <div v-if="crimeForm">
            <b-form >
              <b-row>
              <b-col lg="12">
                <base-input
              label="Subject"
              placeholder="Title"
              v-model="alert.subject"
            >
            </base-input>
              </b-col>
              
              <b-col lg="6">
                <base-input type="date" label="Date" v-model="alert.date" placeholder="date" id="start" name="trip-start"
       min="1990-01-01" max="2021-12-31"></base-input>
               
              </b-col>
              <b-col lg="6">
               
            <base-input type="time" label="Time" v-model="alert.time" placeholder="time" name="appt"
       min="00:00" max="23:00" required>
            </base-input>
              </b-col>
            </b-row>
            <b-row>
                <b-col lg="6">
                  <label for="loc">Category:</label>
                  <b-select select id="loc" name="category">
                    <option value="Theft">Theft</option>
                    <option value="Assault">Assault</option>
                    <option value="Murder">Murder</option>
                    <option value="Hit-n-Run">Hit-n-Run</option>
                  </b-select>

                    <!-- <base-input
              label="category"
              placeholder="category"
              v-model="alert.category"
            >
            </base-input>  -->
            <!-- <label>Category:</label>
            <base-checkbox type="radio" id="one" value="Robbery" v-model="alert.Robbery"><label for="one">Robbery</label></base-checkbox>
            <base-checkbox type="radio" id="two" value="Murder" v-model="alert.Murder">
            <label for="two">Murder</label></base-checkbox>
            <base-checkbox type="radio" id="three" value="Assault" v-model="alert.Assault">
            <label for="two">Assault</label></base-checkbox>
            <base-checkbox type="radio" id="three" value="Other" v-model="alert.Other">
            <label for="two">Other</label></base-checkbox> -->
            <!-- <base-dropdown>
                <base-header v-model="alert.category">Theft</base-header>
                <base-header v-model="alert.category">Murder</base-header>
                <base-header v-model="alert.category">Asault</base-header>
              </base-dropdown> -->
              </b-col>
              <b-col lg="6">
                <base-input
              label="Location"
              placeholder="Location"
              v-model="alert.location"
            >
            </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <base-input
              label="Description"
              placeholder="description"
              v-model="alert.description"
            >
            </base-input>
              </b-col>
            </b-row>
            <b-row>
                <b-col lg="6">
        <base-button type="danger" @click="postalert" class="w-100">Submit</base-button>

                </b-col>
                <b-col lg="6">
                <base-button class="w-100" @click="show">Show Alerts</base-button>


                </b-col>
            </b-row>
            </b-form>

          </div>
          <div v-else>
              <ul>
              <div v-for="i in db_alert" :key="i">
              <li>
                <b-row>
                  <b-col lg="12"><h2>{{i.subject}}</h2></b-col>
                  <b-col lg="4">Date: {{i.date}}
                     <b-row>
                  <b-col>Time: {{i.time}}</b-col>
                  <!-- <b-col>Category: {{i.category}}</b-col> -->
                </b-row>
                <!-- <b-row>
                  <b-col>Category: {{i.category}}</b-col>
                  
                </b-row> -->
                  </b-col>
                  
                  <b-col lg="8" class="text-left">
                <p>{{i.description}}</p>
                  </b-col>
                </b-row>
               
              </li>
              <hr>

              </div>
              </ul>
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
import axios from 'axios'
import BaseInput from '../components/Inputs/BaseInput.vue';
  import EditProfileForm from './Pages/UserProfile/EditProfileForm';
import Tab from '../components/Tabs/Tab.vue';
import BaseHeader from '../components/BaseHeader.vue';
  // import UserCard from './Pages/UserProfile/UserCard.vue';
  export default {
    components: {
      EditProfileForm,
        BaseInput,
        Tab,
        BaseHeader,
      // UserCard
    },
    data() {
    return {
        mobilenumber:[],
        crimeForm:false,
        dates: {
            simple: "2018-07-17"
          },
      db_alert:[],
      
      alert : {
        date:"",
        description:"",
        subject:"",
        category:"",
        time:"",
        location:"",
        user_id:firebase.auth().currentUser.uid
      },
    }
  },
    mounted(){
      // console.log(firebase.auth().currentUser.uid)
      this.getalert()
      console.log(JSON.stringify(this.db_alert))
      this.getMobile()
    },
    methods:{
       
        show(){
            this.crimeForm = false
        },
         getMobile() {
          fb.userCollection.get().then(res=>{
          res.docs.map(doc=>
          this.mobilenumber.push(doc.data().phone))
        
        })
        },
      postalert() {
         
              fb.alertCollection.add(this.alert).then(
                res =>{
                  if (res) {
                   var message = "new alert " + "activity reported on " +this.alert.date+ "at " +this.alert.time+ "for " +this.alert.subject       
                    axios.post('http://localhost:5000/sachacks2021/us-central1/app/sendMessage',{"numbers":this.mobilenumber,"message":message}).then(res=>{
                        console.log("success")
                    },err=>{
                      console.error("Error")
                    })
                  }
                  alert("success")
                },err=>{
                  alert(err.message)
                }
              )
              this.crimeForm = false
              // tlocation.reload();
              // window.location.reload();
      },
      getalert() {
        fb.alertCollection.get().then(res=>{
          res.docs.map(doc=>
          this.db_alert.push(doc.data()))
        },err=>{
          console.error(err)
        })
        console.log("alerts",this.db_alert)
      }
    }
  };
</script>
<style scoped>
ul{
    list-style-type: none;
}
</style>
