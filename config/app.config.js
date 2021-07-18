const mongoDbPassword = process.env.MongoDb_PASS || "KrTDNVtTjhSnSVTx";

module.exports = {
    port: process.env.PORT || 2527,
    mongoUri: `mongodb+srv://dbUser:${mongoDbPassword}@mydevs.pskdd.mongodb.net/innovativegx?retryWrites=true&w=majority`,
}