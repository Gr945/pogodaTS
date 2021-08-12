import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {poiskSitySagaAC} from '../../Redux/ActionCreators'


import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Route, Switch, Link} from 'react-router-dom';


export default function Navigation() {
  const dispatch = useDispatch();
  

  const poiskSity = (e:any) => {
dispatch(poiskSitySagaAC(e.target.value))
  };

  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
    
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoEDViEtehH4cNR-B8PqjWl3LcyjPTAq_Vg&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Pogoda
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="d-flex justify-content-end">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Switch>
                  <Route exact path="/">
                  <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="🔍︎ поиск по городу  "
                        className="mr-2"
                        aria-label="Search"
                        style={{ marginRight: '2rem' }}
                        onChange={(e) => poiskSity(e)}
                      />
                    </Form>
                    <Link to="/setting" className="navbar-nav nav-link">
                    <img  
              alt=""
              src='data:image/jpeg;base64,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'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
                    </Link>
                  </Route>
                 
               
                  <Route exact path="/setting">
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="🔍︎ Название города "
                        className="mr-2"
                        aria-label="Search"
                        style={{ marginRight: '2rem' }}
                        onChange={(e) => poiskSity(e)}
                      />
                    </Form>
                    <Link
                      to="/"
                      className="navbar-nav nav-link"
                    >
                      Выход
                    </Link>
                  </Route>
                </Switch>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
