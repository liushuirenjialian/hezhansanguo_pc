$(document).ready(function(){
  request(lunbourl,function(err,data){
    if(err){}
      else{
         var $sli_ima=$('div.ziliao_content').find('ul.img');
         var da_len=data.posts.length;
         if(da_len){
          for(var i=0;i<da_len;i++){
            var data_str=data.posts[i];
            var $custom_fields=data_str.custom_fields;
            // 点击dot cur
            if(i==0){
            $('ul.dots').append('<li class="dot1 cur"><a href="javascript:;"></a></li>');
          }
          else{
           $('ul.dots').append('<li class="dot1"><a href="javascript:;"></a></li>');

          }
            // 第一条cur
           if(i==0){
             $sli_ima.append('<li><img class="cur img1" src="'+$custom_fields.image+'"></li>');
           }
            else{
                  $sli_ima.append('<li><img class="img1" src="'+$custom_fields.image+'"></li>');
                }
                 // $sli_ima.append('<li><img class="cur img1" src="'+$custom_fields.image+'"></li>');
          }
          //coor 读出来的数据后就控制轮播
        var cur = 0;
        var timer = null;//null 空的指针对象
        var len = $('.slide ul.img li').length;
        console.log(len);
        var $li = $('.slide ul.img li');

        var $dot_li = $('.slide ul.dots li');

        function tab(cur) {
          // 拿到cur的淡出显示 。同级的img淡入隐藏   
            $li.find('img').fadeOut('slow');
            $dot_li.removeClass('cur');
            $li.eq(cur).find('img').fadeIn('slow');
            $dot_li.eq(cur).addClass('cur');
            // $li.find('img').removeClass('cur');
            // $li.eq(cur).find('img').addClass('cur');
        }
        timer = setInterval(function() {
            cur++;
            /*1,2,3,4*/
            cur = (cur + len) % len;
            // 拿到1 tab函数处理
            tab(cur);
        }, 1800);


        function changeSlide() {
            $('ul.dots li').click(function() {
                var index = $('ul.dots li').index($(this));
                cur = index;

                tab(cur);
            });
        }
        changeSlide();
          }
         /*}*/
      }
  })
      request(Jurl,function(err,data){
   if(err){
    console.log(error);
   }
    else{   
      // 首页攻略第一条数据
     var $content=$('div.jingpingonglv div.jingpingonglv_bg');
     var $sec_twothird=$('ul.sec_twothird');
      $content.html();
      $sec_twothird.html();
      var da_len=data.posts.length;
      if (da_len) {
       for (var i = 0; i <1; i++) {
         var data_str=data.posts[i];
         var $custom_fields=data_str.custom_fields;
        var $url='',$name='',$intro='',$detail='',$image='';
       /*if(data_str){$name=data_str.title;}*/
         if($custom_fields){
          $name=$custom_fields.name;
          $url=$custom_fields.href_url;
         
       }
     /*  if($custom_fields.video==1){
       if($name){if($url){$content.append('<div class="jinpin_one"><span class="jinpin_one_title">'+$name+'</span><a href="'+$url+'"><img src="img/index/video.png" alt="" class="gonglv_one_img"></a></div>')}else{$content.append('<div class="jinpin_one"><span class="jinpin_one_title">'+$name+'</span><a href=""><img src="img/index/video.png" alt="" class="gonglv_one_img"></a></div>')}}else{$content.append('<div class="jinpin_one"><span class="jinpin_one_title"></span><a href="'+$url+'"><img src="img/index/video.png" alt="" class="gonglv_one_img"></a></div>')};

       }
        else{
      if($name){if($url){$content.append('<div class="jinpin_one"><span class="jinpin_one_title">'+$name+'</span><img src="img/index/video.png" alt="" class="gonglv_one_img"></div>')}else{$content.append('<div class="jinpin_one"><span class="jinpin_one_title">'+$name+'</span><img src="img/index/video.png" alt="" class="gonglv_one_img"></div>')}}else{$content.append('<div class="jinpin_one"><span class="jinpin_one_title"></span><img src="img/index/video.png" alt="" class="gonglv_one_img"></div>')};

        }*/
       if($name){if($url){$content.append('<div class="jinpin_one"><span class="jinpin_one_title">'+$name+'</span><a target="_blank" href="'+$url+'"></a></div>')}else{$content.append('<div class="jinpin_one"><span class="jinpin_one_title">'+$name+'</span><a target="_blank" href=""></a></div>')}}else{$content.append('<div class="jinpin_one"><span class="jinpin_one_title"></span><a target="_blank" target="_blank" href="'+$url+'"></a></div>')};
     }

          // 第二三条数据
      for(var i=1;i<3;i++){
          var data_str=data.posts[i];
          var $custom_fields=data_str.custom_fields;
        var $url='',$name='',$image='';
         if($custom_fields){
            $name=$custom_fields.name;
             $url=$custom_fields.href_url; //url
            /*  $detail=$custom_fields.href_url;//chakan*/
              $image=$custom_fields.image;//tupian
          }

       if($url){if($image){if($name){$sec_twothird.append('<li><a href="javascript:;" class="vid" title="精品攻略"><img src="'+$image+'" width="300" height="164" alt="视频地址"><span class="info">'+$name+'</span><a target="_blank" href="'+$url+'" class="">查看></a><a target="_blank" href="'+$url+'" class="play"></a></a></li>')}else{$sec_twothird.append('<li><a href="javascript:;" class="vid" title="精品攻略"><img src="'+$image+'" width="300" height="164" alt="视频地址"><span class="info"></span><a target="_blank" href="'+$url+'" class="">查看></a><a href="'+$url+'" class="play"></a></a></li>')}}else{$sec_twothird.append('<li><a href="javascript:;" class="vid" title="精品攻略"><img  width="300" height="164" alt="视频地址"><span class="info">'+$name+'</span><a target="_blank" href="'+$url+'" class="">查看></a><a href="'+$url+'" class="play"></a></a></li>')}}else{$sec_twothird.append('<li><a href="javascript:;" class="vid" title="精品攻略"><img src="'+$image+'" width="300" height="164" alt="视频地址"><span class="info">'+$name+'</span><a class="">查看></a><a target="_blank" href="'+$url+'" class="play"></a></a></li>')};
      }
   } 
 }
})
 request(news_url, function(err, data) { //新闻
        if (err) {
            console.log(err);
        } else {
            var _data = data.posts;
            var newest_data=getDataList(249,_data);
            var news_data = getDataList(247, _data);
            var gonggao_data = getDataList(250, _data);
            var activity_data = getDataList(248, _data);
            var $content = $('div.ziliao_jieshao').find('ul.content');

            // var $newest = $('div.news').find('ul.title').find('li.newest');
            var $news = $('div.ziliao_jieshao').find('ul.title').find('li.news_content');
            var $activity = $('div.ziliao_jieshao').find('ul.title').find('li.activity');
            var $gonggao = $('div.ziliao_jieshao').find('ul.title').find('li.gonggao');
            var $gonglv=$('div.ziliao_jieshao').find('ul.title').find('li.gonglv');
            $content.html(getNewsLis(newest_data, 247));
            setMoreTag();

            $gonglv.click(function() {
                $gonglv.siblings('li').removeClass('cur');
                $gonglv.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(newest_data, 249));
            });
            $activity.click(function() {
                $activity.siblings('li').removeClass('cur');
                $activity.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(activity_data,248));
            });
            $gonggao.click(function() {
                $gonggao.siblings('li').removeClass('cur');
                $gonggao.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(gonggao_data, 250));
            });
               $news.click(function() {
                $news.siblings('li').removeClass('cur');
                $news.addClass('cur');
                setMoreTag();
                $content.html(getNewsLis(news_data, 247));
            });
               // find the ul li  chuanguolai(data,$qq_copy)

        }

    });
}) 

 
// data
function setMoreTag(){
    var $more = $('div.ziliao_jieshao').find('a.more');
    var $newsTitle = $('div.ziliao_jieshao').children('ul.title').children('li');
    var tag = 247;
    var $cur;
    $newsTitle.each(function() {
        if ($(this).hasClass('cur')) {
            $cur = $(this);
        }
    });

    if ($cur.hasClass('news_content')) {
        tag = 247;
    }
    if ($cur.hasClass('gonggao')) {
        tag = 250;
    }
    if ($cur.hasClass('activity')) {
        tag = 248;
    }
    if($cur.hasClass('gonglv')){
    	tag=249;
    }
    $more.attr('href', 'pclist.html?tag=' + tag);
}
function getDate(date) {
    var _date = date.substr(6, 5);
    return _date;
}
function getNewsLis(dataList,tag) {
    var lis_str = '';
    var data;
    if (dataList) {
        var data_len = dataList.length;
        if (data_len >= 6) {
            for (var i = 0; i < 4; i++) {
                data = dataList[i];
                lis_str += '<li><span class="mark f1"></span><a href="pcdetail.html?post_id=' + data.id + '&tag=' + tag + '">' + data.title + '</a><span class="time fr">' + getDate(data.date) + '</span></li>'
            }
        } else {
            for (var i = 0; i < data_len; i++) {
                data = dataList[i];
                lis_str += '<li><span class="mark f1"></span><a href="pcdetail.html?post_id=' + data.id + '&tag=' + tag + '">' + data.title + '</a><span class="time fr">' + getDate(data.date) + '</span></li>'
            }
        }
    }
    return lis_str;
}
var Jurl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=245&include=title,content,categories,custom_fields&count=10000";
var lunbourl='http://games.hoolai.com/cms/?json=get_category_posts&cat=258&include=title,content,categories,custom_fields&count=100';
var news_url = "http://games.hoolai.com/cms/?cat=243&json=get_category_posts&include=title,categories,date&count=500";
 function getDataList(cat,posts){
     var datalist=[];
     for(var i=0;i<posts.length;i++){
     	var postlen=posts[i].categories.length;
     	for(var j=0;j<postlen;j++){
     		if(posts[i].categories[j].id==cat)
     		datalist.push(posts[i]);
     	}
     }
     return datalist;
 }

function request(url,calbac){
	$.ajax({
		type:'GET',
       url:url,
       dataType:'jsonp',
       success:function(resp){
       	calbac(false,resp);
       },
       error:function(resp){
       	calbac(resp);
       }
	})
}

