<template>
  <div class="small d-flex">
    <line-chart :chart-data="datacollection" ></line-chart>
    <line-chart :chart-data="datacollection1"></line-chart>
    <polar-area-chart :chart-data="datacollection2"></polar-area-chart>
  </div>
</template>

<script>
  import LineChart from './DashboardForm.js'
  import PolarAreaChart from './PolarArea.js'

  export default {
    components: {
      LineChart,
      PolarAreaChart
    },
    data () {
      return {
        datacollection: null,
        datacollection1: null,
        datacollection2: null
      }
    },
    methods: {
      async fillData () {

          const response = await axios('report-count-file-aproved-desaproved')

          let data = { ...response.data.data }
          this.datacollection = {
            datasets: data[0]
          }

          this.datacollection1 = {
            datasets: data[1]
          }

          this.datacollection2 = data[2]

          // this.datacollection2 = {
          //   labels: [
          //     'Red',
          //     'Green',
          //     'Yellow',
          //     'Grey',
          //     'Blue'
          //   ],
          //   datasets: [{
          //     data: [11, 16, 7, 3, 14],
          //     backgroundColor: [
          //       'rgb(255, 99, 132)',
          //       'rgb(75, 192, 192)',
          //       'rgb(255, 205, 86)',
          //       'rgb(201, 203, 207)',
          //       'rgb(54, 162, 235)'
          //     ]
          //   },{
          //     data: [100, 150, 20, 30, 140],
          //     backgroundColor: [
          //       'rgb(255, 99, 132)',
          //       'rgb(75, 192, 192)',
          //       'rgb(255, 205, 86)',
          //       'rgb(201, 203, 207)',
          //       'rgb(54, 162, 235)'
          //     ]
          //   },]
          // }


        // this.datacollection1 = {
        //   datasets: [
        //     {
        //       label: 'Data One',
        //       backgroundColor: '#f87979',
        //       data: [5]
        //     }, 
        //     {
        //       label: 'Data two',
        //       backgroundColor: '#f87979',
        //       data: [20]
        //     }
        //   ]
        // }

      }
    },
    mounted () {
      this.fillData()
    }
  }
</script>
<style>
  .small {
    margin:  150px auto;
    flex-wrap: wrap;
    width: min-content;
  }
</style>