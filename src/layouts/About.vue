<template>
  <div id="About">
    <div class="section-title" id="About-title">| 計畫緣起 |</div>
    <div id="About-content">
      <p>
        2018 年，READr
        的成員在不同的場合、不約而同地聽到國際的公眾人物關係資料計畫（Open Data
        Standards for Persons, Posts and Organizations to track PEPs,
        Popolo），該計畫非常簡單，就是使用一樣的資料格式，匯集散落在不同地方的公開資料。
      </p>
      <br />
      <p>
        資料的來源可能是政府網站、新聞、或法定公開卻未在網上公開的資料；資料的範疇包括公眾人物的學歷、經歷、資產、政治獻金、學術論文、報告、親戚關係（註）、甚至說過的每一句話。我們希望把散落在四處的公開資料連成線，再將線織成一張細密的網，這一切都需要你的幫忙，你可以透過新增資料或是驗證資料來加入這項計畫！
      </p>
      <br />
      <p>
        註：《公務人員法》載明二親等為應迴避之親屬關係範圍，因此本計畫將親戚關係也納入資料蒐集的範圍。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/responsiveMixin.scss";

#About {
  width: 100%;
  background-color: #ebebeb;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #About-title {
    color: #000000;
  }

  #About-content {
    // width: 800px;
    // height: 168px;
    width: 280px;
    font-family: PingFangTC;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: justify;
    color: #000000;
  }

  @include atSmall {
    padding: 50px 115px;
    #About-content {
      width: 400px;
    }
  }
  @include atMedium {
    #About-content {
      width: 600px;
    }
  }
  @include atLarge {
    #About-content {
      width: 800px;
    }
  }
}
</style>
