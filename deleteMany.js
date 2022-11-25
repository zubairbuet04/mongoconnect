const {client}= require ("./dbConfig.js") //require syntax, in assignment1, import syntax was used
const deleteManyRows=async()=>{
try {
    const database = client.db("zubaircrudops"); //database created namely zubaircrudops, client.db("dbname")
    const Students = database.collection("Students"); //collection is a table in MongoDB, table created;docs are rows which are to be inserted into table/collection, dbname.collection(collection_name)
    const query = {name:"Naljekar"};
    const deleteData = await Students.deleteMany(query); //docs deleted from Students table, table.deleteMany() 
        console.log(deleteData); //insertedId will be found as an object_name by which insert operation takes place
        console.log('Deleted successfully but could not update many properties');

} catch(error){
    console.log(error)
} finally{
    await client.close();
}
} 
deleteManyRows(); // calling the arrow function under which try catch finally took place 