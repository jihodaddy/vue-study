<template>
  <div>
    <h1>Bmi Check</h1>
    <label for="height">키(cm)</label>
    <input v-model="height" type="text" />
    <label for="weight">몸무게(kg)</label>
    <input v-model="weight" type="text" />
    <button @click="bmiCheck">체크</button>

    <h2>Bmi 지수 : {{ bmi }}</h2>
    <h2>비만도: {{ bmiDetail }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "",
      weight: "",
      bmi: "",
      bmiDetail: "",
    };
  },
  methods: {
    bmiCheck() {
      this.bmi = this.weight / (this.height / 100);
      this.bmiDetail = this.bmiStatus(this.weight / (this.height / 100));
    },
  },
  computed: {
    bmiStatus(val) {
      let bmiDetail = "";
      switch (val) {
        case val < 20:
          bmiDetail = "저체중";
          break;
        case 20 <= val < 24:
          bmiDetail = "정상";
          break;
        case 25 <= val < 29:
          bmiDetail = "과체중";
          break;
        case val >= 30:
          bmiDetail = "비만";
          break;
      }
      return bmiDetail;
    },
  },
};
</script>

<style lang="scss" scoped></style>
