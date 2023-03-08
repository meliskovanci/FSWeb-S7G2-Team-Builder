import * as React from "react";
import { useState } from "react";
import { TextField,
   MenuItem, 
   Box,
   Container,
   Grid,
   Button,
   Select,
   
   FormControl, 
   InputLabel } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';





function Form({ setAppearance, formDegerleriniAl }) {
 

  const depertment = ["Frontend Engineer", "Backend Engineer", "Data Scientist"]

  const emptyForm = {
    name: "",
    surname:"",
    email: "",
    role: "",
  };
  
  
    const [formData, setformData] = useState(emptyForm)

   
    const handleChange = (event) => {
      setformData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      formDegerleriniAl(formData);
      setAppearance(true);
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
      <Container maxWidth="sm"  >

        <Box

          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" }
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <div>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                
                  <TextField
                    required
                    id="outlined-required"
                    label="name"
                    name="name"
                    value= {formData.name}
                    onChange={(e)=>handleChange(e)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="surname"
                    name="surname"
                    value= {formData.surname}
                    onChange={(e)=>handleChange(e)}
                  />
                  <TextField
                    id="outlined-email-input"
                    name="email"
                    label="E-mail"
                    type="E-mail"
                    autoComplete="current-e-mail"
                    value= {formData.email}
                    onChange={(e)=>handleChange(e)}
                  />
                  
                  <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                    <InputLabel id="demo-simple-select-label" value= {formData.role} >Depertment</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="role"
                      label="Depertment"
                      // onChange={handleChange} 
                      onChange={(e)=>handleChange(e)}
                    >
                      <MenuItem value={"Frontend Engineer"} >Frontend Engineer</MenuItem>
                      <MenuItem value={"Backend Engineer"} >Backend Engineer</MenuItem>
                      <MenuItem value={"Data Scientist"}>Data Scientist</MenuItem>
                    </Select>
                  </FormControl>
                     
              </Grid>

            </Grid>
            <Button 
            variant="contained"
            type ="submit"
            >Submit</Button>
           

          

          </div>

        </Box>

      </Container>
    )
  }


  export default Form