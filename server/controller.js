const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", "Wow your awesome!"];

const fortunesArr = [
    {
        id: 1,
        fortuneText: 'Little by little one travels far.'
    },
    {
        id: 2,
        fortuneText: 'If you want the rainbow you gotta put up with the rain.'
    },
    {
        id: 3,
        fortuneText: 'A foolish man listens to his heart. A wise man listens to cookies.'
    },
    {
        id: 4,
        fortuneText: "Don't pursue happiness --- create it." 
    
    },
    {
        id: 5,
        fortuneText: 'Do the thing you fear, and the death of fear is certain.'
    },
]

module.exports = {

    getCompliment: (req, res) => {
        console.log(compliments)
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getAllCompliments: (req, res) => {

        res.status(200).send(compliments)

    },

    deleteCompliment: (req, res) => {
        
        let randomIndex = Math.floor(Math.random() * compliments.length);
        console.log(randomIndex)

        deletedCompliment = compliments[randomIndex]

        compliments.splice(randomIndex, 1)
        console.log(compliments)
        res.status(200).send(deletedCompliment);

    },

    addCompliment: (req, res) => {

        console.log(req.body.newCompliment)
        compliments.push(req.body.newCompliment)

        res.status(200).send(`${req.body.newCompliment} successfully added`)

    },


    getFortune: (req, res) => {
        let fortuneText = fortunesArr.map( (fortune) => fortune.fortuneText)

        let randomIndex = Math.floor(Math.random() * fortuneText.length)
        let randomFortune = fortuneText[randomIndex]

        
        res.status(200).send(randomFortune)
    },

    addEmojiToFortune: (req, res) => {
        console.log(req.body)
        console.log(req.body.newEmoji)

        for(let i = 0; i < fortunesArr.length; i++){
            fortunesArr[i].fortuneText += " " + req.body.newEmoji
        }
    
        console.log(fortunesArr)
    

    res.status(200).send(req.body.newEmoji)
    }

}