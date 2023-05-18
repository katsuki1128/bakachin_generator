
const history = [];

// last_right_colとlast_left_colを最初に空の文字列で宣言
let last_right_col = "";
let last_left_col = "";


//入力するとすぐに画面に表示される
$("#right_col, #left_col").on("input", function () {
    const right_col = $("#right_col").val();
    const left_col = $("#left_col").val();

    // 値を表示する要素にセットする
    $("#right_display").text(right_col);
    $("#left_display").text(left_col);

    // 入力欄が変更されるたびに、last_right_colとlast_left_colに最新の入力値を代入
    last_right_col = right_col;
    last_left_col = left_col;

    // console.log(last_right_col, last_left_col);


});

// adobeのウェブフォントサービスTypekitを使うための初期化スクリプト
(function (d) {
    var config = {
        kitId: 'inu8qmq',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);


let selectedSrc = "img/_34A2433.JPG";

// //選択した画像を表示エリアに表示する
// $(document).ready(function () {
// select_area内のimg要素がクリックされたときの処理
$('.select').click(function () {
    // クリックされた写真のsrc属性値を取得
    selectedSrc = $(this).attr('src');
    console.log(selectedSrc);
    // img_area内のimg要素のsrc属性値を設定
    $('#img_area img').attr('src', selectedSrc);
    // });
});

// saveボタンを押した回数を定義
let clickCount = 1;

// データを保存する
$("#save").on("click", function () {
    const data = {
        right_col: last_right_col,
        left_col: last_left_col,
        temp_img: selectedSrc,
    };
    // console.log(data);

    history.unshift(data);
    // console.log(history);
    // console.log(history.length);

    // jsonに変換
    const json = JSON.stringify(history);
    // console.log(json);
    localStorage.setItem("memo", json);

    // ボタンのHTMLを生成するコード
    const newButton = $('<input type="button">')
        .attr('value', clickCount)
        .attr('id', 'btn' + clickCount);

    $(".call").append(newButton);

    clickCount++;

});

// データを削除する
$("#clear").on("click", function () {
    localStorage.removeItem("memo");
    $("#right_col").val("");
    $("#left_col").val("");
});

//データを取得する 再読み込み時にも最後に記入したものが表示される
if (localStorage.getItem("memo")) {
    const json = localStorage.getItem("memo");
    // console.log(json);
    const data = JSON.parse(json);
    // console.log(data);

    $("#right_col").val(data[0].right_col);
    $("#left_col").val(data[0].left_col);

    // console.log(data.right_col);

    // 値を表示する要素にセットする
    $("#right_display").text(data[0].right_col);
    $("#left_display").text(data[0].left_col);


} else {
    $("#right_col").val("");
    $("#left_col").val("");
};


// N番目のボタンをクリックした時の挙動
// .call 要素内のボタン（input[type = 'button']）がクリックされた際に、
// クリックイベントを処理する関数を定義。
// 関数内の $(this).val() は、クリックされたボタンの値（N）を取得。
// そして、alert(btnValue) により、アラートメッセージとして取得した値を表示。

$(".call").on("click", "input[type='button']", function () {
    const btnValue = $(this).val();
    // alert(btnValue);

    // ローカルストレージからjsonを読み込み、配列に戻す
    const json = localStorage.getItem("memo");
    // console.log(json);
    const data = JSON.parse(json);
    // console.log(predata);

    // 配列の要素の数からセーブボタンを押した回数を引いて、値を取得
    $("#right_col").val(data[data.length - btnValue].right_col);
    $("#left_col").val(data[data.length - btnValue].left_col);

    // console.log(data.right_col);
    console.log(data[data.length - btnValue].temp_img);

    // 値を表示する要素にセットする
    $("#right_display").text(data[data.length - btnValue].right_col);
    $("#left_display").text(data[data.length - btnValue].left_col);
    $('#img_area img').attr('src', data[data.length - btnValue].temp_img);

});



$("#download_image").click(function () {

    const imgSrc = $('#img_area img').attr('src');
    console.log(imgSrc);
    // 画像をキャンバスに描画
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = imgSrc;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        // テキストをキャンバスに追加
        const leftText = $('#left_display').text();
        const rightText = $('#right_display').text();
        console.log(leftText, rightText);

        // adobeのウェブフォントサービスTypekitを使うための初期化スクリプト
        (function (d) {
            var config = {
                kitId: 'inu8qmq',
                scriptTimeout: 3000,
                async: true
            },
                h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
        })(document);

        context.font = '16px';
        context.fillStyle = 'white';
        context.fillText(leftText, 10, 20);
        context.fillText(rightText, 10, 40);

        // キャンバスのデータを画像としてダウンロード
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'combined_image.png';
        link.click();
    };
});

