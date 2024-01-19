// import model student
const News = require("../models/News")

class NewsController {
    async index(req, res) {
       
        const news = await News.all();

        if(news.length > 0){
          const data = {
              message: "get all resource",
              data: news
          };
        res.status(200).json(data);
       }
       else{
          const data = {
            message: "Data is empty",
          }
        res.status(200).json(data);
       }
    }

    async store(req, res) {

        const {title, author, content, url, url_image, published_at, category,} = req.body;

        if(!title || !author || !content || !url || !url_image || !published_at || !category) {
          const data = {
            message: "all fields must be filled correctly",
          }
          res.status(422).json(data);
        }

        const news = await News.create(req.body);
        const data = {
            message: "Menambahkan data news",
            data: news,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        
        const { id } = req.params;

        const news = await News.find(id);

        if (news) {
            // update data
            const newsUpdated = await News.update(id, req.body);
            const data = {
                message: "Mengupdate data news",
                data: newsUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        const news = await News.find(id);

        if (news) {
            // hapus data
            await News.delete(id);
            const data = {
                message: "Menghapus data news",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const news = await News.find(id);

        if (news) {
            const data = {
                message: "Menampilkan detail data news",
                data: news,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }

    async search(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { title } = req.params;

        const news = await News.search(title);

        if (news) {
            const data = {
                message: "Menampilkan detail data news",
                data: news,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }

    async findByCategory(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { category } = req.params;

        const news = await News.findByCategory(category);

        if (news) {
            const data = {
                message: `Menampilkan detail data`,
                data: news,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }
}

// make an object NewsController
const object = new NewsController();

// export object
module.exports = object;