import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Container,
  Input,
  FormControl,
  FormHelperText,
  FormGroup,
  Typography
} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Alert from '@material-ui/lab/Alert';
import "../ParentPost.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
export class CreatePost extends Component {
  isRedirect = false;

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes:"",
      classType:"math8",
      id:" ",
      heading:"Create Post",
      errorTitle: "",
      errorDesc: "",
      isReadOnly:false,
    };
  }

  componentDidMount(){
    console.log(this.props)
    if(this.props.post){
      const {_id, title, description, notes, classType}=this.props.post
      this.setState({
        heading:this.props.action,
        id:_id,
        title: title,
        description: description,
        classType:classType?classType:"math8",
        notes:notes,
        isReadOnly:true
      })
    }
  }

  sendPost = (event) => {
    event.preventDefault();
    let list=[]
    let data
    let url=""
    if(this.state.heading === "Create Post"){
      const { title, description, notes, classType} = this.state;
      data={
        "title":title,
        "description":description,
        "notes":notes,
        "classType":classType,
      }
      url="http://localhost:8081/addClasses"
      list.push({title, description, notes, classType})
    }else{
      const { title, description, notes ,classType,id} = this.state;
      data={
        "title":title,
        "description":description,
        "notes":notes,
        "classType":classType,
        "_id":id
      }
      url="http://localhost:8081/addClasses"
      list.push({title, description, notes, id});
    }
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        if (response.insertedCount != 0) {
          this.isRedirect = true;
          this.props.handleClose();
          this.props.handleRefresh();
        }
      })
      .catch((response) => {});
  };

  handleText = (event) => {
    if (event.target.name === "title") {
      this.setState({
        title: event.target.value,
      });
    }else if (event.target.name === "notes") {
      this.setState({
        notes: event.target.value,
      });
    } else {
      this.setState({
        description: event.target.value,
      });
    }
  };

  handleError = (event) => {
    if (event.target.name === "title") {
      if (!event.target.value || event.target.value.length < 3) {
        this.setState({
          errorTitle: "Enter a valid Title",
        });
      }else{
        this.setState({
            errorTitle: "",
          });
      }
    } else {
      if (!event.target.value || event.target.value.length < 3) {
        this.setState({
          errorDesc: "Enter a valid Description",
        });
      }else{
        this.setState({
            errorDesc: "",
          });
      }
    }
  };

  handleUserId = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };

  handleClass=(event)=>{
    console.log("event", event.target.value)
    this.setState({
      classType:event.target.value
    });
  };

  handleEdit=(event)=>{
    this.setState({
      isReadOnly:false,
      heading:"Edit Post"
    });
  }

  render() {
    return (
      <Container className={"post"}>
        <Typography variant="h6" gutterBottom>
          {this.state.heading} <EditIcon onClick={this.handleEdit}></EditIcon>
        </Typography>
        <FormGroup>
          <TextField
            id="outlined-basic1"
            label="Title"
            name="title"
            variant={this.state.isReadOnly?'standard':'outlined'}
            elevation={this.state.isReadOnly?0:3}
            disabled={this.state.isReadOnly?true:false}
            error={this.state.errorTitle ? true : false}
            value={this.state.title}
            onChange={this.handleText}
            onBlur={this.handleError}
            helperText={this.state.errorTitle}
            autoFocus={true}
            multiline
          />
          {/* <FormHelperText error="true">{this.state.errorTitle}</FormHelperText> */}
          <TextField
            id="outlined-basic2"
            label="Description"
            name="desc"
            variant={this.state.isReadOnly?'standard':'outlined'}
            disabled={this.state.isReadOnly?true:false}
            error={this.state.errorDesc ? true : false}
            value={this.state.description}
            onChange={this.handleText}
            onBlur={this.handleError}
            helperText={this.state.errorDesc}
            className={"mar-top"}
          />

          <TextField
            id="outlined-basic2"
            label="Notes"
            name="notes"
            variant="outlined"
            value={this.state.notes}
            variant={this.state.isReadOnly?'standard':'outlined'}
            disabled={this.state.isReadOnly?true:false}
            onChange={this.handleText}
            className={"mar-top"}
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Class</FormLabel>
            <RadioGroup
              aria-label="selectClass"
              name="selectClass"
              value={this.state.classType}
              onChange={this.handleClass}
              disabled={this.state.isReadOnly?true:false}
            >
              <FormControlLabel
                value="mathCore"
                control={<Radio />}
                label="Math Core"
              />
              <FormControlLabel value="algebra" control={<Radio />} label="Algebra" />
              <FormControlLabel
                value="math8"
                control={<Radio />}
                label="Math8"
              />
            </RadioGroup>
          </FormControl>
          {/* <FormHelperText>{this.state.errorDesc}</FormHelperText> */}
          {!this.state.isReadOnly?(
          <Button
            className={("btnClass", "mar-top")}
            variant="contained"
            color="primary"
            onClick={this.sendPost}
            disabled={this.state.errorTitle || this.state.errorDesc}
          >
            Submit
          </Button>):<Alert severity="info">To Edit hit the pencil icon</Alert>
            }          {/* <button onClick={this.sendPost}>Submit</button> */}
        </FormGroup>
      </Container>
    );
  }
}

export default CreatePost;
