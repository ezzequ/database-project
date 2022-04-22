const mongoose = require('mongoose')


main().catch((err) => console.log(err));


// function randomID (){
//     let ID = Math.randomID() * 0.2
//     return ID
// }

async function main() {
  await mongoose.connect("mongodb://localhost:27017/bookCircle");
}

  const userSchema = new Schema({
    userName: String,
    mail: String,
    password: String,
    id: String,
});


const User = model('User', userSchema);

const firstUser =  new Schema({
    userName: "robertha",
    mail: "mail",
    password: "cdwd444",
    id: "apanGillarBanan"
});

  await firstUser.save();
  console.log(firstUser.userName, firstUser.password);

  const users = await User.find();
  console.log(users);

