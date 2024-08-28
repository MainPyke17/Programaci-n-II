import { getConnection, sql, queries } from "../database";

export const getDetalles_Pedidos = async (req, res) =>{
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDetalles_Pedidos);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const createNewDetalle_Pedido = async (req, res) => {

    const {id_pedido, id_producto, cantidad, precio_real} = req.body;

    if (id_pedido == null || id_producto == null || cantidad == null || precio_real == null){
        return res.status(400).json({msg:"Bad reques. Please fill all fields"})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id_pedido", sql.Int, id_pedido)
        .input("id_producto", sql.Int, id_producto)
        .input("cantidad", sql.Int, cantidad)
        .input("precio_real", sql.Float, precio_real)
        .query(queries.createNewDetalle_Pedido)
    
        res.json({id_pedido, id_producto, cantidad, precio_real});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getDetalle_PedidosById = async (req, res) => {
    const { id_pedido, id_producto } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_producto, id_pedido", id_producto, id_pedido).query(queries.getDetalle_PedidosById);

    res.send(result.recordset[0]);
};

export const deleteDetalle_PedidostById = async (req, res) =>{
    const { id_pedido, id_producto } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_producto, id_pedido", id_producto, id_pedido).query(queries.deleteDetalle_PedidostById);

    res.sendStatus(204);
};

export const getTotalDetalle_Pedidos = async (req, res) => {
    const pool = await getConnection(); 
    const result = await pool.request().query(queries.getTotalDetalle_Pedidos);
    
    res.json(result.recordset[0]['']);
};

export const updateDetalle_PedidosById = async (req, res) => {
    const {cantidad, precio_real} = req.body;
    const { id_pedido, id_producto } = req.params;

    if (cantidad == null || precio_real == null){
        return res.status(400).json({msg:"Bad reques. Please fill all fields"})
    };

    const pool = await getConnection();
    await pool.request()
    .input("precio_real", sql.Float, precio_real)
    .input("cantidad", sql.Int, cantidad)
    .query(queries.updateDetalle_PedidosById);

    res.json({ precio_real, cantidad });
};