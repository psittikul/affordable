var dimages=new Array();
var dcaptions=new Array();
var numCaptions = 3;
var numImages=3;
var curCaption = -1;
for(i=0;i<numImages;i++)
{
    dimages[i]=new Image();
    dimages[i].src="image"+(i)+".jpg";
}
var curImage=-1;

function swapPicture()
{
    if(document.images){
	var nextImage=curImage+1;
	if(nextImage>=numImages)
	    nextImage=0;
	if(dimages[nextImage] && dimages[nextImage].complete){
	    var target=0;
	    if(document.images.myImage)
		target=document.images.myImage;
	    if(document.all && document.getElementById("myImage"))
		target=document.getElementById("myImage");
	    if(target)
		{
		    target.src=dimages[nextImage].src;
		    curImage=nextImage;
		}
	    setTimeout("swapPicture()",5000);
	}
	else
	{
	    setTimeout("swapPicture()", 500);
	}
    }
}
setTimeout("swapPicture()",5000);

