# バカチンガージェネレーター
  バカチンガーの言葉を思いついたら
  自分でTwitter用の画像を作れるジェネレーター

## DEMO
https://katsuki1128.github.io/bakachin_generator/

## 紹介と使い方
  - 右のカラムと左にカラムに文字を入れ込んで、好きな写真をえらぶ
  - いいのができたら保存ボタンを押す。過去に作ったものは呼び出せる

## 工夫した点
  - 画面を見ながら楽しく作れるように即時性にこだわった 
  - 文字を打ったら即座に画面に反映させるようにした
  - 画像を選択したら即座に画面に反cd映させるようにした
  - 過去に作ったものを保存すると、ローカルストレージにテキストと画像のデータを配列で保存し、ボタンを自動で生成して呼び出せる
  - 保存ボタンのクリック数に紐づいて配列のプログラムを組んだので、コードの量が省略できた。

## 苦戦した点
  
  - 過去保存したものを、ローカルストレージに配列として保存し、ボタンを押して呼び出すことに苦労した。
  - 保存するごとにボタンが増えるようにし、そのボタンを押したら制作したテキストと画像が表示されるように関数で組んだ
  -  const rightText = $('#right_display').text();　と記載した時にダブルクォーテーションではダメだった点。

## 改良したいが実装できていない点
  - ランダムな番号を入れる
  - シェアボタインをつける 
  - 気持ちをつぶやいたらAIでその時にピッタリの言葉を作れるようにしたい
  - 自分の入れたい画像を入れられる
  - 利用規約をかく
  - Stable Diffusionで自動で画像を生成する

## 参考にした web サイトなど

  
  - コードはコピペで。無料のAIイラストstable diffusionをGoogle Colaboratoryを用いて使用する方法【ゆっくり解説】【VOICEROID解説】
  https://www.youtube.com/watch?v=qyQfQYwvxlY

  - 使用promptを探せるサイト　Lexica
  https://lexica.art/

  - Google Colab ではじめる Stable Diffusion 1.5
  https://note.com/npaka/n/n0c0b2388b893


  - Google Colab ではじめる LoRA
  https://note.com/npaka/n/ndb287a48b682

  - ★★★　ポケモン図鑑ジェネレーター
  https://vrty.work/pokemon

  
  - FF14 セリフジェネレータ
  https://nanarya.github.io/ffxiv-speech-generator/

  - レトロゲー風メッセージメーカー
  http://debugx.net/DQPhoto.aspx
  
  - ドラクエなどのセリフ、吹き出し風ジェネレーター20選！
  https://www.iwako-light.com/entry-hukidasi-serihu
  
  - フキダシ内の文字を自由に変えて画像が作れる
  https://contentisking.jp/generators/serifu/

  - とある桜のジェネレータ
  http://to-a.ru/
  https://twitter.com/TOUKIBI_3737/status/1651946633297543170?s=20
  https://twitter.com/search?q=%23toarugen&src=typed_query&f=image


