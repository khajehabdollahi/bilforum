const sqlite3 = require('better-sqlite3');
const Encrypt = require('./Encrypt');

module.exports = class RestApi {

  constructor(expressApp, urlPrefix = '/api/', pathToDb = './bilforumdb.db') {

    this.app = expressApp;
    this.db = sqlite3(pathToDb);
    this.prefix = urlPrefix;
    let tables = this.getAllTables();
    for (let table of tables) {
      this.getAllUsers(table);
      this.createPostRoute(table);
      // this.createPutRoute(table);
      // this.createDeleteRoute(table);
      this.getOneThreadComments(table);
    }

    this.getAllThreads();
    this.getOneThread();
    this.createOneThread();
    this.updateThread();
    this.deleteOneThread();
    this.addLoginRoutes();
  }

  getAllTables() {
    let statement = this.db.prepare(`
    SELECT name
    FROM sqlite_master
    WHERE type = $type
  `);
    return statement.all({ type: 'table' })
      .map(x => x.name);
  }

  getAllThreads() {
    this.app.get('/api/threads', (req, res) => {
      let statement = this.db.prepare(`
        SELECT * FROM threads t
        JOIN users ON t.writer = users.userID`);
      try {
        res.json(statement.all());
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }

  getOneThread() {
    this.app.get('/api/threads/:id', (req, res) => {
      let statement = this.db.prepare(`
        SELECT *
        FROM threads t
        JOIN users ON t.writer = users.userID
        WHERE threadID = ?`).get(req.params.id);
      let result;
      try {
        result = statement || null;
      }
      catch (e) {
        result = { error: e + '' };
      }
      if (result) { delete result.password; }
      res.json(result);
    })
  }

  createOneThread() {
    this.app.post('/api/threads', (req, res) => {
      let b = req.body;
      let statement = this.db.prepare(`
      INSERT INTO threads (${Object.keys(b)})
      VALUES (${Object.keys(b).map(x => '$' + x)},
      (SELECT userID FROM users WHERE userID = b.userID), 
      commentID: b.commentID)
    `);
      try {
        res.json(statement.run(b));
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }

  updateThread() {
    this.app.put('/api/threads/:id', (req, res) => {
      let b = req.body;
      let statement = this.db.prepare(`
      UPDATE threads 
      SET ${Object.keys(b).map(x => x + ' = $' + x)}
      WHERE threadID = ${req.params.id}
    `);
      try {
        res.json(statement.run(b));
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }

  deleteOneThread(){
    this.app.delete('/api/threads/:id', (req, res) => {
      let statement = this.db.prepare(`
        DELETE FROM threads
        WHERE threadID = ${req.params.id}`);
      try {
          res.json(statement.run(req.params));
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }

  getOneThreadComments() {
    this.app.get('/api/threads/:id/comments', (req, res) => {
      let statement = this.db.prepare(`
      SELECT *
      FROM comments c, users u
      WHERE c.commentID = $id AND c.commentatorId = u.userID
    `);
      let result;
      try {
        result = statement.get(req.params) || null;
      }
      catch (e) {
        result = { error: e + '' };
      }
      if (result) { delete result.password; }
      res.json(result);
    })
  }


  
  getAllUsers() {
    this.app.get('/api/users', (req, res) => {
      let statement = this.db.prepare(`
        SELECT * users
        WHERE users.userID = $id
    `);
      try {
        res.json(statement.all().map(x => ({ ...x, password: undefined })));
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }


  createPostRoute(table) {
    this.app.post(this.prefix + table, (req, res) => {
      let b = req.body;
      if (b.password) {
        b.password = Encrypt.multiEncrypt(b.password);
      }
      let statement = this.db.prepare(`
      INSERT INTO ${table} (${Object.keys(b)})
      VALUES (${Object.keys(b).map(x => '$' + x)})
    `);
      try {
        res.json(statement.run(b));
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }

  // createPutRoute(table) {
  //   this.app.put(this.prefix + table + '/:id', (req, res) => {
  //     let b = req.body;
  //     if (b.password) {
  //       b.password = Encrypt.multiEncrypt(b.password);
  //     }
  //     b.id = req.params.id;
  //     let statement = this.db.prepare(`
  //     UPDATE ${table} 
  //     SET ${Object.keys(b).map(x => x + ' = $' + x)}
  //     WHERE id = $id
  //   `);
  //     try {
  //       res.json(statement.run(b));
  //     }
  //     catch (e) {
  //       res.json({error: e + ''})
  //     }
  //   });
  // }

  createDeleteRoute(table) {
    this.app.delete(this.prefix + table + '/:id', (req, res) => {
      let statement = this.db.prepare(`
        DELETE FROM ${table} WHERE id = $id
      `); 
      try {
          res.json(statement.run(req.params));
      }
      catch (e) {
        res.json({error: e + ''})
      }
    });
  }

  // Add routes for login, check if logged in
  // and log out - /note: not "pure" REST-routes
  addLoginRoutes() {

    // POST = Login
    this.app.post(this.prefix + 'login', (req, res) => {
      if (req.body.password) {
        req.body.password = Encrypt.multiEncrypt(req.body.password);
      }
      let statement = this.db.prepare(`
         SELECT * FROM users
         WHERE email = $email AND password = $password
      `);
      let user = statement.get(req.body) || null;
      if (user) {
        delete user.password;
        // store the logged in user in a session
        req.session.user = user;
      }
      res.json(user);
    });

    // GET - check if logged in and return user if so
    this.app.get(this.prefix + 'login', (req, res) => {
      res.json(req.session.user || null);
    });

    // DELETE - logged out a logged in user
    this.app.delete(this.prefix + 'login', (req, res) => {
      delete req.session.user;
      res.json({ loggedOut: true });
    });

  }

}