<template>
  <div class="enginer">
    <div class="calculator card">
      <input
        type="text"
        class="calculator-screen"
        v-bind:value="$store.state.Model.expression"
        disabled
      />

      <div class="calculator-btn" @click="pushToScreen($event.target.value)">
        <button type="button" class="operator btn btn-info" value="sin">
          sin( )
        </button>
        <button type="button" class="operator btn btn-info" value="cos">
          cos( )
        </button>
        <button type="button" class="operator btn btn-info" value="tan">
          tg( )
        </button>
        <button type="button" class="operator btn btn-info" value="log">
          ln( )
        </button>

        <button type="button" class="operator btn btn-info" value="+">+</button>
        <button type="button" class="operator btn btn-info" value="-">-</button>
        <button type="button" class="operator btn btn-info" value="*">
          &times;
        </button>
        <button type="button" class="operator btn btn-info" value="/">
          &divide;
        </button>

        <button type="button" value="7" class="btn btn-light waves-effect">
          7
        </button>
        <button type="button" value="8" class="btn btn-light waves-effect">
          8
        </button>
        <button type="button" value="9" class="btn btn-light waves-effect">
          9
        </button>

        <button type="button" value="4" class="btn btn-light waves-effect">
          4
        </button>
        <button type="button" value="5" class="btn btn-light waves-effect">
          5
        </button>
        <button type="button" value="6" class="btn btn-light waves-effect">
          6
        </button>

        <button type="button" value="1" class="btn btn-light waves-effect">
          1
        </button>
        <button type="button" value="2" class="btn btn-light waves-effect">
          2
        </button>
        <button type="button" value="3" class="btn btn-light waves-effect">
          3
        </button>

        <button type="button" value="0" class="btn btn-light waves-effect">
          0
        </button>
        <button
          type="button"
          class="decimal function btn btn-secondary"
          value="."
        >
          .
        </button>
        <button
          type="button"
          class="all-clear function btn btn-danger btn-sm"
          value="all-clear"
        >
          AC
        </button>

        <button
          type="button"
          class="equal-sign operator btn btn-default"
          value="="
        >
          =
        </button>
      </div>
      <router-link to="/" class="btn btn-danger waves-effect router"
        >Убрать инженерные функции
      </router-link>
      <div class="history">
        <div
          class="history-item"
          v-for="(item, i) in $store.state.Model.history"
          v-bind:key="i"
        >
          {{ item }}
        </div>
      </div>
      <button
        class="btn btn-danger waves-effect router"
        @click="clearHistory()"
      >
        Очистить историю
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "enginer",
  components: {},
  created() {
    this.$store.commit("DOWNLOAD_HISTORY");
  },
  methods: {
    pushToScreen(item) {
      if (item != undefined) {
        if (item == "all-clear") {
          this.$store.dispatch("CLEAR");
        } else if (item == "=") {
          this.$store.dispatch("CALCULATE");
        } else {
          this.$store.dispatch("PUSH", item);
        }
      }
    },
    clearHistory() {
      this.$store.commit("CLEAR_HISTORY");
    },
  },
};
</script>
<style scoped>
.router {
  margin-top: 10px;
}
.enginer {
  height: 100vh;
  text-align: center;
}
.history {
  background-color: aliceblue;
  color: black;
  font-size: 20px;
  font-weight: 600;
  height: 200px;
  margin-top: 10px;

  overflow: auto;
}
.history-item {
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>