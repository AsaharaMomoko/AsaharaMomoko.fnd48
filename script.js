"use strict";

function buttonClick() {
  if(!(clickCount >= 1 && clickCount <= 3) && clickCount !== 3 && clickCount !== 5) {
    ctrSetImage();
  }
  const titleText = titles[0].innerText;
  titles[0].style.color = "black";
  yamanekoText.innerHTML = yamanekoTextArray[clickCount + 1];
  
  addButton(clickCount);

  clickCount ++;
}
function buttonClickA() {
  if (clickCount === 9){
    clickCount ++;
    return endGame();
  }
  if (clickCount === 10){
    return gameScore();
  }
  if(!(clickCount >= 1 && clickCount <= 3) && clickCount !== 3 && clickCount !== 5 && clickCount < 9) {
    ctrSetImage();
  }
  yamanekoText.innerHTML = yamanekoTextArray[clickCount + 1];
  
  addButton(clickCount);

  clickABArray.push("A");

  clickCount ++;
}

function buttonClickB() {
  if(!(clickCount >= 1 && clickCount <= 3) && clickCount !== 3 && clickCount !== 5 && clickCount < 9) {
    ctrSetImage();
  }
  yamanekoText.innerHTML = yamanekoTextArray[clickCount + 1];
  
  addButton(clickCount);

  clickABArray.push("B");
  clickCount ++;
}

function ctrSetImage() {
  let addNum = Number(setImgs[0].src.at(-5)) + 1;
  setImgs[0].src = `neko-${addNum}.png`;
}

function addButton(clickCount) {
  const selectAB = Math.round(Math.random());
  
  buttonA.innerHTML = selectButtonArray[selectAB][clickCount];
  buttonB.innerHTML = selectButtonArray[1-selectAB][clickCount];
  if(selectAB === 0) {
    answerArray.push("B");
    } else {
      answerArray.push("A");
    }
  if (clickCount === 0) {
    buttonBox.removeChild(targetButtons[0]);
    buttonBox.appendChild(buttonA);
    buttonBox.appendChild(buttonBetween);
    buttonBox.appendChild(buttonB);
  }
  clickButtonB = buttonB.addEventListener("click", buttonClickB);
  clickButtonA = buttonA.addEventListener("click", buttonClickA);
  if (clickCount === 8) {
    buttonBox.removeChild(buttonBetween);
    buttonBox.removeChild(buttonB);
  }
}
function endGame() {
  let i = 0;
  answerArray.splice(7,answerArray.length-7)
  for (const any of answerArray) {
    if(clickABArray[i] !== any) {
      endText = "GAME OVER";
    }
    i++;
  }
  if (endText === "GAME CLEAR"){
    setImgs[0].src = `end-1-clear.png`;
    yamanekoText.innerHTML = yamanekoTextArray[10];
  } else {
    setImgs[0].src = `end-2-over.png`;
    yamanekoText.innerHTML = "<font size=5px>" + yamanekoTextArray[11] + "</font>";
  }
}
function gameScore(){
  buttonBox.removeChild(buttonA);
  setImgs[0].style.display = "none";
  titles[0].style.color = "rgb(25, 102, 154)";
  if (endText === "GAME CLEAR"){
    mainTextAreas[0].innerHTML = "<font color=yellow size=10px><br>🎉 GAME CLEAR 🎉<br>　</font>";
  } else {
    mainTextAreas[0].innerHTML = "<font color=red size=10px><br>🐾 GAME OVER 🐾<br>　</font>";
  }
  let i = 0;
  let correctCount = 0;
  let yourAnswer = "";
  for (const answer of answerArray) {
    if (answer === clickABArray[i]) {
      correctCount ++
      yourAnswer += selectButtonArray[1][i]
    } else {
      yourAnswer += "<font class=standOutFont>" + selectButtonArray[0][i] + "</font>"
    }
    i++
  }
  const correctRate = Math.round(correctCount / 7 * 100);
  mainTextAreas[0].appendChild(document.createElement("p")).innerHTML = "<font size=5px>正解率　：　" + correctRate + "％</font>";
  mainTextAreas[0].appendChild(document.createElement("p")).innerHTML = "<br>～ あなたの回答 ～";
  mainTextAreas[0].appendChild(document.createElement("p")).innerHTML = yourAnswer;
}

let clickCount = 0;
const answerArray = [];
const clickABArray = [];

let endText = "GAME CLEAR";
let buttonA = document.createElement("button");
buttonA.className = "targetButton";
let buttonB = document.createElement("button");
buttonB.className = "targetButton";
let buttonBetween = document.createTextNode("　　　");
let pTag = document.createElement("p");

const titles = document.getElementsByClassName("title");
const setImgs = document.getElementsByClassName("setImg");
const mainTextAreas =document.getElementsByClassName("mainTextArea");
let targetButtons = document.getElementsByClassName("targetButton");

const yamanekoText = document.getElementById("yamanekoText");
const buttonBox = document.getElementById("buttonBox");

let clickButtonA = targetButtons[0].addEventListener("click", buttonClick);
let clickButtonB;

const yamanekoTextArray = ["どなたもどうかお入りください。決してご遠慮はありません<br>ことに肥ったお方や若いお方は、大歓迎いたします<br>　"
  ,"当軒は<font class=standOutFont>『　　　　』</font>料理店ですから、どうかそこはご承知ください<br>注文はずいぶん多いでしょうがどうか一々こらえて下さい。<br>　"
  ,"お客さまがた、ここで髪をきちんとして、<br>それからはきものの<font class=standOutFont>『　　　　』</font>を落としてください。<br>鉄砲と弾丸をここへ置いてください。"
  ,"どうか帽子と外套と靴をおとり下さい。<br>ネクタイピン、カフスボタン、眼鏡、財布、その他金物類、<br>ことに<font class=standOutFont>『　　　　』</font>ものは、みんなここに置いてください。"
  ,"　<br>壺の中の<font class=standOutFont>『　　　　』</font>を顔や手足にすっかり塗ってください。<br>　"
  ,"　<br>クリームをよく塗りましたか、<font color=red>『　　　　』</font>にもよく塗りましたか、<br>　"
  ,"料理はもうすぐできます。十五分とお待たせはいたしません。すぐたべられます。<br>早くあなたの頭に瓶の中の<font class=standOutFont>『　　　　』</font>をよく振りかけてください。<br>　"
  ,"いろいろ注文が多くてうるさかったでしょう。お気の毒でした。<br>もうこれだけです。どうかからだ中に、壺の中の<font class=standOutFont>『　　　　』</font>をよくもみ込んでください。<br>　"
  ,"いや、わざわざご苦労です。大へん結構にできました。<br>さあさあ<font class=standOutFont>『　おなか　』</font>におはいりください。<br>　"
  ,"　"
  ,"「わん、わん、ぐゎあ。」という声がして、あの白熊のような犬が二疋、<br>扉をつきやぶって室の中に飛び込んできました。<br>・・・<br>扉の向うのまっくらやみのなかで、「にゃあお、くゎあ、ごろごろ。」という声がして、それからがさがさ鳴りました。<br>室はけむりのように消え、二人は寒さにぶるぶるふるえて、草の中に立っていました。"
  ,"<font class=standOutFont>「　やぁ、うまそうだ。いただきます。　」</font>"
]

const selectButtonArray = [
  ["メニューの少ない　","ほこり　","重たい　","油　　","足の裏　","蜂蜜　","胡椒　","はい　","次へ　","次へ　"],
  ["注文の多い　","泥　　","尖った　","クリーム　","耳　　","香水　","塩　　","Yes　","次へ　","次へ　"]
]

