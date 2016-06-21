$(document).ready(function(){
 var hash=window.location.search;
 var args=getArgs(hash);

 var $title=$('a.ziliao_title');

  var $wujian=$('li.huodong');
 var cat;
 if(args){cat=args.tag;}
 // bingzhong
 if (cat==256) {

  var nurl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=256&include=title,content,categories,custom_fields&count=10000";
    $title.html('兵种');
     request(nurl,function(_data){
        if(_data){
     		Bindbingzhong(_data);
     	}

     })
}
// jimou
else if(cat==255){
var Jimouurl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=255&include=title,content,categories,custom_fields&count=10000";
   $title.html('计谋');
request(Jimouurl,function(_data){
	if(_data){
		BindJimou(_data);

	}
})
}
// jianzhu
else if(cat==257){
	var Jianzhuurl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=257&include=title,content,categories,custom_fields&count=10000";
       $title.html('建筑');
     request(Jianzhuurl,function(_data){
	if(_data){
		BindJianzhu(_data);

	}
})
     
     
}
// 精品攻略
else if(cat==245){
   $title.html('精品攻略');
    var Gurl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=245&include=title,content,categories,custom_fields&count=10000";
  request(Gurl,function(_data){
    if(_data){
      BindGonglv(_data);
    }
  })
}
// 蜀国
else if(cat==251){
  $wujian.html('蜀国');
      var Shuguoguourl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=251&include=title,content,categories,custom_fields&count=10000";
      request(Shuguoguourl,function(_data){
    if(_data){
      BindShuguo(_data);
    }
  })
}
// 魏国
else if(cat==252){
    $wujian.html('魏国');
   var Weiguoguourl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=252&include=title,content,categories,custom_fields&count=10000";
      request(Weiguoguourl,function(_data){
    if(_data){
      BindShuguo(_data);
    }
  })
}
// 吴国
else if(cat==253){
     $wujian.html('吴国');
    var Wuguoguoguourl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=253&include=title,content,categories,custom_fields&count=10000";
      request(Wuguoguoguourl,function(_data){
    if(_data){
      BindShuguo(_data);
    }
  })
}
// 群雄
else if(cat==254){
      $wujian.html('群雄');
      var Qunxiongguourl = "http://games.hoolai.com/cms/?json=get_category_posts&cat=254&include=title,content,categories,custom_fields&count=10000";
      request(Qunxiongguourl,function(_data){
    if(_data){
      BindShuguo(_data);
    }
  })
  
}
// 国家数据 问题： 内循环外循环使用  数据读出完计算页码  在当前页面隐藏了pages 找原因。 css：固定了li条数，不用设置自动高度
function BindShuguo(_data){
    $('ul.jimou,ul.jianzhu,ul.bingzhong,ul.jinpin').hide();
   
    var $content_wujiang=$('.wujiang ul.content');
      $content_wujiang.html();
    var data_suoshu='';
 /*   for(var i=0;i<_data.length;i++){
      var data_st=_data[i];
      for(var i=0;i<data_st.categories.length;i++){
              if(data_st.categories[i].parent==246){
                data_suoshu=data_st.categories[i].title;
                break;
              }}
    }*/
       for(var i=0;i<_data.length;i++){
         var data_str=_data[i];
         // 内循环j  筛查parent=246的数据  限制循环
            for(var j=0;j<3;j++){
              if(data_str.categories[j].parent==246){
                data_suoshu=data_str.categories[j].title;
                break;
              }  }
         
        var $custom_fields=data_str.custom_fields;
       if($custom_fields){
       var $image=$custom_fields.image;
       var $hero_name=$custom_fields.hero_name;
       var $skill_name=$custom_fields.skill_name;
       var $skill_intro=$custom_fields.skill_intro;
       var $solder=$custom_fields.soldier_type;
      }
      if ($image){if($hero_name){if($skill_name){if($skill_intro){if($solder){
        $content_wujiang.append('<li><div class="wujiang_info"><img src="'+$image+'" class="img"><div class="ren_intro"><i class="ren_name rr">'+$hero_name+'</i><i class="bingke rr">兵科:<span class="qibing">'+$solder+'</span></i><i class="suoshu rr">所属:<span class="guojia">'+data_suoshu+'</span></i></div><span class="hand_title">'+$skill_name+'</span><div class="letter">'+$skill_intro+'</div></div></li>');
          }}}}}else{

          }
/*        $content_wujiang.append('<li><div class="wujiang_info"><img src="'+$image+'" class="img"><div class="ren_intro"><i class="ren_name rr">'+$hero_name+'</i><i class="bingke rr">兵科:<span class="qibing">'+$solder+'</span></i><i class="suoshu rr">所属:<span class="guojia">'+data_suoshu+'</span></i></div><span class="hand_title">'+$skill_name+'</span><div class="letter">'+$skill_intro+'</div></div></li>');
*/      
       }
       nextPage({
                  pagesMain: "pages",
                  pagesNav: "pagesA",
                  curNum: 8,
                  pages: "pages",
                  activeClass: "cur",
                  ini: "0", //初始化显示第几页 0为第一页
                  prevBtn: "pageP",
                  nextBtn: "pageN"

                })

}
function BindGonglv(_data){
// 隐藏其他部分html
  $('ul.jimou,ul.jianzhu,ul.bingzhong').hide();
  $('#pagesNav').hide();
  // 找到content
      var $content=$('div.list_content .conten');
       $content.html();

       var _data_len=_data.length;
       var $oushu=2;
       var $gognlv=$('ul.jinpin');
       // 数据处理
      for(var i=0;i<_data_len;i++){
       var data_str=_data[i];
       var $custom_fields=data_str.custom_fields;
       var $name='',$intro='',$detail='',$image='';
       if($custom_fields){
       /* $url=$custom_fields.href_url[0];*/
          $name=$custom_fields.name;
          $intro=$custom_fields.intro;
          $detail=$custom_fields.href_url;
          $image=$custom_fields.image;
       }
       // i为奇数 加分割   
       if(i%$oushu == 0){
        // 判断video =1取 ，
        if($custom_fields.video==1){
          // 数据全的时候显示 否则else
            if($name){if($intro){if($detail){if($image){
            $gognlv.append('<li><div class="video_info"><a href="'+$detail+'"></a><img src="'+$image+'" alt="" class="renwu_bg"><span> '+$name+'</span></div><div class="gonglv_info"><span class="renwu_info1 rr">'+$intro+'</span><a target="_blank" href="'+$detail+'" class="xunqi">详情&gt;</a></div><i class="fenge"></i></li>');
            $content.append($gognlv);
            }}}}
            else{} 
       }
       // = 0不取并 button 不要
       else{
             if($name){if($intro){if($detail){if($image){
            $gognlv.append('<li><div class="video_info"><img src="'+$image+'" alt="" class="renwu_bg"><span> '+$name+'</span></div><div class="gonglv_info"><span class="renwu_info1 rr">'+$intro+'</span><a target="_blank" href="'+$detail+'" class="xunqi">详情&gt;</a></div><i class="fenge"></i></li>');
            $content.append($gognlv);
             }}}}
               else{

            }} }    
       // i为偶数不加分割 
       else{
         // $gognlv.append('<li><div class="video_info"><a href="'+$detail+'"></a><img src="'+$image+'" alt="" class="renwu_bg"><span> '+$name+'</span></div><div class="gonglv_info"><span class="renwu_info1 rr">'+$intro+'</span><a href="'+$detail+'" class="xunqi">详情&gt;</a></div><i class=""></i></li>');
     // 判断video =1取 ，
      if($custom_fields.video==1){
           if($name){if($intro){if($detail){if($image){
            $gognlv.append('<li><div class="video_info"><a href="'+$detail+'"></a><img src="'+$image+'" alt="" class="renwu_bg"><span> '+$name+'</span></div><div class="gonglv_info"><span class="renwu_info1 rr">'+$intro+'</span><a target="_blank" href="'+$detail+'" class="xunqi">详情&gt;</a></div><i class=""></i></li>');

           $content.append($gognlv);
            }}}}
               else{

            }
       }
       // = 0不取并 button 不要
       else{
           if($name){if($intro){if($detail){if($image){
            $gognlv.append('<li><div class="video_info"><img src="'+$image+'" alt="" class="renwu_bg"><span> '+$name+'</span></div><div class="gonglv_info"><span class="renwu_info1 rr">'+$intro+'</span><a target="_blank" href="'+$detail+'" class="xunqi">详情&gt;</a></div><i class=""></i></li>');
            $content.append($gognlv);
            }}}}
               else{

            }
       }
       }
     }
        
    
}
function BindJianzhu(_data){
// 隐藏其他部分html
	$('ul.jimou,ul.jinpin,ul.bingzhong').hide();
	$('#pagesNav').hide();

	var $content=$('div.list_content .conten');
     $content.html();
      var _data_len=_data.length;
      // 
      var $jianzhu=$('ul.jianzhu');
      	for(var i=0;i<_data_len;i++){
       var data_str=_data[i];
       var $custom_fields=data_str.custom_fields;
       var $image='',$name='',$intro='',$logic='';
       if($custom_fields){
         $image=$custom_fields.image;
         $name=$custom_fields.name;
         $intro=$custom_fields.intro;
       }
      if($image){if($name){if($intro){$jianzhu.append('<li><img src="'+$image+'" alt="" class="renwu_bg"><div class="jianzhu_info"><i>'+$name+'</i><span class="renwu_info1 rr">'+$intro+"</span></li>")}else{$jianzhu.append('<li><img src="'+$image+'" alt="" class="renwu_bg"><div class="jianzhu_info"><i>'+$name+'</i><span class="renwu_info1 rr"></span></li>')}}else{$jianzhu.append('<li><img src="'+$image+'" alt="" class="renwu_bg"><div class="jianzhu_info"><i></i><span class="renwu_info1 rr">'+$intro+"</span></li>")}}else{$jianzhu.append('<li><img src="" alt="" class="renwu_bg"><div class="jianzhu_info"><i>'+$name+'</i><span class="renwu_info1 rr">'+$intro+"</span></li>")};
        $content.append($jianzhu);
  	 }
    }

function BindJimou(_data){
  // 隐藏其他部分html
  $('ul.jinpin').hide();
	$('ul.jianzhu').hide();
	$('ul.bingzhong').attr('style','display:none');
	$('#pagesNav').hide();
	var $content=$('div.list_content .conten');
     $content.html();
      var _data_len=_data.length;
      // 
      var $jimou=$('ul.jimou');
      for(var i=0;i<_data_len;i++){
      	 var data_str=_data[i];
       var $custom_fields=data_str.custom_fields;
       //img skill1_image2  name  
       if($custom_fields){
       	$jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill1_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill1_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill1_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill1_intro2+'</span> </div></li>');
        $jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill2_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill2_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill2_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill2_intro2+'</span> </div></li>');
       	$jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill3_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill3_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill3_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill3_intro2+'</span> </div></li>');
       	$jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill4_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill4_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill4_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill4_intro2+'</span> </div></li>');
       	$jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill5_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill5_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill5_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill5_intro2+'</span> </div></li>');
         $jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill6_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill6_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill6_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill6_intro2+'</span> </div></li>');
       	$jimou.append('<li><div class="renwu_huawen"><img src="'+$custom_fields.skill7_image2+'" alt="" class="renwu_bg"></div><div class="jimou_info"><i>'+$custom_fields.skill7_name+'</i><span class="renwu_info1 rr">'+$custom_fields.skill7_intro+'</span><span class="renwu_info2 rr">'+$custom_fields.skill7_intro2+'</span> </div></li>');

         $content.append($jimou);
       }

      }
}
function Bindbingzhong(_data){  
  // 隐藏其他部分html
  $('ul.jinpin').hide();
	$('ul.jianzhu').hide();
	$('ul.jimou').hide();


	var $content=$('div.list_content .conten');
     $content.html();
      var _data_len=_data.length;
      console.log(_data_len);
       var $bingzhong=$('ul.bingzhong');
      for(var i=0;i<_data_len;i++){
       var data_str=_data[i];
       var $custom_fields=data_str.custom_fields;
       var $image='',$name='',$intro='',$logic='';
       if($custom_fields){
         $image=$custom_fields.image;
         $name=$custom_fields.name;
         $intro=$custom_fields.intro;
         $logic=$custom_fields.logic;
       }   
       if($image){if($name){if($intro){if($logic){
         $bingzhong.append('<li><img src="'+$image+'" alt="" class="renwu_bg"> <div class="bingzhong_info"><i>'+$name+'</i><span class="renwu_info1 rr">'+$intro+'</span><span class="xunqi">寻敌逻辑：</span><span class="renwu_info2 rr">'+$logic+'</span></div></li>')
       // $bingzhong.appendTo('<div id="pagesNav"><span id="pageP">上一页</span><ul id="pagesA"> </ul><span id="pageN">下一页</span></div>');
        $content.append($bingzhong);
      }}}}else{}
      
       
 }

    nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 7,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    })


}
})
// 分页函数
function nextPage(nextPage) {
    var pages = document.getElementById(nextPage.pagesMain); //分页内容 
    var pagesNav = document.getElementById(nextPage.pagesNav); //分页数
    var prev = document.getElementById(nextPage.prevBtn); //上一页
    var next = document.getElementById(nextPage.nextBtn); //下一页
    var curNum = nextPage.curNum; //当前页
    var leng = Math.ceil(pages.children.length / curNum); //页数
    var pageList = ""; //自动生成页码 数组
    var num = 0; //当前的index
    //自动生成页码li
    for (var i = 0; i < leng; i++) {
        pageList += "\<li\>" + parseInt(i + 1) + "\<\/li\>";
    };

    //给ul加上 页码
    pagesNav.innerHTML = pageList;

    //默认第一页 给第一页页码加上高亮
    //alert(pagesNav.children[0].tagName);
    if ((typeof pagesNav.children[0]) != "undefined") {
        pagesNav.children[0].className = nextPage.activeClass;
        //给点击页码加上 高亮class 返回index
        for (var i = 0; i < pagesNav.children.length; i++) {
            pagesNav.children[i].index = i;
            pagesNav.children[i].onclick = function() {
                for (var i = 0; i < pagesNav.children.length; i++) {
                    pagesNav.children[i].className = "";
                }
                this.className = nextPage.activeClass;
                num = this.index;
                ini(num) // 传入当前页的index 用ini方法显示点击到的组
            }
        }
    }

    //上一页
    prev.onclick = function() {
            if (num == 0) {
                return false;
            } else {
                console.log(num)
                for (var i = 0; i < pagesNav.children.length; i++) {
                    pagesNav.children[i].className = "";
                }
                pagesNav.children[num - 1].className = nextPage.activeClass;
                ini(num - 1)
                return num--;
            }
        }
        //下一页
    next.onclick = function() {
            if (num == leng - 1) {
                return false;
            } else {
                console.log(leng)
                for (var i = 0; i < pagesNav.children.length; i++) {
                    pagesNav.children[i].className = "";
                }
                pagesNav.children[num + 1].className = nextPage.activeClass;
                ini(num + 1)
                return num++;
            }
        }
        //初始化显示第一页内容 隐藏后面
    function ini(iniBum) {
        var iniBum = iniBum;
        for (var j = 0; j < leng; j++) {
            for (var i = 0; i < curNum; i++) {
                if (pages.children[(j * curNum) + i] == undefined) {
                    continue;
                }
                pages.children[(j * curNum) + i].style.display = "none";
            }
        }
        for (var i = 0; i < curNum; i++) {
            if (pages.children[(iniBum * curNum) + i] == undefined) {
                continue;
            }
            pages.children[(iniBum * curNum) + i].style.display = "block";
        }
    }
    //初始化显示第一页内容 隐藏后面
    ini(nextPage.ini)
}

