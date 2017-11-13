<template>
	<div class="ratingDiv">
		<div>
			<div>
				<p>{{ seller.score }}</p>
				<p>综合评分</p>
				<p>高于周边商家{{ seller.rankRate }}%</p>
			</div>
			<div>
				<p>
					<span>服务态度 </span>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_off@2x.png"/>
					<span>{{ seller.serviceScore }}</span>
				</p>
				<p>
					<span>食物评分</span>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_on@2x.png"/>
					<img src="../../resource/img/star36_off@2x.png"/>
					<span>{{ seller.foodScore }}</span>
				</p>
				<p><span>送达时间</span><span>{{ seller.minPrice }}分钟送达</span></p>
			</div>
		</div>
		<div></div>
		<ul>
			<li>全部<span>57</span></li>
			<li>满意<span>47</span></li>
			<li>不满意<span>10</span></li>
		</ul>
		<div>
			<span class="glyphicon glyphicon-ok"></span>只看有内容的评价
		</div>
		<ul>
			<li v-for="(val,key) in ratings">
				<div><img :src="val.avatar"/></div>
				<div>
					<div><p>{{ val.username }}</p><p>{{ val.rateTime }}</p></div>
					<div><span>{{ val.deliveryTime }}分钟送达</span></div>
					<div>{{ val.text }}</div>
					<div>
						<i class="glyphicon glyphicon-thumbs-up"></i>
						<span v-for="(vals,key) in val.recommend">{{ vals }}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ratings',
	data () {
	    return {
	        seller: {},
	        ratings:[]
	    };
	},
	created () {
	    this.$http.get('../../static/data.json').then(function(rew){
	    	this.seller=rew.body.seller;
	    	this.ratings=rew.body.ratings;
//	    	console.log(this.ratings);
	    });
	}
}
</script>

<style lang="scss">
	.ratingDiv{
		position: fixed;
		top: 3.48rem;
		bottom: 1.16rem;
		overflow: auto;
		>div:nth-child(1){
			width: 100%;
			display: flex;
			margin-top: 0.36rem;
			
			>div:nth-child(1){
				width: 2.75rem;
				text-align: center;
				border-right: 1px solid gainsboro;
				>p:nth-child(1){
					font-size: 0.48rem;
					color: rgb(255,153,0);
					line-height: 0.56rem;
					margin: 0;
					margin-bottom: 0.12rem;
				}
				>p:nth-child(2){
					font-size: 0.24rem;
					color: black;
					line-height: 0.24rem;
					margin: 0;
					margin-bottom: 0.16rem;
				}
				>p:nth-child(3){
					font-size: 0.2rem;
					color: gray;
					line-height: 0.2rem;
					margin: 0;
					margin-bottom: 0.12rem;
				}
			}
			>div:nth-child(2){
				width: 4.74rem;
				margin-left: 0.48rem;
				>p{
					margin: 0;
					margin-bottom: 0.16rem;
					>span:nth-child(1){
						font-size: 0.24rem;
						color: rgb(7,17,27);
						line-height: 0.36rem;
						margin-right: 0.24rem;
					}
					>img{
						width: 0.3rem;
						height: 0.3rem;
					}
					>span:nth-last-child(1){
						margin-left: 0.24rem;
						color: rgb(255,153,0);
						font-size: 0.24rem;
						line-height: 0.36rem;
					}
				}
				>p:nth-last-child(1){
					>span:nth-last-child(1){
						color: rgb(147,153,159);
					}
				}
			}
		}
		>div:nth-child(2){
			width: 100%;
			height: 0.32rem;
			background: #f3f5f7;
			border-top: 2px solid #e6e7e8;
			border-bottom: 2px solid #e6e7e8;
			margin-top: 0.36rem;
			margin-bottom: 0.36rem;
		}
		>ul:nth-child(3){
			list-style: none;
			padding-bottom: 0.36rem;
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			border-bottom: 1px solid gainsboro;
			display: flex;
			margin-bottom: 0;
			>li{
				width: 1.2rem;
				height: 0.64rem;
				text-align: center;
				line-height: 0.64rem;
				font-size: 0.23rem;
				border-radius: 1px;
				margin-right: 0.16rem;
				>span{
					font-size: 0.12rem;
				}
			}
			>li:nth-child(1){
				background: #00a0dc;
				color: white;
			}
			>li:nth-child(2){
				background: #ccecf8;
				color: black;
			}
			>li:nth-child(3){
				background: #e9ebec;
				color: black;
			}
		}
		>div:nth-child(4){
			height: 0.97rem;
			padding-left: 0.36rem;
			font-size: 0.24rem;
			color: grey;
			line-height: 0.97rem;
			border-bottom: 1px solid gainsboro;
			>span{
				margin-right: 0.12rem;
			}
		}
		>ul:nth-child(5){
			list-style: none;
			margin-left: 0.36rem;
			margin-right: 0.36rem;
			>li{
				display: flex;
				margin-top: 0.36rem;
				margin-right: 0.36rem;
				>div:nth-child(1){
					>img{
						width: 0.56rem;
						height: 0.56rem;
						border-radius: 50%;
					}
				}
				>div:nth-child(2){
					margin-left: 0.24rem;
					>div:nth-child(1){
						width: 100%;
						display: flex;
						justify-content: space-between;
						>p:nth-child(1){
							margin: 0;
							font-size: 0.2rem;
							line-height: 0.24rem;
						}
						>p:nth-child(2){
							position: absolute;
							right: 0.72rem;
							font-size: 0.2rem;
							line-height: 0.24rem;
							margin: 0;
							color: rgb(147,153,159);
							font-weight: 200;
						}
					}
					>div:nth-child(2){
						margin: 0;
						margin-top: 0.08rem;
						font-size: 0.2rem;
						color: rgb(147,153,159);
						font-weight: 200;
						line-height: 0.24rem;
					}
					>div:nth-child(3){
						margin: 0;
						margin-top: 0.12rem;
						font-size: 0.24rem;
						color: rgb(7,17,27);
						line-height: 0.36rem;
					}
					>div:nth-child(4){
						margin-top: 0.16rem;
						display: flex;
						align-items: center;
						>i:nth-child(1){
							font-size: 0.24rem;
							color: rgb(0,160,220);
							line-height: 0.32rem;
						}
						>span{
							display: inline-block;
							width: 1.24rem;
							font-size: 0.18rem;
							color: rgb(147,153,159);
							line-height: 0.32rem;
							padding-left: 0.12rem;
							padding-right: 0.12rem;
							margin-left: 0.16rem;
							border: 1px solid rgba(7,17,27,0.1);
							border-radius: 0.02rem;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}
</style>