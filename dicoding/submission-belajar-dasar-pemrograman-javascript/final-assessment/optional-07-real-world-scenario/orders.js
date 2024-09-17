// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
const orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  function getTotalPrice() {
    return items.reduce((acc, item) => acc + item.price, 0);
  }

  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: getTotalPrice(),
    status: "Menunggu",
  };

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);

  // early return jika tidak ditemukan
  if (!order) {
    return;
  }

  order.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((acc, order) => acc + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
