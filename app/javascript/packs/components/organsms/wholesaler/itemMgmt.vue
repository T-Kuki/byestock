<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>商品管理</h2>
      <MyButton
        type="info"
        float="right"
        @buttonClick="newItem">
        商品追加
      </MyButton>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>メーカー</th>
            <th>商品名</th>
            <th>数量</th>
            <th>価格</th>
            <th>商品詳細</th>
            <th style="width: 18%;">
              管理
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in getItems"
            :key="item.id">
            <td>{{ item.no }}</td>
            <td>{{ item.maker }}</td>
            <td>{{ item.name | omittedText }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.detail | omittedText }}</td>
            <td>
              <MyButton
                type="success"
                size="small"
                @buttonClick="editItem(item.id)">
                編集
              </MyButton>
              <MyButton
                type="danger"
                size="small">
                削除
              </MyButton>
            </td>
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
import MyButton from '../../atoms/button'
import axios from 'axios'
export default {
  components: {
    MyButton
  },
  filters: {
    omittedText(text) {
      if (text){
        return text.length > 15 ? text.slice(0, 15) + '…' : text
      }
    }
  },
  data: function() {
    return {
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },
  computed: {
    currentWholesaler() {
      return this.$store.state.data
    },
    getItems: function () {
      let start = (this.currentPage - 1) * this.perPage
      let end = this.currentPage * this.perPage
      return this.items.slice(start, end)
    },
    getPaginateCount: function () {
      return Math.ceil(this.items.length / this.perPage)
    },
  },
  beforeMount () {
    axios
      .get(`/api/v1/wholesalers/${this.currentWholesaler.id}.json`, {headers: this.$store.state.headers, data: {} })
      .then(response => this.items = response.data)
  },
  methods: {
    paginateClickCallback: function (pageNum) {
      this.currentPage = Number(pageNum)
    },
    newItem() {
      this.$router.push({ name: 'newItem'})
    },
    editItem(getItemId) {
      console.log('取得したID: '+getItemId)
      this.$router.push({ name: 'editItem', params: { itemId: getItemId }})
    }
  },
}
</script>

<style>
.items{
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
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