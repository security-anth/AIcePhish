//webSocket通信のライブラリ
var webSocket; //ウェブソケット
var is_connect = false; //接続中か
var last_receve = "" //最後に受信した文字列
var is_weberror = false //エラーが発生したかどうか（解決したらfalse）

// サーバとの通信を接続する関数
function connect_and_send(text){
  webSocket = new WebSocket("ws://106.172.115.153:10000"); // インスタンスを作り、サーバと接続

  // ソケット接続すれば呼び出す関数を設定
  webSocket.onopen = function(message){
    error("OPEN")
    webSocket.send(text);
  };

  // ソケット接続が切ると呼び出す関数を設定
  webSocket.onclose = function(message){
    is_connect = false;
  };

  // ソケット通信中でエラーが発生すれば呼び出す関数を設定
  webSocket.onerror = function(message){
    error("server ERROR")
    is_weberror = true;
  };

  // ソケットサーバからメッセージが受信すれば呼び出す関数を設定
  webSocket.onmessage = function(message){
    error("message = "+ message.data)
    disconnect();
    show_AI_or_HUMAN(message.data)
  };
}

// サーバとの通信を切断する関数
function disconnect(){
    webSocket.close();
}