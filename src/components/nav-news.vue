<template lang="pug">
	.categories-nav
		ul
			li.active 全部
			each a in ['比赛','装备','训练','运动集','视频']
				li= a
</template>

<style lang='less' scoped>
@nav-height:40px;
@nav-width:80px;
@ul-width:@nav-width*7;
.categories-nav{
    position: sticky;
    top: 3px;
    z-index: 8;
    margin-top: -10px;
    width: 100%;
    height: @nav-height;
    overflow-x: scroll;
    ul {
        width: @ul-width;
        list-style: none;
        li{
            float:left;
            width:@nav-width;
            line-height: @nav-height;
            &.active{
                font-weight: bold;
                color: #ff5000;
            }
        }
    }
}
</style>
