// import database
const db = require("../config/database");

// make News model
class News {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM news";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    // promise 1
    static async create(News) {
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO news SET ?";
            db.query(sql, News, (err, results) => {
                resolve(results.insertId);
            });
        });


        // promise 2
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM news WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }


    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM news WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static search(title) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM news WHERE title = ?`;
            db.query(sql, title, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static findByCategory(category) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM news WHERE category = ?`;
            db.query(sql, category, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE news SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // select data by id
        const news = await this.find(id);
        return news;
    }

    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM news WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

}


// export model
module.exports = News;