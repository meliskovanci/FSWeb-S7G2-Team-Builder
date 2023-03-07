import * as React from 'react';
const Member = ({ member }) => {

   
 

  return (
    <div className="member-items" >
      
      <p>Name: {member.name}</p>
      <p>Surname: {member.surname}</p>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
    </div>
  );
}

export default Member;


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';


// function Member(props) {
//     const { member } = props;


//   return props.map((value) => React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }
// console.log(value)
// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// export default function InteractiveList() {
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);

//   return (
//     <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={dense}
//               onChange={(event) => setDense(event.target.checked)}
//             />
//           }
//           label="Enable dense"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={secondary}
//               onChange={(event) => setSecondary(event.target.checked)}
//             />
//           }
//           label="Enable secondary text"
//         />
//       </FormGroup>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Text only
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         </Grid>
//     </Box>
//   );
// }