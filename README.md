# README

[DEMO](https://ryou.github.io/character_nantoka/dist/)

## 説明

[K.Hみっくす　ふぁーすと えでぃしょん様の「キャラクターなんとか機」](http://khmix.sakura.ne.jp/download.shtml)をVue.jsで作成。


## コーディング規約

### 単一ファイルコンポーネントに関して

本プロジェクトでも`.vue`ファイルを使用するが、CSSに関しては以下の制限を設ける。

+ ScopedCSSの禁止
+ コンポーネントのクラス名はコンポーネント名をBlockとしたBEMで記述する。

#### ScopedCSSの禁止

ScopedCSSは名前空間の汚染を気にせずCSSを記述できるので、一見良い手法のように見える。

ただ、これを使用して記述されたプロジェクトは完全にwebpackに依存してしまうこととなり、webpackを捨てたいとなった際に負債となってしまう。

そのため「webpackに依存しない」という事を目的にScopedCSSは禁止とする。

#### コンポーネントのクラス名はコンポーネント名をBlockとしたBEMで記述する。

ScopedCSSを使わないため、名前空間の汚染に関してはBEMを使用することで解決する。

例えば`Btn`コンポーネントがあった場合。

```
<div class="Btn">
  <i class="Btn_icon -download"></i>
  <p class="Btn_txt">Download</p>
</div>
```

のように、コンポーネントのクラス名はコンポーネント名をBlockとしたBEMで記述する。

BEM自体の記述に関しては、基本的に以下のURLの方針に従って記述する。

[細かすぎるけど伝わってほしい私的BEMプラクティス30（ぐらい） | ダーシマ・ヱンヂニヤリング](https://necomesi.jp/blog/tsmd/posts/152)
