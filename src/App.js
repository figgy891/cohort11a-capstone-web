import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "./dashboard";

import React, { useEffect, useState } from "react";

import { Button, List, Collapse, Breadcrumb, Row, Col } from 'antd';
const { Panel } = Collapse;



function Auth() {

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const onSignIn = async () => {

    };

    const onSignUp = async () => {

    };

    return (
        <div>
            <h1 className={'text-left text-xl uppercase tracking-wider text-blue-500'}>Sign Up</h1>
            <form onSubmit={onSignIn}>
                <Row type={'flex'} align={'center'} className={'mt-5'}>
                    <Col span={24}>
                        <input type="email" value={signUpEmail} onChange={(ev) => setSignUpEmail(ev.currentTarget.value)} required type="text" className={'border p-1 mr-5 w-2/3'} placeholder={'Email address'} />
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <input type="password" value={signUpPassword} onChange={(ev) => setSignUpPassword(ev.currentTarget.value)} required type="text" className={'border p-1 mr-5 w-2/3'} placeholder={'Password'} />
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <Button htmlType={'submit'} type={'primary'}>Submit</Button>
                    </Col>
                </Row>
            </form>
            <br />
            <br />
            <h1 className={'text-left text-xl uppercase tracking-wider text-blue-500'}>Sign In</h1>
            <form onSubmit={onSignUp}>
                <Row type={'flex'} align={'center'} className={'mt-5'}>
                    <Col span={24}>
                        <input type="email" value={signInEmail} onChange={(ev) => setSignInEmail(ev.currentTarget.value)} required type="text" className={'border p-1 mr-5 w-2/3'} placeholder={'Email address'} />
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <input type="password" value={signInPassword} onChange={(ev) => setSignInPassword(ev.currentTarget.value)} required type="text" className={'border p-1 mr-5 w-2/3'} placeholder={'Password'} />
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <input type="password" value={retypePassword} onChange={(ev) => setRetypePassword(ev.currentTarget.value)} required type="text" className={'border p-1 mr-5 w-2/3'} placeholder={'Retype Password'} />
                        {(signInPassword != retypePassword) && <small className={'text-red-500 font-bold'}>Passwords don't match</small>}
                    </Col>
                    <Col span={24} className={'mt-5'}>
                        <Button htmlType={'submit'} disabled={signInPassword != retypePassword} type={'primary'}>Submit</Button>
                        {/*<Button loading={loading} disabled={password != retypePassword} type="primary" htmlType={'submit'} className={'border-0 w-full rounded font-bold'}>Submit</Button>*/}
                    </Col>
                </Row>
            </form>

        </div>
    )
}

function App() {


    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/">
                        <Auth />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
