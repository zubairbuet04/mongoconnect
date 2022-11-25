const {client}= require ("./dbConfig.js");
const updateManyRows = async()=>{
    try {
        const database = client.db("zubaircrudops");
        const Students = database.collection("Students");
        //const filter = [{name: "Mohammed Zubair Alam"},   //an array of objects necessary
    //{name: "Rahimov Karimov"}, {name:"Rakibovic"}, {name:"Nasir Hajaji"}];//existing data which is to be updated
        const filter = {name: "Mohammed Zubair Alam"} ;   //tried to update more than one property, but AtlasError shown in commandline/terminal, aggregate() to be used may be
        const options = {upsert: true}; //if the above mentioned data does not exist, it will be inserted then

        const updateDoc = {
            $set: {                        //an array of objects needed to update more than one doc
                country: "Bangladesh",
                city: "Dhaka",
                status: "Active" }
            //{
               // country: "Uzbekistan",
                //city: "Tashkent",
                //status: "Active" },
                //{
                    //country: "Chechnya",
                   // city: "Grozny",
                    //status: "Active"},
                    //{ 
                        //country: "Iran",
                    //city: "Tehran",
                    //status: "Active"}
        }
    
        const updateData = await Students.updateMany(filter, updateDoc, options);//three parameters to be noted
        console.log(updateData);
    } catch(error){
        console.log(error)
    } finally{
        await client.close();
    }
    } 
    updateManyRows();
