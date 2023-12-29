// URLパラメーターから指定されたページを取得する関数
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// ページ読み込み時に実行する処理
window.onload = function () {
    var paramValueSpan = document.getElementById('paramValue');
    var specifiedPage = getParameterByName('page'); // URLパラメーター 'page' の値を取得
    var redirectLink1 = document.getElementById('redirectLink1');
    var redirectLink2 = document.getElementById('redirectLink2');

    // URLパラメーターの値を表示し、リンク先を設定する
    if (specifiedPage) {
        paramValueSpan.textContent = specifiedPage;
        redirectLink1.href = specifiedPage;
        redirectLink2.href = specifiedPage;
    } else {
        paramValueSpan.textContent = '指定されていません';
        redirectLink1.removeAttribute('href');
        redirectLink1.style.pointerEvents = 'none'; // クリック無効化
        redirectLink1.style.color = '#999'; // リンクの色を変更して無効化を示す

        redirectLink2.removeAttribute('href');
        redirectLink2.style.pointerEvents = 'none'; // クリック無効化
        redirectLink2.style.color = '#999'; // リンクの色を変更して無効化を示す
    }
};