const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=m6xCWA5a#sOYZ25k0UOSQY4Kc2-p-dTsqn-bjv6yc_k1b9smKmxI",
MONGODB: process.env.MONGODB || "mongodb+srv://niko:1674@cluster0.cv6o3.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
