<template>
  <div class="box">
  <h4>公司总人数</h4>
  <span>86人</span>
  </div>
  <div class="box1">
  <h4>研发部</h4>
  <span>26人</span>
  </div>
  <div class="box2">
  <h4>销售部</h4>
  <span>30人</span>
  </div>
  <div class="box3">
  <h4>测试部</h4>
  <span>14人</span>
  </div>
  <div class="box4">
  <h4>后勤部</h4>
  <span>10人</span>
  </div>
  
</template>

<script>
export default {
name:'Top',
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.box{
  top:100px;
  position:absolute;
  margin-left:335px ;
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
  top:300px;
  margin-left:50px ;
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
  top:300px;
  margin-left:250px ;
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
  top:300px;
  margin-left:450px ;
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
  top:300px;
  margin-left:650px ;
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