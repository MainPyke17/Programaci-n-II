import { getConnection, sql, queries } from "../database";

export const getCategorias = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllCategorias);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
}

export const createNewCategoria = async (req, res) =>{

    const {id_categoria, descripcion_categoria} = req.body; 

    if (id_categoria == null || descripcion_categoria == null) {
        return res.status(400).json({msg:"Bad reques. Please fill all fields"})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id_categoria", sql.Int, id_categoria)
        .input("descripcion_categoria", sql.VarChar, descripcion_categoria)
        .query(queries.createNewCategoria)
    
        res.json({id_categoria, descripcion_categoria});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCategoriasById = async (req, res) => {
    const { id_categoria } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_categoria", id_categoria).query(queries.getCategoriasById);

    res.send(result.recordset[0]);
};

export const deleteCategoriasById = async (req, res) =>{
    const { id_categoria } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_categoria", id_categoria).query(queries.deleteCategoriasById);

    res.sendStatus(204);
};

export const getTotalCategorias = async (req, res) => {
    const pool = await getConnection(); 
    const result = await pool.request().query(queries.getTotalCategorias);
    
    res.json(result.recordset[0]['']);
};

export const updateCategoriasById = async (req, res) => {
    const {descripcion_categoria} = req.body;
    const { id_categoria } = req.params;

    if (descripcion_categoria == null ){
        return res.status(400).json({msg:"Bad reques. Please fill all fields"})
    };

    const pool = await getConnection();
    await pool.request()
    .input("descripcion_categoria", sql.VarChar, descripcion_categoria)
    .query(queries.updateCategoriasById);

    res.json({ descripcion_categoria });
};