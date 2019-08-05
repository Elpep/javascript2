//1.

let bookArray = [silmarillion, the_hobbit, lord_of_the_rings]


//2.

console.log(bookArray)


//3.

function arrayToHtmlList(arr) {
    let newUl = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = arr[i]; //The textContent property returns the text content of the specified node.
        newUl.appendChild(newLi);
    }
    document.body.appendChild(newUl);
}

console.log(arrayToHtmlList(bookArray))


//4.

let bookObjects = {};

bookObjects[bookArray[0]] = {
    title:"Silmarillion",
    language:"English",
    author:"JRR Tolkien",
    img:  "https://images-na.ssl-images-amazon.com/images/I/41SAdzmroEL._SX327_BO1,204,203,200_.jpg"
    }

bookObjects[bookArray[1]] = {   
    title:"The Hobbit",
    language:"English",
    author:"JRR Tolkien",
    img:  "https://images-na.ssl-images-amazon.com/images/I/51FCE5VMsWL._SX324_BO1,204,203,200_.jpg"
    }

bookObjects[bookArray[2]] = {  
    title:"Lord of the Rings",
    language:"English",
    author:"JRR Tolkien",
    img:  "https://images-na.ssl-images-amazon.com/images/I/41i2Sdwf7mL._SX325_BO1,204,203,200_.jpg"
    }


//5. 

function displayBookInformation(bookInfoObject) {

    for (let i = 0; i < Object.keys(bookInfoObject).length; i++){
        document.write("<ul>" + 
        "<li><h2>" + bookInfoObject[bookArray[i]].title.replace(/['"]+/g, '') + "</h2></li>" +  
        "<li><h3>" + bookInfoObject[bookArray[i]].language.replace(/['"]+/g, '') + "</h3></li>" + 
        "<li><h3>" + bookInfoObject[bookArray[i]].author.replace(/['"]+/g, '') + "</h3></li>" + 
        "<li><img src=" + bookInfoObject[bookArray[i]].img + "></img></li>" +  
        "</ul>")
    }
}

displayBookInformation(bookObjects);  
}