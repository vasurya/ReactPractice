import React, { Component } from "react";

class Day3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      comment: "",
      language: "react",
      selectedOption: "",
      checkedOption: "",
      uploadedFile: "",
      selectedDate: "",
      mth: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  handleRadioChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checkedOption: e.target.value,
    });
  };

  handleFileUpload = (e) => {
    this.setState({
      uploadedFile: e.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("this will be send to backend->", this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Day 3</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comments</label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="reactnative">React Native</option>
            <option value="flutter">Flutter</option>
          </select>
        </div>
        <div>
          <div>Radio Options</div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Male"
                checked={this.state.selectedOption === "Male"}
                onChange={this.handleRadioChange}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Female"
                checked={this.state.selectedOption === "Female"}
                onChange={this.handleRadioChange}
              />
              Female
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Other"
                checked={this.state.selectedOption === "Other"}
                onChange={this.handleRadioChange}
              />
              Other
            </label>
          </div>
        </div>
        <div>
          {/*CHECKBOXES*/}
          <div>Checkboxes</div>
          <div>
            <input
              type="checkbox"
              id="cb1"
              value={"Unos"}
              checked={this.state.checkedOption === "Unos"}
              onChange={this.handleCheckbox}
            />
            <label htmlFor="cb1">Unos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cb2"
              value={"Dos"}
              checked={this.state.checkedOption === "Dos"}
              onChange={this.handleCheckbox}
            />
            <label htmlFor="cb2">Dos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cb3"
              value={"Tres"}
              checked={this.state.checkedOption === "Tres"}
              onChange={this.handleCheckbox}
            />
            <label htmlFor="cb3">Tres</label>
          </div>
        </div>
        <div>
          {/*FILEINPUT*/}
          <input type="file" name="file" onChange={this.handleFileUpload} />
        </div>
        <div>
          {/*DATEINPUT*/}
          <input
            type="date"
            name="datePicker"
            onChange={(e) => {
              this.setState({ selectedDate: e.target.value });
            }}
          />
        </div>
        <div>
          {/*MONTHINPUT*/}
          <label for="mth">Select Month</label>
          <input
            type="month"
            id="mth"
            name="Month"
            onChange={(e) => {
              this.setState({ mth: e.target.value });
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Day3;
