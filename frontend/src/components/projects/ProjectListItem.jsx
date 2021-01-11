import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { selectProjectById } from '../../redux/slices/projectsSlice';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ProjectListItem = ({ id, onDeleteClick, onEditClick, onAddMemberClick }) => {

    const project = useSelector(state => selectProjectById(state, id));
    const { name, description, owner } = project;

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    return (
        <TableRow key={id}>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="left" >
                {description}
            </TableCell>
            <TableCell align="left">
                {`${owner.firstname} ${owner.lastname}`}
            </TableCell>
            <TableCell align="right">
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                    <MoreHorizIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={menuAnchorEl}
                    keepMounted
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={onDeleteClick}>
                        Delete
                    </MenuItem>
                    <MenuItem onClick={onEditClick}>
                        Edit project
                    </MenuItem>
                    <MenuItem onClick={onAddMemberClick}>
                        Add member
                    </MenuItem>
                </Menu>
            </TableCell>
        </TableRow>
    );
};

export default ProjectListItem;