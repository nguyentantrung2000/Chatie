const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schemas');
const fileSchema = require('../schemas/file.schemas');
<<<<<<< HEAD
const Conversation = require('../src/services/conversation');
const user = require('../models/user.model');
=======
const conversationSchema = require('../schemas/conversation.shemas');
const User = require('../models/user.model');
>>>>>>> 51b6fc35f2f4fc778a753108a5361e59f54a7ef3
class Database {
    /**
     * @type {Database}
     */
    static _cache = null;

    constructor() {
        /**
         * @type{mongoose.Model<any>}
         */
<<<<<<< HEAD
        this.userSchema = new mongoose.model("users", userSchema);
        this.fileSchema = new mongoose.model("files", fileSchema);
        this.Conversation = new Conversation();
=======
        this.User = new mongoose.model("User",userSchema);
        this.fileSchema = new mongoose.model("files",fileSchema);
        this.conversationSchema = new mongoose.model('conversation',conversationSchema);
>>>>>>> 51b6fc35f2f4fc778a753108a5361e59f54a7ef3
    }

    /**
     * @returns {Database}
     */
    static get instance() {
        if (this._cache == null) {
            this._cache = new Database("");
        }
        return this._cache;
    }

    /**
     * @returns {Promise<mongoose.Connection>}
     */
    async connect(connectionString) {

        return new Promise((resolve, reject) => {
            mongoose.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const connection = mongoose.connection;
            connection.on("error", (err) => {
                reject(err);
            });
            connection.once("open", () => {
                console.log("Connect to database successfully")
                resolve(connection);
            });
        });
    }
    
    /**
     * @param {User} newUser
     */
    async createUser(newUser)
    {
       return await this.User.create(newUser);
    }
    async getUserMail(email)
    {
        return await this.User.find();
    }
    /**
     * 
     * @param {String} email 
     * @param {String} displayname 
     * @param {String} avatar 
     * @param {Boolean} status 
     */
    async getUserMailandupdate(email,displayname , avatar , status)
    {
        return await this.User.findByIdAndUpdate(email);
    }
}



module.exports = Database;