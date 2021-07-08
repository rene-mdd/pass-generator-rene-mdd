import React from 'react'

class PassGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomValue: "",
            characters: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            mixed: true,
            special: false
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.generator = this.generator.bind(this);
        this.sendFunc = this.sendFunc.bind(this);
        this.checker1 = this.checker1.bind(this);
        this.checker2 = this.checker2.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.filtered = this.filtered;
        this.r = this.r;
    }



    generator(e) {
 
        let defaultCharAllowed = "abcdefghijklmnopqrstuvwxyz";
        let defaultSpecChar = "@%+/'!#$^?:,(){}[]~-_.";
        let mixedCase = defaultCharAllowed + defaultCharAllowed.toLocaleUpperCase();
        let mixedAndSpecialCase = mixedCase + defaultSpecChar;
        let total = "";
        let allowed = "";
        if (this.state.mixed && this.state.special == false) { allowed += mixedCase }
        else if (!this.state.special && !this.state.mixed) { allowed += defaultCharAllowed }
        else if (this.state.special && !this.state.mixed) {allowed += defaultCharAllowed += defaultSpecChar}
        else if(this.state.special && this.state.mixed){allowed += mixedAndSpecialCase}
     
        for (let i = 0; i < [...this.state.characters]; i++) {
            let randomStringValue = allowed.split('')[Math.floor(Math.random() * allowed.length)]
          total += randomStringValue;
      
        }
      
        this.setState({
            randomValue: total,
            characters: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        })

      
    }

    sendFunc(e) {
        this.setState({ characters: [parseInt(e.target.value)] })
       
    }

    checker1() {

        this.setState({ mixed: !this.state.mixed })
    }
    checker2(e) {
        this.setState({ special: !this.state.special })
    }
    handleSubmit(event) {
        event.preventDefault();

        // Do stuff
    }

    render() {
        return (
            <div className="main">
                <h1>Generate password</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="formBox">
                    <label>
                        Result <br/><input type='text' value={this.state.randomValue} disabled />
                    </label>
                    <button onClick={this.generator}>New password</button>
                    <span>Settings</span>
                    <label className="dropdown">Password length <br/>
                            <select name='dropdown' onChange={this.sendFunc}>
                            {this.state.characters.map((item) => {
                                return <option value={item}>{item}</option>
                            })}
                        </select>

                    </label>
                    <label htmlFor="mixed">Use mixed case </label>
                    <input onChange={this.checker1} type="checkbox" value="mixed" name="mixed" checked={this.state.mixed} />

                    <label htmlFor="special">Use special characters</label>
                    <input onChange={this.checker2} type="checkbox" value="special" name="special" checked={this.state.special} />
                    </div>
                </form>
          
            </div>
        )
    }

}

export default PassGenerator;