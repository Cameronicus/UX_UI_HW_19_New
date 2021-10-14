function closeN() {
document.getElementById("sideNav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

function openN() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  $("#contModal").click(function(event) {
    event.preventDefault();
    this.blur();
    $.get(this.button, function(html) {
       $(button).appendTo("body").modal();
    });
  });

  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SYEBNMR1ED');
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2651388,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');