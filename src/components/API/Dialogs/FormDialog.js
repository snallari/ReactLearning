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
            open: false,
            isAdmin:props.isAdmin,
        }
    }


    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    render() {
        return (
            <div>
                {this.state.isAdmin?(
                    <IconButton aria-label="delete" onClick={this.handleClickOpen}>
                    <p className={"addPost"}> Add Post</p>
                 <AddCircleIcon className={"addPost"}> </AddCircleIcon>
                </IconButton>
                ):<p>Welcome Students</p>}
                

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <CreatePost handleClose={this.handleClose} handleRefresh={()=>this.props.handleClick("its me Child")}/>
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
