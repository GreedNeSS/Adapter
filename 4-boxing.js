'use strict';

class ArrayToQueueAdapter {
	constructor(arr) {
		this.arr = arr;
	}

	enqueue(data) {
		this.arr.push(data);
	}

	dequeue() {
		return this.arr.pop();
	}

	get count() {
		return this.arr.length;
	}
}

// Usage

const queue = new ArrayToQueueAdapter([]);
queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');
while (queue.count) {
	console.log(queue.dequeue());
}