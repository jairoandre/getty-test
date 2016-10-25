import React, { PropTypes } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';

class PostForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = { errors: [], term: "", data: "" };
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onClickButton = this.onClickButton.bind(this);
      this.receiveJson = this.receiveJson.bind(this);
    }

    receiveJson(json) {
      var newState = Object.assign({}, this.state, {data: JSON.stringify(json)});
      this.setState(newState);
    }

    onClickButton() {
      var newState = Object.assign({}, this.state, {data: "Loading..."});
      this.setState(newState);

      const url = "https://httpbin.org/post";

      let config =
        { headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'}
        , method: 'POST'
        , body: JSON.stringify({term: this.state.term})}

      fetch(url, config)
      .then(res => res.json())
      .then(this.receiveJson)
      .catch(function(res){ console.error(res) });

    }

    onChangeInput(evt) {
      var newState = Object.assign({}, this.state, { term: evt.target.value });
      this.setState(newState);
    }

    render() {

      return (
        <Form onSubmit={this.submitForm}>
          <Header>
            <h1>Post Form Test</h1>
          </Header>
          <FormFields>
            <fieldset>
              <FormField label="Post something here" htmlFor="something">
                <input id="something" name="something" type="text"
                  value={this.state.term} onChange={this.onChangeInput} />
              </FormField>
            </fieldset>
            <Paragraph>
              Resposta: {this.state.data}
            </Paragraph>
          </FormFields>
          <Footer pad={{vertical: 'medium'}}>

            <Button label="Submit" primary={true} onClick={this.onClickButton} />
          </Footer>
        </Form>
      )

    }
}

PostForm.propTypes = {

};

export default PostForm;
