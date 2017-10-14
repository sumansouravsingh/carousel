var xTrans = 160, yTrans = 50;//Distance between each element in x and y axis(based on the initial translate values of X, y)
	
/*
	Move images to right on clicking right arrow.
	transform x,y and z-index values to achieve the effect.  
*/
function moveRight(){
	console.clear();
	var child = document.getElementsByClassName("carousel-content")[0].getElementsByTagName("a");
	var act = document.getElementsByClassName("active")[0];
	var y,z,trans,i=0,j=0;
	var index = Array.prototype.indexOf.call(child, act);
	var left = Math.floor(child.length/2)-1;
	var right = Math.floor(child.length/2)+1;
	j = index;
	
	/*Select previous element of active element*/
	if(index===0){
		index = child.length-1;
		y = child[index];
	}
	else y=child[--index];
	trans = "translateX("+(0)+"px) translateY("+((left+1)*yTrans)+"px);z-index:"+(1); //Transalte new active element to center
	y.setAttribute("style","transform:"+trans);
	
	if(index===0){
		index = child.length-1;
		z = child[index];
	}
	else z=child[--index];
	setLeftPartWhenRight(z,child,left,index);
	setRightPartWhenRight(child[j],child,right,j);
	y.setAttribute("class","active carousel-item");
}


//Translate proper elements to the left when right arrow is clicked
function setLeftPartWhenRight(z,child,left,index){
	var trans,i=0;

	while(left>=0 && z!=null)
	{
		
		trans = "translateX("+((i-1)*xTrans)+"px) translateY("+(left--*yTrans)+"px);z-index:"+(--i);
		z.setAttribute("style","transform:"+trans);
		z.setAttribute("class","carousel-item");
		if(index===0){
			z = child[child.length-1];
			index = child.length-1;
		}
		else z=child[--index];
	}
}

//Translate proper elements to the right when right arrow is clicked 
function setRightPartWhenRight(z, child, right, index){
	var trans,j=0,i=0;
	var left=right-2;
	while(right<child.length && z!==null)
	{
		trans = "translateX("+((++j)*xTrans)+"px) translateY("+(left--*yTrans)+"px);z-index:"+(--i);
		right++;
		z.setAttribute("style","transform:"+trans);
		z.setAttribute("class","carousel-item");
		if(index===(child.length-1)){
			z = child[0];
			index = 0;
		}
		else z=child[++index];
	}
	
}


/*
	Move images to left on clicking left arrow.
	transform x,y and z-index values to achieve the effect.  
*/
function moveLeft(){
	
	var child = document.getElementsByClassName("carousel-content")[0].getElementsByTagName("a");
	var act = document.getElementsByClassName("active")[0];
	var y,z,trans,i=0,j=0,tmp,tmp1;
	var index = Array.prototype.indexOf.call(child, act);
	var left = Math.floor(child.length/2)-1;
	var right = Math.floor(child.length/2)+1;
	tmp = index;
	
	/*Select previous element of active element*/
	if(index===child.length-1){
		index = 0;
		y = child[index];
	}
	else y=child[++index];
	trans = "translateX("+(0)+"px) translateY("+((left+1)*yTrans)+"px);z-index:"+(1); //Transalte new active element to center
	y.setAttribute("style","transform:"+trans);
	
	if(index===child.length-1){
		index = 0;
		z = child[index];
	}
	else z=child[++index];
	setRightPartWhenLeft(z,child,right,index);
	setLeftPartWhenLeft(child[tmp],child,left,tmp);
	y.setAttribute("class","active carousel-item");
}

//Translate proper elements to the left when left arrow is clicked
function setLeftPartWhenLeft(z,child,left,index){
	var trans,i=0;
	while(left>=0 && z!=null)
	{
		trans = "translateX("+((i-1)*xTrans)+"px) translateY("+(left--*yTrans)+"px);z-index:"+(--i);
		z.setAttribute("style","transform:"+trans);
		z.setAttribute("class","carousel-item");
		if(index===0){
			z = child[child.length-1];
			index = child.length-1;
		}
		else z=child[--index];
	}
}

//Translate proper elements to the right when left arrow is clicked
function setRightPartWhenLeft(z,child,right,index){
	var trans, i=0,j=0,left=right-2;
	while(right<child.length && z!==null)
	{
		trans = "translateX("+((++j)*160)+"px) translateY("+(left--*50)+"px);z-index:"+(--i);
		right++;
		z.setAttribute("style","transform:"+trans);
		z.setAttribute("class","carousel-item");

		if(index===(child.length-1)){
			z = child[0];
			index = 0;
		}
		else z=child[++index];
	}

}