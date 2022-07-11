const PORT = process.env.PORT || 5000;
// import dotenv from 'dotenv';
// dotenv.config();
// import {} from 'dotenv/config';
// import connectDB from '../db/connect.js';

const startServer = async (app) => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

export default startServer;
