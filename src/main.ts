// 与えられた文字列を返す関数
export function returnWord(message: string) {
    return message;
}

// メイン関数
function main() {
    console.log(returnWord("Hello World!"));
}

//型エラーを起こす関数
function typeError() {
    console.log(returnWord(123));
}


main();
typeError();