function send(i)
{
	 let  number=document.getElementById('il');
	 switch(i)
	 {
		  case 1:
		     number.value+=1;
			 break;
			  case 2:
		     number.value+=2;
			 break; 
			 case 3:
		     number.value+=3;
			 break; 
			 case 4:
		     number.value+=4;
			 break; 
			 case 5:
		     number.value+=5;
			 break; 
			 case 6:
		     number.value+=6;
			 break;
			  case 7:
		     number.value+=7;
			 break;
			  case 8:
		     number.value+=8;
			 break;
			  case 9:
		     number.value+=9;
			 break;
			  case 0:
		     number.value+=0;
			 break;
			  case "+":
		     number.value+="+";
			 break;
			  case "-":
		     number.value+="-";
			 break;
			  case "*":
		     number.value+="*";
			 break;
			  case "/":
		     number.value+="/";
			 break;
			  case ".":
		     number.value+=".";
			 break;
			  case "AC":
		     number.value=" ";
			 break;
			 case "=":
			       result=eval(number.value);
				   number.value=result;
			 break;
			case "log":
			     result=eval(Math.log10(number.value));
				 number.value=result;
			break;
			case "√":
			    result=eval(Math.sqrt(number.value));
				number.value=result;
			break;
			 case "1/x":
			       result=eval(1/number.value);
				   number.value=result;
			break;
	 }
}