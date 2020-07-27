<template>
  <div class="about">
    <div class="container">
      <div class="about__title">Nebenešioji? Parduok!</div>
      <div class="about__text">
        Esame pasiryžę įrodyti, kad naudotos prekės gali būti tokios pat geros
        kaip ir naujos. Parduok drabužius, kurių jau nebenešioji. Įsigyk tai, ko
        nerasi parduotuvėse. Vinted atviras visiems, kas mano, jog kokybiški
        drabužiai nusipelno tarnauti ilgai.
      </div>
    </div>
    <div>
      <img class="about__image" src="~@/assets/img/home/about.jpg" alt="" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
*{
  background-color: white;
}
  .about {
    &__title {
      margin-top: 250px;
      margin-bottom: 50px;
      font-size: 45px;
    }
    &__text {
      font-size: 25px;
      margin-bottom: 100px;
    }
    &__image {
      width:100%;
    }
  }
</style>
