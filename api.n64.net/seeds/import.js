const fs = require('fs');
const dotenv = require('dotenv');
const { Schema, model, connect } = require('mongoose');
dotenv.config();

const GameSchema = new Schema({ title: String }, { strict: false });
const Game = model('Game', GameSchema);

const connectToDB = () => {
  const options = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return connect(process.env.DATABASE, options);
};

const parseJSON = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

const readGamesFromFile = (filename) => {
  const promiseCallback = (resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) return reject(err);
      const json = parseJSON(data);
      if (!json) return reject(`Not able to parse json file ${filename}`);
      return resolve(json);
    });
  };
  return new Promise(promiseCallback);
};

const storeGame = (data) => {
  const game = new Game(data);
  return game.save(data);
};

const importGames = async () => {
  // console.log('aqui')
  // console.log(await connectToDB());
  await connectToDB();
  const games = await readGamesFromFile('games.json');
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    await storeGame(game);
    console.log(game.title);
  }
  process.exit();
};

importGames();
