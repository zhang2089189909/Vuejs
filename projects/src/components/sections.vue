<template>
	<div class="sectionDiv">
		<ul class="ly">
			<li><router-link to='/goods'>商品</router-link></li>
			<li><router-link to='/ratings'>评价</router-link></li>
			<li><router-link to='/seller'>商家</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
    	name: 'sections'
    }
</script>

<style lang="scss">
	.sectionDiv{
		position: fixed;
		top: 2.68rem;
		width: 100%;
		z-index: -100;
	}
	.ly{
		list-style: none;
		width: 100%;
		height: 0.8rem;
		display: flex;
		font-size: 0.28rem;
		align-items: center;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		margin-bottom: 0;
		>li{
			width: 100%;
			/*height: 100%;*/
			line-height: 0.28rem;
			>a{
				display: inline-block;
				width: 100%;
				height: 0.8rem;
				text-align: center;
				text-decoration: none;
				color: rgb(77,85,93);
				line-height: 0.8rem;
			}
			.router-link-active{
				color: rgb(240,20,20);
			}
		}
	}
</style>