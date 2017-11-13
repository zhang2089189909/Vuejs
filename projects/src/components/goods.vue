<template>
	<div class="goodsDiv">
		<ul>
			<li>
				<div v-for="(val,key) in goods">
					<a @click="selects(key)">{{ val.name }}</a>
				</div>
			</li>
			<li>
				<div v-for="(vall,keyy) in goods" v-show=" isA==keyy ">
					<div><span></span><h3>{{ vall.name }}</h3></div>
					<ol> 	
						<li v-for="(vals,keys) in vall.foods">
							<div><img :src="vals.icon" @click="shows"/></div>
							<div>
								<div>{{ vals.name }}</div>
								<div>{{ vals.description }}</div>
								<div>月售{{ vals.sellCount }}份<span>好评{{ vals.rating }}%</span></div>
								<div>
									<span><a>￥</a>{{ vals.price }}</span> 
									<span v-show="vals.oldPrice">￥{{ vals.oldPrice }}</span>
									<p>
										<button @click="vals.count = vals.count==0 ? vals.count : vals.count-1" v-show="vals.count>0" class="btn1">-</button>
										<input v-show="vals.count>0" v-model="vals.count">
										<button @click="vals.count =  vals.count+1" class="btn2">+</button>
									</p>
								</div>
							</div>
						</li>
					</ol>
					<div class="food" v-for="(vals,keys) in vall.foods" v-show="xiangQing" >
						<div>
							<img :src="vals.image" @click="showa"/>
						</div>
						<div>
							<div>{{ vals.name }}</div>
							<div>月售{{ vals.sellCount }}份<span>好评{{ vals.rating }}%</span></div>
						</div>
						<div>
							<div>
								<span><a>￥</a>{{ vals.price }}</span> 
								<span v-show="vals.oldPrice">￥{{ vals.oldPrice }}</span>
							</div>
							<div>加入购物车</div>
						</div>
						<div></div>
						<div>商品介绍</div>
						<div>{{ vals.info }}</div>
						<div></div>
						<div>商品评价</div>
						<ul>
							<li>全部<span>57</span></li>
							<li>推荐<span>47</span></li>
							<li>吐槽<span>10</span></li>
						</ul>
						<div>
							<span class="glyphicon glyphicon-ok"></span>只看有内容的评价
						</div>
						<ul>
							<li v-for="(a,b) in vals.ratings">
								<div>
									<div>{{ a.rateTime }}</div>
									<div>{{ a.username }}<img :src="a.avatar"/></div>
								</div>
								<div><span class="glyphicon glyphicon-thumbs-up"></span>{{ a.text }}</div>
							</li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
	
		
	</div>
</template>

<script>
export default {
	name: 'goods',
	data () {
	    return {
	      goods: [],
	      val:[],
	      xiangQing:false,
	      isA:false
	    };
	},
    created () {
        this.$http.get('../../static/data.json').then(function(rew){
    	    this.goods=rew.body.goods;
        });
    },
    methods:{
		shows(){
			this.xiangQing=true
		},
		showa(){
			this.xiangQing=false
		},
		selects(cur){
			this.isA=cur;
		}
	}
}
</script>

