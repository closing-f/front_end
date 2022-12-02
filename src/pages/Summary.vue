<template>
<p>todo</p>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'form',
  computed: {
    ...mapState("form", [
      "summaryList",
    ]),

    summaryList: {
      get() {
        return this.$store.state.form.summaryList;
      },
      set(value) {
        this.$store.commit("form/setSummaryList", value);
      }
    }
  },
}
</script>
