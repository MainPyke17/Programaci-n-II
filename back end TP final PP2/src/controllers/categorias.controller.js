import { getConnection, sql, queries } from "../database";

export const getCategorias = async (req, res) => {
    const { id_categoria } = req.params;
    let result; 
    try {
        const pool = await getConnection();
        if (!id_categoria) {
            result = await pool.request().query(queries.getAllCategorias);
        } else {
            result = await pool.request().query(queries.getCategoriasById)
                .input("id_categoria", sql.Int, id_categoria)
                .query(queries.getCategoriasById);
        }

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewCategoria = async (req, res) => {
    const { id_categoria, descripcion_categoria } = req.body;

    if (id_categoria == null || descripcion_categoria == null) {
        return res.status(400).json({ msg: 'Bad request. Please Fill all fields' })
    };

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_categoria", sql.Int, id_categoria)
            .input("descripcion_categoria", sql.VarChar, descripcion_categoria)
            .query(queries.createNewCategoria);

        console.log(result);

        res.json({ id_categoria, descripcion_categoria });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteCategoriasById = async (req, res) => {
    const { id_categoria } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id_categoria", sql.Int, id_categoria)
        .query(queries.deleteCategoriaById);

    res.sendStatus(204);
};

export const getTotalCategorias = async (req, res) => {
    const { id_categoria } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id_categoria", sql.Int, id_categoria)
        .query(queries.getTotalCategoria);

    res.send(result.recordset[0]);
};

export const updateCategoriasById = async (req, res) => {
    const { descripcion_categoria } = req.body;

    const { id_categoria } = req.params;

    if (descripcion_categoria == null) {
        return res.status(400).json({ msg: 'Bad request. Please Fill all fields' })
    };

    const pool = await getConnection();
    const result = await pool.request()
        .input("descripcion_categoria", sql.VarChar, descripcion_categoria)
        .input("id_categoria", sql.Int, id_categoria)
        .query(queries.updateCategoriaById);

    res.json({ descripcion_categoria });
};