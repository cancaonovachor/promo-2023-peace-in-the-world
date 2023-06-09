import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import zentai from '../images/zentai-ticc.jpg'
import balss from '../images/balss.jpg'
import tbyc from '../images/tbyc.jpg'
import haishin from '../images/cncn1.0-haishin.jpg'
import nyujo from '../images/cncn1.0-nyuujo.jpeg'
import wagner from '../images/wagner.jpeg'
import access from '../images/access.png'
import { useQueryParam, StringParam } from 'use-query-params'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  // const [modalParam, _] = useQueryParam('modal', StringParam)
  // console.log(modalParam)

  // useEffect(() => {
  //   if (modalParam) {
  //     props.onOpenArticle(modalParam)
  //   }
  // }, [modalParam])

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="nova"
        className={`${props.article === 'nova' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2>
          CancaoNova
          <a
            href="https://twitter.com/cancaonovachor"
            style={{ marginRight: '13px', marginLeft: '25px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://ja-jp.facebook.com/cancaonova.chorus/"
            style={{ marginRight: '13px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyySqK-CQoeet4zudxY7dWQ"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </h2>
        <span className="image-main main">
          <img src={zentai} alt="" />
        </span>
        <p>
          2016年7月創団。団名はポルトガル語で“新しい歌”。あっと驚くような合唱活動を志す合唱集団。出身母体/年齢/性別/居住地にとらわれない、新しいサウンド・合唱スタイルを目指して活動中。以下のような新しい取り組みを実施。
          <br /><br />
          主な出演ステージは東京国際合唱コンクール、宝塚国際室内合唱コンクール、声楽アンサンブルコンテスト、全日本合唱コンクール。（2021年度）
        </p>
        {close}
      </article>
      <article
        id="balss"
        className={`${props.article === 'balss' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2>
          BALSS
          <a
            href="https://twitter.com/risingsun226"
            style={{ marginRight: '13px', marginLeft: '25px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </h2>
        <span className="image-main main">
          <img src={balss} alt="" />
        </span>
        <p>
        常任指揮者の山脇卓也氏と数名が中心となり、2022年春に始動した新進気鋭の混声合唱団。
        <br/>団名はラトビア語で"声"という意味の単語からとったものであり、一人一人の声を大切にし繋げていくという思いが込められている。
        <br/>現在は年齢も出身も様々な約50名が在籍し、毎週土曜昼に練習している。
        <br/>2022年軽井沢国際合唱コンクール金賞。
        </p>
        {close}
      </article>
      <article
        id="tbyc"
        className={`${props.article === 'tbyc' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2>
          Tokyo Bay Youth Choir
          <a
            href="https://twitter.com/TokyoBayYC"
            style={{ marginRight: '13px', marginLeft: '25px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </h2>
        <span className="image-main main">
          <img src={tbyc} alt="" />
        </span>
        <p>
        Tokyo Bay Youth Choir（通称TBYC）はオーストリアで合唱指揮を学んだ谷郁氏のもと、
        20代から30代のメンバーを中心に20名ほどで活動しているちょっぴりオトナなユース合唱団です。
        <br/>ドイツ語圏を中心にヨーロッパで広く歌われている合唱作品を主なレパートリーとしており、
        2021年9月に行われた東京国際合唱コンクールでは室内合唱部門１位をいただきました。
        <br/>今回は公募メンバーを加えた特別編成合唱団として演奏いたします。
        </p>
        {close}
      </article>
      <article
        id="wagner"
        className={`${props.article === 'wagner' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">CONDUCTOR</h2>
        <span className="image-main main">
          <img src={wagner} alt="" />
        </span>
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
      </article>
      <article
        id="concept"
        className={`${props.article === 'concept' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
          {/* <div class="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TMVrcz3AG7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div> */}<h2 className="major">Stage</h2>
          ※マテリアルとなる画像、動画があればここに挿入
          ※背景色要調整？
        
        <p>2023年9月21日、国連が定めた「国際平和デー」に、世界十数カ国の合唱団が24時間リレーで
          Karl Jenkins作曲「The Peacemakers」を演奏するコンサートを開催します。
          あらゆる人種・宗教・文化の人々が共に平和を作ることを表したこの曲を通じて、国籍や文化の違いを超えて平和への願いを共有します。
          日本では、スイス在住のドイツ人指揮者、Dieter Wagnerさんを迎え、
          個性豊かな3つの合唱団によるジョイントコンサートを9月18日（月・祝）に開催します。
          「The Peacemakers」の一部曲目に、珠玉のドイツ作品を加えたプログラムをお送りします。
          このコンサートの抜粋動画を、世界に向けて9月21日（木）に発信します。</p>
        <p>ステージ情報は <a className="use-border" href="javascript:;" onClick={async () => {
          await props.onCloseArticle();
          props.onOpenArticle('explanation');
          }}>こちら</a> から
        </p>
        {close}
      </article>

      <article
      id="explanation"
      className={`${props.article === 'explanation' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Stage</h2>
      ※ステージ順は仮<br></br>
      ※横長の画像があればほしいかも
      <h3>1st Stage: BALSS 単独 </h3>
      <p>
        一言があればここに挿入
      </p>
      <p>
        <b>演奏曲：</b>
        <br></br>「Advent-Motetten op.176」
        <br></br>　1. Ad te levavi
        <br></br>　2. Universi
        <br></br>　3. Ex Sion
        <br></br>　4. Deus tu convertens
        <br></br>　5. Qui sedes
        <br></br>　6. Benedixisti
        <br></br>　7. Rorate coeli
        <br></br>　8. Prope est Domini
        <br></br>　9. Ave Maria
        <br></br>作曲:J.G.Rheinberger
      </p>
      <br></br>
      <h3>CancaoNova</h3>
      <p>
        一言があればここに挿入
      </p>
      <p>
        <b>演奏曲：</b>
        <br></br>・Heinrich Schütz - Viel werden kommen von Morgen und von Abend
        <br></br>・Heinrich Schütz - Sammelt zuvor das Unkraut
        <br></br>・Mendelssohn - Beati Morti
        <br></br>・Schumann - Die Minnesänger
        <br></br>・Richard Strauss - Fröhlich im Maien
        <br></br>・Marcus Ludwig - Tenebrae
      </p>
      <br></br>
      <h3>3rd Stage: Tokyo Bay Youth Choir単独</h3>
      <p>
        一言があればここに挿入
      </p>
      <p>
        <b>演奏曲：</b>
        <br></br>・Jauchzet dem Herrn, alle Welt WoO.28
        <br></br>・3 Psalms op.78
        <br></br>作曲：Felix Mendelssohn Bartholdy
      </p>
      <br></br>
      <h3>4th Stage: 合同演奏</h3>
      <p>
      スイス在住のドイツ人指揮者、Dieter Wagnerさんを迎え、Karl Jenkins作曲「The Peacemakers」を演奏を開催します。
      </p>
      <p>
        <b>演奏曲：</b>
        <br></br>The Peacemakersより - Karl Jenkins
        <br></br>・Peace, Peace!
        <br></br>・Healing light
        <br></br>・Dona nobis pacem
      </p>
      {close}
    </article>

      <article
        id="access"
        className={`${props.article === 'access' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Access</h2>
        <span className="image-main main">
          <img src={access} alt="" />
        </span>
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
      </article>

      <article
        id="ticket"
        className={`${props.article === 'ticket' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Ticket</h2>
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
        デジタルアートと合唱の融合など、新しい演奏会のスタイルを是非とも現場にてお聞き下さい。
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
      </article>
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
