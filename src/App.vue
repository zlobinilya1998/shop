<template>
  <div id="root">
    <HelloWorld />
    <div :key="i" v-for="(item, i) of items">
      <div class="para">{{ i + 1 }} Раздел</div>
      <p
        :key="i"
        class="name"
        @click="addAnswer(name)"
        v-for="(name, i) in item"
      >
        {{ name.name }}
      </p>
    </div>

    <div class="urn" :class="{ active: answers.length !== 0 }">
      {{
        answers.length !== 0
          ? `В вашей корзине ${answers.length} товаров`
          : "В корзине сейчас ничего нет!"
      }}
      <div v-if="answers.length !== 0">
        <p
          :key="i"
          @click="deleteAnswer(i, item)"
          class="name urn__item"
          v-for="(item, i) of answers"
        >
          {{ item.name }}
        </p>
        <div class="urn__price">
          Сумма ваших товаров составит : {{ answersPrice }} руб.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      input: "",
      array: [
        { name: "Dima", completed: false },
        { name: "Ilya", completed: false },
        { name: "Vlad", completed: false },
      ],
    };
  },
  methods: {
    func(index) {
      this.array.splice(index, 1);
    },
    addMsg(str) {
      if (this.input !== "") {
        this.array.push({
          name: str[0].toUpperCase() + str.slice(1),
          completed: false,
        });
        this.input = "";
      }
    },
    switchCompleted(index) {
      this.array[index].completed = !this.array[index].completed;
    },
  },
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
p {
  margin: 0;
}
.para {
  font-size: 25px;
  color: blue;
}
.name {
  font-size: 16px;
  color: black;
  transition: all 0.5s;
  cursor: pointer;
}
.name:hover {
  color: skyblue;
}
.urn {
  width: 400px;
  margin: 0 auto;
  color: red;
  font-size: 20px;
}
.urn.active {
  color: green;
}
.urn__item {
  border: 2px skyblue solid;
}
.urn__price {
  color: black;
  text-align: center;
}
</style>
