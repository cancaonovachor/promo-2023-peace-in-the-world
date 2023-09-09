import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import zentai from "../images/zentai-ticc.jpg";
import balss from "../images/balss.jpg";
import tbyc from "../images/tbyc.jpg";
import haishin from "../images/cncn1.0-haishin.jpg";
import nyujo from "../images/nyujo-min.png";
import wagner from "../images/wagner.jpeg";
import access from "../images/access.png";
import Article from "./common/Articles";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../assets/langs/i18n";
import { CustomLink } from "./common/CustomLink";

const Main = (props) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle();
      }}
    ></div>
  );

  const { t } = useTranslation();

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: "flex" } : { display: "none" }}
    >
      <Article
        id="nova"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="CancaoNova"
        image={zentai}
        twitterUrl={"https://twitter.com/cancaonovachor"}
        facebookUrl={"https://ja-jp.facebook.com/cancaonova.chorus/"}
        youtubeUrl={"https://www.youtube.com/channel/UCyySqK-CQoeet4zudxY7dWQ"}
      >
        <Trans i18nKey="novaExp" components={{ p: <p />, br: <br /> }} />
        {close}
      </Article>
      <Article
        id="balss"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="BALSS"
        image={balss}
        twitterUrl={"https://twitter.com/risingsun226"}
      >
        <Trans i18nKey="balssExp" components={{ p: <p />, br: <br /> }} />
        {close}
      </Article>
      <Article
        id="tbyc"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="Tokyo Bay Youth Choir"
        image={tbyc}
        twitterUrl={"https://twitter.com/TokyoBayYC"}
      >
        <Trans i18nKey="tbycExp" components={{ p: <p />, br: <br /> }} />
        {close}
      </Article>
      <Article
        id="wagner"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="CONDUCTOR"
        image={wagner}
      >
        <Trans
          i18nKey="wagnerExp"
          components={{ p: <p />, br: <br />, h3: <h3></h3> }}
        />
        {close}
      </Article>
      <Article
        id="concept"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="CONCEPT"
      >
        <Trans
          i18nKey="concept"
          components={{
            p: <p />,
            br: <br />,
            h3: <h3></h3>,
            customLink: (
              <CustomLink
                onCloseArticle={props.onCloseArticle}
                onOpenArticle={props.onOpenArticle}
              />
            ),
            a: <a></a>,
          }}
        />
        {close}
      </Article>

      <Article
        id="explanation"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="Stage"
      >
        <h3>{t("conductor")}: Dieter Wagner</h3>
        <h3>BALSS</h3>
        <p>・Advent-Motetten op.176 - Josef Rheinberger</p>
        <br></br>
        <h3>CancaoNova</h3>
        <p>
          ・Viel werden kommen von Morgen und von Abend - Heinrich Schütz
          <br></br>・Sammelt zuvor das Unkraut - Heinrich Schütz
          <br></br>・Beati Mortui - Felix Mendelssohn
          <br></br>・Die Minnesänger - Robert Schumann
          <br></br>・Fröhlich im Maien - Richard Strauss
        </p>
        <br></br>
        <h3>Tokyo Bay Youth Choir</h3>
        <p>
          ・Jauchzet dem Herrn, alle Welt WoO.28 - Felix Mendelssohn
          <br></br>・ 3 Psalms op.78 - Felix Mendelssohn
        </p>
        <br></br>
        <h3>{t("joint")}</h3>
        <p>
          ・Karl Jenkins - Peace, Peace!
          <br></br>・Karl Jenkins - Healing light
          <br></br>・Karl Jenkins - Dona nobis pacem
        </p>
        {close}
      </Article>

      <Article
        id="access"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="Access"
        image={access}
      >
        <Trans
          i18nKey="access"
          components={{
            p: <p />,
            br: <br />,
            b: <b></b>,
            h3: <h3></h3>,
            h2: <h2></h2>,
            h1: <h1></h1>,
            span: <span></span>,
          }}
        />
        {close}
      </Article>

      <Article
        id="ticket"
        article={props.article}
        articleTimeout={props.articleTimeout}
        title="Ticket"
      >
        <h3>{t("ticket.concertTicketTitle")}</h3>
        <span className="image-main main">
          <a
            href="https://passmarket.yahoo.co.jp/event/show/detail/02bgiiyenk431.html"
            target="_blank"
          >
            <img src={nyujo} alt="" />
          </a>
        </span>
        <p>
          {t("ticket.concertTicketExp")}
          <a
            className="use-border"
            href="https://passmarket.yahoo.co.jp/event/show/detail/02bgiiyenk431.html"
            target="_blank"
          >
            {t("here")}
          </a>
          <br />
        </p>
        <br />
        <h3>{t("ticket.streamingTicketTitle")}</h3>
        <span className="image-main main">
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/item/357417"
            target="_blank"
          >
            <img src={haishin} alt="" />
          </a>
        </span>
        <p>
          {t("ticket.streamingTicketExp")}
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/item/357417"
            target="_blank"
          >
            {t("here")}
          </a>
          <br />
          {t("ticket.streamingTicketExp2")}
        </p>
        {close}
      </Article>
    </div>
  );
};

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
