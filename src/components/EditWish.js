import React, {useState, useEffect} from'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';



export default function EditWish(props) {
    const {id, name, description, img, price} = props.wish
    const [inputs, setInputs ] = useState({
        id: id,
        name: name, 
        description: description, 
        img: img, 
        price: price, 
        user_id: 1 
    })

    const handleChange = (e) => {
         setInputs( (state)=> ({...state, [e.target.name] : e.target.value}))
    }

    const handleSumbit = (state) => {
        props.editWish(state)
        props.closeEdit()
    }

  return (
    <div>
    <Dialog open={props.openDialog} onClose={props.closeEdit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Wish</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Input wish information
          </DialogContentText>
          <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                name="name"
                value={inputs.name}
                onChange = {handleChange}
                fullWidth
          />
            <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                multiline
                type="text"
                name="description"
                value={inputs.description}
                onChange = {handleChange}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="image"
                label="Image URL"
                type="text"
                name="img"
                value={inputs.img}
                onChange = {handleChange}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Price"
                type="text"
                name="price"
                value={inputs.price}
                onChange = {handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                fullWidth
            />

        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSumbit(inputs)} color="primary">
            Edit
          </Button>
        </DialogActions>
    </Dialog>

    </div>
  );
}