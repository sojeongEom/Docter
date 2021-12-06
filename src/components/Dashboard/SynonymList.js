import { MenuItem } from '@material-ui/core';
import '../../styles/TextDiv.css';

const SynonymList = (props) => {
    var selStart = props.selStart;
    var selEnd = props.selEnd;
    console.log('props: ', selStart, selEnd);

    function click_synonymItem(event) {

        var thisElement = event.target.textContent;
    
        var div = document.getElementById('div_textfield');
        var original = String(div.innerText);
        var preText = original.substring(0, selStart);
        var aftText = original.substring(selEnd, original.length);
        var result = preText + thisElement + aftText;

        div.innerHTML = result;
    
        console.log('[성공] 결과: '+ result);

        document.getElementById('synonym-div').innerHTML = "";

        event.stopPropagation();
    }

	return (
		<div id="synonym-div">
            {props.synonym.recommand.map((t) => {
                return (
                <MenuItem id="menu" key={t} value={t} onClick={click_synonymItem}>
                    {t}
                </MenuItem>);
            })}
        </div>
	);
};

export default SynonymList;