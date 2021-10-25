<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(selection, index) in selections" v-bind:key="selection.value" @click="chooseSelection(index)" :title="selection.label" :class="{active: index === nowIndex}">
        {{ selection.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    selections: {
      type: Array,
      default () {
        return [{
          label: 'test',
          value: 0
        }]
      }
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    chooseSelection (index) {
      this.nowIndex = index
      this.$emit('on-change', this.selections[this.nowIndex])
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