<style lang="scss">
	.goodsDiv{
		/*position: fixed;
		top: 3.48rem;
		bottom: 1.16rem;*/
		
		display: flex;
		>ul:nth-child(1){
			list-style: none;
			/*width: 1.6rem;*/
			overflow: auto;
			position: fixed;
			top: 3.48rem;
			bottom: 1.16rem;
			/*display: flex;*/
			>li:nth-child(1){
				z-index: -100;
				>div{
					>a{
						display: flex;
						align-items: center;
						width: 1.6rem;
						height: 1.08rem;
						background: #f3f5f7;
						font-size: 0.24rem;
					    color: black;
					    line-height: 0.28rem;
					    padding-left: 0.24rem;
					    padding-right: 0.24rem;
					    border-bottom: 1px solid rgba(1,17,27,0.1);
					}
				}
			}	/*
				>div:nth-child(2){*/
			>li:nth-child(2){
				
				position: fixed;
				top: 3.48rem;
				bottom: 1.16rem;
				left: 1.7rem;
				right: 0;
				overflow: auto;
				>div{
					>div:nth-child(1){
						z-index: -100;
						height: 0.52rem;
						width: 100%;
						background: #F3F5F7;
						display: flex;
						align-items: center;
						>span{
							display: inline-block;
							width: 0.04rem;
							height: 0.52rem;
							background: #d9dde1;
						}
						>h3{
							font-size: 0.24rem;
							color: rgb(147,153,159);
							margin: 0;
							margin-left: 0.28rem;
						}
					}
					>ol{
						list-style: none;
						z-index: -100;
						>li{
							display: flex;
							margin-left: 0.36rem;
							margin-top: 0.36rem;
							margin-right: 0.36rem;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							>div:nth-child(1){
								>img{
									width: 1.14rem;
									height: 1.14rem;
								}
							}
							>div:nth-child(2){
								margin-left: 0.2rem;
								>div:nth-child(1){
									font-size: 0.28rem;
									color: rgb(7,17,27);
									margin-top: 0.04rem;
									margin-bottom: 0;
									padding: 0;
									height: 0.28rem;
								}
								>div:nth-child(2),>div:nth-child(3){
									font-size: 0.2rem;
									margin-top: 0.16rem;
									color: rgb(147,153,159);
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									/*width: 100%;*/
									margin-bottom: 0;
									padding: 0;
									height: 0.25rem;
								}
								>div:nth-child(4){
									display: flex;
									align-items: center;
									/*justify-content: space-between;*/
									>span:nth-child(1){
										color: red;
										font-size: 0.28rem;
										font-weight: 700;
										line-height: 0.48rem;
										>a{
											color: red;
											font-size: 0.2rem;
										}
									}
									>span:nth-child(2){
										font-size: 0.2rem;
										color: rgb(147,153,159);
										font-weight: 700;
										line-height: 0.48rem;
										margin-left: 0.16rem;
									}
									>p{
										position: absolute;
										right: 0.36rem;
										display: flex;
										align-items: center;
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
				}
				
			}				
		}
		.food{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 1.16rem;
			background: white;
			overflow: auto;
			z-index: 100;
			>div:nth-child(1){
				>img{
					width: 100%;
					height: 7.5rem;
					z-index: 1000;
				}
			}
			>div:nth-child(2){
				margin-left: 0.36rem;
				margin-right: 0.36rem;
				margin-top: 0.36rem;
				>div:nth-child(1){
					font-size: 0.28rem;
					color: rgb(7,17,27);
					font-weight: 700;
					line-height: 0.28rem;
				}
				>div:nth-child(2){
					margin-top: 0.24rem;
					font-size: 0.20rem;
					color: rgb(147,153,159);
					line-height: 0.2rem;
					>span{
						margin-left: 0.24rem;
					}
				}
			}
			>div:nth-child(3){
				margin-top: 0.36rem;
				margin-left: 0.36rem;
				margin-right: 0.36rem;
				display: flex;
				justify-content: space-between;
				>div:nth-child(1){
					>span{
						font-size: 0.28rem;
						color: red;
						font-weight: 700;
						>a{
							color: red;
							font-size: 0.2rem;
						}
					}
				}
				>div:nth-child(2){
					width: 1.48rem;
					height: 0.48rem;
					color: white;
					background: #00A0DC;
					border-radius: 0.24rem;
					font-size: 0.2rem;
					line-height: 0.24rem;
					text-align: center;
					line-height: 0.48rem;
				}
			}
			>div:nth-child(4),>div:nth-child(7){
				width: 100%;
				margin-top: 0.36rem;
				margin-bottom: 0.36rem;
				background: #F3F5F7;
				border-top: 1px solid rgba(7,17,27,0.1);
				border-bottom: 1px solid rgba(7,17,27,0.1);
				height: 0.32rem;
			}
			>div:nth-child(5),>div:nth-child(8){
				font-size: 0.28rem;
				margin-left: 0.36rem;
				margin-bottom: 0.12rem;
			}
			>div:nth-child(6){
				font-size: 0.24rem;
				line-height: 0.48rem;
				color: rgb(77,85,93);
				font-weight: 200;
				margin-left: 0.52rem;
				margin-right: 0.52rem;
			}
			>ul:nth-child(9){
				list-style: none;
				display: flex;
				margin-left: 0.36rem;
				margin-right: 0.36rem;
				margin-top: 0.36rem;
				margin-bottom: 0;
				padding-bottom: 0.36rem;
				border-bottom:1px solid gainsboro ;
				>li{
					width: 1.2rem;
					height: 0.64rem;
					text-align: center;
					line-height: 0.64rem;
					font-size: 0.24rem;
					margin-right: 0.16rem;
					border-radius: 0.02rem;
					>span{
						font-size: 0.2rem;
						margin-left: 0.08rem;
					}
				}
				>li:nth-child(1){
					background: rgb(0,160,220);
					color: white;
				}
				>li:nth-child(2){
					background: rgba(0,160,220,0.2);
					color: rgb(77,85,93);
				}
				>li:nth-child(3){
					background: rgba(77,85,93,0.2);
					color: rgb(77,85,93);
				}
			}
			>div:nth-child(10){
				/*height: 0.97rem;*/
				padding: 0.24rem 0 0.24rem 0.36rem;
				font-size: 0.24rem;
				color: grey;
				/*line-height: 0.97rem;*/
				border-bottom: 1px solid gainsboro;
				>span{
					margin-right: 0.12rem;
				}
			}
			>ul:nth-child(11){
				list-style: none;
				>li{
					padding: 0.32rem 0;
					margin: 0 0.36rem;
					border-bottom: 1px solid rgba(7,17,27,0.1);
					>div:nth-child(1){
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 0.2rem;
						color: rgb(147,153,159);
						line-height: 0.24rem;
						margin-bottom: 0.12rem;
						>div:nth-child(2){
							>img{
								margin-left: 0.12rem;
								height: 0.24rem;
								width: 0.24rem;
								border-radius: 50%;
							}
						}
					}
					>div:nth-child(2){
						font-size: 0.24rem;
						color: rgb(7,17,27);
						line-height: 0.32rem;
						>span{
							color: rgb(0,160,220);
							line-height: 0.48rem;
							margin-right: 0.08rem;
						}
					}
				}
			}
		}
	}
</style>