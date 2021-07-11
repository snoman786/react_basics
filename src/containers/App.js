import React, { Component } from 'react';
import classes from './App.module.css';
import PersonList from '../components/PersonList/PersonList' ;
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

   
    state = {
        persons: [
            { id: '1',name: 'Sayyed', age: '39' },
            { id: '2', name: 'Musab', age: '8' },
            {id:'3', name:'Aamir',age:'34'},
            {id:'4', name:'Affu',age:'3'}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    // This does not work in IE .
   /* nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }
        console.log(person)

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })

    }*/

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(
            p => p.id === id
        );
        const persons = this.state.persons.concat([]);
        const person = Object.assign({}, persons[personIndex]);
        person.name = event.target.value;
        persons[personIndex] = person;
        this.setState({ persons: persons });
    };

    togglePersonHandler = () => {

        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })

    }

    deletePersonHandler = (personIndex) => {
        // const remainingPersons = this.state.persons.slice();
        console.log(personIndex);
        const remainingPersons = [...this.state.persons];  // spread operator .
        remainingPersons.splice(personIndex, 1);
        this.setState({ persons: remainingPersons })

    }

    render() {

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <PersonList
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                    />
            );
           /* style.backgroundColor = 'red'
            style[':hover'] = {
                backgroundColor: 'lightred',
                color: 'black'
            }*/
           

        }
         return (
            <div className={classes.App}>
                 <Cockpit
                     title={this.props.appTitle}
                     showPersons={this.state.showPersons}
                     persons={this.state.persons}
                     clicked={this.togglePersonHandler}
                />

                {persons}
                </div>
        );

        // return (React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'Hi I\'m React App')));
    }
}

export default App;
