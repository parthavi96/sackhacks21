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
      

          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
        <!-- Header container -->
        <!-- <b-container fluid class="d-flex align-items-center">
          <b-row >
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white">Hello Jesse</h1>
              <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your
                work and manage your projects or assigned tasks</p>
              <a href="#!" class="btn btn-info">Edit profile</a>
            </b-col>
          </b-row>
        </b-container> -->
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

  export default {
    components: {
      EditProfileForm,
      // UserCard
    }
  };
</script>
<style>
</style>
