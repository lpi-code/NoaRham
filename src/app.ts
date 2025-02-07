import dotenv from 'dotenv';
dotenv.config();

(async () => {
    console.log(`Hello ${process.env.TEMPLATE}`);
})();
