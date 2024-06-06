import { configDotenv } from 'dotenv';
configDotenv();

const envNames = ['BASE_ENDPOINT', 'NEXT_PUBLIC_BASE_ENDPOINT'];

const missedEnvVariables = envNames.filter(envVariable => !process.env[envVariable] || process.env[envVariable].trim() === '');

if (missedEnvVariables.length > 0) {
  console.error(`These env variables are missed: ${missedEnvVariables.join(', ')}`);
  process.exit(1)
}

console.info(`*** All env variables are loaded ***`);