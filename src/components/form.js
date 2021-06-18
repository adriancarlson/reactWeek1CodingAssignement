import React from 'react';

export default class form extends React.Component {
	render() {
		return (
            <div className="border rounded p-4">
			<form>
                <h3 className="">Log In</h3>
                <div className="mb-3">
                    <label for="exampleInputUserName" className="form-label">Username</label>
                    <input type="Username" className="form-control" id="exampleInputUserName" aria-describedby="UsernameHelp"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
		);
	}
}
