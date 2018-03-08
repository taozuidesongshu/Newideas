var 
总视窗=this,
总文档=document,
文档正文=总文档.body,
浏览器=navigator,
弹窗=alert,
编码=encodeURIComponent,
数学=Math,
控制台=console,
用户系统,
稍后运行=setTimeout

var 
标贴样板=总文档.createElement('div')
标贴样板.className='标贴 隐藏'

var 
绑定动画结束事件=function(元素,回调函数){
    元素.addEventListener('webkitAnimationEnd',回调函数,0)
    元素.addEventListener('mozAnimationEnd',回调函数,0)
    元素.addEventListener('animationend',回调函数,0)
},
绑定缓动结束事件=function(元素,回调函数){
    元素.addEventListener('webkitTransitionEnd',回调函数,0)
    元素.addEventListener('mozTransitionEnd',回调函数,0)
    元素.addEventListener('transitionEnd',回调函数,0)
},
弹出浏览器提示窗口=function(标题,说明文字,图标地址){
    if(!总视窗.webkitNotifications)
        return 

    var 
    弹出窗=总视窗.webkitNotifications.createNotification(图标地址,标题,说明文字)
    弹出窗.onshow=function(){
        稍后运行(function(){
            弹出窗.cancel()
        },7e3)
    }
    弹出窗.onclick=function(){
        总视窗.focus()
        弹出窗.cancel()
    }
    弹出窗.replaceId='土狗提示'
    弹出窗.show()

},
转义超文本标记语言=function(文本){
    return 文本
        .replace(/(^\s*)|(\s*$)/g,'')
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/\'/g,'&#39;')
        .replace(/\"/g,'&quot;')
},
获取随机数=function(范围,调整){
    范围=范围||75
    调整=调整||2
    return 数学.floor(数学.random()*范围+调整)
},
根据文字调整大小=function(文本){
    var 
    文本长度=文本.length

    if(文本长度==1)
        return 3.8


    return .7+(4/文本长度)
},
删除标贴=function(父级元素){
    if(this.className!='标贴')
        return this.className='标贴'

    if(父级元素=this.parentNode)
        父级元素.removeChild(this)
},
二五五随机数=function(){
    return 数学.floor(数学.random()*25)+225
},透明颜色值=function(){
    return 'background-color:rgba('+二五五随机数()+','+二五五随机数()+','+二五五随机数()+',.8)'
},展示标贴=function(标贴信息){
    var
    用户唯一号=标贴信息[0],
    文本=标贴信息[1],
    横向偏移=+标贴信息[2]||获取随机数(),
    纵向偏移=+标贴信息[3]||获取随机数()

    var 
    标贴=标贴样板.cloneNode(1)

    标贴.setAttribute('用户唯一号',用户唯一号)

    标贴.innerHTML=转义超文本标记语言(文本) //为了解决火狐的 innerText 问题 换成了 innerHTML + 正则转义 T_T

    标贴.style.cssText='left:'+横向偏移+'%;top:'+纵向偏移+'%;font-size:'+根据文字调整大小(文本)+'em;background-color:'+获取用户颜色(用户唯一号)

    用户信息卡片震动(用户唯一号)

    var 
    用户信息=获取用户信息(用户唯一号)

    if(用户信息){
        总文档.title=用户信息[2]+': '+文本
        
        //收藏图标.href='http://tp2.sinaimg.cn/'+用户信息[1]+'/180/1'

        弹出浏览器提示窗口(文本,'来自 '+用户信息[2]+' 的消息',收藏图标.href)

        控制台.log('%c'+用户信息[2],'background-color:rgb('+用户信息[3]+')',文本)
    }

    绑定动画结束事件(标贴,删除标贴)

    弹幕框.appendChild(标贴)
    

    return 标贴
},
展示标贴们=function(返回值){
    返回值=返回值.split(/\n/)

    if(返回值.length>1&&初次获取首屏信息){

        初次获取首屏信息--

    }

    var 
    指针=返回值.length,
    临时变量,
    每次运行函数=function(){
        //临时变量=[返回值[指针].match(/^\d+/),返回值[指针].replace(/^\d+,/,'')]

        指针--

        展示标贴(返回值[指针].split(/\t/))
        if(指针>0)
            稍后运行(每次运行函数,数学.floor(数学.random()*1500))
        else{
            //展示完一整组标贴之后
            if(初次获取首屏信息)
                网络隧道.send('√'+初次获取首屏信息)
        }
    }
    每次运行函数()
},
超文本传输请求=function(地址,回调函数){
    var 
    超文本传输请求=new XMLHttpRequest()
    超文本传输请求.open('GET',地址,1)
    if(回调函数)
        超文本传输请求.onload=function(){
            回调函数(超文本传输请求.responseText)
        }
    超文本传输请求.send()
},
未登录时展示标贴=function(){
    超文本传输请求('x/?msg',展示标贴们)
},
用户们={},
添加单条用户信息=function(用户信息){
    用户们[+用户信息[0]]=用户信息
},
处理用户信息=function(用户们文本){
    用户们文本=用户们文本.split(/\n/)

    var 
    指针=用户们文本.length,
    临时变量

    while(指针--){
        临时变量=用户们文本[指针].split(' ')
        添加单条用户信息(临时变量)

        if(+临时变量[4])
            用户上线(临时变量)
    }

    初次获取用户信息=0

    if(初次获取用户信息)
        网络隧道.send('☺'+初次获取用户信息*10)

},获取用户信息=function(用户唯一号){
    var
    返回值
    if(返回值=用户们[用户唯一号])
        return 返回值

    return ['0','0','土狗','239,236,201']
},获取用户颜色=function(用户唯一号){
    var
    返回值
    if(返回值=用户们[用户唯一号])
        return 'rgba('+返回值[3]+',.8)'
    
    return 'rgba(239,236,201,.8)'
},用户信息卡片震动=function(用户唯一号){
    var 
    用户信息卡片=总视窗['用户编号'+用户唯一号]

    if(!用户信息卡片)
        return

    用户信息卡片.className='用户卡片 震铃'
}
var 
用户信息模板=总文档.createElement('div')
用户信息模板.className='用户卡片 转入'

var 
用户上线=function(用户信息){

    var
    用户唯一号=用户信息[0],
    用户微博唯一号=用户信息[1],
    用户昵称=用户信息[2],
    用户颜色=用户信息[3]


    控制台.log('%c'+用户信息[2],'background-color:rgb('+用户信息[3]+')',/上线了！/)


    if(用户信息卡片=总视窗['用户编号'+用户唯一号])
        return 用户信息卡片.className='用户卡片'


    if(用户系统.me.uid==用户唯一号)
        return 用户信息卡片

    添加单条用户信息(用户信息)

    //console.log(用户信息,/传入格式是这样的/)

    var 
    用户信息卡片=用户信息模板.cloneNode(1)
    用户信息卡片.id='用户编号'+用户唯一号
    用户信息卡片.innerHTML='<img src="http://tp2.sinaimg.cn/'+用户微博唯一号+'/180/1"> '+用户昵称+'<i style="background:rgb('+用户颜色+')"></i>'


    绑定动画结束事件(用户信息卡片,function(){
        this.className='用户卡片'
    })


    //用户信息卡片.style.cssText='background:rgba('+用户颜色+',.8)'

    在线列表.appendChild(用户信息卡片)

    return 用户信息卡片
},用户下线=function(用户信息){
    var 用户信息卡片
    if(!(用户信息卡片=总视窗['用户编号'+用户信息[0]]))
        return 控制台.log(/未找到这个在线用户/,用户信息)

    用户信息卡片.className='用户卡片 隐藏'


    控制台.log('%c'+用户信息[2],'background-color:rgb('+用户信息[3]+')',/下线了…/)

    return
}

var 
网络隧道,
初次获取用户信息=1,
初次获取首屏信息=10,
打开网络隧道=function(身份钥匙){
    

    网络隧道=new WebSocket('ws://ws.smartgslb.com:11233/'+身份钥匙)

    网络隧道.onopen=function(){
        if(初次获取用户信息)
            网络隧道.send('☺'+初次获取用户信息*10)
        

        if(初次获取首屏信息)
            网络隧道.send('√'+初次获取首屏信息)

        控制台.log(/网络隧道开启/)

    }
    网络隧道.onmessage=function(事件){ 
        //控制台.log(/ws MSG/,事件.data)
        var 
        文本=事件.data,
        类型=文本.substr(0,1)

        if(类型=='☺'){
            处理用户信息(文本.substr(1))
        }else if(类型=='✿'){
            用户上线(文本.substr(1).split(' '))
        }else if(类型=='✖'){
            用户下线(文本.substr(1).split(' '))
        }else{
            展示标贴们(文本)
        }
    }
    网络隧道.onclose=function(){
        控制台.log(/网络隧道断线/)
        打开网络隧道(身份钥匙)
    }

    网络隧道.onerror=function(事件){ 
        控制台.log(/ERROR/,事件.data)
    }

}

表单.onsubmit=function(事件){
    事件.preventDefault()

    var 
    文本=表单.文本框.value.replace(/(^\s+|\s+$)/g,'')


    if(!文本)
        return 表单.文本框.focus()

    if(!总视窗.用户系统||!用户系统.me){
        事件.preventDefault()
        显示登陆框()
        return false
    }

    表单.文本框.value=''

    网络隧道.send('✎'+文本.replace(/\t/,' ')+'    '+获取随机数()+'    '+获取随机数(60,2))

}
表单.文本框.focus()

表单.文本框.onclick=
表单.文本框.ontouchstart=function(){

    if(!总视窗.用户系统||!用户系统.me)
        return 显示登陆框()
    
}

var 
加载脚本语言文件=function(链接地址,回调函数,代码标签){
    代码标签=总文档.createElement('script')
    代码标签.src=链接地址
    代码标签.onload=function(父级标签){
        if(回调函数)
            回调函数()

        if(父级标签=this.parentNode)
            父级标签.removeChild(this)
    }
    文档正文.appendChild(代码标签)
}

加载脚本语言文件('//api.mouto.org/u.js',function(){
    用户系统=U
    用户系统.init({
        success:function(用户信息){
            //控制台.log(/登录成功/,用户信息)
            if(!用户信息||!用户信息.avatar)
                return 弹窗('登录失败！！')

            用户框.innerHTML='<img src="'+用户信息.avatar.replace(/\/50\//,'/180/')+'">'+用户信息.name

            打开网络隧道('6965_'+用户信息.uid)
            
        },error:function(){
            控制台.log(/登录失败/)

        },notlogin:function(){
            控制台.log(/并没有登录/)

            // 用户框.innerHTML='<button id="登录按钮">参与讨论</button>'
            // 登录按钮.onclick=function(){
            //     location.href='http://api.mouto.org/x/?a=towb&redirect='+编码(location.href)
            // }
            未登录时展示标贴()
        }
    })
})

加载脚本语言文件('//1.mouto.org/x.js')
加载脚本语言文件('前端/图片表情.js')

var 
用户代理=浏览器.userAgent
视口设置.content=
    用户代理.match(/ipad/i)?'width=1024,user-scalable=no,minimal-ui':
    用户代理.match(/iphone/i)?'width=620,user-scalable=no,minimal-ui':
    'width=720'

稍后运行(function(){
    表单.className=''
},2e3)

var 
显示登陆框=function(){
    if(总视窗.用户系统&&用户系统.me)
        return
    登录框.className=''

    超文本传输请求('x/?usernum',function(总数){
        成员数量.innerHTML=总数
    })

    表单.文本框.blur()
    文档正文.focus()

},隐藏登陆框=function(){
    登录框.className='隐藏'
}

登录按钮.onclick=function(){
    location.href='http://api.mouto.org/x/?a=towb&redirect='+编码(location.href)
}

关闭登录框按钮.onclick=隐藏登陆框

// 绑定缓动结束事件(登录框,function(){
//     console.log(this)
//     if(this.className=='隐藏'){
//         this.className='隐藏 屏蔽'
//     }
// })

if(总视窗.webkitNotifications)
    总视窗.webkitNotifications.requestPermission()

加载脚本语言文件('//x.mouto.org/wb/up.js');