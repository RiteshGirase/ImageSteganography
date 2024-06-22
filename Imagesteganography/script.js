var imageurl;

function readURL(input){
    var reader = new FileReader();
    reader.onload = function(e){
        imageurl = e.target.result;
        document.querySelector("#image1").src=e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}

function hide(){
    document.querySelector("#image2").src= steg.encode(document.querySelector("#text").value, imageurl);
}

function decodeURL(input){
    var reader = new FileReader();
    reader.onload = function(e){
        document.querySelector(".txt").innerHTML=steg.decode(e.target.result);
    }
    reader.readAsDataURL(input.files[0]);

}