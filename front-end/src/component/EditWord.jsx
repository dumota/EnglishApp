import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { editWords, getWords } from '../service/api';

const initialValue = {
    name: '',
    description: ''
    
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditWord = () => {
    const [word, setWord] = useState(initialValue);
    const { name ,description } = word;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadWordDetails();
    }, []);

    const loadWordDetails = async() => {
        const response = await getWords(id);
        setWord(response.data);
    }

    const editWordDetails = async() => {
        const response = await editWords(id, word);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setWord({...word, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editWordDetails()}>save</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditWord;