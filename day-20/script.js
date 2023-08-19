// Q1. Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

// const id = document.getElementById('main-heading')
// console.log(id)

//Q2. Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)

// const target=document.getElementById('name').type
// console.log(target)

//Q3. Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)

// const target=document.getElementById('name').name
// console.log(target)

//Q4. Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

// const target=document.getElementById('name').id
// console.log(target)

//Q5. With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)

// const target=document.getElementById('name').value
// console.log(target)

//Q6. Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

// const getallelem =document.querySelectorAll('.list')
// console.log(getallelem[0].innerHTML)

//Q7. Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// const target=document.querySelector('.content').innerHTML
// console.log(target)

//Q8. Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)
// const targetBody=document.body.children
// console.log(targetBody)

//Q9. Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// const getElem=document.getElementsByTagName('li')[0]
// console.log(getElem)

//Q10.Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)
// const getElem=document.getElementsByClassName('content')[0]
// console.log(getElem)

//Q11.Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)

// const getElem=document.getElementsByName('fullName')[0]
// console.log(getElem)

//Q12.What classes are present in the classList of the element with the ID "main-heading"? (classList)
// const printAllClass = document.getElementById('main-heading').classList
// console.log(printAllClass)

//Q13.Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (classList.add)

// const printClassList = document.getElementById('main-heading').classList.add('highlight')

// const getNewClass=document.getElementById('main-heading')
// console.log(getNewClass)

//Q14.Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (classList.remove)

// const removeClassList = document.getElementById('main-heading').classList.remove('highlight')

// const getRemoveClass = document.getElementById('main-heading')
// console.log(getRemoveClass)

//Q15.Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". What classes are present on the "inner-box" element? (classList.toggle)
// const addToggle = document.getElementsByClassName('inner-box')[0].classList.toggle('active')
// console.log(addToggle)

// const printToggle = document.getElementsByClassName('inner-box')[0].classList
// console.log(printToggle)

//Q.Check if the element with the class "inner-box" has the class "active". Print true or false. (elem.classList.contains)

// const checkClass =document.getElementsByClassName('inner-box')[0]

// const check=checkClass.classList.contains('active')
// console.log(check)

//Q16.Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)

// const check=document.getElementById('name').classList.contains('input-field')
// console.log(check)

//Q17.What is the background color of the element with the ID "main-heading"? (style.background-color)

// const check=document.getElementById('main-heading')
// check.style.backgroundColor ="blue"
// const color = check.style.backgroundColor
// console.log(color)

//Q18. Does the element with the class "list" contain an <li> element with the text "Item 2"? Print true or false. (matches)

// const check1=document.getElementsByClassName('list')[0]
// const elemCheck= check1.matches('Item2')
// console.log(elemCheck)

//Q19.Does the element with the class "content" match a <div> tag? Print true or false. (matches)

// const elem =document.getElementsByClassName('content')[0]
// const elemCheck = elem.matches('div')
// console.log(elemCheck)

//Q20.What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// const elem = document.getElementsByClassName('inner-box')[0]
// const nearestElem = elem.closest('#container')
// console.log(nearestElem)

//Q21.Print the first child element of the <body> element. (document.body)

// const elem = document.body.firstElementChild
// console.log(elem)

//Q22.Print the number of child elements within the <body> element. (document.body.children)

// const elem =document.body.children
// console.log(elem)

//Q23.What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)
// const elem=document.body.firstElementChild.tagName
// console.log(elem)

//Q24.What is the class name of the first child element of the <body> element? (document.body.firstChild.className)
// const elem=document.body.firstElementChild.className
// console.log(elem)

//Q25.Print the innerHTML of the element with the class "content". (innerHTML)
// const elem=document.getElementsByClassName('content')[0].innerHTML
// console.log(elem)

//Q26.Print the innerText of the element with the class "content". (innerText)
// const elem=document.getElementsByClassName('content')[0].innerText
// console.log(elem)

//Q27.Get the value of the "type" attribute of the input element with the ID "name". (getAttribute())
// const elem=document.getElementById('name').getAttribute('type')
// console.log(elem)

//Q28.Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (setAttribute())
// const elem=document.getElementById('name').setAttribute('placeholder','Enter your full name')
// console.log(elem)

//Q29.Does the input element with the ID "name" have the "placeholder" attribute? Print true or false. (hasAttribute())
// const elem1=document.getElementById('name').hasAttribute('placeholder')
// console.log(elem1)

//Q30.Remove the "value" attribute from the input element with the ID "name". (removeAttribute())
// const elem1=document.getElementById('name').removeAttribute('value')
// console.log(elem1)

//Q31.Print the total number of attributes present in the element with the ID "main-heading". (attributes())
// const elem1=document.getElementById('main-heading').attributes
// console.log(elem1)

//Q33.Create a new text node with the content "This is a new text node." using the document.createTextNode method. Print the created text node. (document.createTextNode)
// const crtText=document.createTextNode('This is a new text node.')
// console.log(crtText)

//Q34.Append the created text node to the element with the ID "main-heading". Print the updated element. (append)
// const elem1=document.getElementById('main-heading')
// const elem2=elem1.append(crtText)
// console.log(elem1)

//Q32.Create a new <div> element using the document.createElement method. Print the created element. (document.createElement)
// const crtDiv=document.createElement('div')
// console.log(crtDiv)

//Q35.Prepend the created <div> element to the element with the class "content". Print the updated element. (prepend)
// const prependelem =document.getElementsByClassName('content')[0]
// const elem2=prependelem.prepend("hiiiii", crtDiv)
// console.log(elem2)

//Q36.Replace the element with the ID "main-heading" with the created text node. Print the updated element. (replaceWith)
// const elem1 =document.getElementById('main-heading')
// const elem2=elem1.replaceWith(crtText)
// console.log(elem2)

//Q37.Insert the created <div> element before the element with the class "inner-box". Print the updated parent element. (before)

// const insertCrtElem = document.getElementsByClassName('inner-box')[0]
// const insertCrtElem2=insertCrtElem.before(crtDiv,"hello!!")
// console.log(insertCrtElem2)

//Q38.Insert the created <div> element after the element with the class "inner-box". Print the updated parent element. (after)
// const insertCrtElem = document.getElementsByClassName('inner-box')[0]
// const insertCrtElem2=insertCrtElem.after(crtDiv,"hello!!")
// console.log(insertCrtElem2)

//Q39.Print the offsetHeight and offsetWidth of the element with the class "content". (offsetHeight / offsetWidth)
// const offsetElem= document.getElementsByClassName('content')[0]
// const offsetElem1=offsetElem.offsetHeight
// const offsetElem2=offsetElem.offsetWidth
// console.log(offsetElem1)
// console.log(offsetElem2)

//Q40.Print the clientHeight and clientWidth of the element with the class "content". (clientHeight / clientWidth)
// const clientElem= document.getElementsByClassName('content')[0]
// const clientElem1=clientElem.clientHeight
// const clientElem2=clientElem.clientWidth
// console.log(clientElem1)
// console.log(clientElem2)

//Q41.Print the scrollHeight and scrollWidth of the element with the class "content". (scrollHeight / scrollWidth)
// const scrollElem= document.getElementsByClassName('content')[0]
// const scrollElem1=scrollElem.scrollHeight
// const scrollElem2=clientElem.scrollWidth
// console.log(scrollElem1)
// console.log(scrollElem2)

//Q42.Print the innerHeight and innerWidth of the window. (innerHeight / innerWidth)
// const innerElem=window.innerHeight
// const innerElem1=window.innerWidth
// console.log(innerElem)
// console.log(innerElem1)

//Q43.Print the outerHeight and outerWidth of the window. (outerHeight / outerWidth)
// const outerElem=window.outerHeight
// const outerElem1=window.outerWidth
// console.log(outerElem)
// console.log(outerElem1)

//Q44.Change the text content of the <h1> element with the ID "main-heading" to "Hello, DOM!" 
// const change=document.getElementById('main-heading')
// // const changeText=change
// .innerHTML="Hello, DOM!"
// console.log(change)

//Q45.Change the value of the input element with the ID "name" to "Jane Smith".
// const changeValue=document.getElementById('name').value= "Jane Smith"
// console.log(changeValue)

