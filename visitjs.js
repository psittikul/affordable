var vimages=new Array();
var ncaptions=new Array();
var numCaptions = 3;
var numImages=3;
var curCaption = -1;
for(i=1;i<(numImages+1);i++)
{
    vimages[i]=new Image();
    vimages[i].src="visitimage"+(i)+".jpg";
}
var curImage=1;

function swapPicture()
{
    if(document.images){
	var nextImage=curImage+1;
	if(nextImage>numImages)
	    nextImage=1;
	if(vimages[nextImage] && vimages[nextImage].complete){
	    var target=1;
	    if(document.images.vimage)
		target=document.images.vimage;
	    if(document.all && document.getElementById("vimage"))
		target=document.getElementById("vimage");
	    if(target)
		{
		    target.src=vimages[nextImage].src;
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

