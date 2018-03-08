

$(document).ready(function(){

    var img=$('.about-me-right >ul >li');
    var dian=$('.dian >div');
    var now=0;
    var next=0;
    function move(){
        next=now+1;
        if(next>img.length-1){
            next=0;
        }
        img.eq(next).addClass('xianshi').end().eq(now).removeClass('xianshi');
        dian.eq(next).addClass('dian-xianshi').end().eq(now).removeClass('dian-xianshi');

        now=next;
    }
    t=setInterval(move,3000);
    dian.each(function(index,value){
        $(value).click(function(){
            img.eq(index).addClass('xianshi').end().eq(now).removeClass('xianshi');
            dian.eq(index).addClass('dian-xianshi').end().eq(now).removeClass('dian-xianshi');
            now=index;
        })
        $(value).hover(function () {
            clearInterval(t);
        },function(){
            t=setInterval(move,30000);
        })
    })

    $('.input >input').focus(function () {
        $(this).css({border:'1px #2ec06c solid'});
    })
    $('.input >input').blur(function () {
        $(this).css({border:'1px #cccccc solid'});
    })
    $('.input >textarea').focus(function(){
        $(this).css({border:'1px #2ec06c solid'});
    })
    $('.input >textarea').blur(function () {
        $(this).css({border:'1px #cccccc solid'});
    })




})