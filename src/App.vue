<template>
  <div>
    <el-row :gutter="24">
  <el-col :span="8" v-for="item in dataArr " :key="item.userid"><div class="grid-content bg-purple">{{item.name}}</div></el-col>
  </el-row>
  </div>
</template>

<script >
import { GetHomeData } from './request/api'

export default {
  
  name: 'App',
  data(){
    return {
      a:'s',
      countArr : [3,2,1,1,1,1,2,2],
     res:{},
    duplicates:[],
    // 请求数据
    parameter:{
      'eventid':'1658006187000_0E693E00AADBBDC4F072D099E690894F',
      'userid': '0'
    },
     dataArr:[],

      testArr : [{ name: 'tom', age: "0" },
        { name: 'marry', age: '18213213' },
        { name: 'xxx', age: '14' },
        { name: 'jerry', age: '11' }]
    }
  },
  methods:{
    // 1.筛选数组中相同的值
    getRepeat(arr){
      const tempArray = [...arr]
      for(let i=0; i<arr.length;i++){
  tempArray[i+1] === tempArray[i]?this.duplicates.push(tempArray[i],tempArray[i+1]):0
      }
      console.log(this.duplicates)
  },
  // 升序
  ascenDing(time){
   const times =[...time]
     return times.sort((a, b) => a.starttime < b.starttime ? -1 : a.starttime > b.starttime ? 1 : 0)
  }
},
created(){
  // 调用筛选数组
  this.getRepeat(this.countArr)
  // api
  GetHomeData(this.parameter).then(res=>{
    // console.log(res.data)
    this.dataArr =  this.ascenDing(res.data) ;
  })
}
}
</script>

<style lang="less">
   body{
  padding: 0,0;
  margin: 0 0;
}
    .el-row {
    margin-bottom: 20px;
    margin:0 !important;
    &:last-child {
      margin-bottom: 0;
    }
  }

.el-col {
    border-radius: 4px;
    margin-top:10px ;
    text-align: center;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #D3DD6A;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
