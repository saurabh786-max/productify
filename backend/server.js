// import "dotenv/config";
// import app from "./app.js";

// const PORT = process.env.PORT || 3000;

// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port: ${PORT}`);
//   });
// }

// export default app;
import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

export default app;