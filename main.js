var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

// ウィンドウがすべて閉じたときの挙動を定義
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    // ブラウザウィンドウを作る
    mainWindow = new BrowserWindow(
        { width: 800, height: 600}
    );
    // main.js と同じディレクトリにあるindex.html を読み込む
    mainWindow.loadUrl(
        'file://'+ __dirname + '/index.html'
    );
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
})