//Q46.Add a new <li> element to the <ul> element with class "list" containing the text "Item 4".
// const addElem =document.getElementsByClassName('list')[0]
// const crtElem=document.createElement('li')
// const textelem=crtElem.innerHTML='Item 4'
// const result=addElem.append(crtElem)
// console.log(result)

//Q47.Change the text content of the <p> element within the <div> with class "content" to "Updated paragraph text".

// const changetxt=document.getElementsByClassName('content')[0]
// const txt=document.createTextNode('Updated paragraph text')
// const change=changetxt.replaceWith(txt)
// console.log(change)

//Q48.Change the background color of the <div> element with ID "container" to blue.

// const elem=document.getElementById('container')
// const changeColor=elem.style.backgroundColor='blue'
// console.log(changeColor)

//Q49.Remove the class "inner-box" from the <div> element with class "inner-box".

// const elem=document.getElementsByClassName('inner-box')[0]
// const removeClassName=elem.remove('inner-box')
// console.log(removeClassName)

//Q50.Clone the <div> element with ID "container" and append it to the body.
// const crtDiv=document.createElement('div')
// crtDiv.id="container"
// const crtP=crtDiv.appendChild(document.createElement('p'))
// crtP.textContent="This is a container element."
// const crtDiv2=crtDiv.appendChild(document.createElement('div'))
// crtDiv2.className='inner-box'
// const crtP2=crtDiv2.appendChild(document.createElement('p'))
// crtP2.textContent="This is an inner box."
// console.log(crtDiv)
// document.body.appendChild(crtDiv)

//Q51.Wrap the contents of the <div> with ID "container" in a new <div> with class "wrapper".
// const elem=document.getElementById('container')
// const wrap=document.createElement('div')
// wrap.className='wrapper'
// wrap.appendChild(elem)
// console.log(wrap)

//Q52.Remove the first <li> element from the <ul> with class "list".
// const elem=document.getElementsByClassName('list')[0]
// const removeli=elem.firstElementChild.remove()
// console.log(removeli)

//Q53.Add the class "highlight" to the <p> element within the <div> with class "content".

// const addClass=document.getElementsByClassName('content')[0]
// addClass.getElementsByTagName('p')[0].classList.add('highlight')
// console.log(addClass)
// const printclassName=document.getElementsByClassName('highlight')[0]
// console.log(printclassName)

//Q54.Change the type of the input element with ID "name" to "email".
// const elem=document.getElementById('name')
// elem.type='email'
// console.log(elem)

//Q55.Replace the text content of the <li> element with "Item 2" to "Updated Item 2".
// const elem=document.getElementsByTagName('li')[0]
// const result=elem.replaceChildren("Updated Item 2")
// console.log(result)

//Q56.Change the value of the input element with ID "name" to an empty string.
// const elem=document.getElementById('name')
// elem.value=" "
// console.log(elem)

//Q57.Remove the entire <form> element from the DOM.
// const elem=document.getElementsByTagName('form')[0]
// elem.remove()
// console.log(elem)

//Q58.Add an event listener to the <h1> element with ID "main-heading" that logs a message when clicked.
// function popUpMsg(){
// alert("hello! How are you?")
// }
// const elem=document.getElementById('main-heading')
// elem.addEventListener('click',popUpMsg)
// console.log(elem)

//Q59.Change the font size of the <p> element within the <div> with class "content" to 18px.
// const elem=document.getElementsByClassName('content')[0].getElementsByTagName('p')[0].style.fontSize='18px'

//Q60.Remove the <ul> element with class "list" from the DOM.
// const elem=document.getElementsByClassName('list')[0].remove()
// console.log(elem)

//Q61.Create a new <div> element, give it a class of "new-div", and append it to the body.
// const crtDiv=document.createElement('div')
// crtDiv.className='new-div'
// console.log(crtDiv)
// document.body.append(crtDiv,"hii")

//Q62.Append a new <p> element with the text "New paragraph" to the <div> with class "inner-box".
const elem=document.getElementsByClassName('inner-box')[0]
const newP=document.createElement('p')
newP.textContent="New paragraph"
elem.appendChild(newP)
console.log(newP)

