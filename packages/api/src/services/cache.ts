// import mongoose from 'mongoose';
// import { client } from '@/redis';

// const { exec } = mongoose.Query.prototype;

// mongoose.Query.prototype = new (class QueryExtension extends mongoose.Query<unknown, unknown> {
//   private useCache = false;

//   async exec(...params: []) {
//     const redisClient = await client();

//     // const cacheKey = JSON.stringify({
//     //   ...this.getFilter(),
//     //   collection: this.model.collection.collectionName,
//     // })

//     // const cachedValue = await redisClient.get(cacheKey)

//     // if (cachedValue) {
//     //   const cachedData = JSON.parse(cachedValue)
//     //   console.log('Using cache')
//     //   if (Array.isArray(cachedData)) {
//     //     return cachedData.map((d) => new this.model(d))
//     //   }

//     //   return new this.model(cachedData)
//     // }

//     // const result = await exec.apply(this, params);

//     // await redisClient.set(cacheKey, JSON.stringify(result))

//     return result;
//   }
// })();

// export default {};
