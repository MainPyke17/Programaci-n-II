import { getConnection, sql, queries } from "../database";

export const getDetallePedidos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDetalle_Pedidos);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewDetalle_Pedidos = async (req, res) => {
    const {id_pedido, id_producto, cantidad, precio_real} = req.body;

    if (id_pedido == null || id_producto == null || cantidad == null || precio_real == null){
        return res.status(400).json({msg: 'Bad request. Please Fill all fields'})
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_pedido", sql.Int, id_pedido)
            .input("id_producto", sql.Int, id_producto)
            .input("cantidad", sql.Int, cantidad)
            .input("precio_real", sql.Int, precio_real)
            .query(queries.createNewDetalle_Pedidos);

        console.log(result);

        res.json({id_pedido, id_producto, cantidad, precio_real});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getDetalle_PedidoById = async (req, res) => {
    const {id_pedido, id_producto} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id_pedido", sql.Int, id_pedido)
        .input("id_producto", sql.Int, id_producto)
        .query(queries.getDetalle_PedidosById);
    
        res.send(result.recordset[0]);
};

export const deleteDetalle_PedidosById = async (req, res) => {
    const {id_pedido, id_producto} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id_pedido", sql.Int, id_pedido)
        .input("id_producto", sql.Int, id_producto)
        .query(queries.deleteDetalle_PedidosById);
    
    res.sendStatus(204);
};

export const getTotalDetalle_Pedidos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .query(queries.getTotalDetalle_Pedidos);
    
        res.json(result.recordset[0]);
};

export const updateDetalle_PedidosById = async (req, res) => {
    const{cantidad, precio_real} = req.body;
    const{id_pedido, id_producto} =  req.params;

    if (cantidad == null || precio_real == null){
        return res.status(400).json({msg: 'Bad request. Please Fill all fields'})
    };

    const pool = await getConnection();
    const result = await pool.request()
        .input("cantidad", sql.Int, cantidad)
        .input("precio_real", sql.Float, precio_real)
        .query(queries.updateDetalle_PedidosById);
    
        res.json({cantidad,precio_real});
};