<template>
  <div class="hello">
    这是hello
    <br>
    2的立方是 {{ cube(2) }}
    <div class="flex-test">
      <div>1</div>
      <div>2</div>
    </div>
  </div>
</template>

<script>
import { cube } from '@utils/index'

export default {
	name: 'Hello',
	methods: {
		cube
	}
}
</script>

<style lang="scss">
.hello {
	font-size: 20px;
  color: $main;
  transform: translate(20px); // test autoprefixer
  .flex-test {
    display: flex;
  }
}
</style>
