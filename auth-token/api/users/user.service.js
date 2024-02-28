const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO hydra.login(idlogin, username, password, email, firstname, lastname) 
                values(?,?,?,?,?,?)`,
      [
        data.idlogin,
        data.username,
        data.password,
        data.email,
        data.firstname,
        data.lastname
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM hydra.login WHERE email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (idlogin, callBack) => {
    console.log('reached line 38')
    pool.query(
      `SELECT idlogin,username,password,email,firstname,lastname FROM hydra.login where idlogin = ?`,
      
      [idlogin],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `SELECT idlogin,username,password,email,firstname,lastname FROM hydra.login`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE REGISTRATION SET username=?, password=?, email=?, firstname=?, lastname=? WHERE idlogin = ?`,
      [
        data.username,
        data.password,
        data.email,
        data.firstname,
        data.lastname,
        data.idlogin
        
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM registration WHERE idlogin = ?`,
      [data.idlogin],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};