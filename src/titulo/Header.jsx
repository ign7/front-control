import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CadastroVeiculo from '../cadastroVeiculo/CadastroVeiculo';
import DetailV from '../verVeiculo/DetailV';
import Veiculo from '../verVeiculo/Veiculo';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/home" class="nav-link">
                Home Page
              </Link>
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                disabled               
              >
                Disabled
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item"  disabled>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item"  disabled>
                    Another action
                  </a>
                </li>
                <li></li>
                <li>
                  <a class="dropdown-item"  disabled>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
