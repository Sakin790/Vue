<script>
  export default {
    data() {
      return {
        msg: "hi!",
        checked: true,
        picked: "one",
        selected: "two",
        multiSelect: ["one", "three"],
      };
    },
  };
</script>

<template>
  <div>
    <h1>Form</h1>
    <form>
      <p>
        <input type="text" v-model="msg">
        {{ msg }}
      </p>

      <p>
        <input type="checkbox" v-model="checked">
        {{ checked ? 'yes' : 'no' }}
      </p>

      <p>
        <input type="radio" name="picked" value="one" v-model="picked">
        <input type="radio" name="picked" value="two" v-model="picked">
        {{ picked }}
      </p>

      <p>
        <select v-model="selected">
          <option>one</option>
          <option>two</option>
        </select>
        {{ selected }}
      </p>

      <p>
        <select v-model="multiSelect" multiple>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        {{ multiSelect }} </p>
      <p>Selected value: {{ selected }}</p>
    </form>
  </div>
</template>
