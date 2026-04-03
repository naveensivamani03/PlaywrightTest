import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read environment name (qa | dev | prod)
const env = process.env.ENV || "qa";

// Load correct env file
dotenv.config({
  path: path.resolve(__dirname, `../config/${env}.env`)
});

export default {
  env,
  baseURL: process.env.BASE_URL,
  apiBaseURL: process.env.API_BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  browser: process.env.BROWSER || "chromium",
  headless: process.env.HEADLESS === "true",
  timeout: Number(process.env.TIMEOUT) || 30000
};
