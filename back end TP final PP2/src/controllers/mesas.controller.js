import { getConnection, sql, queries } from "../database";

export const getMesas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllMesas);
    
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewMesa = async (req, res) => {
    const{id_mesa, comensales} = req.body;

    if(id_mesa == null || comensales == null){
        return res.status(400).json({msg: 'Bad request. Please Fill all fields'})
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_mesa", sql.Int, id_mesa)
            .input("comensales", sql.Int, comensales)
            .query(queries.createNewMesa);

        console.log(result);

        res.json({id_mesa, comensales});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getMesasById = async (req, res) => {
    const {id_mesa} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id_mesa", sql.Int, id_mesa)
        .query(queries.getMesasById);
    
    res.send(result.recordset[0]);
};

export const deleteMesasById = async (req, res) => {
    const {id_mesa} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id_mesa", sql.Int, id_mesa)
        .query(queries.deleteMesasById);
    
    res.sendStatus(204);
};

export const getTotalMesas = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .query(queries.getTotalMesas)
        
    console.log(result);

    res.json(result.recordset[0]);
};

export const updateMesasById = async (req, res) => {
    const {comensales} = req.body;
    
    const {id_mesa} = req.params;

    if(comensales == null){
        return res.status(400).json({msg: 'Bad request. Please Fill all fields'}) 
    };

    const pool = await getConnection();
    const result = await pool.request()
        .input("comensales", sql.Int, comensales)
        .input("id_mesa", sql.Int, id_mesa)
        .query(queries.updateMesasById);
    
    res.json({comensales});
    
};
