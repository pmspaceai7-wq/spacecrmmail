<template>
	<n-layout class="w-full h-full" has-sider>
		<sidebar></sidebar>
		<n-layout class="content-layout">
			<app-header></app-header>
			<app-main></app-main>
		</n-layout>
	</n-layout>
</template>

<script lang="ts" setup>
import { Sidebar, AppHeader, AppMain } from './components'
</script>

<style lang="scss" scoped>
.content-layout {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
}
</style>
