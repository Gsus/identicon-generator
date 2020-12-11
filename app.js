new Vue({
  el: "#root",
  data: {
    identiconText: "",
  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.identiconText, 200);
    },
  },
  methods: {
    onInput(event) {
      this.identiconText = event.target.value;
    },
  },
});
