import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewProduct = async (req, res) => {

    const {id_producto, precio, descripcion, id_categoria} = req.body;
    
    if (id_producto == null || precio == null || descripcion == null || id_categoria == null){
        return res.status(400).json({msg:"Bad reques. Please fill all fields"})
    };

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id_producto", sql.Int, id_producto)
        .input("precio", sql.Float, precio)
        .input("descripcion", sql.VarChar, descripcion)
        .input("id_categoria", sql.Int, id_categoria)
        .query(queries.createNewProduct);

        res.json({id_producto, precio, descripcion, id_categoria});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

export const getProductById = async (req, res) => {
    const { id_producto } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_producto", id_producto).query(queries.getProductById);

    res.send(result.recordset[0]);
};

export const deleteProductById = async (req, res) =>{
    const { id_producto } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_producto", id_producto).query(queries.deleteProduct);

    res.sendStatus(204);
};

export const getTotalProducts = async (req, res) => {
    const pool = await getConnection(); 
    const result = await pool.request().query(queries.getTotalProducts);
    
    res.json(result.recordset[0]['']);
};

export const updateProductById = async (req, res) => {
    const {precio, descripcion, id_categoria} = req.body;
    const { id_producto } = req.params;

    if (precio == null || descripcion == null || id_categoria == null){
        return res.status(400).json({msg:"Bad reques. Please fill all fields"})
    };

    const pool = await getConnection();
    await pool.request()
    .input("precio", sql.Float, precio)
    .input("descripcion", sql.VarChar, descripcion)
    .input("id_categoria", sql.Int, id_categoria)
    .input("id_producto", sql.Int, id_producto)
    .query(queries.updateProductById);

    res.json({ precio, descripcion, id_categoria });
};