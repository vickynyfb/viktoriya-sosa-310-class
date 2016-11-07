//if(!window.hcb_user){hcb_user={  
//};} 
//(function(){s=document.createElement("script");
//            s.setAttribute("type","text/javascript");
//            s.setAttribute("src", "http://www.htmlcommentbox.com/jread?page="+escape((window.hcb_user && hcb_user.PAGE)||(""+window.location)).replace("+","%2B")+"&opts=470&num=10");
//                if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);
//               })();

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
    }
 (document, 'script', 'facebook-jssdk'));