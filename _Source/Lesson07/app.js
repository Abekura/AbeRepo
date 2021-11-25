// 各種定義
let flag = false; //ターンの切り替え
let counter = 9; //マスの残機
let winningLine = null; //勝ち線の変数定義
const squares = document.querySelectorAll('.square'); //3×3のマス全て
const squaresArray = [].slice.call(squares); // IE11対策
const messages = document.querySelectorAll('.message-list li'); //htmlで定義されている<li>全て
const messagesArray = [].slice.call(messages); // IE11対策
const resetBtn = document.querySelector('#reset-btn'); //resetbuttonの変数定義


// メッセージの切り替え関数
const setMessage = (id) => {
    messagesArray.forEach((message) => {
        if (message.id === id) {
            message.classList.remove('js-hidden'); //(再戦)ボタンの生成
        } else {
            message.classList.add('js-hidden'); //(再戦)ボタンの非表示
        }
    });
}


// 勝利判定のパターン関数
const filterById = (targetArray, idArray) => {
    return targetArray.filter((e) => {
        return (e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}
// 勝利判定パターン
const line1 = filterById(squaresArray, ['1-1', '1-2', '1-3']); //上一行
const line2 = filterById(squaresArray, ['2-1', '2-2', '2-3']); //中一行
const line3 = filterById(squaresArray, ['3-1', '3-2', '3-3']); //下一行
const line4 = filterById(squaresArray, ['1-1', '2-1', '3-1']); //左一列
const line5 = filterById(squaresArray, ['1-2', '2-2', '3-2']); //中一列
const line6 = filterById(squaresArray, ['1-3', '2-3', '3-3']); //右一列
const line7 = filterById(squaresArray, ['1-1', '2-2', '3-3']); //右下がりのライン
const line8 = filterById(squaresArray, ['1-3', '2-2', '3-1']); //右上がりのライン
const lineArray = [line1, line2, line3, line4, line5, line6, line7, line8]; //Arraylistとして格納
// 勝利判定関数
const isWinner = (symbol) => {
    // some: 1つでも条件を満たしていればTrueを返す
    const result = lineArray.some((line) => {
        // every: 全て条件を満たしていればTrueを返す
        const subResult = line.every((square) => {
            if (symbol === 'maru') { //○かどうかの判定
                return square.classList.contains('js-maru-checked'); //square.classListに()の中身が含まれているか判定
            } else 
            if (symbol === 'batsu') { //×かどうかの判定
                return square.classList.contains('js-batsu-checked'); //square.classListに()の中身が含まれているか判定
            }
        });

        if (subResult) { winningLine = line }

        return subResult;
    });
    return result;
}


// ゲーム終了時の関数
const gameOver = () => {
    // 全てのマスをクリック不可にする
    squaresArray.forEach((square) => {
        square.classList.add('js-unclickable');
    });

    // 勝った時のマス目をハイライトする
    if (winningLine) {
        winningLine.forEach((square) => {
            square.classList.add('js-highLight');
        });
    }

    //　リセットボタン表示
    resetBtn.classList.remove('js-hidden');
}


// ゲームの初期化の関数
const initGame = () => {
    flag = false;
    counter = 9;
    winningLine = null;
    squaresArray.forEach((square) => {
        square.classList.remove('js-maru-checked');
        square.classList.remove('js-batsu-checked');
        square.classList.remove('js-unclickable');
        square.classList.remove('js-highLight');
    });
    setMessage('batsu-turn');
    resetBtn.classList.add('js-hidden'); //resetbuttonの非表示
}
// もう一回遊ぶをクリックすると初期化の関数呼び出し
resetBtn.addEventListener('click', function() {
    initGame();
});


//　マスをクリックした時のイベント発生
squaresArray.forEach((square) => {
    square.addEventListener('click', () => {
        if (flag === true) {
            square.classList.add('js-maru-checked'); //クリックしたところの〇の表示・格納
            square.classList.add('js-unclickable'); //クリック不可
            //〇が勝っているかの判定
            if (isWinner('maru')) { 
                setMessage('maru-win'); //〇の勝利宣言
                gameOver();
                return;
            }
            //×に順番を移す
            setMessage('batsu-turn');
            flag = false;

        } else {
            square.classList.add('js-batsu-checked'); //クリックしたところの×の表示・格納
            square.classList.add('js-unclickable'); //クリック不可
            //×が勝っているかの判定
            if (isWinner('batsu')) { 
                setMessage('batsu-win'); //×の勝利宣言
                gameOver();
                return;
            }
            //〇に順番を移す
            setMessage('maru-turn');
            flag = true;
        }

        counter--;
        // 引き分け判定
        if (counter === 0) { //埋める場所がなくなったかどうかの判定
            setMessage('draw'); //引き分け宣言
            gameOver();
        }
    });
});