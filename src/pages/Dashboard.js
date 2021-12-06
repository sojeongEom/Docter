import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import {
    Grid, Box, Button, List, Typography
} from '@material-ui/core';
import CustomizedInputBase from "../components/Dashboard/CustomizedInputBase";
import TextDiv from "../components/Dashboard/TextDiv";
import "../styles/TextDiv.css"

// 기능5: txt파일로 저장하기
function downloadTxtFile() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('div_textfield').textContent], {
        type: "text/plain;charset-utf-8",
    });

    element.href = URL.createObjectURL(file);
    element.download = "newDocument.txt";
    document.body.appendChild(element);
    element.click();

    console.log('[성공] 다운로드');
}

// 메인
const Dashboard = () => {
    const [word, setWord] = useState({
        question: ''
    });
    const handleChange = (event) => {
        setWord({
            question: event.currentTarget.value,
        });
    };
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div id="pad_div"></div>
            <Box
                sx={{
                    display: 'inline',
                    p: 1,
                    m: 1,
                }}>
                <Typography
                    sx={{
                        display: 'inline',
                    }}
                >문서를 작성하세요!</Typography>
                <Button
                    variant="outlined"
                    sx={{
                        display: 'inline',
                        boxShadow: 1,
                        borderBottomRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderColor: '#FFDC61',
                        color: '#55A2F7',
                        float: 'right',
                        marginLeft: 'auto',
                        marginRight: 2,
                    }}
                    onClick={downloadTxtFile}>Save txt file</Button>
            </Box>
            <div id="pad_div"></div>
            <CustomizedInputBase id="dictionary-search-input"></CustomizedInputBase>

            <Box
                sx={{
                    float: 'right',
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                }}
            >

            </Box>
            <Grid
                id='grid_field'
                item
                lg={10}
                md={10}
                sm={12}
                xs={12}
            >
                <TextDiv ></TextDiv>

            </Grid>
            
            <List
                labelid="demo-simple-select-label"
                id="synonym-list"
                onChange={handleChange}
            >
            </List>
            <List
                labelid="demo-simple-select-label"
                id="nextword-list"
                onChange={handleChange}
            >
            </List>
        </>
    );
};

export default Dashboard;

/* 변수

var synonym = { // 유사어 추천
    recommand: ['자기효능감', '자기만족', '학습성취도', '의도']
};

내가 주는 데이터 = { word: all_textfield };
all_textfield = "저는 앞으로 이렇게 하고자 합니다. 이번 기회를 "


var nextword = { // 다음 단어 추천
    current:   ["저는 앞으로 이렇게 하고자 합니다. 이번 기회를 ", " "], // 기존: 무조건 배열 길이 =  2
    recommand: ['통해', '통해서', '통하여', '계기로'],
    isRight: [true, ture], // 무조건 true
};

var grammarData = { // 맞춤법 검사 및 교정
    current: [], // 기존
    recommand: [], // 추천
    isRight: [],

};

var grammarData = { // 맞춤법 검사 및 교정
    current:   ['오타자와띄어쓰기를 ', '틀린 곳이 ', '있느지 ', '알아보고자 합니다.', '<br>', '이것을 이용해서 앞으로 올바른 문법을 익힐 수가 있겠습니다. '], // 기존
    recommand: ['오타자와 띄어쓰기를 ', '틀린 곳이 ', '있는지 ', '알아보고자 합니다.', '<br>', '이것을 이용해서 앞으로 올바른 문법을 익힐 수가 있겠습니다. '], // 추천
    isRight: [true, false, true, false, true, true],

};
*/


