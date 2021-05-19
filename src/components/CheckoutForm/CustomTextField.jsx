import React from 'react';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
}

export default FormInput;