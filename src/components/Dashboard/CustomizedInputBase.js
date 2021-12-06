import * as React from 'react';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import ReactDOM from 'react-dom';
import DictionaryList from './DictionaryList';
import { Card, List } from '@material-ui/core';
import '../../styles/CustomizedInputBase.css';
import Address from '../../Address'

var dictionaryData = {
  recommand: [],
}

// 기능4: 사전 검색
function handleSearch() {
  var input = document.getElementById('inputbase').value;
  if (input === "" || input === "undefined") {
    console.log("empty");

    var target = document.getElementById('dictionary-list');
    target.innerHTML = "";

  } else {
    console.log(input);

    var address = Address + '/dictionary';
    axios.post(address, {
      word: input
    },
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then((response) => {
        dictionaryData = response.data;

        ReactDOM.render(
          <DictionaryList dictionaryData={dictionaryData} />,
          document.getElementById('dictionary-list')
        )
      })
      .catch((response) => {
        console.log(response)
      });

  }

}

const CustomizedInputBase = () => {
  return (
    <List sx={{ p: '2px 10px',  width: 'auto', maxWidth: 'fit-content'}}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',  width: 'auto', maxWidth: 'fit-content'}}
      >
        <input
          id='inputbase'
          placeholder="Dictionary Search"
        />
        <div sx={{ p: '10px', minWidth: '100px', minHeight: '100px'}} >
          <SearchIcon onClick={handleSearch} />
        </div>
      </Paper>
      <Card sx={{ p: '2px 4px',  width: 'auto'}}>
        <List id="dictionary-list" sx={{ p: '2px 4px'}}></List>
      </Card>
    </List>

  );
}

export default CustomizedInputBase;


