import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

import arla from "../../../static/img/arla.jpg"
import benna from "../../../static/img/benna.jpg"
import fdt from "../../../static/img/fdt.png"
import mccormick from "../../../static/img/mccormick.jpg"
import muller from "../../../static/img/muller.png"


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    console.log(this.state)
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <div className="content">
                  <h1 className='has-text-centered'>Case Studies</h1>
                  <div className="columns is-multiline is-mobile is-centered">
                    <div className="column is-half">
                      <img src={arla} alt='Arla logo'/>
                    </div>
                    <div className="column is-half">
                      <img src={benna} alt='Benna logo'/>
                    </div>
                    <div className="column is-half">
                      <img src={fdt} alt='FDT logo'/>
                    </div>
                    <div className="column is-half">
                      <img src={mccormick} alt='Mccormick logo'/>
                    </div>
                    <div className="column is-half">
                      <img src={muller} alt='Muller logo'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-1"></div>
              <div className="column is-4">
                <div className="content">
                  <h1 className='has-text-centered'>Contact</h1>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'company'}>
                        Your Company
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'company'}
                          onChange={this.handleChange}
                          id={'company'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'number'}>
                        Your Contact Number
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'number'}
                          onChange={this.handleChange}
                          id={'number'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'request'}>
                      How can we help you?
                      </label>
                      <select onChange={this.handleChange} id={'request'} className="control" name={'request'}>
                        <option value>Please Select</option>
                        <option value="Design services">Design services</option>
                        <option value="Surveying & Monitoring">Surveying & Monitoring</option>
                        <option value="Certification Services">Certification Services</option>
                        <option value="BIM Services">BIM Services</option>
                        <option value="Other">Other (please describe below)</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
