const { MongoClient, MongoServerError, ObjectId } = require("mongodb");

const connectionURL = `mongodb://127.0.0.1:27017`;
const databaseName = `task-manager`;

const client = new MongoClient(connectionURL);

const run = async () => {
  try 
  {
    await client.connect();
    console.log("connected");

    // CREATE

    const db = client.db(databaseName);

    const usersCollection = db.collection("users");

    // await usersCollection.insertOne({
    //     name:"Bharat Suthar",
    //     age:22
    // });

    const tasksCollection = db.collection("tasks");

    // await tasksCollection.insertMany([
    //     {
    //         description: "Java",
    //         completed: true
    //     },
    //     {
    //         description: "Mysql",
    //         completed: true
    //     },
    //     {
    //         description: "node.js",
    //         completed: false
    //     }
    // ])

    // READ

    const allTasksData =await tasksCollection.find().toArray();

    // console.log(allTasksData);

    const tasksNotCompleted = await tasksCollection.find({completed:false}).toArray();

    // console.log(tasksNotCompleted);

    const document = await tasksCollection.findOne({_id: new ObjectId("63e8a48e1f92e77eabeaf63c")});

    // console.log(document);

    // UPDATE

    // const updateAge = await usersCollection.updateOne(
    //     {_id: new ObjectId("63e89fc9ad3c95b41c556811")},
    //     {$set:{
    //         age:20
    //     }}
    //     );

    // console.log(updateAge);

    // const updateTasks = await tasksCollection.updateMany(
    //     {completed:false},
    //     {
    //         $set:
    //         {
    //             completed:true     
    //         }
    //     }
    // );

    // console.log(updateTasks);

    // DELETE

    // const deleteDoc = await tasksCollection.deleteOne({
    //     description:"Java"
    // });

    // console.log(deleteDoc);

    // const deleteAge = await usersCollection.deleteMany({
    //     age:22
    // });

    // console.log(deleteAge);

    console.log("done");

  } 
  catch (error) 
  {

    console.log(error);
    
  } 
  finally 
  {
    await client.close();
  }
};

run();
