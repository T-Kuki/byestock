<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>商品管理</h2>
      <table class="table">
        <thead>
          <tr>
            <th>no</th>
            <th>受注先会社</th>
            <th>受注商品</th>
            <th>受注数量</th>
            <th>決済方法</th>
            <th>対応状況</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in getItems"
            :key="item.no">
            <td>{{ item.no }}</td>
            <td>{{ item.contractor }}</td>
            <td>{{ item.name | omittedText }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.bill }}</td>
            <td>{{ item.status }}</td>
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
        {no: '1', contractor: '株式会社wood', name: 'Dフロア', quantity: '2', bill: '銀行振込', status: '未発送'},
        {no: '2', contractor: '株式会社wood', name: 'オフローラ', quantity: '7', bill: '銀行振込', status: '発送済'},
        {no: '3', contractor: '株式会社wood', name: 'ここち和座', quantity: '20', bill: '銀行振込', status: '入金済'},
        {no: '4', contractor: '株式会社wood', name: 'スキスム 巾木', quantity: '2', bill: '銀行振込', status: '未発送'},
        {no: '5', contractor: '株式会社wood', name: 'タイカボード9mm', quantity: '60', bill: '現金払い', status: '未発送'},
      ],
      currentPage: 1,
      perPage: 4,
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