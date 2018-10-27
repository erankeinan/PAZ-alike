function search(){
    alert("Search now...");
}

function documentReady() {
var imgNo=1;

    

    
    function clhangeImg(){  
    
        if(imgNo==1){
            document.getElementById("img1").src="./images/250X110668568400.jpg";
            document.getElementById("img2").src="./images/banner_atar.jpg";
            imgNo=2
            }
            else{
                document.getElementById("img1").src="./images/paz_250x110059890678.jpg"
                document.getElementById("img2").src="./images/paz_250x110103131473.jpg"
                imgNo=1;k
                }   
   
    }

    setInterval(clhangeImg, 10000);


}

