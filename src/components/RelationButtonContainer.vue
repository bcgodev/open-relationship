<template>
  <div class="Relation-btn-container">
    <RelationButton
      v-for="createItem in showBtnList"
      :key="createItem.id"
      :title="createItem.title"
      :to="createItem.route"
      :dark="dark"
      :type="type"
      :small="small"
      :enable="createItem.enable"
    />
  </div>
</template>

<script>
import RelationButton from "./RelationButton";

export default {
  props: ["type", "filterId", "dark", "btnList", "small"],
  components: {
    RelationButton,
  },
  data() {
    return {
      showBtnList: [],
    };
  },

  methods: {
    relationBtnFilter: function (btnList) {
      return btnList.filter((btn) => {
        return btn.id != this.filterId;
      });
      // return null;
    },
  },

  mounted() {
    const result = this.relationBtnFilter(this.btnList);
    this.showBtnList = result;
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/responsiveMixin.scss";

.Relation-btn-container {
  margin: 10px auto 0;

  width: 100%;
  display: flex;
  flex-direction: column;
  @include atSmall {
    max-width: 500px;
    margin: 10px auto 0;
  }
  @include atLarge {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
  }
}
</style>
