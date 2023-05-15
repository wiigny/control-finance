const buttonRegister = document.querySelector('#registerValue')

buttonRegister.addEventListener('click', makeModalRegister)
function makeModalRegister(){
    const body = document.querySelector('body')
    let sectionPrimary = document.createElement('section')
    sectionPrimary.id = "modalInsertValue"
    
    let sectionSecondary = document.createElement('section')
    sectionSecondary.classList = 'container'
    sectionSecondary.id = "sectionModal"
    sectionPrimary.appendChild(sectionSecondary)
        
        let header = document.createElement('header')
            let h2 = document.createElement('h2')
                h2.innerText = 'Registro de Valor'
                h2.classList = 'title2-bold'

            let closeModal = document.createElement('button')
                closeModal.id = 'closeModal'
                closeModal.innerText = 'X'
                closeModal.classList = 'button__close'

        header.append(h2,closeModal)

        let divValues = document.createElement('div')
            let paragraphDescription = document.createElement('p')
                paragraphDescription.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor '
                paragraphDescription.classList = 'text1-regular'

            let h3Value = document.createElement('h3')
                h3Value.innerText = 'Valor'
                h3Value.classList = 'text1-medium'

            let inputValue = document.createElement('input')
                inputValue.type = 'text'
                inputValue.id = 'inputValue'
                inputValue.placeholder = '00,00'
                inputValue.classList = 'input__modal'
                
        divValues.append(paragraphDescription, h3Value, inputValue)

        let form = document.createElement('form')
            let h3Form = document.createElement('h3')
                h3Form.innerText = 'Tipo de valor'
                h3Form.classList = 'text1-medium'

            let labelEntry = document.createElement('label')
                labelEntry.id = 'label'
                labelEntry.classList = 'text1-bold'

                
                    let entry = document.createElement('input')
                    entry.id = 'Entradas'
                    entry.name = 'typeValue'
                    entry.type = 'radio'
                    entry.classList = 'text1-bold'
                    let pEntry = document.createElement('p')
                        pEntry.innerText = 'Entrada'
                        
            labelEntry.append(entry,pEntry)

            let labelExits = document.createElement('label')
                labelExits.id = 'label'
                labelExits.classList = 'text1-bold'

                    let exits = document.createElement('input')
                    exits.id = "Saídas"
                    exits.name = 'typeValue'
                    exits.type = 'radio'
                    exits.classList = 'text1-bold'
                    let pExits = document.createElement('p')
                        pExits.innerText = 'Saída'
            labelExits.append(exits, pExits)

        form.append(h3Form, labelEntry, labelExits)

            let divInsert = document.createElement('div')
                divInsert.id = 'cancelInsert'
                let buttonCancel = document.createElement('button')
                    buttonCancel.id = 'closeModal'
                    buttonCancel.innerText = 'Cancelar'
                    buttonCancel.classList = 'text1-bold button__type'
                    buttonCancel.style.cursor = 'pointer'
    
                let buttonInsertValue = document.createElement('button')
                    buttonInsertValue.id = 'buttonInsertValue'
                    buttonInsertValue.innerText = 'Inserir Valor'
                    buttonInsertValue.classList = 'text1-bold buttun__register'
                    buttonInsertValue.disabled = true
                divInsert.append(buttonCancel,buttonInsertValue)

                
    sectionSecondary.append(header,divValues,form, divInsert)    

    body.insertAdjacentElement('afterend',sectionPrimary)

    buttonCloseModal()
    checkValue()

}

function buttonCloseModal(){
    const closeModal = document.querySelectorAll('#closeModal')

    const modal = document.querySelector('#modalInsertValue')

    closeModal.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            modal.classList.add('close__modal')
            setTimeout(removeModal, 0600)
            
        })
    })
}
function removeModal(){
    document.querySelector('#modalInsertValue').remove()
}

function checkValue(){
    const inputValue = document.querySelector('#inputValue')

    inputValue.addEventListener('keypress', (e)=>{
        if(checkCharacter(e)){
            e.preventDefault()
        }
    })

    inputValue.addEventListener('paste', (e)=>{
        e.preventDefault()
    })

    inputValue.addEventListener('keyup', (e)=>{
        const valueInInput = inputValue.value
        const buttonInsertValue = document.querySelector('#buttonInsertValue')
        if(valueInInput.length == 0 && valueInInput.length == ''){
            buttonInsertValue.disabled = true
        }else{
            buttonInsertValue.disabled = false
        }
    })

    
    addValueOfInput()
}

function checkCharacter(char){
    const keys = String.fromCharCode(char.keyCode)
    const regex = '[0-9.]'

    if(!keys.match(regex)){
        return keys
    }
}

function addValueOfInput(){
    const buttonInsertValue = document.querySelector('#buttonInsertValue')

    buttonInsertValue.addEventListener('click', (e)=>{
        e.preventDefault()
        const inputValue = document.querySelector('#inputValue')
        const input = document.querySelector('input[type=radio]:checked')
        const checkNum = []
        

        const aleatory = ()=>{
            const num = 0
            
            insertedValues.forEach((iten)=> {checkNum.push(iten.id)})

            if(checkNum.length == 0){
                return num
            }else{
                const numAleatory = Math.floor(Math.random()*100000)
                return numAleatory
            }
        }

        const idAleatory = aleatory()

        const valueData = 
        {
            id: idAleatory,
            value: inputValue.value, 
            type: input.id,
        }

        insertedValues.push(valueData)

        inputValue.value = ''
        buttonInsertValue.disabled = true
        addValuesData()
        typeValues('todos')

    })
}


