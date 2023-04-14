<template>
  <div class="box">
  <h4>公司总人数</h4>
  <span>{{total}}人</span>
  </div>
  <div class="box1">
  <h4>研发部</h4>
  <span>{{message.研发}}人</span>
  </div>
  <div class="box2">
  <h4>销售部</h4>
  <span>{{message.销售}}人</span>
  </div>
  <div class="box3">
  <h4>测试部</h4>
  <span>{{message.测试}}人</span>
  </div>
  <div class="box4">
  <h4>后期部</h4>
  <span>{{message.后期}}人</span>
  </div>
  
</template>

<script>
import {empNum} from '../../../utils/request'
export default {
name:'Top',
data(){
  return{
  message:{},
  total:0
  }
},
created(){
this.getAll()
},
methods:{
  async getAll(){
    const {message:data}=await empNum()
    this.message=data
    this.total=data.研发+data.销售+data.测试+data.后期
    //console.log()
  }
}
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.box{
  top:140px;
  position:absolute;
  margin-left:415px ;
  color: white;
  transition: all 0.2s linear;
  &:hover{
    
    transform: scale(1.2);
  }
  
  h4{
    position: relative;
    margin: 0;
    top: 30%;
  }
  span{
   position: relative;
   top: 40%;
  }
  text-align: center;
  border-radius: 50%;
  background-color: rgb(52, 42, 165);
  height: 200px;
  width: 200px;
}
.box1{
  position:absolute;
  top:340px;
  margin-left:130px ;
  color: white;
  transition: all 0.2s linear;
  &:hover{
    
    transform: scale(1.2);
  }
  
  h4{
    position: relative;
    margin: 0;
    top: 30%;
  }
  span{
   position: relative;
   top: 40%;
  }
  text-align: center;
  border-radius: 50%;
  background-color: brown;
  height: 180px;
  width: 180px;
}
.box2{
  position:absolute;
  top:340px;
  margin-left:330px ;
  color: white;
  transition: all 0.2s linear;
  &:hover{
    
    transform: scale(1.2);
  }
  
  h4{
    position: relative;
    margin: 0;
    top: 30%;
  }
  span{
   position: relative;
   top: 40%;
  }
  text-align: center;
  border-radius: 50%;
  background-color: rgb(42, 165, 65);
  height: 180px;
  width: 180px;
}
.box3{
  position:absolute;
  top:340px;
  margin-left:530px ;
  color: white;
  transition: all 0.2s linear;
  &:hover{
    
    transform: scale(1.2);
  }
  
  h4{
    position: relative;
    margin: 0;
    top: 30%;
  }
  span{
   position: relative;
   top: 40%;
  }
  text-align: center;
  border-radius: 50%;
  background-color:blueviolet;
  height: 180px;
  width: 180px;
}
.box4{
  position:absolute;
  top:340px;
  margin-left:730px ;
  color: white;
  transition: all 0.2s linear;
  &:hover{
    
    transform: scale(1.2);
  }
  
  h4{
    position: relative;
    margin: 0;
    top: 30%;
  }
  span{
   position: relative;
   top: 40%;
  }
  text-align: center;
  border-radius: 50%;
  background-color:black;
  height: 180px;
  width: 180px;
}
/*
.box1{
  margin-right:300px ;
 
  width: 150px;
  ul{
    li{
      padding-top:10px ;
      height: 40px;
    }
    li:nth-of-type(2n+1){
    background-color: green;
    }
  list-style: none;
  
  }
  text-align: center;
  float: right;
  background-color: aqua;
}
*/
</style>