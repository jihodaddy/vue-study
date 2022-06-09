<template>
  <div>월 할부금: {{ monthly }}</div>
  <div>메세지: {{ msg }}</div>
</template>

<script>
export default {
  // props: ["principal", "rate", "period"],
  props: {
    msg: {
      type: [String, Number],
    },
    principal: {
      type: Number,
    },
    rate: {
      type: Number,
    },
    period: {
      type: Number,
    },
  },
  computed: {
    monthly() {
      const m_rate = parseFloat(this.rate) / 12 / 100;
      return (
        (parseInt(this.principal) *
          m_rate *
          Math.pow(1 + m_rate, parseInt(this.period))) /
        Math.pow((1 + m_rate, parseInt(this.period)) - 1)
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
