import * as authJwt from "./authJwt.js";
import * as verifySignup from "./verifySignup.js";

// esto sirve para no andar importando uno a uno de los archivos, entonces se crea el index para que exporte ambos, 
// y cuando querramos usar uno en especifico, seleccionamos lo que queremos traer cada uno de los middlewares. 

export { authJwt, verifySignup };
