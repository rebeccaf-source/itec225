function formatDate() {
    let date = document.getElementById("usaDate").value;
    date = date.split("/");
    let string = "";

    if(date[0] == 1)
    {
        string = string + "January ";
    }
    else if(date[0] == 2)
    {
        string = string + "February ";
    }
    else if(date[0] == 3) 
    {
        string = string + "March ";
    }
    else if(date[0] == 4) 
    {
        string = string + "April ";
    }
    else if(date[0] == 5)
    {
        string = string + "May ";
    }
    else if(date[0] == 6)
    {
        string = string + "June ";
    }
    else if(date[0] == 7)
    {
        string = string + "July ";
    }
    else if(date[0] == 8)
    {
        string = string + "August ";
    }
    else if(date[0] == 9)
    {
        string = string + "September ";
    }
    else if(date[0] == 10)
    {
        string = string + "October ";
    }
    else if(date[0] == 11)
    {
        string = string + "November ";
    }
    else if(date[0] == 12)
    {
        string = string + "December ";
    }

    if(date[1] == 1 || date[1] == 21 || date[1] == 31)
    {
        string = string + date[1] + "st ";
    }
    else if(date[1] == 2 || date[1] == 22)
    {
        string = string + date[1] + "nd ";
    }
    else if(date[1] == 3 || date[1] == 23)
    {
        string = string + date[1] + "rd ";
    }
    else {
        string = string + date[1] + "th ";
    }

    string = string + date[2];

    document.getElementById("print").innerHTML = string + " ";

}



function sortArrayBubble()
{
    let arr = document.getElementById("sorting").value;
    //document.getElementById("print2").innerHTML =  "here";
    arr = arr.split(" ");

    if(arr[0] > 0 || arr[0] <= 0)
    {
        for(let i = 0; i < arr.length; i++)
        {
            arr[i] = parseInt(arr[i]);
        
    }
    
    for(var lastIndex = arr.length - 1; lastIndex > 0; lastIndex--)
    {
        for(var i = 0; i < lastIndex; i++)
        {
            if(arr[i] > arr[i+1])
            {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }

    document.getElementById("print1").innerHTML = arr + " ";
}


function sortArrayQuick()
{
    let arr = document.getElementById("sorting2").value;
    arr = arr.split(" ");
    
 
    if(arr[0] > 0 || arr[0] <= 0)
    {
        for(let i = 0; i < arr.length; i++)
        {
            arr[i] = parseInt(arr[i]);
        }
        
    }
    

    let begin = 0;
    let end = arr.length - 1;
    quickSort(arr, begin, end);

    function quickSort(arr, begin, end)
    {
        
        if(begin < end){
        let pi = partition(arr, begin, end);
        quickSort(arr, begin, pi-1);
        quickSort(arr, pi + 1, end);
        }
    }

    function partition(arr, begin, end)
    {
        let pivot = arr[end];
        
        let i = begin - 1;

        for(let j = begin; j < end; j++)
        {
            if(arr[j] == pivot || arr[j] < pivot)
            {
                i++;
                let temp = arr[i];
                let temp2 = arr[j];
                arr[i] = temp2;
                arr[j] = temp;
            }
        }
        let temp = arr[i + 1];
        let temp2 = arr[end];
        arr[i+1] = temp2;
        arr[end] = temp;
        return i + 1;
    }
    document.getElementById("print2").innerHTML = arr + " ";
}
}
