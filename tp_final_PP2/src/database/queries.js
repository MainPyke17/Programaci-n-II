import { updateProductById } from "../controllers/products.controller";

export const queries = {
    //consultas a la base de datos para cada una de las tablas

    //tabla products
    getAllProduct: "SELECT * FROM products",
    createNewProduct: "INSERT INTO products (id_producto, precio, descripcion, id_categoria) VALUES (@id_producto, @precio, @descripcion, @id_categoria)",
    getProductById: "SELECT * FROM products Where id_producto = @id_producto",
    deleteProduct: "DELETE FROM [SableParis].[dbo].[products] WHERE id_producto = @id_producto",
    getTotalProducts: "SELECT COUNT(*) FROM [SableParis].[dbo].[products]",
    updateProductById: "UPDATE products SET precio = @precio, descripcion = @descripcion, id_categoria = @id_categoria WHERE id_producto = @id_producto",

    //tabla pedidos
    getAllPedidos: "SELECT * FROM pedidos",
    createNewPedido: "INSERT INTO pedidos (id_pedido, id_mesa, fecha_hora) VALUES (@id_pedido, @id_mesa, @fecha_hora)",
    getPeidoById: "SELECT * FROM pedidos WHERE id_pedido = @id_pedido",
    deletePedido: "DELETE FROM [SableParis].[dbo].[pedidos] WHERE id_pedido = @id_pedido",
    getTotalPedidos: "SELECT COUNT(*) FROM [SableParis].[dbo].[pedidos]",
    updatePedidosById: "UPDATE pedidos SET id_mesa = @id_mesa, fecha_hora = @fecha_hora WHERE id_pedido = @id_pedido",

    //tabla mesas
    getAllMesas: "SELECT * FROM mesas",
    createNewMesa: "INSERT INTO mesas (id_mesa, comensales) VALUES (@id_mesa, @comensales)",
    getMesasById: "SELECT * FROM mesas Where id_mesa = @id_mesa",
    deleteMesas: "DELETE FROM [SableParis].[dbo].[mesas] WHERE id_mesa = @id_mesa",
    getTotalMesas: "SELECT COUNT(*) FROM [SableParis].[dbo].[mesas]",
    updateMesasById: "UPDATE mesas SET comensales = @comensales WHERE id_mesa = @id_mesa",

    //tabla detalle_pedidos
    getAllDetalles_Pedidos: "SELECT * FROM detalles_pedidos",
    createNewDetalle_Pedido: "INSERT INTO detalle_pedidos (id_pedido, id_producto, cantidad, precio_real) VALUES (@id_pedido, @id_producto, @cantidad, @precio_real)",
    getDetalle_PedidosById: "SELECT * FROM detalle_pedidos Where id_pedido = @id_pedido, id_producto = @id_producto",
    deleteDetalle_Pedidos: "DELETE FROM [SableParis].[dbo].[detalle_pedidos] WHERE id_pedido = @id_pedido, id_producto = @id_producto",
    getTotalDetalle_Pedidos: "SELECT COUNT(*) FROM [SableParis].[dbo].[detalle_pedidos]",
    updateDetalle_PedidosById: "UPDATE detalle_pedidos SET cantidad = @cantidad, precio_real = @precio_real WHERE id_pedido = @id_pedido, id_producto = @id_producto",

    //tabla categorias
    getAllCategorias: "SELECT * FROM categorias",
    createNewCategoria: "INSERT INTO categorias (id_categoria, descripcion_categoria) VALUES(@id_categoria, @descripcion_categoria)",
    getCategoriasById: "SELECT * FROM categorias Where id_categoria = @id_categoria",
    deleteCategorias: "DELETE FROM [SableParis].[dbo].[categorias] WHERE id_categoria = @id_categoria",
    getTotalcategorias: "SELECT COUNT(*) FROM [SableParis].[dbo].[categorias]",
    updateCategoriasById: "UPDATE categorias SET descripcion_categoria = @descripcion_categoria WHERE id_categoria = @id_categoria",
}