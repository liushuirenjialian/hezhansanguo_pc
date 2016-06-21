    function request(url){
    	var deferred=$.Deferred();
    	$.ajax({
    		url:url,
    		type:"POST",
    		dataType:"JSONP",
    		success:function(data,status,xhr){
    			deferred.notify("fetching");
    			if(data)
    				{deferred.resolve(data.post);}
    			else{deferred.reject("nothing");}
    		},error:function(xhr,errorType,error){

    		}
    	});
    	return deferred
    }
    //过滤
    function getArgs(strs){
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

$(document).ready(function(){
	 	var hash=window.location.search;
	 	var args = getArgs(hash);
    var tagg=args['tag'];
    console.log('tag'+tagg);
    console.log('args'+hash)
       
        var $back=$('a.back_index');
   
        var $zuixin=$('li.zuixin');
    if (tagg == 249){
        $zuixin.html('攻略')
        $back.attr('href','pclist.html?tag='+tagg);
    }
    else if (tagg==247) {
     $zuixin.html('最新资讯')
      $back.attr('href','pclist.html?tag='+tagg);
    }
      else if (tagg==250) {
     $zuixin.html('公告')
      $back.attr('href','pclist.html?tag='+tagg);
    }
       else if (tagg==248) {
    $zuixin.html('新闻活动')
      $back.attr('href','pclist.html?tag='+tagg);
    }
/*    function getDate(date) {
    var date = date.substr(6, 5);
    return date;
}*/
    var url = 'http://games.hoolai.com/cms/?post_id=' + args['post_id'] + '&json=get_post&include=title,content,author,date';
     var pormise=request(url);
    pormise.then(function(data){
    	console.log(typeof data); 
    	if(data){
    	var title='';
    	var datt='';
    	var htmlStr='';
    	title+='<h2>'+data.title+'</h2>'
    	$('ul.exp_ul  h2.title').html(title);
    	htmlStr+='<p>'+data.content+'</p>'
    	$('ul.exp_ul .article_content').html(htmlStr);
  /*  	var $title_two=$('div.conte').find('p.team');
    	$title_two.text('data.date');*/
       
  		 $('ul.exp_ul').find('p.data_info').text(data.date.substr(6,5));
       console.log(data.date);
        
    	}
    	
    	// 图片自适应居中aligncenter alignleft alignright
  
          $('div.article_content img').parent().wrap('<div class="weirao"></div>')
           var $cont_imgt=$('div.article_content');
           var $img=$cont_imgt.find('div.weirao');
           $img.each(function(){
           	$this=$(this);
           	var $cms_img=$this.find('img');
           	if($cms_img.hasClass('alignright')){
              $this.css('text-align','right');
           	}
           	if($cms_img.hasClass('alignleft')){
              $this.css('text-align','left');
           	}
           	if($cms_img.hasClass('aligncenter')){
              $this.css('text-align','center');
           	}
           	if($cms_img.hasClass('alignnone')){
           		$this.css('text-align','center');
           	}
           })
       /*图片自适应页面宽度*/
         var $img=$('div.article_content img');
         var curr_img=1000;
         $img.each(function(){
         	if($img){
            var width=parseInt($(this).css('width'));
            var height=parseInt($(this).height());
            console.log('当前宽度：'+width+''+'当前高度：'+height);
            if(width>curr_img){
            	var var_height=height / width*curr_img;
            	$(this).width(curr_img);
            	$(this).height(var_height);
            	console.log('现在宽度：'+curr_img+''+'现在高：'+var_height);
            }
            }
         })
    	
    })
})