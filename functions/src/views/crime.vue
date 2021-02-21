<template>
  

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
      <!-- Card stats -->

    

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

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
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
    initViz() {
    var containerDiv1 = document.getElementById("vizContainer1"),
    url1 = "https://public.tableau.com/views/Book1_16138881262970/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link";
    var containerDiv2 = document.getElementById("vizContainer2"),
    url2 = "https://public.tableau.com/views/Book1_16138881262970/Dashboard2?:language=en-GB&:display_count=y&:origin=viz_share_link";
    var containerDiv3 = document.getElementById("vizContainer3"),
    url3 = "https://public.tableau.com/views/Book1_16138881262970/Dashboard3?:language=en-GB&:display_count=y&:origin=viz_share_link";
    var containerDiv4 = document.getElementById("vizContainer4"),
    url4 = "https://public.tableau.com/views/Book1_16138881262970/Dashboard4?:language=en-GB&:display_count=y&:origin=viz_share_link";
    var containerDiv5 = document.getElementById("vizContainer5"),
    url5 = "https://public.tableau.com/views/Book1_16138881262970/Dashboard5?:language=en-GB&:display_count=y&:origin=viz_share_link";
    var containerDiv6 = document.getElementById("vizContainer6"),
    url6 = "https://public.tableau.com/views/Book1_16138881262970/Dashboard6?:language=en-GB&:display_count=y&:origin=viz_share_link";
    var viz1 = new tableau.Viz(containerDiv1, url1);
    var viz2 = new tableau.Viz(containerDiv2, url2);
    var viz3 = new tableau.Viz(containerDiv3, url3);
    var viz4 = new tableau.Viz(containerDiv4, url4);
    var viz5 = new tableau.Viz(containerDiv5, url5);
    var viz6 = new tableau.Viz(containerDiv6, url6);
    // vizContainer1.style.height='400px'
    },
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
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

