pragma solidity ^0.6.0;

import "./Book.sol";

contract BookManager{
  event registeredBook(address user, string uid);

  enum SharingBookSteps{Registerd, Requested, Apporoved}

  mapping(address => Book[]) books;

  function registerBook(string memory _identifer, uint _step, address _address) public {
    emit registeredBook(msg.sender, uid);
    Book book = new Book(string memory _identifer, uint _step, address);
  }

  function requestBook() public {
    Book memory book = books[msg.sender][index];
    return ()
  }

  function approveRequest() public view returns {
    require(books[msg.sender].authorAddress == msg.sender);
    Book memory book = books[msg.sender][index];
    return ()
  }

  function deleteBook() public {
    require (books[msg.sender].authorAddress == msg.sender);
    
  }
}