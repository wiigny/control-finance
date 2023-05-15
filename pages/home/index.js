const addValue = document.querySelector('#addValues')
const countValues = document.querySelector('#countValues')

const buttonFilters = document.querySelectorAll('#buttonFilters li')
const addValuesData = ()=>{

    buttonFilters.forEach((buttons) => {
        buttons.addEventListener('click', (e)=>{
            let all = (e.target.parentNode.children[0])
            let entry = (e.target.parentNode.children[1])
            let exits = (e.target.parentNode.children[2])

            let button = e.target.innerText
            if(button.toLowerCase() == 'todos'){
                all.classList.add('button__filters-active')
                entry.classList.remove('button__filters-active')
                exits.classList.remove('button__filters-active')
            }else if(button.toLowerCase() == 'entradas'){
                all.classList.remove('button__filters-active')
                entry.classList.add('button__filters-active')
                exits.classList.remove('button__filters-active')
            }else if(button.toLowerCase() == 'saídas'){
                all.classList.remove('button__filters-active')
                entry.classList.remove('button__filters-active')
                exits.classList.add('button__filters-active')
            }

            typeValues(button.toLowerCase())
        })
    })
}


function typeValues(text) {
    countValues.innerText = `R$ ${calcValue(text)}`
    addValue.innerHTML = ''
    
    insertedValues.filter((data)=>{
        if(data.type.toLowerCase() == text || text == 'todos'){
            
            
            let li = document.createElement('li')
                let pValue = document.createElement('p')
                    pValue.innerText = `R$ ${data.value}`

                let div = document.createElement('div')
                    let pType = document.createElement('p')
                        pType.classList = 'exit__Type-Value button__type'
                        pType.innerText = data.type
                    let button = document.createElement('button')
                        button.classList = 'button__trash'
                        button.id = data.id
                div.append(pType,button)
            li.append(pValue,div)

            addValue.append(li)
            deleteValue()
        }
    })
}

function calcValue(type){

    let totalValue = 0

    insertedValues.map((data)=>{
        if(data.type.toLowerCase() == type){
           totalValue += Number(data.value)
        }
        if(type == 'todos'){
            totalValue += Number(data.value)
        }
    })
    
    return totalValue.toFixed(2)
}
function deleteValue(){
    const removeValue = document.querySelectorAll('.button__trash')

    removeValue.forEach((e)=>{
        e.addEventListener('click', (button)=>{
            
            let identifier = Number(button.target.id)
            
            insertedValues = insertedValues.filter((list)=> list.id !== identifier)
            let buttonTypeClicked = button.target.parentNode.children[0].innerText

            let buttonAll = document.querySelector('#all').classList.contains('button__filters-active')
            
            if(buttonAll){
                typeValues('todos')
            }else if(buttonTypeClicked.toLowerCase() == "entradas"){
                typeValues(buttonTypeClicked.toLowerCase())
            }else if(buttonTypeClicked.toLowerCase() == "saídas"){
                typeValues(buttonTypeClicked.toLowerCase())
            }
        })
    })
}

