<template>
  <div class="items">
    <div
      v-for="n of 8"
      :key="n"
      class="l-wrapper card-radius">
      <article class="card">
        <div class="card__header">
          <p class="card__title">
            Lixil Dフロア
          </p>
          <figure class="card__thumbnail">
            <img
              src="https://dubdesign.net/wp-content/uploads/2020/05/0514_inhouse_designereyecatch.jpg"
              alt="サムネイル"
              class="card__image">
          </figure>
        </div>
        <div class="card__body">
          <p class="card__text2">
            これはカード型のデザインです。これはカード型のデザインです。これはカード型のデザインです。これはカード型のデザインです。これはカード型のデザインです。
          </p>
        </div>    
      </article>
    </div>
  </div>    
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.items{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.items:after{
	content:"";
	display:block;
	width: 32%;
	height:0;
}
.l-wrapper {
  margin: 1rem auto;
  width: 27%;
}
.card-radius{
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,.2);
}

.card {
  background-color: #fff;
  box-shadow: 0 0 0px rgba(0, 0, 0, .16);
  color: #212121;
  text-decoration: none;
}

.card__header {
  display: flex;
  flex-wrap: wrap;
}

.card__title {
  padding: .3rem 1rem 0;
  font-size: 1.3rem;
  order: 1;
  font-weight: bold;
  text-decoration: none;
  border-bottom: solid 1px black;

}

.card__thumbnail {
  margin: 0;
  order: 0;
}

.card__image {
  width: 100%;
}

.card__body {
  padding: 0 1.5rem;
}

.card__text {
  font-size: .8rem;
  text-align:center;
  text-decoration: none;
}

.card__text2 {
  font-size: .8rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
}
</style>