import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

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
                  <h2>Address</h2>
                  <p> 3 Spring Cottages, London Road, Crowborough, East Sussex, TN6 1UT </p>
                  <p> Registered in England:12641286 VAT no.360708406</p>
                  <h2>Phone</h2>
                  <p> 020x xxxx xxxx </p>
                  <h2>Email</h2>
                  <p> 
                    <a href="mailto:info@engineeriq.co.uk">info@engineeriq.co.uk</a> 
                  </p>
                </div>
              </div>
              <div className="column is-1"></div>
              <div className="column is-4">
                <div className="content">
                  <h2 className='has-text-centered'>Contact Our Team</h2>
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
                    <div className="field form-inline">
                      <label className="label" htmlFor={'name'}>
                        Your name:
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
                    <div className="field form-inline">
                      <label className="label" htmlFor={'company'}>
                        Your Company:
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
                    <div className="field form-inline">
                      <label className="label" htmlFor={'number'}>
                        Your Contact Number:
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
                    <div className="field form-inline">
                      <label className="label" htmlFor={'email'}>
                        Email:
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
                    <div className="field form-inline">
                      <label className="label" htmlFor={'request'}>
                      How can we help you?
                      </label>
                      <select onChange={this.handleChange} id={'request'} className="control" name={'request'}>
                        <option value>Please Select</option>
                        <option value="RFQ Development">RFQ Development</option>
                        <option value="Sustainable Solutions">Sustainable Solutions</option>
                        <option value="Performance Improvement">Performance Improvement</option>
                        <option value="Site Audits">Site Audits</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Other">Other (describe below)</option>
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
                          rows={2}
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
