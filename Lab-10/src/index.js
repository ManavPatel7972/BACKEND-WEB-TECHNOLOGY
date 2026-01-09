import { dbConnect } from "./config/db.js";
import { app } from "./app.js";

try {
  dbConnect();
} catch (error) {
  console.log(error);
}

app.listen(4000, () => {
  console.log("Server Running at port https:/locahost:4000");
});
