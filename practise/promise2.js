// aync - await

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
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

const result = async () => {
  try {
    const message1 = await importantAction("Anurag Parjapat");
    console.log(message1);
    const message2 = await likeTheVideo("JS Interview");
    console.log(message2);
    const message3 = await shareTheVideo("Js Playlist");
    console.log(message3);

   // console.log({ message1, message2, message3 });
  } catch (error) {
    console.log("Promise failed", error);
  }
};
result();

//Modern method -> await->  we will use await so that it wait for the result either it is fulfilled or rejected and then proceed for the otherr function
//aync -> as it is asynchronous function we have to use async in this functiion
