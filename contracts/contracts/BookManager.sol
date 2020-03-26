pragma solidity ^0.6.0;

contract BookManager {
    event registerBook(address user, string uid);
    event downloadLog(address user, string uid);
    
    struct Book {
        string uid;
        string title;
        uint   price;
        string hash;
        string keyHash;
        address authorAddress;
    }
    
    struct Request {
        // status => { 1:requested, 2:approved };
        uint status;
        address bookAddress;
        address userAddress;
    }
    
    mapping(address => Book[]) books;
    mapping(address => Request[]) requests;
    
    function registeredBook(string memory _uid, string memory _title, uint _price, string memory _hash, string memory _keyHash) public  {
        emit registerBook(msg.sender, _uid);
        books[msg.sender].push(Book({uid: _uid, title: _title, price: _price, hash: _hash, keyHash: _keyHash, authorAddress: msg.sender}));
    }
    
    function requestBook(uint _index) public {
        
    }
    
    function downloadBook(address _authorAddress, uint _index) public payable returns (string memory, string memory) {
        Book memory book = books[_authorAddress][_index];
        emit downloadLog(msg.sender, book.uid);
        require(msg.sender.balance > book.price);
        return (book.hash, book.keyHash);
    }
    
    function getBookInfo(address _authorAddress, uint _index) public view returns(string memory, uint) {
        Book memory book = books[_authorAddress][_index];
        return (book.title, book.price);
    }
    
    
    function getLength() public view returns(uint){
        return books[msg.sender].length;
    }
}