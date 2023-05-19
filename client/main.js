const complimentBtn = document.getElementById("complimentButton")
const seeAllCompliments = document.getElementById("getAllComplimentsButton")
const fortuneBtn = document.getElementById("fortuneButton")
const deleteComplimentBtn = document.getElementById('deleteCompliment')
const complimentSection = document.getElementById("complimentsContainer")
const fortunesSection = document.getElementById("fortunesContainer")
const submitNewComplimentForm = document.querySelector('#newComplimentForm')
const submitNewEmojiForm = document.querySelector("#newEmojiAddition")

baseUrl = "http://localhost:4000/api/compliment"

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            console.log(res.data)

            const complimentHeader = document.createElement('h2') 
            const addHeader = document.createTextNode(res.data)

            complimentHeader.appendChild(addHeader)
            complimentSection.appendChild(complimentHeader)
            
    });
};

const getAllCompliments = () => {
    axios.get("http://localhost:4000/api/compliment/all")
        .then(res => {
            const data = res.data;
            console.log(res.data)
            for (i = 0; i < res.data.length; i++){
                const complimentHeader = document.createElement('h4')
                res.data[i] = `${i + 1}. ${res.data[i] }`
                const addHeader = document.createTextNode(res.data[i])

                complimentHeader.appendChild(addHeader)
                complimentSection.appendChild(complimentHeader)
            }
    })
}

const deleteCompliment = () => {
    axios.delete("http://localhost:4000/api/compliment")
    .then(res => {
        const data = res.data;
        console.log(res.data)
        alert("You just deleted: " + data);
    }); 
};

const submitComplimentHandler = (e) => {
    e.preventDefault()

    

    let newCompliment = document.querySelector('#newCompliment')

    let bodyObj = {

        newCompliment: newCompliment.value
    }

    console.log(bodyObj)


    addNewCompliment(bodyObj)

    newCompliment.value = ''
    

}



const addNewCompliment = (body) => {
    axios.post("http://localhost:4000/api/compliment", body)
        .then((res) => {
            alert("You just added: " + res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        

}

const getFortune = (e) => {
    axios.get("http://localhost:4000/api/compliment/fortune")
        .then(res => {
            const data = res.data;
            console.log(res.data)
            
            const fortuneHeader = document.createElement('h2') 
            const addHeader = document.createTextNode(res.data)

            fortuneHeader.appendChild(addHeader)
            fortunesSection.appendChild(fortuneHeader)
    });

};

const submitFortuneHandler = (e) => {
    e.preventDefault()

    // let fortuneId = document.querySelector("#numberFortune")
    // fortuneId = +fortuneId.value
    // console.log(fortuneId)
    let newEmoji = document.querySelector('#newEmoji')

    let bodyObj = {

        newEmoji: newEmoji.value
    }

    // updateFortuneEmoji(bodyObj)

    axios.put("http://localhost:4000/api/compliment/fortune", bodyObj)
    .then((res) => {
        alert("You just added: " + res.data + "to all fortunes")
    })
    .catch((err) => {
        console.log(err)
    })

    newEmoji.value = ''
    

}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
deleteComplimentBtn.addEventListener('click', deleteCompliment)
seeAllCompliments.addEventListener('click', getAllCompliments)
submitNewComplimentForm.addEventListener('submit', submitComplimentHandler)
submitNewEmojiForm.addEventListener('submit', submitFortuneHandler)