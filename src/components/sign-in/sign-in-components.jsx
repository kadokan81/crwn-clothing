import React, { Component } from 'react';

import './sign-in-components.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../fierbase/fierbase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handeleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I alredy have account</h2>
                <span>Sign in wth you email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handeleChange={this.handeleChange}
                        label='email'
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        handeleChange={this.handeleChange}
                        label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form" >SIGN IN</CustomButton>
                        <CustomButton
                            isGoogleSignIn
                            onClick={signInWithGoogle} >
                            {' '}    SIGN IN WITH COOGLE  {' '}
                        </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;