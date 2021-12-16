#!/usr/bin/env python


class DataNode:
    def __init__(self, data):
        self.data = data
        self.next = None


# queue
# enqueue: insert
# dequeue: remove
class Queue:
    def __init__(self):
        self._size = 0
        self.head = self.tail = None

    def __repr__(self):
        result = ""
        node = self.head

        while node:
            result += f"{node.data} => "
            node = node.next
            if node is None:
                result += "None"

        return result

    def enqueue(self, data):
        node = DataNode(data)

        if self.tail is None:
            self.head = self.tail = node
        else:
            assert self.tail is not None

            self.tail.next = node
            self.tail = node

        self._size += 1

    def dequeue(self):
        if self._size == 0:
            return None

        assert self.head is not None

        data = self.head.data

        self.head = self.head.next

        self._size -= 1
        if self._size == 0:
            self.tail = None

        return data

    def size(self):
        return self._size

    def peek(self):
        if self._size == 0:
            return None

        assert self.tail is not None
        return self.tail.data


# stack
# push: insert
# pop: remove
class Stack:
    def __init__(self):
        self.tail = None
        self._size = 0

    def __repr__(self):
        result = ""

        while self.tail:
            result += str(self.tail.data)
            result += " => "

            self.tail = self.tail.next
            if self.tail is None:
                result += "None"

        return result

    def push(self, data):
        node = DataNode(data)

        if self.tail is None:
            self.tail = node
        else:
            node.next = self.tail
            self.tail = node

        self._size += 1

    def pop(self):
        if self._size == 0:
            return None

        assert self.tail is not None

        data = self.tail.data
        self.tail = self.tail.next

        self._size -= 1

        return data

    def peek(self):
        if self._size == 0:
            return None

        assert self.tail is not None
        return self.tail.data


if __name__ == "__main__":
    queue = Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print(queue)

    stack = Stack()
    stack.push(1)
    stack.push(2)
    print(stack)
