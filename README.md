# AIcePhish
AIcdPhishは、選択したメールが生成AIメールか否かを判別するThunderbird拡張機能です。
気になったメールがあれば、追加されたボタンのワンクリックで生成AIメールか判別し、結果を表示します。
注意点として、AIcePhishでは、判別器を外部サーバに設置しており、選択したメールの本文を外部サーバに送信します。
送信したメール本文を外部サーバで保存することはないものの、セキュリティ上、機密情報を含むメールのチェックは非推奨です。

## インストール方法
本拡張機能は、Windows10のThunderbird version 102.15.1で動作を確認しています。
まず、本拡張機能AIcePhishをZIPダウンロード、もしくはcloneしたファイルをZIPで圧縮してください。
その後、以下の1.～4.を行ってください。
1. Thunderbirdを起動
2. 下記のように右上の三本線をクリックし、アドオンとテーマをクリック
![アドオンとツール](https://github.com/security-anth/Ice-Alice/blob/main/MWSCup/%E3%82%A2%E3%83%89%E3%82%AA%E3%83%B3.png)
3. アドオンマネージャーのタブの歯車をクリックし、「ファイルからアドオンをインストール」をクリック
![アドオンインストールページ](https://github.com/security-anth/Ice-Alice/blob/main/MWSCup/%E3%82%A2%E3%83%89%E3%82%AA%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8.png)
4. ダウンロードしたzipファイルを選択し、開くことでインストール終了　＊下記のように拡張機能のページにAIcePhishが追加されます
![インストール終了](https://github.com/security-anth/Ice-Alice/blob/main/MWSCup/%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E7%B5%82%E4%BA%86.png)
### 利用方法
メールのヘッダー部分に追加された「IcePhish」ボタンを押すと、生成AIか否かの判別結果が表示されます。
