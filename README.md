# Kadai02
課題02_じゃんけん1

①課題内容（どんな作品か）
前回講義で森田先生が、「エラーがでるとPCを壊したくなる」と言っていたため、PCを壊したくなる前に冷静にエラーや構文の確認ができるサイトを作ろうと思いました。
作成している途中で次週の予習の内容もいれたくなったので、Linuxコマンドのページも追加しました。

②工夫した点・こだわった点
実装したかったJQueryは大体入れました。苦労したのは以下の点です。
＜Mainページ＞
　-ハンバーガーメニューを2ページ目以降で現れるようにしたこと。
　-scrollifyという機能をいれ、1クリックで1ページずつ移動する仕様にしました。
 　※これを入れたため、mainの各ページでheightを取らなければならなくなりました。
  　　またhoverとの相性も良くないと感じましたので次回からは入れないかもしれません。
＜JQuery構文ページ＞C
　-checkboxをチェックしたら、その内容の解説文章だけが表示される
  -チェックが2つ以内の場合はスクロールされないため、デフォルト表示とする
＜Linux、エラーページ＞
  -検索をJQueryで実施している（JQueryを使わない場合ページ再読み込みとなってしまうため）
＜全体＞
  -SessionStorageを利用している（2回目以降アニメーションを省略）

③難しかった点・次回トライしたいこと(又は機能)
できればレスポンシブレアウトにしたいな、とおもい作り始めましたが、コンテンツの性質上2画面で表示したかったこともありあきらめました。
生半可な気持ちではレスポンシブには対応できないとわかったため、次回から設計段階でモバイルファーストなデザインを心がけます。

④質問・疑問・感想、シェアしたいtips等なんでも
困っている人に役立ちたい＆教育系コンテンツを作成するので自身のスキルアップを兼ねて作成を始めました。
最初にダミーデータでHTML/CSS/JQueryの実装をし、中身のコンテンツ（JQueryの文法の部分）は最後に作成しましたが、
すでにプログラミングは終わってしまったためコンテンツ作成のモチベーションがわかずに時間を要しました・・・。
自身がプログラムを書く中でエラーなど記録しておけばよかったのですが解決済みだったので、できればエラーの部分は今後追加していきたいです（自分用）

[参考URL]
画像はこちらのサイトのものをお借りしています（ロイヤリティフリー）
https://pixabay.com/ja/
