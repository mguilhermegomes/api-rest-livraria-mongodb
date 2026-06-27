import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.DEV_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor local disponível em http://localhost:${PORT}/`);
});