/*Foi adicionado o comando export no arquivo 3-spread de modo que isso permite importar aquela função dentro de outro arquivo */
/*Também rodamos o comando npm init para gerar o arquivo package.json, para servir como um arquivo de gerenciamento, e nele adicionamos
o type: module, para que todos os arquivos permitam por padrão, importação e expportação! */

import { object2 } from "./3-spread.js"; /*desestruturação - o from está me retornando um objeto com todos os exports 
daquele arquivo. Como eu quero apenas o export "object2, eu tenho que desestruturar!"*/

console.log(object2);