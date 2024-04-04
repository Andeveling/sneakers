import app from "./app"
import { config } from "./config"
import { connectDB } from "./database/db"

const { PORT, NODE_ENV } = config

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
    console.log(`Listening on port http://localhost:${PORT}`)
    console.log(`Environment: ${NODE_ENV}`)
  } catch (error) {}
}

startServer()
