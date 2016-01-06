//ブックマークレットリンク作成用コード
//ここでジェネレートしてブックマークのaタグを作ります。
//　http://ted.mielczarek.org/code/mozilla/bookmarklet.html

//jQueryが無い場合は読み込む
if(typeof jQuery == "undefined"){
  var jq = document.createElement('script');
  jq.type='text/javascript';
  jq.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
  document.documentElement.appendChild(jq);
}

//load jquery.lesskel.js
var lesskel = document.createElement('script');
lesskel.type='text/javascript';
lesskel.src='https://cdn.rawgit.com/yamitake/lesskel/master/jquery.lesskel.js';
document.documentElement.appendChild(lesskel);

var s=document.createElement('script');
s.type='text/javascript';
s.src='https://cdn.rawgit.com/yamitake/lesskel/master/bookmarklet.js';
document.documentElement.appendChild(s);