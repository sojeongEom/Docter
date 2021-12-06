import * as React from 'react';
import '../../styles/TextDiv.css';

function click_grammarElement(event) {

    var thisElement = event.target;
    var thisChild = thisElement.lastChild;

    console.log(thisChild);
    console.log(thisElement);
    thisElement.innerText = thisChild.innerText;
    thisElement.style.textDecoration = "none";

    console.log('[성공] 결과: '+ thisElement.innerText);

    event.stopPropagation();
}

const GrammarList = (props) => {
    console.log(props);

    return (
        <>
            {props.grammarData.isRight.map((tf, index) => {
                const value = props.grammarData.current[index];
                const arrow = props.grammarData.recommand[index];
                console.log(value, tf, arrow);

                var spankey = String(value + String(index));
                var arrowkey = String(arrow + String(index));

                if (tf === true) {
                    if (value === "<br>") {
                        return (
                            <br></br>
                        );
                    } else {
                        return (value);
                    }
                } else if (tf === false) {
                    console.log("span_f");
                    return (

                        <span id="span_f" key={spankey} onClick={click_grammarElement}>
                            {value}
                            <p id="arrow_box" key={arrowkey}>
                                {arrow}
                            </p>
                        </span>


                    );
                }
            })}
        </>
    );
};

export default GrammarList;