<template>
	<div class="footersDiv">
		<div v-show="shopShow">
			<div @click="hide">
				
			</div>
			<ul>
				<li>购物车</li>
				<li>清空</li>
			</ul>
			<ul>
				<li v-for="(val,key) in powers">
					<div v-for="(vals,keys) in val.foods">
						<div>{{ vals.name }}</div>
						<div>
							<span><a>￥</a>{{ vals.price*vals.count }}</span>
							<button @click="vals.count = vals.count==0 ? vals.count : vals.count-1" v-show="vals.count>0">-</button>
							<input v-show="vals.count>0" v-model="vals.count">
							<button @click="vals.count =  vals.count+1">+</button>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="foots">
			<div @click="shows">
				<span class="glyphicon glyphicon-shopping-cart"></span>
			</div>
			<div>
				￥0
			</div>
			<div>
				另需配送费￥4元
			</div>
			<div>
				￥20元起送
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footers',
	data(){
		return{
			shopShow:false,
			powers:[]
		}
	},
	created(){
		this.$http.get('../../static/data.json').then(function(rew){
    	    this.powers=rew.body.goods;
        });
	},
	methods:{
		shows(){
			this.shopShow=true;
		},
		hide(){
			this.shopShow=false;
		}
	}
}
</script>

<style lang="scss">
.footersDiv{
	>div:nth-child(1){
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0.96rem;
		background: rgba(7,17,27,0.6);
			>div:nth-child(1){
				width: 100%;
				position: absolute;
				top: 0;
				bottom: 6.11rem;
			}
			>ul:nth-child(2){
				position: absolute;
				top: 7.25rem;
				width: 100%;
				list-style: none;
				display: flex;
				height: 0.8rem;
				background: #F3F5F7;
				justify-content: space-between;
				padding-left: 0.36rem;
				padding-right: 0.36rem;
				border-bottom: 1px solid rgba(7,17,27,0.1);
				margin-bottom: 0;
				>li{
					font-size: 0.28rem;
					color: rgb(7,17,27);
					font-weight: 200;
					line-height: 0.8rem;
				}
				>li:nth-child(2){
					color: rgb(0,160,220);
				}
			}
			>ul:nth-child(3){
				background: white;
				margin-bottom: 0;
				position: fixed;
				top: 8.05rem;
				bottom: 0.96rem;
				width: 100%;
				overflow: auto;
				/*position: absolute;*/
				>li{
					>div{
						height: 0.96rem;
						background: white;
						margin-left: 0.36rem;
						margin-right: 0.36rem;
						border-bottom: 1px solid rgba(7,17,27,0.1);
						display: flex;
						align-items: center;
						justify-content: space-between;
						>div:nth-child(1){
							font-size: 0.28rem;
							color: rgb(7,17,27);
						}
						>div:nth-child(2){
							>span{
								font-size: 0.28rem;
								color: red;
								font-weight: 700;
								margin-right: 0.28rem;
								>a{
									font-size: 0.2rem;
									color: red;
								}
							}
							>button{
								width: 0.38rem;
								height: 0.38rem;
								background: #00a0dc;
								border-radius: 50%;
								border: 2px solid #00A0DC;
								font-size: 0.48rem;
								line-height: 0.3rem;
								color: white;
							}
							>input{
								display: inline-block;
								font-size: 0.2rem;
								width: 0.48rem;
								color: rgb(147,153,159);
								line-height: 0.48rem;
								text-align: center;
							}
						}
					}
					
				}
			}
	}
	.foots{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.96rem;
		background: #141d27;
		display: flex;
		align-items: center;
		>div:nth-child(1){
			width: 1.16rem;
			height: 1.16rem;
			background: rgba(0,0,0,0.2);
			border-radius: 50%;
			border: 0.12rem solid #141d27;
			margin-bottom: 0.04rem;
			margin-top: -20px;
			margin-left: 0.36rem;
			text-align: center;
			line-height: 1.1rem;
			.glyphicon{
				font-size: 0.4rem;
				color: rgba(255,255,255,0.4);
			}
		}
		>div:nth-child(2){
			font-size: 0.32rem;
			color: rgba(255,255,255,0.4);
			font-weight: 700;
			margin-left: 0.24rem;
			line-height: 0.48rem;
			padding-right: 0.24rem;
			border-right: 1px solid rgba(255,255,255,0.1);
		}
		>div:nth-child(3){
			font-size: 0.18rem;
			color: rgba(255,255,255,0.4);
			font-weight: 200;
			margin-left: 0.24rem;
		}
		>div:nth-child(4){
			font-size: 0.24rem;
			font-weight: 700;
			color: rgba(255,255,255,0.4);
			position: absolute;
			right: 0;
			height: 100%;
			width: 2.1rem;
			background: rgba(0,0,0,0.2);
			text-align: center;
			line-height: 0.96rem;
		}
	}
	
}
</style>