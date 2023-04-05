//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.8.18;

contract manageDB{
    address owner;
    constructor() {
        owner = msg.sender; // 将合约部署者地址保存在 owner 变量中
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You can use this contract");
        _; // 继续执行被修饰的函数
    }
    struct empStruct{
        string eno;
        string name;
        string sex;
        string age;
        string country;
        string position;
        string code;
        string major;
        string time;
        string phone;
        empStructF ff;
    }
    struct disEmp{
        string deno;
        string dname;
        string dtime;
        string sal_status;
    }
    struct manager{
        string Aname;
        string password;
    }
    
    struct empStructF{
        string status;
        string edu;
        string beginTime;
        string endTime;
        string school;
    }
    mapping(string => empStruct) public Emp;
    
    mapping(string => empStruct) public interview;
  
    mapping(string => empStruct) public forName;
   
    string[] keys;
    string[] diskeys;
    string[] intkeys;
    string public prEno;
    string prname;
    //string Ano;
    mapping(string => manager) public mag;
    mapping(string => disEmp) public dis;
    /*function getPr() public view returns(string memory){
       return prEno;
    }*/
    function setMag(string memory _Aname,string memory _password) public onlyOwner{
        mag[_Aname].password=_password;
        //Ano=_Ano;
    }
    function getMag(string memory _Aname) public onlyOwner view returns(string memory){
        return mag[_Aname].password;
    }
    function delMag(string memory _Aname) public onlyOwner{
        delete mag[_Aname];
    }
    
    function addEmp(string memory _eno,
                    string memory _name,string memory _sex,
                    string memory _age,string memory _country,
                    string memory _position,string memory _code,
                    string memory _major,string memory _time,
                    string memory _phone,empStructF memory stf) public onlyOwner{
                    require(keccak256(abi.encodePacked(Emp[_eno].eno)) == keccak256(abi.encodePacked("")),"this member is already exist in add");
                    require(keccak256(abi.encodePacked(forName[_name].name)) == keccak256(abi.encodePacked("")),"this name is already exist in add");
                       keys.push(_eno);
                       empStruct memory tmpEmp;
                       //empStructF memory tmpEmpF;
                       tmpEmp.eno=_eno;
                       tmpEmp.name=_name;
                       tmpEmp.sex=_sex;
                       tmpEmp.age=_age;
                       tmpEmp.country=_country;
                       tmpEmp.position=_position;
                       tmpEmp.code=_code;
                       tmpEmp.major=_major;
                       tmpEmp.time=_time;
                       tmpEmp.phone=_phone;
                       tmpEmp.ff.status=stf.status;
                       tmpEmp.ff.edu=stf.edu;
                       tmpEmp.ff.beginTime=stf.beginTime;
                       tmpEmp.ff.endTime=stf.endTime;
                       tmpEmp.ff.school=stf.school;
                       /*tmpEmpF.eno=_eno;
                       tmpEmpF.status=stf.status;
                       tmpEmpF.edu=stf.edu;
                       tmpEmpF.beginTime=stf.beginTime;
                       tmpEmpF.endTime=stf.endTime;
                       tmpEmpF.school=stf.school;*/
                       Emp[_eno]=tmpEmp;
                       forName[_name]=tmpEmp;
                       //EmpF[_eno]=tmpEmpF;
                       
                    }
    function getKeys() public onlyOwner view returns(string[] memory){
        return keys;
    }
    function getDisKeys() public onlyOwner view returns(string[] memory){
        return diskeys;
    }
    /*function getIntKeys() public onlyOwner view returns(string[] memory){
        return intkeys;
    }*/
    string _tmp;
    function queryEmp(string memory _eno) public onlyOwner returns(empStruct memory){
        //_tmp=_eno;
         prEno=_eno;
         return Emp[_eno];
    }
    /*function queryInt(string memory _eno) public onlyOwner view returns(empStruct memory){
        //_tmp=_eno;
         return interview[_eno];
    }*/
    /*
    function queryStruct() public view returns(empStruct memory){
        return Emp[_tmp];
    }*/
    function delEmp(string memory _eno) public onlyOwner{
        uint256 t=0;
        delete Emp[_eno];
        for(uint256 i=0;i<keys.length;i++){ 
            if(keccak256(abi.encodePacked(keys[i])) == keccak256(abi.encodePacked(_eno))){
                if(i==keys.length-1){
                    keys.pop();
                    break;
                }
                delete keys[i];
                t=1;}
            if(t==1&&i<keys.length-1)keys[i]=keys[i+1];
            
        if(i==keys.length-1)keys.pop();
        }
        
        t=0;

    }
   
    function changeEmp(string memory _eno,
                    string memory _name,string memory _sex,
                    string memory _age,string memory _country,
                    string memory _position,string memory _code,
                    string memory _major,string memory _time,
                    string memory _phone,empStructF memory stf) public onlyOwner {
                    empStruct memory oneQuery;
                    oneQuery=queryEmp(prEno);
                    require(keccak256(abi.encodePacked(Emp[_eno].eno)) == keccak256(abi.encodePacked(""))||keccak256(abi.encodePacked(oneQuery.eno)) == keccak256(abi.encodePacked(_eno)),"this member is already exist in change");
                    require(keccak256(abi.encodePacked(forName[_name].name)) == keccak256(abi.encodePacked(""))||keccak256(abi.encodePacked(oneQuery.name)) == keccak256(abi.encodePacked(_name)),"this name is already exist in change");
                         Emp[_eno].eno=_eno;
                         Emp[_eno].name=_name;
                         Emp[_eno].sex=_sex;
                         Emp[_eno].age=_age;
                         Emp[_eno].country=_country;
                         Emp[_eno].position=_position;
                         Emp[_eno].code=_code;
                         Emp[_eno].major=_major;
                         Emp[_eno].time=_time;
                         Emp[_eno].phone=_phone;
                         Emp[_eno].ff.status=stf.status;
                         Emp[_eno].ff.edu=stf.edu;
                         Emp[_eno].ff.beginTime=stf.beginTime;
                         Emp[_eno].ff.endTime=stf.endTime;
                         Emp[_eno].ff.school=stf.school;
                         forName[_name].name=_name;
                         
                    }
    function addis(string memory _deno,string memory _dname,string memory _dtime,string memory _sal_status) public onlyOwner{
        //require(keccak256(abi.encodePacked(dis[_deno].deno)) == keccak256(abi.encodePacked("")),"this member is already exist");
        //require(keccak256(abi.encodePacked(dis[_deno].dname)) == keccak256(abi.encodePacked("")),"this name is already exist");
        diskeys.push(_deno);
        dis[_deno].deno=_deno;
        dis[_deno].dname=_dname;
        dis[_deno].dtime=_dtime;
        dis[_deno].sal_status=_sal_status;
    }
    function deldis(string memory _deno) public onlyOwner{
        uint256 t=0;
        delete dis[_deno];
        for(uint256 i=0;i<diskeys.length;i++){ 
            if(keccak256(abi.encodePacked(diskeys[i])) == keccak256(abi.encodePacked(_deno))){
                if(i==diskeys.length-1){
                    diskeys.pop();
                    break;
                }
                delete diskeys[i];
                t=1;}
            if(t==1&&i<diskeys.length-1)diskeys[i]=diskeys[i+1];
            
        if(i==diskeys.length-1)diskeys.pop();
        }
        
        t=0;

    }
    function changeStatus(string memory _eno,string memory _status) public onlyOwner{
        Emp[_eno].ff.status=_status;
    }
    function changeSalStatus(string memory _eno,string memory _status) public onlyOwner{
        dis[_eno].sal_status=_status;
    }
    /*function addIntv(string memory _eno,
                    string memory _name,string memory _sex,
                    string memory _age,string memory _country,
                    string memory _position,string memory _code,
                    string memory _major,string memory _time,
                    string memory _phone,empStructF memory stf) public{
                       keys.push(_eno);
                       empStruct memory tmpinterview;
                       //empStructF memory tmpintvF;
                       tmpinterview.eno=_eno;
                       tmpinterview.name=_name;
                       tmpinterview.sex=_sex;
                       tmpinterview.age=_age;
                       tmpinterview.country=_country;
                       tmpinterview.position=_position;
                       tmpinterview.code=_code;
                       tmpinterview.major=_major;
                       tmpinterview.time=_time;
                       tmpinterview.phone=_phone;
                       tmpinterview.ff.status=stf.status;
                       tmpinterview.ff.edu=stf.edu;
                       tmpinterview.ff.beginTime=stf.beginTime;
                       tmpinterview.ff.endTime=stf.endTime;
                       tmpinterview.ff.school=stf.school;
                       /*tmpEmpF.eno=_eno;
                       tmpEmpF.status=stf.status;
                       tmpEmpF.edu=stf.edu;
                       tmpEmpF.beginTime=stf.beginTime;
                       tmpEmpF.endTime=stf.endTime;
                       tmpEmpF.school=stf.school;*/
                       //interview[_eno]=tmpinterview;
                       //EmpF[_eno]=tmpEmpF;
                       
                   // }
                    
    /*function delInterview(string memory _eno) public{
        uint256 t=0;
        delete interview[_eno];
        for(uint256 i=0;i<keys.length;i++){ 
            if(keccak256(abi.encodePacked(keys[i])) == keccak256(abi.encodePacked(_eno))){
                if(i==keys.length-1){
                    keys.pop();
                    break;
                }
                delete keys[i];
                t=1;}
            if(t==1&&i<keys.length-1)keys[i]=keys[i+1];
            
        if(i==keys.length-1)keys.pop();
        }
        
        t=0;

    }*/
    /*function changeInt(string memory _eno,
                    string memory _name,string memory _sex,
                    string memory _age,string memory _country,
                    string memory _position,string memory _code,
                    string memory _major,string memory _time,
                    string memory _phone,empStructF memory stf) public {
                         interview[_eno].eno=_eno;
                         interview[_eno].name=_name;
                         interview[_eno].sex=_sex;
                         interview[_eno].age=_age;
                         interview[_eno].country=_country;
                         interview[_eno].position=_position;
                         interview[_eno].code=_code;
                         interview[_eno].major=_major;
                         interview[_eno].time=_time;
                         interview[_eno].phone=_phone;
                         interview[_eno].ff.status=stf.status;
                         interview[_eno].ff.edu=stf.edu;
                         interview[_eno].ff.beginTime=stf.beginTime;
                         interview[_eno].ff.endTime=stf.endTime;
                         interview[_eno].ff.school=stf.school;
                         
                    }*/
    uint256 number;
    function store(uint256 num) public{
       number=num;
    }
    function hetstore() public view returns(uint256){
       return number;
    }
    

    /*function getemp() public view returns(mapping(string => empStruct) storage){
        return Emp;
    }*/
  
}
