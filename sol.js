function countVowels() {
  let text = document.getElementById("text").value;
  let count = 0;
  let msg = document.getElementById("msg");
  let msg1 = document.getElementById("msg1");
  let t = [];
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      count++;
      t.push(text[i]);
    }
  }
  msg.innerHTML =
    "Le nombre de voyelles dans " + text + " est: " + Number(count);
  msg1.innerHTML = "Les voyelles sont: ";
  for (let i = 0; i < t.length; i++) {
    msg1.innerHTML += t[i] + ",";
  }
}
