<template>
  <div>
    <h1>My blog</h1>

    <h3>{{ fullName }}</h3>

    <div>{{ formalName }}</div>

    <input type="text" v-model="myComputedPresidentName" />

    <h3>대통령 정보: {{ koreanPresidentInfo }}</h3>

    <h1>코로나 종료 세일</h1>
    <div>
      Corona Free Sale
      <s>이전 할인율: {{ oldDiscount }}%</s>
      <strong>현재 할인율: {{ discount }}%</strong>
      <br />
      <a href="#" @click="updateDiscount">할인율 증가</a>
    </div>

    <h1>Apple Sale</h1>
    <div>
      <h4>{{ product.label }}</h4>
      <h5>₩{{ product.price }} (₩ {{ discount }} 할인)</h5>
      <p>
        <a href="#" @click="updatePrice">가격 다운</a>
      </p>
    </div>

    <div class="col">
      <input
        type="text"
        placeholder="가고 싶은 도시"
        v-model="city"
        @keyup="searchMethod"
      />
      <ul>
        <li v-for="(city, i) in cityFilterList" :key="i">
          {{ city }}
        </li>
      </ul>
    </div>
    <div class="col">
      <input type="text" placeholder="살고 싶은 도시" v-model="city2" />
      <ul>
        <li v-for="(city, i) in cityComputedList" :key="i">
          {{ city }}
        </li>
      </ul>
    </div>
    <div class="col">
      <input type="text" placeholder="걷고 싶은 도시" v-model="city3" />
      <ul>
        <li v-for="(city, i) in cityWatchList" :key="i">
          {{ city }}
        </li>
      </ul>
    </div>

    <!-- 오늘의 격언 -->
    <h1>Async fetch</h1>
    <button @click="getApi()">
      {{ loading ? "로딩중..." : "오늘의 격언" }}
    </button>
    <blockquote v-if="quote">
      {{ quote }}
    </blockquote>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      firstName: "석열",
      lastName: "윤",
      title: "대통령",
      surname: "윤석열",
      number: 0, // 몇대 대통령인지?
      oldDiscount: 0,
      discount: 0,
      product: {
        label: "iPhone SE",
        price: 590000,
      },
      cityFilterList: [],
      cityWatchList: [],
      city: "", // 가고 싶은 도시
      city2: "", // 살고 싶은 도시
      city3: "", //걷고 싶은 도시
      cityList: [
        "북경",
        "뉴욕",
        "서울",
        "도쿄",
        "낭뜨",
        "오사카",
        "오산",
        "파리",
        "익산",
        "부산",
      ],
      axiosResponse: {},
      loading: false,
    };
  },
  computed: {
    fullName() {
      return this.lastName + " " + this.firstName;
    },
    formalName() {
      return this.title + " " + this.surname;
    },
    koreanPresidentInfo() {
      return `${this.surname}  ${this.title} (${this.number} 대)`;
    },
    myComputedPresidentName: {
      // getter, setter
      get() {
        return this.surname;
      },
      set(val) {
        this.surname = val;
        this.number = this.callOtherApi(val);
      },
    },
    cityComputedList() {
      return this.cityList.filter((item) => item.includes(this.city2));
    },
    quote() {
      return this.axiosResponse && this.axiosResponse.slip
        ? this.axiosResponse.slip.advice
        : null;
    },
  },
  watch: {
    discount(newVal, oldVal) {
      console.log("discount watching...");
      this.oldDiscount = oldVal;
    },
    "product.price"() {
      this.discount += 100000;
    },
    city3: {
      handler() {
        this.cityWatchList = this.cityList.filter((item) =>
          item.includes(this.city3)
        );
      },
      immediate: true,
    },
  },

  created() {
    this.number = this.callOtherApi("윤석열");
    this.searchMethod();
  },
  methods: {
    callOtherApi(name) {
      let number = 0;
      switch (name) {
        case "이승만":
          number = 1;
          break;
        case "윤보선":
          number = 4;
          break;
        case "이명박":
          number = 17;
          break;
        case "문재인":
          number = 19;
          break;
        case "윤석열":
          number = 20;
          break;
      }

      return number;
    },

    updateDiscount() {
      this.discount += 5;
    },

    updatePrice() {
      if (this.product.price < 100000) return;
      this.product.price -= 100000;
    },

    searchMethod() {
      this.cityFilterList = this.cityList.filter((item) =>
        item.includes(this.city)
      );
    },
    async getApi() {
      this.loading = true;
      return axios.get("https://api.adviceslip.com/advice").then((response) => {
        this.axiosResponse = response.data;
        //this.loading = false;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      });
    },
  },
};
</script>
<style scoped>
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

.col {
  width: 33%;
  height: 100%;
  float: left;
}

blockquote {
  position: relative;
  width: 100%;
  margin: 50px auto;
  padding: 1.2em 30px 1.2em 30px;
  background: #ededed;
  border-left: 8px solid #78c0a8;
  font-size: 24px;
  color: #555555;
  line-height: 1.6;
}
</style>
