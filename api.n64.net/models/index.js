const {connect} = require('mongoose');
const MONGO_URL = process.env.DATABASE;

const connectToDB = () => {
  const options = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
  };
  return connect(MONGO_URL, options);
};

module.exports = connectToDB;