class ListNode<T> {
    next?: ListNode<T>;
    constructor(public value: T){}
}

class LinkedList<T> {
    // private properties
    private root?: ListNode<T>; // the question mark makes root optional
    private tail?: ListNode<T>;
    private length = 0;


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
    add(value: T) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
    };

    getNumberOfElements(){
        return this.length;
    };

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// generics allow for the creation of different types of linked lists
const numberList = new LinkedList<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);

console.log(numberList.getNumberOfElements());
numberList.print();

const nameList = new LinkedList<string>();
