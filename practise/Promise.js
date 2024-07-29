//synchronous or asynchronous

//sync
// console.log("start");

// console.log("Anurag Parjapat");

// console.log("Finish");

//async
// console.log("pee");

// setTimeout(() => {
//   console.log("pee pee");
// }, 2000);

// console.log("pee");

//Promises
// console.log("start111");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve("Promise is resolved");
//     else reject(new Error("Promise is rejected"));
//   }, 2000);
// });

// console.log(sub);
// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("false");

//we use promies to remove callback hell

console.log("Start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 500);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}

// importantAction("Anurag Kumar")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("JS Interview").then((res) => {
//       console.log(res);
//       shareTheVideo("JS Playlist").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//but this is still promise hell like callback hell -> Pyramid like structure


//to resolve this problem we can use Promise Chaining

// importantAction("Anurag Parjapat").then((res)=>{
//     console.log(res);
//     return likeTheVideo("JS Interview Question");
// }).then((res)=>{
//     console.log(res);
//     return shareTheVideo("JS Playlist");
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//But still this is a Pyramid like structure


//to reolve this problem we can use Promise Combinator
//All - > if one promise fail it will reject all promises

// console.log(Promise.all([
//     importantAction("Anurag Parjapat"),
//     likeTheVideo("JS Interview Question"),
//     shareTheVideo("JS Playlist")
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log('error: Promise failed',err);
// }))


//race - > give the frst promise which is fulfilled or rejected
// console.log(Promise.race([
//     importantAction("Anurag Parjapat"),
//     likeTheVideo("JS Interview Question"),
//     shareTheVideo("JS Playlist")
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log('error: Promise failed',err);
// }))


//allSettled - > if any of the promise get rejected it also shows which promies are fulfilled not like all as it reject all promises
//if all promies are reject it then only give all promies rejected
// console.log(Promise.allSettled([
//     importantAction("Anurag Parjapat"),
//     likeTheVideo("JS Interview Question"),
//     shareTheVideo("JS Playlist")
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log('error: Promise failed',err);
// }))


//any-> it will only the first fulfilled promise and ignore the reject
console.log(Promise.any([
    importantAction("Anurag Parjapat"),
    likeTheVideo("JS Interview Question"),
    shareTheVideo("JS Playlist")
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log('error: Promise failed',err);
}))





console.log("Stop");
