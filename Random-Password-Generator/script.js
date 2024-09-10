const generatePassword = () => {
  const lengthPass = document.getElementById("lengthPass").value;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+_)(*&^%$#@!-=";

  let randomPasword = "";
  for (let i = 0; i < lengthPass; i++) {
    const randomIndex = Math.round(Math.random() * charset.length);
    const randomChar = charset[randomIndex];
    randomPasword += randomChar;
  }
  document.getElementById("show-password").innerText = randomPasword;
};