function request(url,call){
	$.ajax({
    	  url: url,
    	  type: "POST",/*请求方式为post和get 默认为get 其他的http请求方法如put和delete也可以在部分浏览器使用，*/
    	  dataType: "JSONP",//解决跨域问题，
    	  success: function(data, status, xhr) {
    	    var data=data.posts;
    	    call(data);
    	    /*请求成功后回调函数，这个方法有两个参数：服务器返回数据，返回状态*/
    	  },
    	  error: function(xhr,errorType, error){/*这个方法有三个参数：xmlHttpRequest对象，错误信息，可能捕捉的错误对象*/
    	    console.log(error);
    	  }
    	});

}
/*function request(url, cal) {
    $.ajax({
        url: url,
        dataType: "jsonp",
        type: "POST",
        success: function(data,status,xhr) {
        	var _data=data.posts
            cal(_data);
        },
        error: function(xhr,errorType,error) {
            console.log(error);
        }
    });
}*/
// 筛选数据
function getDataList(cat, data) {
    var dataList = [],
        dataLen = data.length;
    for (var i = 0; i < dataLen; i++) {
        var catLen = data[i].categories.length;
        for (var j = 0; j < catLen; j++) {
            if (data[i].categories[j].id == cat) {
                dataList.push(data[i]);
            }
        }
    }
    return dataList;
}
function getArgs(strs) {
    var _strs = strs.length > 0 ? strs.substring(1) : '',
        args = {},
        items = _strs.split('&'),
        len = items.length,
        mame = null,
        value = null,
        item = [];
    if (_strs.length == 0) {
        console.log('没有要读取的字符串');
        return;
    }
    for (var i = 0; i < len; i++) {
        item = items[i].split("=");
        name = item[0];
        value = item[1];
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        args[name] = value;
    }
    return args;
}