const {client}= require ("./dbConfig.js") //require syntax, in assignment1, import syntax was used
const insertManyRows=async()=>{
try {
    const database = client.db("zubaircrudops"); //database created namely zubaircrudops, client.db("dbname")
    const Students = database.collection("Students"); //collection is a table in MongoDB, table created;docs are rows which are to be inserted into table/collection, dbname.collection(collection_name)
    const docs_rows = [
        {name:"Mohammed Zubair Alam", course:"MERN", batch: 2, roll: 1, result: "NotUpToTheMarkYet"},
        {name:"Rahimov Karimov", course:"MERN", batch: 2, roll: 2, result: "NotUpToTheMarkYet"},
        {name:"Ishraq Ahmed", course:"MERN", batch: 2, roll: 3, result: "NotUpToTheMarkYet"},
        {name:"Sami Ahmed", course:"MERN", batch: 2, roll: 4, result: "NotUpToTheMarkYet"},
        {name:"Mojammel Ahmed", course:"MERN", batch: 2, roll: 5, result: "NotUpToTheMarkYet"},
        {name:"Rakibovic", course:"MERN", batch: 2, roll: 7, result: "NotUpToTheMarkYet"},
        {name:"Nasir Hajaji", course:"MERN", batch: 2, roll: 8, result: "NotUpToTheMarkYet"},
        {name:"Al Fattah", course:"MERN", batch: 2, roll: 9, result: "NotUpToTheMarkYet"},
        {name:"Borhanjada", course:"MERN", batch: 2, roll: 10, result: "NotUpToTheMarkYet"},
        {name:"Naljekar", course:"MERN", batch: 2, roll: 11, result: "NotUpToTheMarkYet"}
        ]
        const insertData = await Students.insertMany(docs_rows); //docs inserted into Students table, table.insertMany() 
        console.log(insertData); //insertedId will be found as an object_name by which insert operation takes place
        console.log('Ten Documents/Rows have been inserted with the ID: ${insertData.insertedId}');

} catch(error){
    console.log(error)
} finally{
    await client.close();
}
} 
insertManyRows(); // calling the arrow function under which try catch finally took place 