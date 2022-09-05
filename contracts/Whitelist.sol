//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;




contract Whitelist{

    //varibale de estados
    //maximun number of addresses for whitelist
    uint8 public maxWhiteListAddresses;

    //keep track of number of addresses whitelisted till now
    uint8 public numAddresseseWhiteListed;

    //mapping verify if address exists in whitelist
    mapping(address => bool) public whiteListedAddresses;

    constructor(uint8 _maxWhiteListAddresses){
        maxWhiteListAddresses = _maxWhiteListAddresses;

    }

    function addAddressToWhitelis() public{
        require(!whiteListedAddresses[msg.sender], "Already in the whitelist");
        require(numAddresseseWhiteListed < maxWhiteListAddresses, "Max limit reached");
        whiteListedAddresses[msg.sender] = true;
        numAddresseseWhiteListed +=1;
    }

}