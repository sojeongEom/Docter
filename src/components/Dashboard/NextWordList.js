import {
    MenuItem
} from '@material-ui/core';
import '../../styles/TextDiv.css';

function click_nextwordItem(event) {

    var thisElement = event.target;

    var div = document.getElementById('div_textfield');
    var target = div.textContent;

    console.log('textfield: ', target)

    var result = String(target).concat(String(thisElement.textContent));
    div.innerHTML = result;

    console.log('[성공] 결과: '+ result);

    document.getElementById('nextword-list').innerHTML = "";
    
    event.stopPropagation();
}

const NextWordList = (props) => {

	return (
		<>
            {props.nextword.recommand.map((t) => {
                return (<MenuItem id="menu" key={t} value={t} onClick={click_nextwordItem}>{t}</MenuItem>);
            })}
        </>
	);
};

export default NextWordList;