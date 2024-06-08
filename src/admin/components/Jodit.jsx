import React, { useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

function Jodit(props) {

    const editor = useRef(null);

    const updateContent = (newContent) => {
        props.description(newContent);
    }

    return (
        <JoditEditor
            ref={editor}
            value={props.value}
            onChange={newContent => updateContent(newContent)}
        />
    );
}

export default Jodit;
