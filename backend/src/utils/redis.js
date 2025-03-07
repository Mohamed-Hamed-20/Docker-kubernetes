import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const redis = new Redis({
  host: process.env.REDIS_HOST || "redisc",
  port: Number(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD || "NewP@ssw0rd123",
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err) => {
  console.log("Redis error: " + err);
});

export default redis;
