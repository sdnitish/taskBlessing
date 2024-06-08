import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Tinymce(props) {

    const handleUpdate = (value, editor) => {
        props.description(value);
    };

    return (
        <>
            <Editor
                apiKey='w5sb1ik5tvj59blecnauu4ldjnvhkvob2bq10s1hufk8lrtn'
                init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align lineheight | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
                textareaName={props.name}
                initialValue={props.value}
                onEditorChange={handleUpdate}
            />
        </>
    );
}