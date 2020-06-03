import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            name: props.name !== undefined ? props.name : "John Doe",
            mobile: props.mobile !== undefined ? props.mobile : "000-000-0000",
            work: props.work !== undefined ? props.work : "",
            email: props.email !== undefined ? props.email : "email@domain.com"
        };
    }

    render()
    {
        return (
            <div className="contact-card">
                <div className="container">
                    <div className="card-front">
                        <h3>{this.state.name}</h3>
                    </div>

                    <div className="card-back">
                        <ul>
                            <li>mobile: {this.state.mobile}</li>
                            <li>work: {this.state.work}</li>
                            <li>email: {this.state.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ContactCard.propTypes =
{
    name: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    work: PropTypes.string,
    email: PropTypes.string.isRequired
};