# Kadai02
課題02_じゃんけん1

①課題内容（どんな作品か）

前回講義で森田先生が、「エラーがでるとPCを壊したくなる」と言っていたため、PCを壊したくなる前に冷静にエラーや構文の確認ができるサイトを作ろうと思いました。
作成している途中で次週の予習の内容もいれたくなったので、Linuxコマンドのページも追加しました。
		
		
②工夫した点・こだわった点<br>
実装したかったJQueryは大体入れました。苦労したのは以下の点です。<br>
＜全体＞<br>
　-SessionStorageを利用している（2回目以降アニメーションを省略）<br>
＜Mainページ＞<br>
　-ハンバーガーメニューを2ページ目以降で現れるようにしたこと。<br>
　-scrollifyという機能をいれ、1クリックで1ページずつ移動する仕様にしました。<br>
　※これを入れたため、mainの各ページでheightを取らなければならなくなりました。<br>
　　またhoverとの相性も良くないと感じましたので次回からは入れないかもしれません。<br>
＜JQuery構文ページ＞<br>
　-checkboxをチェックしたら、その内容の解説文章だけが表示される<br>
　-チェックが2つ以内の場合はスクロールされないため、デフォルト表示とする<br>
＜Linux、エラーページ＞<br>
　-検索をJQueryで実施している（JQueryを使わない場合ページ再読み込みとなってしまうため）<br>


③難しかった点・次回トライしたいこと(又は機能)<br>
できればレスポンシブレアウトにしたいな、とおもい作り始めましたが、コンテンツの性質上2画面で表示したかったこともありあきらめました。
生半可な気持ちではレスポンシブには対応できないとわかったため、次回から設計段階でモバイルファーストなデザインを心がけます。<br>

④質問・疑問・感想、シェアしたいtips等なんでも<br>
困っている人に役立ちたい＆教育系コンテンツを作成するので自身のスキルアップを兼ねて作成を始めました。<br>
最初にダミーデータでHTML/CSS/JQueryの実装をし、中身のコンテンツ（JQueryの文法の部分）は最後に作成しましたが、<br>
すでにプログラミングは終わってしまったためコンテンツ作成のモチベーションがわかずに時間を要しました・・・。<br>
自身がプログラムを書く中でエラーなど記録しておけばよかったのですが解決済みだったので、できればエラーの部分は今後追加していきたいです（自分用）<br>

[参考URL]<br>
画像はこちらのサイトのものをお借りしています（ロイヤリティフリー）
https://pixabay.com/ja/
