import React, { Component } from 'react';
import logo from './img/logo.png';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center background-login">
        <div className="container center">
          <div className="justify-content-center row">
            <div className="col-lg-11">
            <div className="card-group">
              <div className="card-login-form card">
                <div className="card-body">
                  <form action="#">
                    <div className="logo text-center">
                      <img className="image-logo" alt="logo-widya-skilloka" src={logo} />
                    </div>
                    <h5>
                      <b>Data Perusahaan</b>
                    </h5>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="w-100 form-group">
                          <label for="companyName" className="input-label">Nama Perusahaan</label>
                          <input label="Nama Perusahaan" id="companyName" name="companyName" type="text" className="form-control col-form-label-lg" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="w-100 form-group">
                          <label for="companyDomain" className="input-label">Website Perusahaan</label>
                          <input label="Website Perusahaan" id="companyDomain" name="companyDomain" type="text" className="form-control col-form-label-lg" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label for="badan-usaha" className="input-label">Nomor Telepon Perusahaan</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">+</span>
                          </div>
                          <input id="companyPhone" name="companyPhone" type="text" className="form-control col-form-label-lg" placeholder="62" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label for="badan-usaha" className="input-label">Bidang Perusahaan</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <input id="companySelect" name="companySelect" type="text" className="form-control col-form-label-lg" placeholder="Select.." />
                            
                            {/* <div className="input-plaecholder col-form-label-lg">Select...</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h5>
                      <b>Data diri Anda</b>
                    </h5>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="w-100 form-group">
                          <label for="userFullName" className="input-label">Nama Lengkap</label>
                          <input label="Nama Lengkap" id="userFullName" name="userFullName" type="text" className="form-control col-form-label-lg" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="w-100 form-group">
                          <label for="userNickName" className="input-label">Nama Panggilan</label>
                          <input label="Nama Panggilan" id="userNickName" name="userNickName" type="text" className="form-control col-form-label-lg" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="w-100 form-group">
                          <label for="userEmail" className="input-label">Email</label>
                          <input label="Email" id="userEmail" name="userEmail" type="email" className="form-control col-form-label-lg" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label for="badan-usaha" className="input-label">Nomor Telepon Perusahaan</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">+</span>
                          </div>
                          <input id="userPhone" name="userPhone" type="text" className="form-control col-form-label-lg" placeholder="62" />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="login-submit btn btn-lg btn-secondary">Register</button>
                    <div className="back-to-login">
                      <a href="/">
                        <i className="fa fa-chevron-left arrowleft"></i>
                          Ke Halaman Login
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;