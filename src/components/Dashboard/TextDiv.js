import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/TextDiv.css';
import SynonymList from './SynonymList';
import GrammarList from './GrammarList';
import NextWordList from './NextWordList';
import axios from 'axios';
import Address from '../../Address'

// 변수
var synonym = { // 유사어 추천
    recommand: []
};

var nextword = { // 다음 단어 추천
    recommand: []
};

var grammarData = { // 맞춤법 검사 및 교정
    current: [], // 기존
    recommand: [], // 추천
    isRight: [],

};

const getTextContent = () => {
    return document.getElementById('div_textfield').textContent;
}

const getInnerText = () => {
    return document.getElementById('div_textfield').innerText;
}

function handleSelect(event) {
    var val_control = 1; // 좌표 찾기 한번 수행을 위해서

    var selectionText = ""; //마우스로 드래그한 글
    var selection;


    if (document.getSelection) {
        selection = document.getSelection();
        selectionText = selection.toString();

        if (selectionText === "" || selectionText === " " || selectionText === "."
            || selectionText === "!" || selectionText === "?" || selectionText === ",") {

            console.log("빈 값");
            var synonym1 = {
                recommand: []
            };
            var obj = document.getElementById('synonym-list');
            //obj.innerHTML = "";
            obj.style.border = "0px white";
            ReactDOM.render(
                <SynonymList synonym={synonym1} selectionText={selectionText} textfield={getInnerText} />,
                document.getElementById('synonym-list')
            )

            return;
        } else {
            console.log("안 빈 값");
            selection = document.getSelection();
            selectionText = selection.toString();
            var range = selection.getRangeAt(0);
            var selanchor = selection.anchorOffset;
            var selStart = range.startOffset;
            var selEnd = range.endOffset;
            var tmp = selEnd - selStart;
            var End = selanchor + tmp;

            console.log(selection, selectionText, selStart, selEnd);

            var cursorX;
            var cursorY;

            var obj = document.getElementById('synonym-list');

            var address = Address + '/synonym';
            axios.post(address, {
                word: selectionText
            },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                })
                .then((response) => {
                    synonym = response.data;

                    console.log(synonym);
                    ReactDOM.render(
                        <SynonymList synonym={synonym} selStart={selStart} selEnd={End} />,
                        document.getElementById('synonym-list')
                    )
                })
                .catch((response) => {
                    console.log(response)
                });

            document.onmouseup = function (e) {
                if (val_control > 1) {
                    

                } else {
                    cursorX = e.pageX;
                    cursorY = e.pageY + 20;

                    console.log(cursorX, cursorY);

                    obj.style.top = cursorY + "px";
                    obj.style.left = cursorX + "px";
                    obj.style.position = "absolute";
                    obj.style.display = "block";

                    val_control++;

                }
            }
        }
    }
    else if (document.selection) {
        selectionText = document.selection.createRange().text;
    }
    else if (document.getSelection == null) {
        //const element = document.getElementById('box').value;
        //element.style.visibility = "hidden";
        return;
    }
    return selectionText;
}

// 기능2: 다음 단어 추천 // 기능3: 맞춤법 검사
const handleKeyPress = e => {
    var val_control = 1; // 좌표 찾기 한번 수행을 위해서
    var obj = document.getElementById('nextword-list');
    
    //var cursorX = e.view.innerHeight - 200;
    //var cursorY = e.view.innerWidth - 400;

    console.log(e.view.innerHeight, e.view.innerWidth );
    // 기능3: 맞춤법 검사 e.ctrlKey && e.shiftKey && e.which == 32
    if (e.ctrlKey && e.shiftKey && e.which === 32) { // ctrl + shift + space 인지 확인
        console.log(getInnerText);

        var all_textfield;
        if (getInnerText) {
            all_textfield = String(document.getElementById('div_textfield').innerText);
            console.log(all_textfield);
        } else {
            return console.log("getInnerText: null or not finded");
        }

        var address = Address + '/grammar';
        axios.post(address, {
            word: all_textfield
        },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then((response) => {
                grammarData = response.data;

                console.log(grammarData);

                if (ReactDOM.unmountComponentAtNode(document.getElementById('div_textfield'))) {
                    //alert('다시 한번 더 시도해주세요');
                    ReactDOM.render(
                        <GrammarList grammarData={grammarData} />,
                        document.getElementById('div_textfield')
                    )

                } else {
                    //ReactDOM.unmountComponentAtNode(document.getElementById('div_textfield'))
                    ReactDOM.render(
                        <GrammarList grammarData={grammarData} />,
                        document.getElementById('div_textfield')
                    )

                }
            })
            .catch((response) => {
                console.log(response)
            });

    }

    // 기능2: 다음 단어 추천 e.ctrlKey && e.which == 32
    else if (e.ctrlKey && e.which === 32) {                      // ctrl + space 인지 확인
        console.log(getInnerText);

        if (getInnerText) {
            all_textfield = String(document.getElementById('div_textfield').innerText);
            console.log(all_textfield);
        } else {
            return console.log("getInnerText: null or not finded");
        }

        var address = Address + '/nextword';
        axios.post(address, {
            word: all_textfield
        },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then((response) => {
                nextword = response.data;

                console.log(nextword);
                ReactDOM.render(
                    <NextWordList nextword={nextword} />,
                    document.getElementById('nextword-list')
                )
            })
            .catch((response) => {
                console.log(response)
            });
                /*
                if (val_control > 1) {

                } else {

                    console.log(cursorX, cursorY);

                    obj.style.top = cursorY + "px";
                    obj.style.left = cursorX + "px";
                    obj.style.position = "absolute";
                    obj.style.borderColor = "#FFDC61";
                    obj.style.border = "3px #FFDC61";
                    obj.style.display = "block";

                    val_control++;

                }*/
    }
}


const TextDiv = (props) => {
    return (
        <>
            <div id='div_textfield' contentEditable
                onKeyDown={handleKeyPress}
                onSelect={handleSelect}
                suppressContentEditableWarning={true}>


            </div>
        </>
    );
}

export default TextDiv;
