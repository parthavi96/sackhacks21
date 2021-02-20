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
            <base-button type="danger"  >Report Crime</base-button>
            
            </b-col>
          </b-row>
          
          <div>
            <b-form >
              <b-row>
              <b-col lg="6">
                <base-input
              label="Subject"
              placeholder="Title"
              v-model="subject"
            >
            </base-input>
              </b-col>
              <b-col lg="6">
            <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle">
                  Category
                </base-button>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </base-dropdown>
              </b-col>
              <b-col lg="6">
                <base-input
              label="Date"
              placeholder="date"
              v-model="subject"
            >
            </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
              label="Time"
              placeholder="time"
              v-model="subject"
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
              v-model="subject"
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
      modals:{modal3:false},
      subject:'',
    }
  },
    mounted(){
      
    },
    methods:{
    }
  };
</script>
<style>
</style>
