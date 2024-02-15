function updateStatus(isOnline) {
    if (isOnline) {
        // オンライン時の処理
        document.querySelector('.wrapper').classList.add('hide');
        document.querySelector('.wrapperon').classList.remove('hide');

        // 5秒後に再度非表示にする
        setTimeout(function () {
            document.querySelector('.wrapperon').classList.add('hide');
        }, 5000);
    } else {
        // オフライン時の処理
        document.querySelector('.wrapper').classList.remove('hide');
        document.querySelector('.wrapperon').classList.add('hide');
    }
}

// オンライン・オフラインの状態が変わった時のイベントリスナー
window.addEventListener('online', function () {
    updateStatus(true);
});

window.addEventListener('offline', function () {
    updateStatus(false);
});

// 初回ロード時の処理
window.addEventListener('load', function () {
    updateStatus(navigator.onLine);
});
