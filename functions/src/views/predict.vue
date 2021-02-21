<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background-size: cover; background-position: center top;">
      <b-container >
        <!-- Mask -->
        <span class="mask bg-gradient-warning opacity-8"></span>
        <b-row>
        <b-col xl="12" class="order-xl-1">
          <card>
            <b-row align-v="center" slot="header" >
      
            <b-col cols="6">
              <h3 class="mb-0">Prediction</h3>
            </b-col>
            <b-col cols="6" class="text-right">
            
            </b-col>
          </b-row>
          
          <div>
            <b-form >
              
            <b-row>
                <b-col lg="6">
                  <label for="day">Day:</label>
                  <b-select select id="day" v-model="pred.day" name="category">
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </b-select>

              </b-col>
              <b-col lg="6">
                  <label for="dis">District:</label>
                  <b-select select id="dis" v-model="pred.dis" name="category">
                    <option value="1">Northwest</option>
                    <option value="2">Northeast</option>
                    <option value="3">Central</option>
                    <option value="4">Southwest</option>
                    <option value="5">South</option>
                    <option value="6">East</option>
                  </b-select>

              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <base-input
              label="Description"
              placeholder="description"
              v-model="pred.description"
            >
            </base-input>
              </b-col>
            </b-row>
            <b-row>
                <b-col lg="12">
        <base-button type="danger" @click="postpred" class="w-100">Submit</base-button>

                </b-col>
              
            </b-row>
            </b-form>

          </div>
          </card>
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

export default {
    components: {
      EditProfileForm,
        BaseInput,
        Tab,
        BaseHeader,
    },
    data() {
    return {
        
      pred : {
        day:"",
        description:"",
        dis:"",
        user_id:firebase.auth().currentUser.uid
      },
    }
  },
    mounted(){
      // console.log(firebase.auth().currentUser.uid)

    },
    methods:{
       
      postpred() {
          
      },

    }
  };
</script>
<style scoped>

