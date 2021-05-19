import axios from 'axios';
import React, { Component } from 'react';

export default class AllLinks extends Component {
    constructor(){
        super();

        this.state = {
            linkKeys : [],
            links : {},
            emptyLinks : true
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/links')
        .then(res => {
            var linkss = JSON.stringify(res.data);
            var obj = JSON.parse(linkss)
            this.setState({
                links : obj,
                emptyLinks : false
            })
            }
        ).catch((error) => {
            this.setState({
                emptyLinks : true
            })
            console.log('there seems to be no links available to show.');
        })
    }

    render() {
        const linkss = this.state.links;
        return(
            (this.state.emptyLinks === false) ? 
                <div className=''>
                    <p className='all-link-url-guide'>Jammed URL : Origninal URL</p>
                    {Object.keys(linkss).map(function(key) {
                        return <p className='jammed-links'>http://localhost:5000/{key} : {linkss[key]}</p>
                    })}
                </div>
            : <div> You Seem to have no links shortended yet </div>
        )
    }
}