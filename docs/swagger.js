const swaggerAutogen = require("swagger-autogen")();
const port = require("../config/config").port;

const outputFile = "docs/swagger_output.json";
const endpointsFiles = [
  "routes/chat.js",
  "routes/room.js",
  "routes/user.js",
  "routes/lobby.js",
];
const doc = {
  //   openapi: "3.0.3", // present supported openapi version
  info: {
    title: "VDCALL API", // short title.
    description: "API doc for VDCALL project", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Bùi Quang Huy", //  name
      email: "huyprowow@gmail.com", //  email
      url: "https://huyprowow.github.io/", // website
    },
  },
//   servers: [
//     //localhost server
//     {
//       url: `https://localhost:${port}`, // url
//       description: "Local server", // name
//     },
//     //test server
//     //production server
//   ],
  host: 'localhost:3080',
  schemes: ["https", "http"],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
