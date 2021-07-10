import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { addWords } from '../service/api';

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

const AddWord = () => {
    //o use state permite setar o primeiro valor para vazio
    const [word, setWord] = useState(initialValue);
    const { name, description} = word;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setWord({...word, [e.target.name]: e.target.value})
    }

    const addWordDetails = async() => {
        await addWords(word);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addWordDetails()}>Add User</Button>
            </FormControl>
            
        </FormGroup>
    )
}

export default AddWord;