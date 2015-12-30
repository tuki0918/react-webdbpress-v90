var fs = require('fs');
var markdown = require('markdown').markdown;
var chokidar = require('chokidar');

// chokidar でREADME.md を監視
var watcher = chokidar.watch('./README.md');
watcher.on('add', updateHTML);
watcher.on('change', updateHTML);

var container = document.getElementById('container');

// ファイルの変更があったらMarkdown をHTML に変換して表示
function updateHTML(path, stats) {
    fs.readFile(path, 'utf8', function(err, content) {
        container.innerHTML = markdown.toHTML(content);
    });
}