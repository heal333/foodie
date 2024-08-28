import React from "react";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {},
        };
        //never update state variable directly
    }
    async componentDidMount() {
        // will execute after render method
        // children components are mounted tooo
        const data = await fetch("https://api.github.com/users/heal333");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    //we can access this prop using this.props
    render() {
        return (
            <div className="aboutUs">
                {/* <UserContext.Consumer>
                    {(context) => {
                        console.log(context);
                    }}
                </UserContext.Consumer> */}
                <h1
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    {this.state.count}
                </h1>
                {Object.entries(this.state.userInfo).map((ele) => {
                    return (
                        <div key={ele[0]}>
                            {ele[0]} : {ele[1]}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default AboutUs;
<div></div>;
