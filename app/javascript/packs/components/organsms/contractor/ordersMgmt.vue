<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>発注管理</h2>
      <table class="table">
        <thead>
          <tr>
            <th>発注日</th>
            <th>発注商品</th>
            <th>発注数量</th>
            <th>発注時価格</th>
            <th>販売会社</th>
            <th>対応状況</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in getItems"
            :key="item.no">
            <td>{{ item.orderDate }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.quantity | omittedText }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.wholesaler }}</td>
            <td>{{ item.status | omittedText }}</td>
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
        {orderDate: '2021年3月17日', name: 'Dフロア', quantity: '2', price: '2', wholesaler: '㈱九鬼商店', status: '発送済'},
        {orderDate: '2021年3月16日', name: 'オフローラ', quantity: '2', price: '7', wholesaler: '㈱九鬼商店', status: '振り込み済'},
        {orderDate: '2021年3月15日', name: 'ここち和座', quantity: '10', price: '20', wholesaler: '田中木材㈲', status: '発送中'},
        {orderDate: '2021年3月17日', name: 'スキスム', quantity: '10', price: '2', wholesaler: 'フロア株式会社', status: '未発送'},
        {orderDate: '2021年3月18日', name: '吉野タイカボード9mm石膏', quantity: '60', price: '建材テック', wholesaler: '400', status: 'キャンセル中'},
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