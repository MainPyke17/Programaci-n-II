import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);

    console.log(result.recordset + 'hola');
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getDesyMeriendas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getDesyMer);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const createNewProduct = async (req, res) => {
  const { id_producto, precio, descripcion, id_categoria } = req.body;

  // para validar los datos de manera manual
  if (
    id_producto == null ||
    precio == null ||
    descripcion == null ||
    id_categoria == null
  ) {
    return res.status(400).json({ msg: "Bad request. Please Fill all fields" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id_producto", sql.Int, id_producto)
      .input("precio", sql.Float, precio)
      .input("descripcion", sql.VarChar, descripcion)
      .input("id_categoria", sql.Int, id_categoria)
      .query(queries.createNewProduct);

    console.log(result);

    res.json({ id_producto, precio, descripcion, id_categoria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  const { id_producto } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id_producto", id_producto)
      .query(queries.getProductById);

    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  const { id_producto } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id_producto", id_producto)
      .query(queries.deleteProductById);

    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTotalProducts);

    console.log(result);

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProductById = async (req, res) => {
  const { precio, descripcion, id_categoria } = req.body;
  const { id_producto } = req.params;

  if (precio == null || descripcion == null || id_categoria == null) {
    return res.status(400).json({ msg: "Bad reques. Please fill all fields" });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("precio", sql.Float, precio)
    .input("descripcion", sql.VarChar, descripcion)
    .input("id_categoria", sql.Int, id_categoria)
    .input("id_producto", sql.Int, id_producto)
    .query(queries.updateProductById);

  res.json({ precio, descripcion, id_categoria });
};
