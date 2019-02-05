pragma solidity ^0.4.25;


contract test {
    
    address public owner;
    
    struct VersionStruct {
        uint version;
        string value;
    }
    
    mapping(bytes32=>VersionStruct) public dictionary;
    
    event LogChangedValue(uint version, string name, string value);
    
    modifier onlyOwner {
        require(msg.sender==owner);
        _;
    }
    
    constructor() public{
        owner = msg.sender;
    }
    
    function setValue(string name, string newValue) public onlyOwner returns (bool response){
        bytes32 hash = keccak256(abi.encodePacked(name));
        VersionStruct storage version = dictionary[hash];
        version.version++;
        version.value = newValue; 
        emit LogChangedValue(version.version, name, newValue);
        return true;
    }
    
    function getValue(string name) public constant onlyOwner returns (uint version, string value){
        bytes32 hash = keccak256(abi.encodePacked(name));
        VersionStruct memory structure = dictionary[hash]; 
        return (structure.version, structure.value);
    }
    
    
    function kill() onlyOwner public{
        selfdestruct(owner);
    }
    
}