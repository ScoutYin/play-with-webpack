<template>
<div class="hello">
	这是hello 组件
	<br>
	2的立方是 {{ cube(2) }}
</div>
</template>

<script>
import { cube } from '@utils/index'

export default {
	name: 'hello',
	methods: {
		cube
	}
}
</script>

<style lang="scss">
.hello {
	font-size: 20px;
    color: $main;
}
</style>
