import Word from '../model/words.js'


//get method
export const getWords = async(req,res)=>{
    try {
        const words = await Word.find();
        res.status(200).json(words);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//save method

export const addWords = async(req,res)=>{
    const words = req.body;
    console.log("tamo dentro");
    const newWord = new Word(words);

    try {
        await newWord.save();
        res.status(201).json(newWord)
    } catch (error) {
        response.status(409).json({ message: error.message});    
    }
}

//get for id
export const getWordById = async (req, res) => {
    try{
        const words = await Word.findById(req.params.id);
        res.status(200).json(words);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

// Save data of edited words in the database
export const editWords = async (req, res) => {
    let words = await Word.findById(req.params.id);
    words = req.body;

    const editWords = new Word(words);
    try{
        await Word.updateOne({_id: req.params.id}, editWords);
        res.status(201).json(editWords);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteWords = async (req, res) => {
    try{
        await Word.deleteOne({_id: req.params.id});
        res.status(201).json("User deleted Successfully");
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}