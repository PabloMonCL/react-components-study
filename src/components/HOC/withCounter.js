import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            console.log("HOVER<<<<----");
            console.log('PrevState count: '+this.state.count);

            this.setState({ count: this.state.count + incrementNumber });
        };

        render() {
            console.log("Hoc props:", this.props.name);
            console.log("Hoc state:", this.state.count);
            console.log("Hoc incrementNumber", incrementNumber);
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                />
            );
        }
    }
    return WithCounter;
};

export default withCounter;
