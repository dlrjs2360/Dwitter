import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12)),
  },
  port: {
    port: parseInt(required('PORT', 8080)), // 서버배포전 Host_port에서 변경
  },
  cors: {
    allowedOrigin : required('CORS_ALLOW_ORIGIN'),
  },
  db: {
    host: required('DB_HOST'),
  },
};
