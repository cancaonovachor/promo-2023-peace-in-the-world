// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: {
        main: "International Peace Day Concert",
        sub: "~ 24-hour concert relay connecting the world ~",
      },
      location: "Hachioji City Art & Cultural Hall (Icho Hall)",
      conductor: "Conductor",
      chorus: "Chorus",
      novaExp: `
        <p>
        Founded in July 2016, CancaoNova (“New Song” in Portuguese) is a unique choral group of about 20 singers from different backgrounds, ages, genders and locations. Based in three different areas of Japan, they are pursuing new sounds and choral styles, incorporating latest ideas.
        <br />
        <br />
        Their main appearances include Tokyo International Choir Competition, Takarazuka International Chamber Chorus Contest, Fukushima Vocal Ensemble Contest, and JCA National Choral Competition.
        </p>
      `,
      balssExp: `
        <p>
          An emerging mixed choir newly set up in 2022 spring around Conductor Takuya Yamawaki and several singers. The choir was named "Balss" ("voice" in Latvian) with wishes to cherish and keep connecting every voice. 
          <br />
          About 50 singers of different ages come from various backgrounds, rehearsing every Saturday afternoon. Winner of Gold Prize in Karuizawa International Choral Competition in 2022.
        </p>
      `,
      tbycExp: `
        <p>
        A youth choir --a little bit on the adult side-- of about 20 singers in the 20s and 30s, with conductor Kaoru Tani, who studied choral conducting in Vienna and Graz, Austria. 
          <br />
          Their repertoire covers a wide range of a cappella choral works from European countries including Germany and Austria.
          Category winner of Chamber Choir category in 2021 Tokyo International Choir Competition. 
          <br />
          In this concert, they will be joined by 20 external young singers who are willing to share the message for peace.
        </p>
      `,
    },
  },
  ja: {
    translation: {
      title: {
        main: "国際平和の日コンサート",
        sub: "～ 世界をつなぐ24時間コンサートリレー ～",
      },
      location: "八王子市芸術文化会館 いちょうホール",
      conductor: "指揮",
      chorus: "合唱",
      novaExp: `
        <p>
        2016年7月創団。団名はポルトガル語で“新しい歌”。あっと驚くような合唱活動を志す合唱集団。出身母体/年齢/性別/居住地にとらわれない、新しいサウンド・合唱スタイルを目指して活動中。以下のような新しい取り組みを実施。
        <br />
        <br />
        主な出演ステージは東京国際合唱コンクール、宝塚国際室内合唱コンクール、声楽アンサンブルコンテスト、全日本合唱コンクール。（2021年度）
        <br />
        <br />
        第3,4回東京国際合唱コンクール同声合唱部門《カテゴリーウィナー》、第72回全日本合唱コンクール全国大会
        同声合唱の部《銀賞》、第12回声楽アンサンブルコンテスト全国大会2019《金賞》（予選2位・本選出場）。
        </p>
      `,
      balssExp: `
        <p>
        常任指揮者の山脇卓也氏と数名が中心となり、2022年春に始動した新進気鋭の混声合唱団。
        <br />
        団名はラトビア語で"声"という意味の単語からとったものであり、一人一人の声を大切にし繋げていくという思いが込められている。
        <br />
        現在は年齢も出身も様々な約50名が在籍し、毎週土曜昼に練習している。
        <br />
        2022年軽井沢国際合唱コンクール金賞。
        </p>
      `,
      tbycExp: `
        <p>
          Tokyo Bay Youth
          Choir（通称TBYC）はオーストリアで合唱指揮を学んだ谷郁氏のもと、
          20代から30代のメンバーを中心に20名ほどで活動しているちょっぴりオトナなユース合唱団です。
          <br />
          ドイツ語圏を中心にヨーロッパで広く歌われている合唱作品を主なレパートリーとしており、
          2021年9月に行われた東京国際合唱コンクールでは室内合唱部門１位をいただきました。
          <br />
          今回は公募メンバーを加えた特別編成合唱団として演奏いたします。
        </p>
      `,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja", // 初期言語を日本語に設定
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
