import React, { Component } from 'react';
import axios from 'axios';

export default class LinkInput extends Component {
    constructor(){
        super();

        this.state = {
            longlink : '',
            shortUrl : '',
            linkShortended : false,
            completeShorty : '',
            allLinks : []
        }

        this.getMaybeSet = this.getMaybeSet.bind(this);
        this.onChange = this.onChange.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    tryAgain(){
        this.setState({
            linkShortended : false,
            longlink : ''
        })
    }

    onChange(event){
        this.setState({
            longlink : event.target.value
        })
    }

    getMaybeSet(event) {
        var long = event.target.querySelector('input').value;
        console.log(long);
        event.preventDefault();
        axios.post(`http://localhost:5000/link/add`, { long })
        .then(res => {
        const short = res.data;
        const complete = `http://localhost:5000/${short}`
        console.log(this.state.linkShortended);
        this.setState({
            linkShortended : true,
            shortUrl : short,
            completeShorty : complete
        })
        console.log(res);
        console.log(res.data);
      })
    }

    render() {

        return(
            <div>
                {this.state.linkShortended === false ?
                <form action='/link/add' method='POST' onSubmit={this.getMaybeSet} className="form-input">
                    <input
                    type="url"
                    name="longlink"
                    placeholder="put the long link here"
                    value={this.state.longlink}
                    onChange={this.onChange}
                    />
                    <div>
                        <button className='btn' type="submit" >Shorten URL</button>
                    </div>
                </form>
                : <div>
                    <p className='response-text'>Here is your Jammed URL!</p>
                        <form className="form-input">
                        <input
                        readOnly={true}
                        type="url"
                        value={this.state.completeShorty}
                        />
                        <button className='btn' onClick={this.tryAgain}>Try another</button>
                    </form>
                    </div>}
            </div>


        )
    }
}