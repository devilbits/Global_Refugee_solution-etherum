pragma solidity ^0.5.0;

contract refugeeIdentity {
    uint256 public refugeeCount;
    
    enum gender {male, female, other}
    enum bloodGroup {AP,AN,BP,BN,OP,ON,ABP,ABN}
    struct profile {
        string name;
        uint age;
        gender refugeeGender;
        string country;
        bloodGroup refugeeBloodgroup;
        address accountAddress;
        string hash;
    }
     
    mapping(uint => profile) refugee;
    
    function addRefugee(uint _regNo, string memory _name, string memory _country, uint _age, gender _refugeeGender,bloodGroup _refugeeBloodgroup,address _passNo,string memory _hash) public {
        refugeeCount +=1;
        
        refugee[_regNo] = profile(_name,_age,_refugeeGender,_country,_refugeeBloodgroup,_passNo,_hash);
    }
    
    function getRefugee(uint _regNo) public view returns (string memory _name, string memory _country, uint _age, gender _refugeeGender,bloodGroup _refugeeBloodgroup,address _passNo,string memory _hash){
        _name = refugee[_regNo].name;
        _age = refugee[_regNo].age;
        _refugeeGender = refugee[_regNo].refugeeGender;
        _country = refugee[_regNo].country;
        _refugeeBloodgroup = refugee[_regNo].refugeeBloodgroup;
        _passNo = refugee[_regNo].accountAddress;
        _hash = refugee[_regNo].hash;
    }
    }
