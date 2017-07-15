<template lang='pug'>
  .container
      .row
        nav-news
      .row
        .col-xs-12
          h4 
            router-link(to='/news/post1') 一周新鲜装备资讯 | 不止破二跑鞋 Nike还造了我们能穿的鞋
          img(src='../assets/news.jpg',width='100%')
          .news-footer
            .pull-right 
              i.glyphicon.glyphicon-comment
              | 19 
            p
              small 2017-03-13 08:00
      .row
        .news-item-2(v-for='n in items')
          .col-xs-12
            .news-item
              hr
              img.pull-right(:src='n.imgsrc',width='30%')
              h4 
                router-link(to='/news/post1') {{ n.title }}
              .news-footer
                p.pull-right 
                  span.glyphicon.glyphicon-comment
                  | 63
                p 
                  small 2017-03-13 08:00
        .loading
          p(style='text-align:center;') 加载中...
</template>


<script>
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import navNews from './nav-news'

export default {
  components: {
    navNews
  },
  data: function () {
    return {
      items: [
        { title: '热点 | 当跑步遇见电影，2017阳光跑步电影节即将开幕！', imgsrc: img1 },
        { title: '五位NETFIT体验官告诉你 NETFIT到底怎么样', imgsrc: img2 },
        { title: '人物 | 马拉松“华人业余一姐”王意鸥：西部100，我会回来的', imgsrc: img3 },
        { title: '开箱 | ASICS GEL-Kayano 24 这次它又更新了什么？', imgsrc: img4 },
        { title: '热点 | 当跑步遇见电影，2017阳光跑步电影节即将开幕！', imgsrc: img5 },
        { title: '五位NETFIT体验官告诉你 NETFIT到底怎么样', imgsrc: img2 },
        { title: '人物 | 马拉松“华人业余一姐”王意鸥：西部100，我会回来的', imgsrc: img3 },
        { title: '开箱 | ASICS GEL-Kayano 24 这次它又更新了什么？', imgsrc: img4 },
        { title: '开箱 | ASICS GEL-Kayano 24 这次它又更新了什么？', imgsrc: img2 },
        { title: '热点 | 当跑步遇见电影，2017阳光跑步电影节即将开幕！', imgsrc: img1 },
        { title: '五位NETFIT体验官告诉你 NETFIT到底怎么样', imgsrc: img2 },
        { title: '人物 | 马拉松“华人业余一姐”王意鸥：西部100，我会回来的', imgsrc: img3 },
        { title: '开箱 | ASICS GEL-Kayano 24 这次它又更新了什么？', imgsrc: img5 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-footer{
  clear:both;
}
a{
  text-decoration: none;
  color: #000;
}
</style>
