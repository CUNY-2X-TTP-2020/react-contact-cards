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
            <section className="contact-card">
                <h3>{this.state.name}</h3>
                <ul>
                    <li>mobile: {this.state.mobile}</li>
                    <li>work: {this.state.work}</li>
                    <li>email: {this.state.email}</li>
                </ul>
            </section>
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