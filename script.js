
$(Document).ready(function (){
    $(".pic1").click(function(){
        $(".pic1").hide(100)
        $(".p1").show(100)
    });
    $(".p1").click(function(){
        $(".p1").hide(100)
        $(".pic1").show(100)
    });
    
    $(".pic2").click(function(){
        $(".pic2").hide(100)
        $(".p2").show(100)
    });
    $(".p2").click(function(){
        $(".p2").hide(100)
        $(".pic2").show(100)
    });
    

    $(".pic3").click(function(){
        $(".pic3").hide(100)
        $(".p3").show(100)
    });
    $(".p3").click(function(){
        $(".p3").hide(100)
        $(".pic3").show(100)
    });
})

(document).ready(function(){
    $(".text").hover(function(){
        $(".work").toggle

    })
})