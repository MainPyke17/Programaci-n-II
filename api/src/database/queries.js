// constante para hacer las consultas la base de datos de todas las tablas 
export const queries = {
    // consutlas de la tabla products
    getAllProducts: 'SELECT * FROM products',
    getDesyMer: 'select * from products where id_categoria in [1, 2, 3, 4]',
    createNewProduct: 'INSERT INTO products (id_producto, precio, descripcion, id_categoria, foto) VALUES (@id_producto, @precio, @descripcion, @id_categoria, @foto)',
    getProductById: "SELECT * FROM products WHERE id_producto = @id_producto",
    deleteProductById: 'DELETE FROM [SableParis].[dbo].[products] WHERE id_producto = @id_producto',
    getTotalProducts: 'SELECT COUNT(*) FROM products',
    updateProductById: 'UPDATE products SET precio = @precio, descripcion = @descripcion, id_categoria = @id_categoria WHERE id_producto = @id_producto',

    // consultas a la tabla pedidos
    getAllPedidos: 'SELECT * FROM pedidos',
    createNewPedido: 'INSERT INTO pedidos (id_pedido, id_mesa, fecha_hora) VALUES (@id_pedido, @id_mesa, @fecha_hora)',
    getPedidoById: 'SELECT * FROM pedidos WHERE id_pedido = @id_pedido',
    deletePedidoById: 'DELETE FROM [SableParis].[dbo].[pedidos] WHERE id_pedido = @id_pedido',
    getTotalPedidos: 'SELECT COUNT(*) FROM pedidos',
    updatePedidoById: 'UPDATE pedidos SET id_mesa = @id_mesa, fecha_hora = @fecha_hora WHERE id_pedido = id_pedido',

    // consultas a la tabla mesas 
    getAllMesas: 'SELECT * FROM mesas',
    createNewMesa: 'INSERT INTO mesas (id_mesa, comensales) VALUES (@id_mesa, @comensales)',
    getMesasById: 'SELECT * FROM mesas WHERE id_mesa = @id_mesa',
    deleteMesasById: 'DELETE FROM [SableParis].[dbo].[mesas] WHERE id_mesa = @id_mesa',
    getTotalMesas: 'SELECT COUNT(*) FROM mesas',
    updateMesasById: 'UPDATE mesas SET comensales = @comensales WHERE id_mesa = @id_mesa',

    // consultas para la tabla detalle_pedidos
    getAllDetalle_Pedidos: 'SELECT * FROM detalle_pedidos',
    createNewDetalle_Pedidos: 'INSERT INTO detalle_pedidos (id_pedido, id_producto, cantidad, precio_real) VALUES (@id_pedido, @id_producto, @cantidad, @precio_real)',
    getDetalle_PedidosById: 'SELECT * FROM detalle_pedidos WHERE detalle_pedidos = @detalle_pedidos',
    deleteDetalle_PedidosById: 'DELETE FROM [SableParis].[dbo].[detalle_pedidos] WHERE id_pedido = @id_pedido and id_producto = @id_producto',
    getTotalDetalle_Pedidos: 'SELECT COUNT(*) FROM detalle_pedidos',
    updateDetalle_PedidosById: 'UPDATE detalle_pedidos SET cantidad = @cantidad, precio_real = @precio_real WHERE id_pedido = @id_pedido and id_producto = @id_producto',

    //consultas de la tabla categorias 
    getAllCategorias: 'SELECT * FROM categorias',
    createNewCategoria: 'INSERT INTO categorias (id_categoria, descripcion_categoria) VALUES (@id_categoria, @descripcion_categoria)',
    getCategoriasById: 'SELECT * FROM categorias WHERE id_categoria = @id_categoria',
    deleteCategoriaById: 'DELETE FROM [SableParis].[dbo].[categorias] WHERE id_categoria = @id_categoria',
    getTotalCategoria: 'SELECT COUNT(*) FROM categorias',
    updateCategoriaById: 'UPDATE categorias SET descripcion_categoria = @descripcion_categoria WHERE id_categoria = @id_categoria',

    //consultas a la tabla usuario 
    getUsers: "SELECT * FROM usuarios",
    createUser: "INSERT INTO usuarios (gmail, contrasena) VALUES (@gmail, @contrasena)",
    getUserById: "SELECT * FROM usuarios WHERE id_usuario = @id_usuario",
    deleteUserById: "DELETE FROM [SableParis].[dbo].[usuarios] WHERE id_usuario = @id_usuario",
    getTotalUsers: "SELECT COUNT (*) FROM usuarios",
    updateUserById: "UPDATE usuarios SET gmail = @gmail, contrasena = @contrasena WHERE id_usuario = @id_usuario",

    //consutlas para la tabla de roles 
    getRoles: "SELECT * FROM roles",
    createNewRole: "INSERT INTO roles (nombre) VALUES (@nombre)",
    getRoleById: "SELECT * FROM roles WHERE id_role = @id_role",
    deleteRoleById: "DELETE FROM [SableParis].[dbo].[roles] WHERE id_role = @id_role",
    getTotalRoles: "SELECT COUNT (*) FROM roles",
    updateRolesById: "UPDATE roles SET nombre = @nombre WHERE id_role = @id_role"
};