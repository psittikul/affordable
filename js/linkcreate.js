function convertToSlug()
{
    var blogArray = document.getElementsByClassName("blog_title");
    var length = blogArray.length;
    for (i = 0; i < length; i++) {
	Text = blogArray[i]
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-')
	;
	document.getElementsByClassName("blog_url")[i].setAttribute("href", Text);
    }
    document.getElementsByClassName("blog_url")[i].setAttribute("href", Text);
}
