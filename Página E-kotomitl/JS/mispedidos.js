// Crear un array vacío para almacenar los pedidos
let pedidos = [];

// Verificar si ya hay pedidos guardados en el localStorage
if (localStorage.getItem('pedidos')) {
    // Si hay pedidos almacenados, cargarlos en el array
    pedidos = JSON.parse(localStorage.getItem('pedidos'));
}

// Función para agregar un nuevo pedido al array y actualizar el localStorage
function agregarPedido(numero, fecha, total, estado) {
    const pedido = { numero, fecha, total, estado };
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

// Función para mostrar los pedidos en la tabla
function mostrarPedidos() {
    const pedidosTable = document.getElementById('pedidosTable').getElementsByTagName('tbody')[0];

    // Limpiar la tabla solo si ya tiene filas
    if (pedidosTable.rows.length > 0) {
        pedidosTable.innerHTML = '';
    }

    pedidos.forEach(pedido => {
        const row = pedidosTable.insertRow();
        row.innerHTML = `
            <td>${pedido.numero}</td>
            <td>${pedido.fecha}</td>
            <td>${pedido.total}</td>
            <td>${pedido.estado}</td>
        `;
    });
}

// Llamar a la función para mostrar los pedidos cuando la página cargue
mostrarPedidos();
