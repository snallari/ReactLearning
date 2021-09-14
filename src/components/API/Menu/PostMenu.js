import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "axios";

const options = [
  'Completed',
  'Delete'
];

const ITEM_HEIGHT = 48;

const PostMenu=(props)=>{
  const {getid}=props;
  const [id, setId] = useState({_id:""})
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(props);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setId({ _id: props.getid ? props.getid : "abc" });
    if (event.currentTarget.innerText === "Delete") {
      console.log(id, props, event.currentTarget);
      //  axios.get('https://whispering-lowlands-74128.herokuapp.com/listClasses')
      axios
        .post("http://localhost:8081/deletePost", id)
        .then((response) => {
          console.log(response.data);
          if (response.data.deletedCount != 0) {
            setAnchorEl(null);
          }
        })
        .catch((response) => {});
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Delete'} onClick={handleClick}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default PostMenu