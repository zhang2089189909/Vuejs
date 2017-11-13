<template>
	<div class="headerDiv">
		<ul>
			<li>
				<img :src="seller.avatar"/>
			</li>
			<li>
				<div><img src="../../resource/img/brand@2x.png"/><span>{{ seller.name }}</span></div>
				<div>{{ seller.description }}{{ seller.deliveryTime }}</div>
				<div>
					<p><img src="../../resource/img/decrease_1@2x.png"/><span>{{ seller.supports[0].description }}，满50减10</span></p>
				</div>
			</li>
			<li>
				<p @click="defaultShow">5个<span>></span></p>
			</li>
		</ul>
		<div @click="defaultShow">
			<img src="../../resource/img/bulletin@2x.png"/>
			<span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺…<span>></span></span>
		</div>
		<div class="default" v-show="defaults">
			<div>粥品香坊</div>
			<ul>
				<li><img src="../../resource/img/star48_on@2x.png"/></li>
				<li><img src="../../resource/img/star48_on@2x.png"/></li>
				<li><img src="../../resource/img/star48_on@2x.png"/></li>
				<li><img src="../../resource/img/star48_on@2x.png"/></li>
				<li><img src="../../resource/img/star48_off@2x.png"/></li>
			</ul>
			<div>
				<p></p>
				<p>优惠信息</p>
				<p></p>
			</div>
			<ul>
				<li><img src="../../resource/img/decrease_2@2x.png"/>在线支付满28减5，满50减10</li>
				<li><img src="../../resource/img/discount_2@2x.png"/>单人精彩赛</li>
				<li><img src="../../resource/img/discount_2@2x.png"/>清肺雪梨汤8折抢购</li>
				<li><img src="../../resource/img/special_2@2x.png"/>特价饮品8折抢购</li>
				<li><img src="../../resource/img/special_2@2x.png"/>单人特色套餐</li>
			</ul>
			<div>
				<p></p>
				<p>商家公告</p>
				<p></p>
			</div>
			<div>
				{{ seller.bulletin }}
			</div>
			<div @click="defaultClose">
				<span class="glyphicon glyphicon-remove"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'headers',
  data () {
    return {
      seller: {},
      defaults:false
    };
  },
  methods:{
  	defaultShow(){
  		this.defaults=true
  	},
  	defaultClose(){
  		this.defaults=false
  	}
  },
  created () {
    this.$http.get('../../static/data.json').then(function(rew){
    	this.seller=rew.body.seller;
    });
  }
}
</script>

<style lang="scss">
	.headerDiv{
		width: 100%;
		background-image:url(../assets/avatar拷贝.png) ;
		position: fixed;
		top: 0;
		/*z-index: -100;*/
		>ul{
			list-style: none;
			display: flex;
			z-index: -100;
			>li:nth-child(1){
				>img{
					width: 1.28rem;
					height: 1.28rem;
					border-radius: 4px;
					margin-left: 0.48rem;
					margin-top: 0.48rem;
				}
			}
			>li:nth-child(2){
				margin-left: 0.32rem;
				margin-top: 0.52rem;
				>div:nth-child(1){
					display: flex;
					height: 0.32rem;
					align-items: center;
					>img{
						width: 0.6rem;
						height: 0.36rem;
					}
					>span{
						font-size: 0.32rem;
						color: white;
						font-weight: bold;
						margin-left: 0.12rem;
					}
				}
				>div:nth-child(2){
					margin-top: 0.16rem;
					font-size: 0.24rem;
					color: rgb(255,255,255);
					font-weight: 200;
					line-height: 0.24rem;
				}
				>div:nth-child(3){
					width: 100%;
					margin-top: 0.2rem;
					font-size: 0.2rem;
					>p:nth-child(1){
						display: flex;
						align-items: center;
						>span{
							color: white;
							margin-left: 0.08rem;
							font-weight: 200;
						}
						>img{
							width: 0.24rem;
							height: 0.24rem;
						}
					}
				}
			}
			>li:nth-child(3){
				>p{
					font-size: 0.2rem;
					color: white;
					font-weight: 200;
					padding-left: 0.16rem;
					padding-right: 0.16rem;
					height: 0.48rem;
					background: rgba(0,0,0,0.2);
					line-height: 0.48rem;
					border-radius: 50px;
					position: absolute;
					right: 0.24rem;
					top: 1.34rem;
					>span{
						margin-left: 0.04rem;
					}
				}
			}
		}
		>div:nth-child(2){
			width: 100%;
			height: 0.56rem;
			background: rgba(7,17,27,0.2);
			font-size: 20px;
			color: white;
			font-weight: 200;
			display: flex;
			align-items: center;
			margin-top: 0.2rem;
			>img{
				margin-left: 0.24rem;
				width: 0.44rem;
				height: 0.24rem;
			}
			>span{
				margin-left: 0.08rem;
				font-size: 0.2rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				>span{
					margin-left: 0.08rem;
				}
			}
		}
		.default{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(7,17,27,0.8);
			z-index: 100;
			overflow: auto;
			>div:nth-child(1){
				text-align: center;
				font-size: 0.32rem;
				color: white;
				font-weight: 700;
				margin-top: 1.28rem;
			}
			>ul:nth-child(2){
				list-style: none;
				display: flex;
				text-align: center;
				justify-content: center;
				margin-top: 0.32rem;
				height: 0.48rem;
				align-items: center;
				>li{
					>img{
						margin-left: 20px;
						margin-right: 20px;
					}
				}
			}
			>div:nth-child(3),>div:nth-child(5){
				margin-left: 0.72rem;
				margin-right: 0.72rem;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 0.56rem;
				>p:nth-child(1),>p:nth-child(3){
					width: 2.24rem;
					height: 1px;
					background: rgba(255,255,255,0.2);
				}
				>p:nth-child(2){
					color: white;
					font-size: 0.26rem;
					font-weight: 700;
					margin-left: 0.24rem;
					margin-right: 0.24rem;
				}
			}
			>ul:nth-child(4){
				list-style: none;
				margin-left: 0.96rem;
				margin-top: 0.48rem;
				>li{
					font-size: 0.24rem;
					color: white;
					font-weight: 200;
					margin-bottom: 0.12rem;
					>img{
						margin-right: 0.12rem;
					}
				}
			}
			>div:nth-child(5){
				margin-top: 0.44rem;
			}
			>div:nth-child(6){
				font-size: 0.24rem;
				font-weight: 200;
				color: white;
				margin-left: 0.96rem;
				margin-right: 0.96rem;
				line-height: 0.48rem;
				margin-top: 0.48rem;
			}
			>div:nth-child(7){
				width: 100%;
				/*height: 100px;
				background-color: rgba(7,17,27,0.8);*/
				position: relative;
				bottom: 0;
				margin-bottom: 1rem;
				text-align: center;
				.glyphicon{
					font-size: 0.64rem;
					color: rgba(255,255,255,0.5);
				}
			}
		}
	}
	
</style>