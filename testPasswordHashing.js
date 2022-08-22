const User = require("./models/user");

// User.hashPassword("myPlainPassword").then((hashedPassword) => {
//   console.log(hashedPassword);
// });

// vérifier que le mot de passe de base que l'utilisateur donne (lorsqu'il se connecte à l'application par exemple) correspond au mot de passe hash que tu as stocké.
User.verifyPassword(
  "myPlainPassword",
  "$argon2id$v=19$m=65536,t=5,p=1$JV2E8ekEU/Wn0dOJSjJQTg$IaBSn+lRk+P+MuoFo6tDWnjjKq/omDheqVsAK8eLci8"
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});
