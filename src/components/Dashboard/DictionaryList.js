import {
    MenuItem
} from '@material-ui/core';
import '../../styles/TextDiv.css';

const DictionaryList = (props) => {
    console.log(props);

	return (
        <>
            {props.dictionaryData.text_list.map((t) => {
                return (<MenuItem id="diction" key={t} value={t}>{t}</MenuItem>);
            })}
        </>
	);
};

export default DictionaryList;