import $ from "jquery";
import React, { Component, createRef } from "react";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");



const fields = [{
    label: 'Star Rating',
    attrs: {
        type: 'starRating'
    },
    icon: '🌟'
}];
const templates = {
    starRating: function (fieldData) {
        return {
            field: '<span id="' + fieldData.name + '">',
            onRender: function () {
                $(document.getElementById(fieldData.name)).rateYo({ rating: 3.6 });
            }
        };
    }
};


const formData = [
    {
        type: "header",
        subtype: "h1",
        label: "formBuilder in React"
    },
    {
        type: "paragraph",
        label: "This is a demonstration of formBuilder running in a React project."
    }
];

const getData=()=>{
    let  fb = createRef();
  alert(this.fb.current);
  }
export class Counter extends Component {
    fb = createRef();
    componentDidMount() {
        //$(this.fb.current).formBuilder({ formData });

        $(this.fb.current).formBuilder({ formData, fields, templates });

      
    }

    
    render() {
        return (
        <div>
            <button onClick={getData}>Done</button>
            <div className="fb-editor" ref={this.fb} />
        </div>
        );
    }
}
