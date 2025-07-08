var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    // methods (add while looping through)
    // add(value: T) {
    //     const node = new ListNode(value);
    //     if (!this.root) {
    //         this.root = node;
    //     } else {
    //         let current = this.root;
    //         while (current.next) {
    //             current = current.next;
    //         }
    //         current.next = node;
    //     }
    //     this.length++;
    // };
    // a more efficient add method using tail variable
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
        }
        this.length++;
    };
    ;
    LinkedList.prototype.getNumberOfElements = function () {
        return this.length;
    };
    ;
    LinkedList.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
// generics allow for the creation of different types of linked lists
var numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log(numberList.getNumberOfElements());
numberList.print();
var nameList = new LinkedList();
