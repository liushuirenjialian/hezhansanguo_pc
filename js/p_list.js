function request(url, cal) {
    $.ajax({
        url: url,
        dataType: "jsonp",
        type: "POST",
        success: function(resp) {
            cal(false, resp);
        },
        error: function(resp) {
            cal(resp);
        }
    });
}

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

function getDate(date) {
    var _date = date.substr(0, 10);
    return _date;
}

function getNewsLis(dataList, tag) {
    var lis_str = '';
    var data;
    if (dataList) {
        var data_len = dataList.length;
        for (var i = 0; i < data_len; i++) {
            data = dataList[i];
            lis_str += '<li><a href="pcdetail.html?post_id='+ data.id+'&tag='+tag+ '">'+data.title+'</a><span class="time fr">'+getDate(data.date)+'</span></li>';
        }
    }
    return lis_str;
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

$(function() {
    var hash = window.location.search;
    var args = getArgs(hash);
    var cat;
    if(args) {
        cat = args.tag;
    } 

    // var nextPage = {
    //     pagesMain: "pages",
    //     pagesNav: "pagesA",
    //     curNum: 10,
    //     pages: "pages",
    //     activeClass: "cur",
    //     ini: "0", //初始化显示第几页 0为第一页
    //     prevBtn: "pageP",
    //     nextBtn: "pageN"

    // };

    console.log('cat' + cat)
    var url = "http://games.hoolai.com/cms/?json=get_category_posts&cat=243&include=title,content,categories,custom_fields,date&count=10000";
  /*  if (cat == 232) {
        url = "http://games.hoolai.com/cms/?json=get_category_posts&cat=232&include=title,content,categories,custom_fields,date&count=10000";
    }*/
    request(url, function(err, data) { //新闻
        if (err) {
            console.log(err);
        } else 
           {
        var _data=data.posts;
        // var $title=$('.list_con ul.list_con');
        // var $con=$('.list_content ul.exp_ul');
        if(cat==249||cat==247||cat==248||cat==250||cat==243){
       var zuixinzixun = getDataList(247, _data);
        // console.log('news:'+news_data.length)
        var xinwen = getDataList(248, _data);
        var gonglv = getDataList(249, _data);
        var gonggao = getDataList(250, _data);
         var $title=$('.list_content ul.list_con');

         var $zuixinzixun=$title.find('.zuixin');
         var $huodong=$title.find('.huodong');
         var $gonglv=$title.find('.gonglv');
         var $gonggao=$title.find('.gonggao');
        var $con=$('.list_content ul.exp_ul');
        if (cat==249) {
              $gonglv.siblings('li').removeClass('news_cur');
                $gonglv.addClass('news_cur');
             $con.html(getNewsLis(gonglv, 249));
             nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    })
        }
                if (cat==247) {
                    $zuixinzixun.siblings('li').removeClass('news_cur');
                $zuixinzixun.addClass('news_cur');
             $con.html(getNewsLis(zuixinzixun, 247));
             nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    })
        }
            if (cat==250) {
                 $huodong.siblings('li').removeClass('news_cur');
                $huodong.addClass('news_cur');
             $con.html(getNewsLis(xinwen, 250));
             nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    })
        }
       
        if (cat==250) {
            $gonggao.siblings('li').removeClass('news_cur');
                $gonggao.addClass('news_cur');
             $con.html(getNewsLis(gonggao, 250));
             nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    }) 
         }
/*         }*/
             $gonglv.click(function() {
                $gonglv.siblings('li').removeClass('news_cur');
                $gonglv.addClass('news_cur');
                // setMoreTag();
                           $con.html(getNewsLis(gonglv, 235));
                           nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    }) 

            });
            $huodong.click(function() {
                $huodong.siblings('li').removeClass('news_cur');
                $huodong.addClass('news_cur');
                // setMoreTag();
              $con.html(getNewsLis(xinwen, 238));
              nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    }) 
            });
            $gonggao.click(function() {
                $gonggao.siblings('li').removeClass('news_cur');
                $gonggao.addClass('news_cur');
                /*setMoreTag();*/
                $con.html(getNewsLis(gonggao, 237));
                nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    }) 
            });
               $zuixinzixun.click(function() {
                $zuixinzixun.siblings('li').removeClass('news_cur');
                $zuixinzixun.addClass('news_cur');
                // setMoreTag();
                $con.html(getNewsLis(zuixinzixun, 236));
                nextPage({
                        pagesMain: "pages",
                        pagesNav: "pagesA",
                        curNum: 10,
                        pages: "pages",
                        activeClass: "cur",
                        ini: "0", //初始化显示第几页 0为第一页
                        prevBtn: "pageP",
                        nextBtn: "pageN"

                    }) 
            });
       

        }

        }
    });


});


