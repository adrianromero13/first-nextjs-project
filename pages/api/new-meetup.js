// /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') { // only post req will be handled in this url req
    const data = req.body;

    const {
      title,
      image,
      address,
      description,
    } = data; // fields expected in the response

    const client = await MongoClient.connect(
      'mongodb://localhost/meetups-next'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    
    const result = await meetupsCollection.insertOne(data);
    
    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default handler;
