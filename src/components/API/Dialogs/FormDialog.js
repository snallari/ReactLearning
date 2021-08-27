import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CreatePost from './CreatePost';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import '../ParentPost.css'

export class FormDialog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
            
        }
    }


    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <IconButton aria-label="delete" onClick={this.handleClickOpen}>
                        <p className={"addPost"}> Add Post</p>
                     <AddCircleIcon className={"addPost"}> </AddCircleIcon>
                </IconButton>

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <CreatePost handleClose={this.handleClose}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} className={"btnClass"}>
                            Cancel
                         </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default FormDialog
