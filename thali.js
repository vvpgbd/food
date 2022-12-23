document.querySelectorALL('a[href^="#"]').forEach(anchor => {
    anchor.addEventListner("click", function(e){
        //e.preventDefaut();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
        behaviour : "smooth"
        });
    });
}); 