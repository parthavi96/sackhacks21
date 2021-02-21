<template>
  

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
      <!-- Card stats -->

    <b-row class="mb-4">
        <b-col lg="12">
          <base-button @click="toPred" class="w-100">Predict</base-button>
        </b-col>
      </b-row>

    <!--Charts-->

      <b-row class="mb-4">
      
        <b-col lg="12" >
        <!-- <div id="vizContainer1" ></div> -->
        <iframe width="100%" height="500px" scrolling="no" src="https://public.tableau.com/views/Book1_16138881262970/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link&:size=1208,1&:embed=y&:showVizHome=n&:bootstrapWhenNotified=y&:apiID=host12#navType=1&navSrc=Parse"></iframe>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col lg="6">
        <!-- <div id="vizContainer2" style="height=100px;"></div> -->
        <iframe width="100%" height="350px" scrolling="no" src="https://public.tableau.com/views/Book1_16138881262970/Dashboard4?:language=en-GB&:display_count=y&:origin=viz_share_link&:size=581,1&:embed=y&:showVizHome=n&:bootstrapWhenNotified=y&:apiID=host19#navType=1&navSrc=Parse"/>
        </b-col>
        <b-col lg="6">
        <!-- <div id="vizContainer3" ></div> -->
        <iframe width="100%" height="350px" scrolling="no" src="https://public.tableau.com/views/Book1_16138881262970/Dashboard3?:language=en-GB&:display_count=y&:origin=viz_share_link&:size=377,1&:embed=y&:showVizHome=n&:bootstrapWhenNotified=y&:apiID=host26#navType=1&navSrc=Parse"/>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col >
        <!-- <div id="vizContainer4" height="100px"></div> -->
        <iframe width="100%" height="370px" scrolling="no" src="https://public.tableau.com/views/Book1_16138881262970/Dashboard2?:language=en-GB&:display_count=y&:origin=viz_share_link&:size=581,1&:embed=y&:showVizHome=n&:bootstrapWhenNotified=y&:apiID=host27#navType=1&navSrc=Parse"/>
        </b-col>
        
        <b-col >
        <!-- <div id="vizContainer5" height="100px"></div> -->
        <iframe width="100%" height="370px" scrolling="no" src="https://public.tableau.com/views/Book1_16138881262970/Dashboard5?:language=en-GB&:display_count=y&:origin=viz_share_link&:size=581,1&:embed=y&:showVizHome=n&:bootstrapWhenNotified=y&:apiID=host27#navType=1&navSrc=Parse"/>
        </b-col>
      

        <b-col>
        <!-- <div id="vizContainer6" ></div> -->
        <iframe width="100%" height="370px" scrolling="no" src="https://public.tableau.com/views/Book1_16138881262970/Dashboard6?:language=en-GB&:display_count=y&:origin=viz_share_link&:size=1145,1&:embed=y&:showVizHome=n&:bootstrapWhenNotified=y&:apiID=host29#navType=1&navSrc=Parse"/>
        </b-col>
      </b-row>
      <!-- End charts-->

     
</base-header>
  
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  import BaseButton from '../components/BaseButton.vue';
  import router from '../routes/router'

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable,
        BaseButton
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    mounted() {
      // this.initViz()
    },
    methods: {
      toPred(){
        router.push('predict')
      }
  
  
    },
    mounted() {
      this.initBigChart(0);
      this.initViz();
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
<style scoped>
iframe{
  border-radius: 5px;
}
</style>

