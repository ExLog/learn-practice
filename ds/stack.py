from typing import Optional, TypeVar

T = TypeVar('T')

class DataNode:
    data = T 
    next = None

    def __init__(self, data, next):
        self.data = data
        self.next = next


class Queue:
    _size: int = 0
    head: Optional[DataNode] = None
    tail: Optional[DataNode] = None


    def __init__(self):
        self.head = self.tail = None

    def size(self):
        return self._size

    def push(self, data):
        # bikin data node
        node = DataNode(data, None)

        # jika head masih kosong
        # kondisi belum pernah di push
        if self.head == None:
            # inisialisasi head dan tail ke node yang dibuat
            # dua-duanya mengarah ke next yaitu None
            self.head = self.tail = node
        else:
            # jika head bukan None
            # sudah pernah diisi
            assert self.tail is not None

            # tail.next akan mengarah ke node baru
            # yang dimana node 
            # { 
            #    data: data,
            #    next: None
            # }
            self.tail.next = node
            # sekarang self.tail menjadi DataNode di atas
            self.tail = self.tail.next

        self._size = self._size + 1


if __name__ == "__main__":
    linked = Queue()
    # head None
    # tail None

    linked.push("aqua")
    # head aqua None
    # tail aqua None

    linked.push("peko")
    # head aqua DataNode("peko", None)
    # tail peko None

    linked.push("miko")
    # head aqua DataNode("peko", DataNode("miko", None))
    # tail miko None




