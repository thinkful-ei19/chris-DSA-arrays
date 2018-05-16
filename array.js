
const Memory = require('./memory');

const memory = new Memory();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {//Print this one item that you just added. What is the result? Can you explain your result?
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3;

function main(){

    //create an instance of the array class
    let arr = new Array();

    //add an item to the array


// What is the length, capacity and memory address of your array?
// 1, 3, 0

    arr.push(7);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();

//What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code
//The length increased by 5 (to 6), since there were 5 new values added respectively
//The capacity also increased to 12. It appears as though the capacity increases by *3 of the total length whenever the length exceeds the capacity.
//The pointer will become the new reference to where the array's new position is at.

//Value:     1 2 3 ||| 1 2 3 4 5 6 7  8  9  10 11 12 ||| 13 
//Capacity:  1 2 3     15  6 7 8 9 10 11 12 13 14 15     16
//Position:  0 1 2     3 4 5 6 7 8 9  10 11 12 13 14     15
//Pointer:   0 0 0     ^ 3 3 3 3 3 3  3  3  3  3  3      ^15

//Getting the new location of an array repositioned after capacity is forced to increase.
//pointer = 3
//arr[8 + pointer] 


//What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
// Length becomes 3, yet pointer and capacity remain the same. This makes sense as three values were removed,
// yet the actual location of the array hasn't changed and the capacity itself hasn't been manipulated.


    console.log(arr);
    console.log(arr.get(0))

    arr.remove();
    arr.remove();
    arr.remove();
    //for loop is behaving bizarrely. for (i=1; i<=arr.length; i++) behaves the exact same as (i=0; i<=arr.length; i++) - it only loops twice on each!


    arr.push("tauhida")
    //Print this one item that you just added. What is the result? Can you explain your result?
    console.log(arr)
    console.log(arr.get(0))

    //NaN- Which is right... but is this what we really should be getting? It won't return a string.
    

    //What is the purpose of the _resize() function in your Array class?
    //To redefine the capacity and reset the pointer to the new array start point
}


main()

