<template>
	<div class="sellerDiv">
		<div>
			<div>{{ seller.name }}</div>
			<div><span class="glyphicon glyphicon-heart"></span></div>
		</div>
		<div>
			<div>
				<img src="../../resource/img/star36_on@2x.png"/>
				<img src="../../resource/img/star36_on@2x.png"/>
				<img src="../../resource/img/star36_on@2x.png"/>
				<img src="../../resource/img/star36_on@2x.png"/>
				<img src="../../resource/img/star36_off@2x.png"/>
				<span>({{seller.ratingCount}})</span>
				<span>月售{{ seller.sellCount }}单</span>
			</div>
			<div>已收藏</div>
		</div>
		<ul>
			<li>
				<div>起送价</div>
				<div>20<span>元</span></div>
			</li>
			<li>
				<div>商家配送时间</div>
				<div>4<span>元</span></div>
			</li>
			<li>
				<div>平均配送时间</div>
				<div>39<span>分钟</span></div>
			</li>
		</ul>
		<div></div>
		<div>
			<h4>公告与活动</h4>
			<div>{{ seller.bulletin }}</div>
		</div>
		<ul>
			<li>
				<img src="../../resource/img/decrease_4@2x.png" />
				<div>在线支付满28减5，满50减10</div>
			</li>
			<li>
				<img src="../../resource/img/discount_4@2x.png" />
				<div>单人精彩赛</div>
			</li>
			<li>
				<img src="../../resource/img/discount_4@2x.png" />
				<div>清肺雪梨汤8折抢购</div>
			</li>
			<li>
				<img src="../../resource/img/special_4@2x.png"/>
				<div>特价饮品8折抢购</div>
			</li>
			<li>
				<img src="../../resource/img/special_4@2x.png"/>
				<div>单人特色套餐</div>
			</li>
			<li>
				<img src="../../resource/img/invoice_4@2x.png"/>
				<div>该商家支付开发票，请在下单时写好发票</div>
			</li>
			<li>
				<img src="../../resource/img/guarantee_4@2x.png"/>
				<div>已加入'外卖宝'计划，食品安全保障</div>
			</li>
		</ul>
		<div></div>
		<div>商家实景</div>
		<ul>
			<li v-for="(vala,keya) in seller.pics">
				<img :src="vala"/>
			</li>
		</ul>
		<div></div>
		<div>商家信息</div>
		<ul>
			<li v-for="(vall,keyl) in seller.infos">
				<div>{{ vall }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: 'seller',
    data () {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('../../static/data.json').then(function(rew){
    	this.seller=rew.body.seller;
    });
  }
}
</script>

<style lang="scss">
	.sellerDiv{
		position: fixed;
		top: 3.48rem;
		bottom: 1.16rem;
		overflow: auto;
		width: 100%;
		/*padding-left: 0.36rem;
		padding-top: 0.36rem;
		padding-right: 0.36rem;*/
		>div:nth-child(1){
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			margin-top: 0.36rem;
			display: flex;
			justify-content: space-between;
			align-content: center;
			>div:nth-child(1){
				font-size: 0.28rem;
				color: black;
				line-height: 0.48rem;
				padding: 0;
				margin: 0;
			}
			>div:nth-child(2){
				>span{
					font-size: 0.48rem;
					color: rgb(240,20,20);
					line-height: 0.48rem;
					padding: 0;
					margin: 0;
				}
				
			}
		}
		>div:nth-child(2){
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			margin-top: 0.16rem;
			display: flex;
			justify-content: space-between;
			padding-bottom: 0.36rem;
			border-bottom: 1px solid gainsboro;
			>div:nth-child(1){
				margin: 0;
				font-size: 0.2rem;
				color: rgb(77,85,93);
				>img{
					width: 0.3rem;
					height: 0.3rem;
				}
				>span:nth-child(6){
					margin-left: 0.16rem;
				}
				>span{
					margin-left: 0.24rem;
				}
			}
			>div:nth-child(2){
				font-size: 0.2rem;
				color: rgb(77,85,93);
			}
		}
		>ul:nth-child(3){
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			list-style: none;
			display: flex;
			margin-top: 0.36rem;
			margin-bottom: 0.36rem;
			>li{
				width: 100%;
				text-align: center;
				border-right: 1px solid gainsboro;
				>div:nth-child(1){
					font-size: 0.2rem;
					color: rgb(147,153,159);
					line-height: 0.2rem;
					margin-bottom: 0.08rem;
				}
				>div:nth-child(2){
					font-size: 0.48rem;
					color: rgb(7,17,27);
					font-weight: 200;
					line-height: 0.48rem;
					>span{
						font-size: 0.2rem;
					}
				}
			}
			>li:nth-last-child(1){
				border: none;
			}
		}
		>div:nth-child(4),>div:nth-child(7),>div:nth-child(10){
			width: 100%;
			height: 0.32rem;
			background: #f3f5f7;
			border-top: 2px solid #e6e7e8;
			border-bottom: 2px solid #e6e7e8;
			margin-top: 0.36rem;
			margin-bottom: 0.36rem;
		}
		>div:nth-child(5){
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			padding-bottom: 0.32rem;
/*			border-bottom: 1px solid gainsboro;*/
			>h4{
				margin-bottom: 0.16rem;
			}
			>div{
				margin-left: 0.24rem;
				margin-right: 0.24rem;
				font-size: 0.24rem;
				color: rgb(240,20,20);
				line-height: 0.48rem;
			}
		}
		>ul:nth-child(6),>ul:nth-child(12){
			list-style: none;
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			margin-bottom: 0;
			>li{
				padding: 0.24rem 0.32rem;
				display: flex;
				border-top: 1px solid gainsboro;
				align-items: center;
				>img{
					width: 0.32rem;
					height: 0.32rem;
				}
				>div{
					margin-left: 0.12rem;
					color: rgb(7,17,27);
					font-size: 0.24rem;
					line-height: 0.32rem;
					font-weight: 200;
				}
			}
			>li:nth-last-child(1){
				border-bottom: none;
			}
		}
		>div:nth-child(7){
			margin-top: 0;
			margin-bottom: 0;
		}
		>div:nth-child(8),>div:nth-child(11){
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			font-size: 0.28rem;
			line-height: 0.28rem;
			color: rgb(7,17,27);
			margin-top: 0.36rem;
			margin-bottom: 0.24rem;
		}
		>ul:nth-child(9){
			list-style: none;
			margin-left: 0.36rem;
			display: flex;
			>li{
				>img{
					width: 2.4rem;
					height: 1.8rem;
					margin-left: 0.12rem;
				}
			}
		}
		>ul:nth-child(12){
			>li>div{
				font-size: 0.24rem;
				font-weight: 200;
				line-height: 0.32rem;
				color: rgb(7,17,27);
			}
		}
	}
</style>