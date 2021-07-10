import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { deleteWords, getWords } from '../service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllWord = () => {
    const [words, setWords] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllWords();
    }, []);

    const deleteWordData = async (id) => {
        await deleteWords(id);
        getAllWords();
    }

    const getAllWords = async () => {
        let response = await getWords();
        setWords(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Opções</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {words.map((word) => (
                    <TableRow className={classes.row} key={word.id}>
                        <TableCell>{word._id}</TableCell> {/* change it to word.id to use JSON Server */}
                        <TableCell>{word.name}</TableCell>
                        <TableCell>{word.description}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${word._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteWordData(word._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllWord;