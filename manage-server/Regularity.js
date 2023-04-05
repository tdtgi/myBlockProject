const keys=[
    'eno',
    'name',
    'sex',
    'age',
    'time',
    'position',
    'country',
    'code',
    'major',
    'phone',
    'status',
    'edu',
    'beginTime',
    'endTime',
    'school'
   ]
   const Dkeys=[
    'eno',
    'name',
    'time',
    'sal_status'
   ]
   module.exports.changeKeys=function(arr){
    console.log(arr)
          
    let re=arr.map(item=>{
      let obj = {}
      let D1=Object.entries(item).slice(0,11)//把对象转换成键值对数组在去前10个值
      let D2=Object.fromEntries(D1) //把键值对列表转换成对象
      let D3=Object.values(D2)//取出每个值
      let D4=D3.flat()//数组扁平化
      D4.forEach((value,index)=>{
              obj[keys[index]] = value;//给每个值加上键
          })
    return obj
    })
    
          
          return re;
      }
      module.exports.changeDisKeys=function(arr){
        console.log(arr)
              
        let re=arr.map(item=>{
          let obj = {}
          let D1=Object.entries(item).slice(0,4)//把对象转换成键值对数组在去前10个值
          let D2=Object.fromEntries(D1) //把键值对列表转换成对象
          let D3=Object.values(D2)//取出每个值
          let D4=D3.flat()//数组扁平化
          D4.forEach((value,index)=>{
                  obj[Dkeys[index]] = value;//给每个值加上键
              })
        return obj
        })
        
              
              return re;
          }
      module.exports.addKeys=function(arr){
        let data=arr.flat()
        const obj = {};
			data.forEach((value,index)=>{
				obj[keys[index]] = value;
			})
			return obj;
              
              
          }
