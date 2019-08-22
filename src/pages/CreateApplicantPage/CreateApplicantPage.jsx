import React, { Component } from 'react';
import DateSelector from '../../components/DateSelector/DateSelector';
// import NewApplicantForm from '../../components/NewApplicantForm/NewApplicantForm';
import { createApplicant } from '../../services/api';
import CreateApplicantPageData from './CreateApplicantPageData';

class CreateApplicantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            // language: '',
            // location: '',
            license: false,
            vehicle: false,
            ageRange: '',
            multipleOccupants: false,
            children: 0,
            adults: 0,
            seniors: 0,
            pets: false,
            dogs: 0,
            cats: 0,
            other: 0,
            reasonUnemployment: false,
            reasonLowIncome: false,
            reasonRelationship: false,
            reasonHealth: false,
            reasonEviction: false,
            reasonOther: false,
            veteran: false,
            receivingSupport: false,
            sourceOfSupport: '',
            highPriority: false,
            durationHomeless: '',
            durationInCar: '',
            currentSituation: '',
            hasIncome: false,
            incomeDescription: '',
            emergencyContactPhone: '',
            emergencyContactName: '',
            emergencyContactRelationship: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleButton(event) {
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.handleInputChange}
                    />
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number:</label>
                    <input
                        id="phone"
                        type="text"
                        pattern="\d*"
                        className="form-control"
                        name="phone"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb20">
                    <label>How old are you?</label>
                    <div className="btn-group-toggle btn-row row mb20" data-toggle="buttons">
                        <div className="col-1" />
                        <label className={['btn btn-secondary col mp5', this.state.ageRange === `${CreateApplicantPageData.ageRanges.ageRange1.value}` ? 'active' : ''].join(' ')}>
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicantPageData.ageRanges.ageRange1.value}
                                onChange={this.handleInputChange}
                            />{' '}
                            {CreateApplicantPageData.ageRanges.ageRange1.label}
                        </label>
                        <label className={['btn btn-secondary col mp5', this.state.ageRange === `${CreateApplicantPageData.ageRanges.ageRange2.value}` ? 'active' : ''].join(' ')}>
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicantPageData.ageRanges.ageRange2.value}
                                onChange={this.handleInputChange}
                            />{' '}
                            {CreateApplicantPageData.ageRanges.ageRange2.label}
                        </label>
                        <label className={['btn btn-secondary col mp5', this.state.ageRange === `${CreateApplicantPageData.ageRanges.ageRange3.value}` ? 'active' : ''].join(' ')}>
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicantPageData.ageRanges.ageRange3.value}
                                onChange={this.handleInputChange}
                            />{' '}
                            {CreateApplicantPageData.ageRanges.ageRange3.label}
                        </label>
                        <div className="col-1" />
                    </div>
                    <div className="btn-group-toggle btn-row row" data-toggle="buttons">
                        <div className="col-1" />
                        <label className={['btn btn-secondary col mp5', this.state.ageRange === `${CreateApplicantPageData.ageRanges.ageRange4.value}` ? 'active' : ''].join(' ')}>
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicantPageData.ageRanges.ageRange4.value}
                                onChange={this.handleInputChange}
                            />{' '}
                            {CreateApplicantPageData.ageRanges.ageRange4.label}
                        </label>
                        <label className={['btn btn-secondary col mp5', this.state.ageRange === `${CreateApplicantPageData.ageRanges.ageRange5.value}` ? 'active' : ''].join(' ')}>
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicantPageData.ageRanges.ageRange5.value}
                                onChange={this.handleInputChange}
                            />{' '}
                            {CreateApplicantPageData.ageRanges.ageRange5.label}
                        </label>
                        <label className={['btn btn-secondary col mp5', this.state.ageRange === `${CreateApplicantPageData.ageRanges.ageRange6.value}` ? 'active' : ''].join(' ')}>
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicantPageData.ageRanges.ageRange6.value}
                                onChange={this.handleInputChange}
                            />{' '}
                            {CreateApplicantPageData.ageRanges.ageRange6.label}
                        </label>
                        <div className="col-1" />
                    </div>
                </div>
                <div className="mb30">
                    <label>Additional occupants in vehicle:</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="multipleOccupants"
                            name="multipleOccupants"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="multipleOccupants">
                            Yes
                        </label>
                    </div>
                    {this.state.multipleOccupants && (
                        <div className="form-group row mb20">
                            <label for="children" className="col-sm-2 col-form-label">
                                Children (Under 18)
                            </label>
                            <div className="col-sm-1">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="children"
                                    placeholder="0"
                                    name="children"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <label for="adults" className="col-sm-2 col-form-label">
                                Adults (Age 18 - 61)
                            </label>
                            <div className="col-sm-1">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="adults"
                                    placeholder="0"
                                    name="adults"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <label for="seniors" className="col-sm-2 col-form-label">
                                Seniors (62 or older)
                            </label>
                            <div className="col-sm-1">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="seniors"
                                    placeholder="0"
                                    name="seniors"
                                    onChange={this.handleInputChange}
                                />
                                {/* <hr /> */}
                            </div>
                        </div>
                    )}
                </div>
                <div className="mb30">
                    <label>Pets in vehicle:</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="pets"
                            name="pets"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="pets">
                            Yes
                        </label>
                    </div>
                    {this.state.pets && (
                        <div className="form-group row mb20">
                            <label for="dogs" className="col-sm-2 col-form-label">
                                Dogs
                            </label>
                            <div className="col-sm-1">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="dogs"
                                    placeholder="0"
                                    name="dogs"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <label for="cats" className="col-sm-2 col-form-label">
                                Cats
                            </label>
                            <div className="col-sm-1">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cats"
                                    placeholder="0"
                                    name="cats"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <label for="other" className="col-sm-2 col-form-label">
                                Other
                            </label>
                            <div className="col-sm-1">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="other"
                                    placeholder="0"
                                    name="other"
                                    onChange={this.handleInputChange}
                                />
                                {/* <hr /> */}
                            </div>
                        </div>
                    )}
                </div>
                <label>Do you have a valid driver's license?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="license"
                        name="license"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="license">
                        Yes
                    </label>
                </div>
                <label>Is your car in working condition?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="vehicle"
                        name="vehicle"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="vehicle">
                        Yes
                    </label>
                </div>

                <div className="mb30">
                    <label>What caused your current housing situation? (Please select all that apply):</label>

                    <div className="btn-row row mb10">
                        <div className="col-1" />
                        <button
                            className="btn btn-primary col mp5"
                            data-toggle="button"
                            aria-pressed={this.state.reasonUnemployment}
                            autocomplete="off"
                            type="button"
                            id="reasonUnemployment"
                            name="reasonUnemployment"
                            onClick={this.handleInputChange}
                        >
                            Unemployment
                        </button>
                        <button
                            className="btn btn-primary col mp5"
                            data-toggle="button"
                            aria-pressed={this.state.reasonLowIncome}
                            autocomplete="off"
                            type="button"
                            id="reasonLowIncome"
                            name="reasonLowIncome"
                            onClick={this.handleInputChange}
                        >
                            Low Income
                        </button>
                        <div className="col-1" />
                    </div>
                    <div className="btn-row row mb10">
                        <div className="col-1" />
                        <button
                            className="btn btn-primary col mp5"
                            data-toggle="button"
                            aria-pressed={this.state.reasonRelationship}
                            autocomplete="off"
                            type="button"
                            id="reasonRelationship"
                            name="reasonRelationship"
                            onClick={this.handleInputChange}
                        >
                            Relationship
                        </button>
                        <button
                            className="btn btn-primary col mp5"
                            data-toggle="button"
                            aria-pressed={this.state.reasonHealth}
                            autocomplete="off"
                            type="button"
                            id="reasonHealth"
                            name="reasonHealth"
                            onClick={this.handleInputChange}
                        >
                            Health Issues
                        </button>
                        <div className="col-1" />
                    </div>
                    <div className="btn-row row">
                        <div className="col-1" />
                        <button
                            className="btn btn-primary col mp5"
                            data-toggle="button"
                            aria-pressed={this.state.reasonEvicted}
                            autocomplete="off"
                            type="button"
                            id="reasonEvicted"
                            name="reasonEvicted"
                            onClick={this.handleInputChange}
                        >
                            Eviction
                        </button>
                        <button
                            className="btn btn-primary col mp5"
                            data-toggle="button"
                            aria-pressed={this.state.reasonOther}
                            autocomplete="off"
                            type="button"
                            id="reasonOther"
                            name="reasonOther"
                            onClick={this.handleInputChange}
                        >
                            Other
                        </button>
                        <div className="col-1" />
                    </div>
                    {/* <hr /> */}
                </div>
                <div className="mb20">
                    <label>How long have you been without permanent housing?</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless1"
                            value="Less than one week"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless1">
                            Less than 1 week
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless2"
                            value="One week to one month"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless2">
                            1 week to 1 month
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless3"
                            value="One to three months"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless3">
                            1 to 3 months
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless4"
                            value="Three to six months"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless4">
                            3 to 6 months
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless5"
                            value="Longer than 6 months"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless5">
                            Over 6 months
                        </label>
                    </div>
                </div>
                {/* <hr /> */}
                <label>Are you a veteran?</label>
                <div className="form-check mb20">
                    <input type="checkbox" className="form-check-input" id="veteran" name="veteran" />
                    <label className="form-check-label" for="veteran">
                        Yes
                    </label>
                </div>
                <label>Are you receiving financial or housing support from any other organizations?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="receivingSupport"
                        name="receivingSupport"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="receivingSupport">
                        Yes
                    </label>
                </div>
                {this.state.receivingSupport && (
                    <div className="form-group">
                        <label for="sourceOfSupport">
                            Which organizations are you currently receiving assistance from?
                        </label>
                        <input
                            id="sourceOfSupport"
                            type="text"
                            className="form-control"
                            name="sourceOfSupport"
                            onChange={this.handleInputChange}
                        />
                    </div>
                )}
                <label>Do you currently have a source of income (not including outside support?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="hasIncome"
                        name="hasIncome"
                        onChange={this.handleInputChange}
                        checked={this.state.hasIncome}
                    />
                    <label className="form-check-label" for="hasIncome">
                        Yes
                    </label>
                </div>
                {this.state.hasIncome && (
                    <div className="form-group">
                        <label for="incomeDescription">What is your current source of income?</label>
                        <textarea
                            id="incomeDescription"
                            type="text"
                            className="form-control"
                            name="incomeDescription"
                            onChange={this.handleInputChange}
                        ></textarea>
                    </div>
                )}
                <div className="text-center">
                    <button className="btn btn-success">Submit Application</button>
                </div>
            </form>
        );
    }
}

export default CreateApplicantPage;
