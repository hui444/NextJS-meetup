import { MongoClient } from "mongodb";

// functions with server side code
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://huihui:wHRgTFTIEMLWpZyu@cluster0.uwlxb.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    //add error handling
    console.log(result);

    // close client when done
    client.close();

    // response
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
