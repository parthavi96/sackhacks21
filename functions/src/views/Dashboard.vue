<template>
  <div>
    <base-header class="pb-6 pb-8 pt-md-8 bg-gradient-warning">
      <!-- Card stats -->
      <b-row>
        <b-col class="text-center"  xl="4" md="6">
          <stats-card title="Total Crime"
                      type="gradient-red"
                      sub-title="350,897"
                      class="mb-4">
            <router-link :to="'crime'"><img @click="open('crime')" src="../.././public/img/icons/dashboard/crime.png" height="200" width="200">
            <h2 class="h2 font-weight-bold mb-0">Crime</h2>
            </router-link>
            <!-- <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template> -->
          </stats-card>
        </b-col>
        
        <b-col class="text-center" xl="4" md="6">
          <stats-card title="Total Crime"
                      type="gradient-red"
                      sub-title="350,897"
                      class="mb-4">
            <router-link :to="'food'">
            <img src="../.././public/img/icons/dashboard/food.png" height="200" width="200">
            <h2 class="h2 font-weight-bold mb-0">Food</h2></router-link>
            <!-- <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template> -->
          </stats-card>
        </b-col>
        <b-col class="text-center" xl="4" md="6">
          <stats-card title="Total Crime"
                      type="gradient-red"
                      sub-title="350,897"
                      class="mb-4">
            <router-link :to="'routeBus'">
            <img src="../.././public/img/icons/dashboard/map.png" height="200" width="200">
            <h2 class="h2 font-weight-bold mb-0">Routes</h2></router-link>
            <!-- <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template> -->
          </stats-card>
        </b-col>
      </b-row>
      <b-row>
               
        <b-col class="text-center" xl="4" md="6">
          <stats-card title="Total Crime"
                      type="gradient-red"
                      sub-title="350,897"
                      class="mb-4">
            <img src="../.././public/img/icons/dashboard/form.png" height="200" width="200">
            <h2 class="h2 font-weight-bold mb-0">Important Forms</h2>
            <!-- <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template> -->
          </stats-card>
        </b-col>
        <b-col class="text-center" xl="4" md="6">
          <stats-card title="Total Crime"
                      type="gradient-red"
                      sub-title="350,897"
                      class="mb-4">
            <router-link :to="'update'"><img src="../.././public/img/icons/dashboard/news.png" height="200" width="200">
            <h2 class="h2 font-weight-bold mb-0">Latest Updates</h2></router-link>
            <!-- <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template> -->
          </stats-card>
        </b-col>
        <b-col class="text-center" xl="4" md="6">
          <stats-card title="Total Crime"
                      type="gradient-red"
                      sub-title="350,897"
                      class="mb-4">
            <router-link :to="'alert'"><img src="../.././public/img/icons/dashboard/sos.png" height="200" width="200">
            <h2 class="h2 font-weight-bold mb-0">Emergency Contacts</h2></router-link>
            <!-- <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template> -->
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

  </div>
</template>
<script>
  // Charts
  // import * as chartConfigs from '@/components/Charts/config';
  // import LineChart from '@/components/Charts/LineChart';
  // import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  // import router from "/router";
  // Tables
  // import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  // import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      // LineChart,
      // BarChart,
      BaseProgress,
      StatsCard,
      // PageVisitsTable,
      // SocialTrafficTable
    },
    data() {
      return {
      };
    },
    methods: {
      
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
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
