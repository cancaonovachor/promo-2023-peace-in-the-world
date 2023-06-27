import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import zentai from '../images/zentai-ticc.jpg'
import balss from '../images/balss.jpg'
import tbyc from '../images/tbyc.jpg'
import haishin from '../images/cncn1.0-haishin.jpg'
import nyujo from '../images/nyujo-min.png'
import wagner from '../images/wagner.jpeg'
import access from '../images/access.png'
import { useQueryParam, StringParam } from 'use-query-params'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import Article from './common/Articles'

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <Article
        id="nova" article={props.article} articleTimeout={props.articleTimeout} title="CancaoNova" image={zentai}
        twitterUrl={"https://twitter.com/cancaonovachor"}
        facebookUrl={"https://ja-jp.facebook.com/cancaonova.chorus/"}
        youtubeUrl={"https://www.youtube.com/channel/UCyySqK-CQoeet4zudxY7dWQ"}>
        <p>
          2016年7月創団。団名はポルトガル語で“新しい歌”。あっと驚くような合唱活動を志す合唱集団。出身母体/年齢/性別/居住地にとらわれない、新しいサウンド・合唱スタイルを目指して活動中。以下のような新しい取り組みを実施。
          <br /><br />
          主な出演ステージは東京国際合唱コンクール、宝塚国際室内合唱コンクール、声楽アンサンブルコンテスト、全日本合唱コンクール。（2021年度）
          <br/><br/>
          第3,4回東京国際合唱コンクール同声合唱部門《カテゴリーウィナー》、第72回全日本合唱コンクール全国大会 同声合唱の部《銀賞》、第12回声楽アンサンブルコンテスト全国大会2019《金賞》（予選2位・本選出場）。
        </p>
        {close}
      </Article>
      <Article
        id="balss" article={props.article} articleTimeout={props.articleTimeout} title="BALSS" image={balss}
        twitterUrl={"https://twitter.com/risingsun226"}
        >
        <p>
        常任指揮者の山脇卓也氏と数名が中心となり、2022年春に始動した新進気鋭の混声合唱団。
        <br/>団名はラトビア語で"声"という意味の単語からとったものであり、一人一人の声を大切にし繋げていくという思いが込められている。
        <br/>現在は年齢も出身も様々な約50名が在籍し、毎週土曜昼に練習している。
        <br/>2022年軽井沢国際合唱コンクール金賞。
        </p>
        {close}
      </Article>
      <Article
        id="tbyc" article={props.article} articleTimeout={props.articleTimeout} title="Tokyo Bay Youth Choir" image={tbyc}
        twitterUrl={"https://twitter.com/TokyoBayYC"}
      >
        <p>
        Tokyo Bay Youth Choir（通称TBYC）はオーストリアで合唱指揮を学んだ谷郁氏のもと、
        20代から30代のメンバーを中心に20名ほどで活動しているちょっぴりオトナなユース合唱団です。
        <br/>ドイツ語圏を中心にヨーロッパで広く歌われている合唱作品を主なレパートリーとしており、
        2021年9月に行われた東京国際合唱コンクールでは室内合唱部門１位をいただきました。
        <br/>今回は公募メンバーを加えた特別編成合唱団として演奏いたします。
        </p>
        {close}
      </Article>
      <Article id="wagner" article={props.article} articleTimeout={props.articleTimeout} title="CONDUCTOR" image={wagner}>
        <h3>Dieter Wagner / ディーター・ワーグナー（ドイツ）</h3>
        <p>
        教会音楽をドイツ・ハイデルベルク、声楽をスイス・バーゼルで学ぶ。
        インゲ・ブリンガー=ピットラー声楽コンクール2度優勝。
        リヒャルト・ワーグナー協会ミュンヘン特別研究員。
        ウクライナ・リヴィウの音楽祭やスイス・チューリッヒ聖ペトロ教会聖歌隊などの客演指揮者を務める。
        オーケストラ指揮者としても活動している。
        スイスではバーゼルのAdvent Matinees祭やMendelssohntage Aarau音楽祭の音楽監督を務め、各種音楽コンクールも開催。
        日本では全日本合唱連盟主催･第25回コーラスワークショップin仙台（2015年）講師、第11回声楽アンサンブルコンテスト全国大会2018（福島県）審査員、第8回JCAユースクワイア（2019年）指揮者を務めている。
        </p>
        {close}
      </Article>
      <Article id="concept" article={props.article} articleTimeout={props.articleTimeout} title="CONCEPT">
        <p>2023年9月21日、国連が定めた「国際平和デー」に、世界十数カ国の合唱団が24時間リレーで
          Karl Jenkins作曲「The Peacemakers」を演奏するコンサートを開催します。
          あらゆる人種・宗教・文化の人々が共に平和を作ることを表したこの曲を通じて、国籍や文化の違いを超えて平和への願いを共有します。
          日本では、スイス在住のドイツ人指揮者、Dieter Wagnerさんを迎え、
          個性豊かな3つの合唱団によるジョイントコンサートを9月18日（月・祝）に開催します。
          「The Peacemakers」の一部曲目に、珠玉のドイツ作品を加えたプログラムをお送りします。
          このコンサートの抜粋動画を、世界に向けて9月21日（木）に発信します。
          <br/>
          ステージ情報は <a className="use-border" href="javascript:;" onClick={async () => {
          await props.onCloseArticle();
          props.onOpenArticle('explanation');
          }}>こちら</a> から
          </p>
          <h3>世界配信</h3>
          <p>
            「国際平和デー」9月21日（木）、参加国で最初に20時を迎えるニュージーランドを皮切りに、タイムゾーンの順番に現地時間20時から各国の演奏が配信されます。日本の演奏配信は、日本時間19時半頃からを予定（配信環境等の事情により変更になる可能性があります）。企画団体TimeDateのウェブサイト上にて、本演奏会の抜粋動画をお送りします。配信期間10月8日まで（予定）。
            <a 
             className='user-border'
            href='https://jpn01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.timedate.ch%2F&data=05%7C01%7C%7C5406cc30fe1d4362f52108db5bd35e10%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638204736481035579%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=0mE5HY4I6yt%2BhAW1Aat8bERNb4nBoBZ8WHPLRbikkGc%3D&reserved=0'
            target='_blank'
            >
              www.timedate.ch
              </a>
            
          </p>
          <h3>国内配信</h3>
          <p>
            本演奏会の全ステージ動画を、9月XX日(X)XX:XX- からZAIKOにて配信します。 現地に足を運ぶのが難しい方も、ぜひご覧ください。
            →日付確定したら各コンテンツに反映
          </p>
        {close}
        </Article>
      
      <Article id="explanation" article={props.article} articleTimeout={props.articleTimeout} title="Stage">
      <h3>BALSS</h3>
      <p>
        <b>演奏曲：</b>
        <br></br>・Advent-Motetten op.176 - Josef Rheinberger
      </p>
      <br></br>
      <h3>CancaoNova</h3>
      <p>
        <b>演奏曲：</b>
        <br></br>・Viel werden kommen von Morgen und von Abend - Heinrich Schütz
        <br></br>・Sammelt zuvor das Unkraut - Heinrich Schütz
        <br></br>・Beati Mortui - Felix Mendelssohn
        <br></br>・Die Minnesänger - Robert Schumann
        <br></br>・Fröhlich im Maien - Richard Strauss
        <br></br>・Tenebrae - Marcus Ludwig
      </p>
      <br></br>
      <h3>Tokyo Bay Youth Choir</h3>
      <p>
        <b>演奏曲：</b>
        <br></br>・Jauchzet dem Herrn, alle Welt WoO.28 - Felix Mendelssohn
        <br></br>・ 3 Psalms op.78 - Felix Mendelssohn
      </p>
      <br></br>
      <h3>合同演奏</h3>
      <p>
      スイス在住のドイツ人指揮者、Dieter Wagnerさんを迎え、Karl Jenkins作曲「The Peacemakers」を演奏します。
      </p>
      <p>
        <b>演奏曲：</b>
        <br></br>・Karl Jenkins - Peace, Peace!
        <br></br>・Karl Jenkins - Healing light
        <br></br>・Karl Jenkins - Dona nobis pacem
      </p>
      {close}
    </Article>

      <Article id="access" article={props.article} articleTimeout={props.articleTimeout} title="Access" image={access}>
        <h3>
          八王子市芸術文化会館 <br />
          いちょうホール
        </h3>
        <p>
          〒192-0066 
          <br />
          東京都八王子市本町２４−１
          <br />
          TEL：042-621-3001
          <br />
        </p>
        <p>
          <b>八王子ICから</b>
          <br/>
          八王子インター第2出口より国道16号線を八王子市街方面・横浜方面へ、浅川橋を渡り大横町交差点を通過後、いちょうホール西を左折。インターから約15分。
          </p>
          <p>
          <b>八王子駅・京王八王子駅から</b>
          <br />
          JR八王子駅北口6～10番・京王線京王八王子駅2,3番のりば「横山町三丁目」下車徒歩5分または「八日町一丁目」下車徒歩3分
          <br />
        </p>
        {close}
      </Article>

      <Article id="ticket" article={props.article} articleTimeout={props.articleTimeout} title="Ticket">
        <h3>入場チケット (PassMarket)</h3>
        <span className="image-main main">
        <a href="https://passmarket.yahoo.co.jp/event/show/detail/023pm8ynq6r21.html" target="_blank">
          <img src={nyujo} alt=""  />
          </a>
        </span>
        <p>
          演奏会への入場チケットは
        <a className="use-border" href="https://passmarket.yahoo.co.jp/event/show/detail/023pm8ynq6r21.html" target="_blank">こちら</a>
        <br/>
        
        </p>
        <br/>
        <h3>配信チケット (ZAIKO)</h3>
        <span className="image-main main">
        <a className="use-border" href="https://zaiko.io/event/354406" target="_blank">
          <img src={haishin} alt="" />
          </a>
        </span>
        <p>
        配信チケットは
        <a className="use-border" href="https://zaiko.io/event/354406" target="_blank">こちら</a>
        <br/>
        遠方にお住まいの方や当日現地にお越し頂けない方も、こちらよりライブ配信を視聴いただけます。
        </p>
        {close}
      </Article>
    </div>
  )
}


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
