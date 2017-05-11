
const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;
function action(oppornent){
  matches = matches + 1;
  const remainder = matches % 2;
  const isEven = remainder == 0;
  console.log(`${matches} % 2 = ${remainder} : ${isEven}`);
  if(isEven){
    return GU
  }
  return PA;
}
function abs(value){
  let result = value;
  if(result < 0){
    result = result * -1;
  }
  return result;
}

    上記の関数をdocs/player.jsに追加してください

練習問題4（つづき）

abs(-10)

    関数が呼び出せることを確認してください
        メニューから「開発ツール」→「Webコンソール」
        コンソールへ上記のように入力します
    確認したら、変更をコミットしてください

練習問題5

distance(0, 5); // 5
distance(-5, 5); // 10
distance(5, -10); // 15

    数直線上の距離を計算する関数を定義してください
        関数名：distance
        docs/player.jsに定義を記述してください
    ヒント：先ほど定義したabs関数を呼ぶと楽です

スコープ：変数の有効範囲

let counter = 0; // counterはaction, showCounterで有効
function action(oppornent){
  counter = counter + 1; 
  let myAction = CHOKI; // myActionはこの関数のみで有効
  if(counter % 2 == 0){
    myAction = GU;    
  }
  return myAction;
}
function showCounter(){

function action(oppornent){
return 1;
}

function abs(value){
let result = value;
if(result < 0){
  result = result * -1;
}
return results;
}

function distance(value1,value2){
  let result = 0;
  result = value1 + value2;
  return result;
}

