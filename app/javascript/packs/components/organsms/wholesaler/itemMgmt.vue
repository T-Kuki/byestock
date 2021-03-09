<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>商品管理</h2>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>メーカー</th>
            <th>商品名</th>
            <th>数量</th>
            <th>価格</th>
            <th>商品詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in getItems"
            :key="item.no">
            <td>{{ item.no }}</td>
            <td>{{ item.maker }}</td>
            <td>{{ item.name | omittedText }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.detail | omittedText }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <paginate
      :page-count="getPaginateCount"
      :prev-text="'<'"
      :next-text="'>'"
      :click-handler="paginateClickCallback"
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :first-last-button="true"
      :first-button-text="'<<'"
      :last-button-text="'>>'" />
  </div>
</template>

<script>
export default {
  filters: {
    omittedText(text) {
      // 11文字目以降は"…"
      return text.length > 15 ? text.slice(0, 15) + '…' : text
    }
  },
  data: function() {
    return {
      items: [
        {no: '1', maker: 'LIXIL', name: 'Dフロア', quantity: '2', price: '3000', detail: '厚さ(mm)12 シリーズラシッサ 長さ(mm)1818 幅(mm)303 仕様耐干割れ処理'},
        {no: '2', maker: 'Panasonic', name: 'オフローラ', quantity: '7', price: '200,000', detail: '厚さ(mm)12 シリーズラシッサ 長さ(mm)1818 幅(mm)303 仕様耐干割れ処理'},
        {no: '3', maker: '大建', name: 'ここち和座', quantity: '20', price: '5,900', detail: '厚さ(mm)12 シリーズラシッサ 長さ(mm)1818 幅(mm)303 仕様耐干割れ処理'},
        {no: '4', maker: '永大', name: 'スキスム 巾木', quantity: '2', price: '2,500', detail: '厚さ(mm)12 シリーズラシッサ 長さ(mm)1818 幅(mm)303 仕様耐干割れ処理'},
        {no: '5', maker: '吉野石膏', name: 'タイカボード9mm', quantity: '60', price: '400', detail: '厚さ(mm)12 シリーズラシッサ 長さ(mm)1818 幅(mm)303 仕様耐干割れ処理'},
      ],
      currentPage: 1,
      perPage: 2,
    }
  },
  computed: {
    getItems: function () {
      let start = (this.currentPage - 1) * this.perPage
      let end = this.currentPage * this.perPage
      return this.items.slice(start, end)
    },
    getPaginateCount: function () {
      return Math.ceil(this.items.length / this.perPage)
    },
  },
  methods: {
    paginateClickCallback: function (pageNum) {
      this.currentPage = Number(pageNum)
    },
  },
}
</script>

<style>
.items{
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 20px;
  justify-content: space-around;

}
.l-wrapper {
  margin: 1rem auto;
  width: 100%;
}
.table{
  border-collapse: collapse;
  width: 100%;
}
thead{
  background-color: #0678DB;
}
th, td{
  border: 1px #808080 solid;
  padding: .8rem;
}
tr:hover {
  background: #D3EEFC;
}
.pagination {
  list-style: none;
  margin: 0;
  display: flex;
}
.page-item {
  margin: 0 1px;
  padding: 1rem;
}
.page-link{
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px
}
</style>