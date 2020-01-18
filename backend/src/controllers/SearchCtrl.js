const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsList = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsList
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 // 10 km
        }
      }
    });

    return response.json(devs);
  }
};
