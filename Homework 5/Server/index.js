const express = require("express");
const app = express();
const port = 3000;
const jsonParser = express.json();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:1111@localhost:5432/ShopDb");
app.use((req, resp, next)=>{
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});
app.get('/users/:id', async (req, resp) =>{
    let id = req.params.id;
    console.log(`User with id: ${id}`);
    let user = await db.one(`SELECT * FROM public."Users" WHERE id=${id}`);
    resp.json(user);
    //res.end();
  });
app.delete("/users/:id", async (req, resp) =>{
    let id = req.params.id;
    //console.log(`User with id: ${id}`);
    let result = await db.one(`DELETE FROM public."Users" WHERE id=${id} returning id`);
    result.message = "success";
    console.log(result);
    resp.json(result);
});
app.put("/users/:id", jsonParser, async(req, resp)=>{
    let id = req.params.id;
    if(!id)
    resp.sendStatus(404);
    let user = await db.one(`SELECT * FROM public."Users" WHERE id=${id}`);
    if(!user)
    resp.sendStatus(404);
    if(!req.body)
    resp.sendStatus(404);
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    await db.none('UPDATE public."Users" SET name = ${name}, surname = ${surname}, age = ${age} WHERE id=${id}', {
        name: user.name,
        surname: user.surname,
        age: user.age,   
        id: user.id 
    });
    resp.json(user);
});
app.post("/users", jsonParser, async (req, resp)=>{
    console.log("Req obtained!");
    if(!req.body)
    resp.sendStatus(404);
    console.log(req.body);
    let username = req.body.name;
    let usersurname = req.body.surname;
    let userage = req.body.age;
    await db.none('INSERT INTO public."Users"(name, surname, age) VALUES(${name}, ${surname}, ${age})', {
        name: username,
        surname : usersurname,
        age: userage,    
    });
    resp.json({name: username, surname: usersurname, age: userage});
});
app.get("/users", jsonParser, async (req, resp)=>{
    let data = await db.query(`SELECT * FROM public."Users"`);
    console.log(data);
    resp.json(data);
});
app.listen(port, ()=>{
    console.log(`Server starts at ${port}`);
})