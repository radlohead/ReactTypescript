/// <reference path="../../typings/index.d.ts" />
import React = require('react');

interface Props {

}
interface State {

}

class App extends React.Component<Props, State>{
    constructor() {
        super();
    }
    componentDidMount() {
        $( "#datepicker" ).datepicker();
    }
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        )
    }
}
export default App;