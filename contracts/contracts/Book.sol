pragma solidity ^0.6.0;

contract Book {

  event downloadLog(address user, string uid);

  struct Book {
    string uid;
    string title;
    uint   _price;
    string hash;
    string keyHash;
    address authorAddress;
  }

  function getBook(string uid) public view returns {
    emit downloadLog(msg.sender, uid);
  }

}