const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(
      `Successfully added ${newMovie.dataValues.title} to the database`
    );
  } catch (error) {
    console.log(error);
  }
};
