<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
      <!-- Card stats -->
      <b-row>
        <b-col>
          <b-card no-body class="border-0">
            <b-button @click="drawMark">Draw Marks</b-button>
            <GmapMap
          :center="center"
          :zoom="17"
          map-type-id="terrain"
          style="width: 100%; height: 300px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
          <gmap-polygon :paths="paths"></gmap-polygon>
        </GmapMap> 
          </b-card>
        </b-col>
      </b-row>
      </base-header>
    

  </div>
</template>
<script>
  const posA = {lat:38.582559969215886, lng:-121.41242937344376};
  const posB = {lat:38.58288705530446, lng:-121.41447858109821};
  
  export default {
    data(){
      return{
        markers: [],
        center: posA,
        paths: [],
      }
    },
    methods:{
      drawMark(){
        this.markers =[
          {
            position: posA,
          },
          {
            position: posB,
          },
        ]
      },
      drawDir(){
        this.paths = [posA,posB]
      },
      clearMap(){

      }
    }
     
  };
</script>
